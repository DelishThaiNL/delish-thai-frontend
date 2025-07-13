<script setup lang="ts">
import CardDish from '@/components/util/CardDish.vue'
import { computed } from 'vue'
import { useI18n } from '@/locales/i18n'

const { locale, messages } = useI18n()

const wokDishes = computed(() => {
  const localeMessages = messages.value[locale.value]
  return localeMessages.offerings.streetFoodCorner.menu.wok.dishes
})
</script>

<template>
  <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
    <CardDish
      v-for="(dish, index) in wokDishes"
      :key="index"
      :title="dish.title"
      :price="dish.price"
      :allergences="dish.allergences"
      :description="dish.description"
      :spicyLevel="dish.spicyLevel"
      :recommendation="dish.recommendation"
      :imgSrc="dish.src"
    />
  </div>
</template>
