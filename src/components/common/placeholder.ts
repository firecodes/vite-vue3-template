
import { defineComponent, h, Transition, PropType } from 'vue'
import Empty from './empty.vue'
import Spin from './spin.vue'

import * as utils from '@/utils/index'

export enum Events {
  AfterEnter = 'after-enter'
}

export default defineComponent({
  name: 'Placeholder',
  props: {
    taskData: {
      type: [Array, Object, Boolean, Number],
      default: undefined
    },
    data: {
      type: [Array, Object, Boolean, Number],
      default: undefined
    },
    transition: {
      type: Boolean,
      default: true
    },
    transitionName: {
      type: String,
      default: 'module'
    },
    placeholder: String,
    i18nKey: String,
    loading: Boolean
  },
  emits: [Events.AfterEnter],
  setup(props, context) {
    return () => {
      const { taskData, data, placeholder, i18nKey, loading, transition, transitionName } = props
      const isEmptyData = !utils.Is.isDef(data) && ((Array.isArray(data) && !(data as any).length) || !data)
      const getPlaceholderView = () => {
        return placeholder ? h(Empty, { placeholder }) : context.slots.placeholder?.()
      }
      const getDataView = () => {
        return isEmptyData ? getPlaceholderView() : context.slots.default?.()
      }
      const getLoadingView = () => {
        return context.slots.loading?.() || h(Spin, { loading: true })
      }
      const getView = () => {
        return loading ? getLoadingView() : getDataView()
      }
      if (transition) {
        return h(Transition, {
          name: transitionName,
          mode: 'out-in',
          onAfterEnter(...args) {
            context.emit(Events.AfterEnter, ...args)
          }
        }, () => getView())
      }
      return getView()
    }
  }
})
