
import _escape from 'lodash-es/escape'

export const escape = _escape
// export enum CustomElementId {
//   Verse = 'verse'
// }
// export interface CustomElementConfig {
//   /** transform custom elements (original) html string to target html string */
//   transform: (html: string) => string
//   /** specify style for target html element */
//   style?: (element: HTMLElement) => string | null
//   /** run side effects for target html element */
//   effect?: (element: HTMLElement) => void
// }

export const CUSTOM_ELEMENTS = {
  'verse': {
    transform(html) {
      if (html.startsWith('<verse ')) { return html.replace('<verse ', '<p class="verse" ') }
      if (html.startsWith('</verse>')) { return html.replace('</verse>', '</p>') }
      return html
    }
  }
}

export const CUSTOM_ELEMENT_LIST = Object.values(CUSTOM_ELEMENTS)

export const META = Object.freeze({
  url: 'https://localhost'
})
