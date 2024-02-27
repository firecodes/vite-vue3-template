
import VXEUtils from 'vxe-utils'
import XEUtils from 'xe-utils'
import * as utils from '@/utils'

/**
 * 注册全局方法 待完善
 * @param app
 */
export function setupGlobalMethods(app) {
  // XEUtils.mixin(utils)
  // XEUtils  提供  $utils $cookie  $browse   $locat
  XEUtils.assign(XEUtils, utils)
  app.use(VXEUtils, XEUtils, { mounts: ['cookie'] })
  app.config.globalProperties.$UtilsFN = utils
  console.log("vue setupGlobalMethodsn", utils, XEUtils);
}
