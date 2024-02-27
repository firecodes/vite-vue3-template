

import * as viconsAntdList from '@vicons/antd';
export const dataClass = (function () {
  const page: any = {}
  page.antdList = []
  page.antdMap = new Map()
  page.init = function () {
    page.initData()
  }
  page.initData = function () {
    page.antdList = Object.keys(viconsAntdList).map((name, i) => (
      page.antdMap[name] = viconsAntdList[name]
    ))
  }
  page.getAntdList = function () {
    return page.antdList;
  }
  page.getMapAntd = function (name) {
    return page.antdMap[name]
  }
  page.setV2S = function (group, t = 5) {
    const list: Array<[]> = [];
    for (let i = 0; i < group.length; i += t) {
      const res = group.slice(i, i + t);
      for (let y = res.length; y < t; ++y) {
        res.push([{}]);
      }
      list.push(res)
    }
    return list
  }

  // page.getElPx = function (width) {
  //   if (width >= 1920) { return "2xl" }
  //   if (width >= 1536 && width < 1920) { return "xl" }
  //   if (width >= 1280 && width < 1536) { return "l" }
  //   if (width >= 1024 && width < 1280) { return "m" }
  //   if (width >= 640 && width < 1024) { return "s" }
  //   if (width > 0 && width < 640) { return "xs" }
  //   return ''
  // }
  // page.getColNum = function (width) {
  //   const l = page.getElPx(width)
  //   if (l.includes("xs")) { return 2 }
  //   if (l.includes("s")) { return 3; }
  //   if (l.includes("m")) { return 4; }
  //   if (l.includes("l")) { return 5; }
  //   return 1
  // }
  return page
}())