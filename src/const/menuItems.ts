import i18n from '@/locales/i18n'

export const menuItems = [
  {
    href: 'home',
    text: () => i18n.global.t('menu.item1'),
  },
  {
    href: 'offerings',
    text: () => i18n.global.t('menu.item2'),
  },
  {
    href: 'news',
    text: () => i18n.global.t('menu.item3'),
  },
  {
    href: 'about',
    text: () => i18n.global.t('menu.item4'),
  },
]
