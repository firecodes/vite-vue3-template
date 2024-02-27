import { createI18n } from 'vue-i18n';
import zh from './lang/zh';
import en from './lang/en';

const language = (navigator.language || 'zh').toLocaleLowerCase(); // 获取浏览器的语言设置
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || language, // 优先从本地存储获取语言设置，如果没有则使用浏览器默认语言
  fallbackLocale: 'zh', // 当前语言无法找到匹配的翻译时，使用的备选语言
  messages: {
    en,
    zh,
  },
});
export default i18n;