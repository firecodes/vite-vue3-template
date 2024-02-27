import { App } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';
import { RedirectRoute } from '@/router/base';
import { createRouterGuards } from './guards';
import type { IModuleType } from './types';

const modules = import.meta.glob<IModuleType>('./modules/**/*.ts', { eager: true });

const routeModuleList: RouteRecordRaw[] = Object.keys(modules).reduce((list, key) => {
  const mod = modules[key].default ?? {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  return [...list, ...modList];
}, []);

function sortRoute(a, b) {
  return (a.meta?.sort ?? 0) - (b.meta?.sort ?? 0);
}

routeModuleList.sort(sortRoute);

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: 'layout',
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登录',
  },
};

export const DemoRoute: RouteRecordRaw[] = [{
  path: '/layout',
  name: 'layout',
  redirect: 'Demo',
  component: () => import('@/layout/desktop/main.vue'),
  children: [{
    path: '/Demo',
    name: 'demo',
    component: () => import('@/page/demo/index.vue'),
  }, {
    path: '/demoImage',
    name: 'demoImage',
    component: () => import('@/page/demoImage/index.vue'),
  }, {
    path: '/demoLoad',
    name: 'demoLoad',
    component: () => import('@/page/demoLoad/index.vue'),
  }, {
    path: '/demoUtils',
    name: 'demoUtils',
    component: () => import('@/page/demoUtils/index.vue'),
  }, {
    path: '/demoXicons',
    name: 'demoXicons',
    component: () => import('@/page/demoXicons/index.vue'),
  }, {
    path: '/demoMarkdown',
    name: 'demoMarkdown',
    component: () => import('@/page/demoMarkdown/index.vue'),
  }, {
    path: '/demoAbout',
    name: `demoAbout`,
    component: () => import('@/page/demoAbout/desktop.vue'),
  }]
}]

//需要验证权限
export const asyncRoutes = [...routeModuleList];

//普通路由 无需验证权限
export const constantRouter: RouteRecordRaw[] = [...DemoRoute, LoginRoute, RootRoute, RedirectRoute];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}

export default router;
