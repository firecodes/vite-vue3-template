
import { Pinia } from 'pinia'
import { store } from '@/store';

import * as media from './media';

export const useStores = (pinia?: Pinia) => {
  return {
    taskMap: media.useTaskMapStore(pinia),
  }
}
// Need to be used outside the setup
export default function fetchStores() {
  return useStores(store)
}

