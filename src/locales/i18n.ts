import { createI18n } from 'vue-i18n'
import { useI18n as useReactiveLocale } from 'vue-i18n'
import en from './en.json'
import nl from './nl.json'

const enMessages = en
const nlMessages = nl

const messages = {
  en: enMessages,
  nl: nlMessages,
}

export type MessageSchema = typeof en | typeof nl

export const useI18n = () => useReactiveLocale<{ message: MessageSchema }>()

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
