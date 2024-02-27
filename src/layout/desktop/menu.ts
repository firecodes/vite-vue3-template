
export interface MenuItem {
  id: string
  route?: string
  url?: string
  icon?: string
  i18nKey: string
  imageIcon?: string
  divider?: boolean
  newWindow?: boolean
  disabledUppercase?: boolean
  hot?: boolean
}

export const menus: Array<MenuItem> = [
  {
    id: 'home',
    route: '/',
    icon: 'icon-home',
    i18nKey: 'home'
  },
  {
    id: 'demoImage',
    route: './#/demoImage',
    icon: 'icon-home',
    i18nKey: 'demoImage'
  },
  {
    id: 'demoLoad',
    route: './#/demoLoad',
    icon: 'icon-home',
    i18nKey: 'demoLoad'
  },
  {
    id: 'demoUtils',
    route: './#/demoUtils',
    icon: 'icon-home',
    i18nKey: 'demoUtils i18n'
  },
  {
    id: 'demoXicons',
    route: './#/demoXicons',
    icon: 'icon-home',
    i18nKey: 'demoXicons'
  },
  {
    id: 'demoMarkdown',
    route: './#/demoMarkdown',
    icon: 'icon-home',
    i18nKey: 'demoMarkdown'
  },
  {
    id: 'demoAbout',
    route: './#/demoAbout',
    icon: 'icon-home',
    i18nKey: 'demoAbout'
  }
]
