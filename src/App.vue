<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useLocaleStore } from '@/stores/localeStore'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const localeStore = useLocaleStore()
const { locale } = useI18n()

locale.value = localeStore.currentLocale
</script>

<template>
  <div class="overflow-x-hidden min-h-screen flex flex-col">
    <AppHeader :isTransparent="$route.name === 'home'" />
    <RouterView :class="{ 'pt-19 lg:pt-26': $route.name !== 'home' }" />
    <AppFooter />
  </div>
</template>
