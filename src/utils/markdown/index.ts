
import { Marked, Renderer } from 'marked'
import { mangle } from 'marked-mangle'
import { markedXhtml } from 'marked-xhtml'
import { markedHighlight } from 'marked-highlight'
import highlight from '../highlight'

import { escape, META, CUSTOM_ELEMENT_LIST } from './elements'
import { getLoadingHTML } from '@/components/common/loading'
import { LOZAD_CLASS_NAME } from '@/directives/lozad'

const highlightLangPrefix = 'language-'
const marked = new Marked(
  mangle(),
  markedXhtml(),
  markedHighlight({
    langPrefix: highlightLangPrefix,
    highlight(code, language) {
      return highlight.getLanguage(language) ? highlight.highlight(code, { language }).value : highlight.highlightAuto(code).value
    }
  })
)
marked.setOptions({ gfm: true, breaks: false, pedantic: false })

const sanitizeHTML = (content: string) => content
const trimHTML = (html: string) => html.replace(/\s+/g, ' ').replace(/\n/g, ' ')

interface RendererCreatorOptions {
  sanitize: boolean
  lazyLoadImage: boolean
  text: (text: string) => string
  headingId: (html: string, level: number, raw: string) => string
  imageSource: (src: string) => string | { src: string; sources: Array<{ srcset: string; type: string }> }
}

export interface MarkdownRenderOption {
  sanitize?: boolean
  lazyLoadImage?: boolean
  headingIdGetter?: RendererCreatorOptions['headingId']
  imageSourceGetter?: RendererCreatorOptions['imageSource']
}
const createRenderer = (options?: Partial<RendererCreatorOptions>): Renderer => {
  const renderer = new Renderer()
  // text
  renderer.text = (text) => {
    console.log("renderer.text")
    return options?.text ? options.text(text) : text
  }
  // html: escape > sanitize -- 元素替换
  renderer.html = (html) => {
    console.log("renderer.html")
    const trimmed = html.trim()
    const transformed = CUSTOM_ELEMENT_LIST.reduce((result: any, ce) => {
      return ce.transform(result)
    }, trimmed)
    // https://github.com/apostrophecms/sanitize-html#default-options
    return options?.sanitize ? sanitizeHTML(escape(transformed)) : transformed
  }
  // CUSTOM_ELEMENT_LIST.reduce((result, ce) => {
  //   console.log('CUSTOM_ELEMENT_LIST', result, ce)
  //   ce.transform(result)
  // }, 'heading')
  // heading
  renderer.heading = (html, level, raw) => {
    console.log("renderer.heading")
    const idText = options?.headingId ? `id="${options.headingId(html, level, raw)}"` : ''
    const safeedRaw = escape(raw)
    return `<h${level} ${idText} title="${safeedRaw}">${html}</h${level}>`
  }
  // paragraph
  renderer.paragraph = (text) => {
    console.log("renderer.paragraph")
    const trimmed = text.trim()
    const isBlockChild = ['p', 'div', 'figure'].some((tag) => {
      return trimmed.startsWith(`<${tag}`) && trimmed.endsWith(`</${tag}>`)
    })
    return isBlockChild ? text : `<p>${text}</p>`
  }
  // checkbox
  renderer.checkbox = (checked) => {
    console.log("renderer.checkbox")
    const iconList = [
      `<i class="checkbox checked iconfont icon-checkbox-selected"></i>`,
      `<i class="checkbox iconfont icon-checkbox-unselected"></i>`
    ]
    return checked ? iconList[0] : iconList[1]
  }
  // link: sanitize
  renderer.link = (href, title, text) => {
    console.log("renderer.link")
    const isSelf = href?.startsWith(META.url)
    const isImageLink = text.includes('<img')
    const textValue = options?.sanitize ? escape(text) : text
    const titleValue = options?.sanitize ? escape(title!) : title
    const hrefValue = href // options?.sanitize ? sanitizeUrl(href!) : href
    return sanitizeHTML(
      trimHTML(`
        <a
          href="${hrefValue}"
          target="_blank"
          class="${isImageLink ? 'image-link' : 'link'}"
          title="${titleValue || (isImageLink ? hrefValue : textValue)}"
          ${isSelf ? '' : 'rel="external nofollow noopener"'}
        >${textValue}</a>
      `)
    )
  }
  // image: sanitize(title, alt) > popup
  renderer.image = (src, title, alt) => {
    console.log("renderer.image")
    // HTTP > proxy
    const titleValue = sanitizeHTML(escape(title || alt))
    const altValue = sanitizeHTML(escape(alt!))
    // const sanitized = sanitizeUrl(src!)
    // const original = sanitized.startsWith('http://') ? getOriginalProxyURL(sanitized) : sanitized
    const original = src
    const parsed = options?.imageSource ? options.imageSource(original) : original
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/currentSrc
    const srcValue = typeof parsed === 'object' ? parsed.src : parsed
    const sourcesValue = typeof parsed === 'object' ? parsed.sources : []

    // figure > alt
    return trimHTML(`
      <div class="figure-wrapper">
        <figure class="image ${altValue ? 'caption' : ''}" data-status="loading">
          <div class="placeholder error">
            <i class="iconfont icon-image-error"></i>
          </div>
          ${getLoadingHTML({ class: 'placeholder loading', width: '2rem', height: '1.2rem', gap: '0.62rem', radius: '1px' })}
          <picture>
            ${sourcesValue.map((s) => `<source srcset="${s.srcset}" type="${s.type}" />`).join('\n')}
            <img
              draggable="false"
              class="${options?.lazyLoadImage ? LOZAD_CLASS_NAME : ''}"
              ${options?.lazyLoadImage ? `data-src="${srcValue}"` : `src="${srcValue}"`}
              ${altValue ? `alt="${altValue}"` : ''}
              ${titleValue ? `title="${titleValue}"` : ''}
              onload="this.parentElement.parentElement.dataset.status = 'loaded'"
              onerror="this.parentElement.parentElement.dataset.status = 'error'"
              onclick="window.$popup.vImage(this.currentSrc || this.src)"
            />
          </picture>
          ${altValue ? `<figcaption>${altValue}</figcaption>` : ''}
        </figure>
      </div>
    `)
  }

  // code: line number
  renderer.code = function (code, lang, isEscaped) {
    console.log("renderer.code")
    const lineNumbers = code.split('\n').map((_, i) => `<li class="code-line-number">${i + 1}</li>`.replace(/\s+/g, ' ')).join('')

    const readOnlyAttrs = `
      contenteditable="true"
      oncut="return false"
      onpaste="return false"
      onkeydown="if(event.metaKey) return true; return false;"
    `
    const preHtml = `<pre>
      <ul class="code-lines">${lineNumbers}</ul>
      <code ${readOnlyAttrs}>${isEscaped ? code : encodeURI(code)}\n</code>
    </pre>`
    return preHtml
  }
  return renderer
}

export function markdownToHTML(markdown: string, options?: MarkdownRenderOption): string {
  if (!markdown || typeof markdown !== 'string') { return '' }

  const renderOptions: Partial<RendererCreatorOptions> = {
    sanitize: options?.sanitize ?? false,
    lazyLoadImage: options?.lazyLoadImage ?? true,
    headingId: options?.headingIdGetter,
    imageSource: options?.imageSourceGetter
  }

  return marked.parse(markdown, { renderer: createRenderer(renderOptions) }) as string
}


export const getMarkdownSplitIndex = (markdown: string, index: number) => {
  const shortContent = markdown.substring(0, index)
  // breakpoint priority: H5 > H4 > H3 > \n\n\n
  const lastH5Index = shortContent.lastIndexOf('\n##### ')
  const lastH4Index = shortContent.lastIndexOf('\n#### ')
  const lastH3Index = shortContent.lastIndexOf('\n### ')
  const lastLineIndex = shortContent.lastIndexOf('\n\n\n')
  const splitIndex = Math.max(lastH5Index, lastH4Index, lastH3Index, lastLineIndex)
  // console.log('- content length', contentLength.value, index, splitIndex)
  return splitIndex
}