<script setup lang="ts">
import { computed } from 'vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

const props = defineProps<{
  totalItems: number
  pageSize: number
  modelValue: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const totalPages = computed(() =>
  Math.max(1, Math.ceil(props.totalItems / props.pageSize))
)

const currentPage = computed({
  get: () => props.modelValue,
  set: (val: number) => {
    if (val >= 1 && val <= totalPages.value) {
      emit('update:modelValue', val)
    }
  },
})

const goToPage = (page: number) => {
  currentPage.value = page
}
</script>

<template>
  <div
    v-if="totalPages > 1"
    class="flex justify-center items-center gap-4"
  >
    <button
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="flex"
      :class="{
        'opacity-50': currentPage === 1,
        'cursor-pointer': currentPage > 1
      }"
    >
      <ArrowIcon color="black" class="rotate-180" />
    </button>

    <div class="flex justify-center flex-wrap gap-1">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        class="flex justify-center min-w-5 p-1 cursor-pointer"
        :class="{
          'text-black': currentPage === page,
          'text-gray-caption': currentPage !== page
        }"
      >
        {{ page }}
      </button>
    </div>

    <button
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="flex"
      :class="{
        'opacity-50': currentPage === totalPages,
        'cursor-pointer': currentPage < totalPages
      }"
    >
      <ArrowIcon color="black" />
    </button>
  </div>
</template>