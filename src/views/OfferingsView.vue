<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import i18n from '@/locales/i18n'
import TabSwitcher from '@/components/util/tabs/TabSwitcher.vue'
import StreetFoodCorner from '@/components/offerings/cards/StreetFoodCorner.vue'
import Minimarket from '@/components/offerings/cards/MiniMarket.vue'
import MealKit from '@/components/offerings/cards/MealKit.vue'
import type { OfferingKey } from '@/types/offerings'

const tabs: { name: () => string; key: OfferingKey; component: unknown }[] = [
  {
    name: () => i18n.global.t('offerings.streetFoodCorner.info.title'),
    key: 'street-food',
    component: StreetFoodCorner,
  },
  {
    name: () => i18n.global.t('offerings.minimarket.info.title'),
    key: 'mini-market',
    component: Minimarket,
  },
  {
    name: () => i18n.global.t('offerings.mealKit.info.title'),
    key: 'meal-kits',
    component: MealKit,
  },
]

const activeTab = ref<OfferingKey>(tabs[0].key)

const route = useRoute()
const router = useRouter()

watch(
  () => route.query.tab,
  (newTab) => {
    if (newTab && tabs.some((tab) => tab.key === newTab)) {
      activeTab.value = newTab as OfferingKey
    }
  },
)

onMounted(() => {
  const initialTab = route.query.tab

  if (initialTab && tabs.some((tab) => tab.key === initialTab)) {
    activeTab.value = initialTab as OfferingKey
  } else {
    router.replace({ query: { tab: activeTab.value } })
  }
})

const switchTab = (tabKey: OfferingKey) => {
  activeTab.value = tabKey
  router.push({ query: { tab: tabKey } })
}
</script>

<template>
  <section class="pt-4 lg:pt-6 mb-16">
    <div class="container">
      <div class="flex flex-col items-start gap-8 lg:gap-10 py-5 sm:py-7">
        <TabSwitcher :tabs="tabs" :activeTab="activeTab" @switchTab="(k) => switchTab(k)" />

        <component :is="tabs.find((tab) => tab.key === activeTab)?.component" />
      </div>
    </div>
  </section>
</template>
