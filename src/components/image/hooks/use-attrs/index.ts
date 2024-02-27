import { computed, getCurrentInstance } from 'vue'
import { fromPairs } from 'lodash-unified'

import type { ComputedRef } from 'vue'

interface Params {
  excludeListeners?: boolean
  excludeKeys?: ComputedRef<string[]>
}

const DEFAULT_EXCLUDE_KEYS = ['class', 'style']
const LISTENER_PREFIX = /^on[A-Z]/

export const useAttrs = (arams: Params = {}): ComputedRef<Record<string, unknown>> => {
  const { excludeListeners = false, excludeKeys } = params
  const allExcludeKeys = computed<string[]>(() => {
    return (excludeKeys?.value || []).concat(DEFAULT_EXCLUDE_KEYS)
  })

  const instance = getCurrentInstance()
  if (!instance) {
    return computed(() => ({}))
  }

  return computed(() =>
    fromPairs(
      Object.entries(instance.proxy?.$attrs!).filter(
        ([key]) => !allExcludeKeys.value.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))
      )
    )
  )
}
