import { defineComponent, h, ExtractPropTypes } from 'vue'

export const LoadingProps = {
  width: {
    type: String,
    default: '1.6rem'
  },
  height: {
    type: String,
    default: '1rem'
  },
  gap: {
    type: String,
    default: '1rem'
  },
  radius: {
    type: String,
    default: '1px'
  }
}

export const Loading = defineComponent({
  name: 'Loading',
  props: LoadingProps,
  setup(props) {
    return () => {
      const style = {
        '--indicator-width': props.width,
        '--indicator-height': props.height,
        '--indicator-gap': props.gap,
        '--indicator-radius': props.radius
      }
      const divBlock = Array.from({ length: 4 }).map(() => h('div'))
      return h('div', { class: 'global-loading-indicator', style }, divBlock)
    }
  }
})

export interface LoadingOptions extends Partial<ExtractPropTypes<typeof LoadingProps>> {
  class?: string
}

export const getLoadingHTML = (options: LoadingOptions = {}) => {
  const classNames = ['global-loading-indicator', options.class].filter(Boolean).join(' ')
  const styles = {
    '--indicator-width': options.width || LoadingProps.width.default,
    '--indicator-height': options.height || LoadingProps.height.default,
    '--indicator-gap': options.gap || LoadingProps.gap.default,
    '--indicator-radius': options.radius || LoadingProps.radius.default
  }
  return `
    <div class="${classNames}" style="${Object.entries(styles).map(([k, v]) => `${k}: ${v}`).join(';')}">
      ${Array.from({ length: 4 }).map(() => '<div></div>').join('')}
    </div>
  `
}
