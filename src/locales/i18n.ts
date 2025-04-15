import { createI18n } from 'vue-i18n'
import type { Locale } from '@/types/locale'
import en from './en.json'
import nl from './nl.json'
import type { MessageSchema } from '@/types/locale'

const enMessages: MessageSchema = en as MessageSchema
const nlMessages: MessageSchema = nl as MessageSchema

const messages: Record<Locale, MessageSchema> = {
  en: enMessages,
  nl: nlMessages,
}

const i18n = createI18n<[MessageSchema], Locale>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
