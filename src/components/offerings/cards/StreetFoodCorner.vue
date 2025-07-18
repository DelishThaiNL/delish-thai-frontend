<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from '@/locales/i18n'
import { CategoryKey } from '@/types/dishes'
import AppButton from '@/components/util/AppButton.vue'
import AppPagination from '@/components/util/AppPagination.vue'
import CardDish from '@/components/offerings/dishes/CardDish.vue'
import DishBanner from '@/components/offerings/dishes/DishBanner.vue'

const { locale, messages } = useI18n()

const categories = computed(() => {
  const localeMessages = messages.value[locale.value]

  return [
    { name: localeMessages.offerings.streetFoodCorner.menu.wok.label, key: CategoryKey.Wok },
    { name: localeMessages.offerings.streetFoodCorner.menu.curry.label, key: CategoryKey.Curry },
    { name: localeMessages.offerings.streetFoodCorner.menu.snack.label, key: CategoryKey.Snack },
  ]
})

const dishes = computed(() => {
  const localeMessages = messages.value[locale.value]

  return [
    ...localeMessages.offerings.streetFoodCorner.menu.wok.dishes.map(
      (dish) => ({ ...dish, type: CategoryKey.Wok })
    ),
    ...localeMessages.offerings.streetFoodCorner.menu.curry.dishes.map(
      (dish) => ({ ...dish, type: CategoryKey.Curry })
    ),
    ...localeMessages.offerings.streetFoodCorner.menu.snack.dishes.map(
      (dish) => ({ ...dish, type: CategoryKey.Snack })
    ),
  ]
})

const priceModifiers = computed(() => {
  const localeMessages = messages.value[locale.value]

  return [
    { modifiers: { ...localeMessages.offerings.streetFoodCorner.menu.wok.priceModifiers }, type: CategoryKey.Wok },
    { modifiers: { ...localeMessages.offerings.streetFoodCorner.menu.curry.priceModifiers }, type: CategoryKey.Curry },
  ]
})

const selectedCategory = ref<CategoryKey>(CategoryKey.All)

const selectCategory = (key: CategoryKey) => {
  selectedCategory.value = key
}

const selectAll = () => {
  selectedCategory.value = CategoryKey.All
}

const filteredDishes = computed(() =>
  selectedCategory.value === CategoryKey.All
    ? dishes.value
    : dishes.value.filter(dish => dish.type === selectedCategory.value)
)

const currentPage = ref(1)
const pageSize = 6

const paginatedDishes = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredDishes.value.slice(start, start + pageSize)
})

watch(selectedCategory, () => {
  currentPage.value = 1
})
</script>

<template>
  <div class="w-full flex flex-col gap-6">
    <div class="flex flex-wrap gap-2">
      <AppButton
        text="All"
        type="transparent-border"
        class="text-sm font-normal !text-black !outline-brown-secondary hover:!outline-green-primary"
        :class="{ 'bg-white !outline-green-primary': selectedCategory === CategoryKey.All }"
        @click="selectAll"
      />

      <AppButton
        v-for="category in categories"
        :key="category.key"
        :text="category.name"
        type="transparent-border"
        class="text-sm font-normal !text-black !outline-brown-secondary hover:!outline-green-primary"
        :class="{ 'bg-white !outline-green-primary': selectedCategory === category.key }"
        @click="selectCategory(category.key)"
      />
    </div>

    <DishBanner
      :priceModifiers="priceModifiers"
      :selectedCategory="selectedCategory"
    />

    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
      <CardDish
        v-for="(dish, index) in paginatedDishes"
        :key="index"
        :title="dish.title"
        :price="dish.price"
        :allergences="dish.allergences"
        :description="dish.description"
        :moreDescription="dish.moreDescription"
        :spicyLevel="dish.spicyLevel"
        :recommendation="dish.recommendation"
        :imgSrc="dish.src"
      />
    </div>

    <AppPagination
      class="mt-2"
      v-model="currentPage"
      :totalItems="filteredDishes.length"
      :pageSize="pageSize"
    />
  </div>
</template>
