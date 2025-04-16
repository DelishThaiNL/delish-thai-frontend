import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Locale } from '@/types/locale'
import { useI18n } from 'vue-i18n'

export const useLocaleStore = defineStore(
  'localeStore',
  () => {
    const { locale } = useI18n()
    const currentLocale = ref<Locale>('nl')

    const changeLocale = (str: Locale) => {
      if (str !== currentLocale.value) {
        currentLocale.value = str
        locale.value = str
      }
    }

    return { currentLocale, changeLocale }
  },
  { persist: true },
)
