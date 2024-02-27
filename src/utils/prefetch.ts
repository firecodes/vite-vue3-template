
import { onBeforeMount, onServerPrefetch } from 'vue'
export const useUniversalFetch = (fetcher: () => Promise<any>) => {
  onBeforeMount(() => fetcher())
}
