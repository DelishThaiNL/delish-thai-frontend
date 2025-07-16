<script setup lang="ts">
import CardDish from '@/components/util/CardDish.vue'
import { computed, ref, watch } from 'vue'
import { useI18n } from '@/locales/i18n'
import { CategoryKey } from '@/types/dishes'
import AppButton from '@/components/util/AppButton.vue'
import AppPagination from '@/components/util/AppPagination.vue'

const { locale, messages } = useI18n()
const localeMessages = messages.value[locale.value]

const categories = computed(() => [
  { name: localeMessages.offerings.streetFoodCorner.menu.wok.label, key: CategoryKey.Wok },
  { name: localeMessages.offerings.streetFoodCorner.menu.curry.label, key: CategoryKey.Curry },
  { name: localeMessages.offerings.streetFoodCorner.menu.snack.label, key: CategoryKey.Snack },
])

const dishes = computed(() => [
  ...localeMessages.offerings.streetFoodCorner.menu.wok.dishes.map(
    (dish) => ({ ...dish, type: CategoryKey.Wok })
  ),
  ...localeMessages.offerings.streetFoodCorner.menu.curry.dishes.map(
    (dish) => ({ ...dish, type: CategoryKey.Curry })
  ),
  ...localeMessages.offerings.streetFoodCorner.menu.snack.dishes.map(
    (dish) => ({ ...dish, type: CategoryKey.Snack })
  ),
])

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
  <div class="w-full flex flex-col gap-6 lg:gap-8">
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

    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
      <CardDish
        v-for="(dish, index) in paginatedDishes"
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

    <AppPagination
      v-model="currentPage"
      :totalItems="filteredDishes.length"
      :pageSize="pageSize"
    />
  </div>
</template>
