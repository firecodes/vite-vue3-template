import { Ref, ref, shallowRef } from 'vue'
import { isDef } from '@/utils/is'

export interface FetchStoreOptions<Data> {
  data: Data
  fetcher(...args): Promise<Data>
  once?: boolean
  preclean?: boolean
  shallow?: boolean
}

export const useFetchStore = <Data>(options: FetchStoreOptions<Data>) => {
  // default: shallow
  const isShallow = isDef(options.shallow) ? true : options.shallow
  const refWrapper = isShallow ? shallowRef : ref
  const fetching = ref(false)
  const fetched = ref(false)
  const data: Ref<Data> = refWrapper<Data>(options.data) as any

  const fetch = async (...args) => {
    // about fetch when fetched
    if (options.once && fetched.value) { return }
    if (options.preclean) {
      data.value = options.data
    }
    // fetch data
    try {
      fetching.value = true
      const result = await options.fetcher(...args)
      data.value = result
      fetched.value = true
    } finally {
      fetching.value = false
    }
  }

  return { data, fetching, fetched, fetch }
}
