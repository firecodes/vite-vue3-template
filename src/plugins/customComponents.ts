import type { App } from 'vue';

import Elimage from '@/components/image/src/image.vue'
import Container from '@/components/common/container'
import Placeholder from '@/components/common/placeholder'
import Loadmore from '@/components/common/loadmore.vue'
import markdown from '@/components/common/markdown.vue'
import container from '@/layout/common/container'
/**
 * 全局注册自定义组件 待完善
 * @param app
 */
export function setupCustomComponents(app: App<Element>) {
  app.component('Container', Container)
  app.component('Placeholder', Placeholder)
  app.component('Loadmore', Loadmore)
  app.component(Elimage.name, Elimage)
  app.component(markdown.name, markdown)
  app.component('Container', container)
}
