<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

const props = defineProps({
  routeName: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  isReversed: {
    type: Boolean,
    required: false,
  },
})
</script>

<template>
  <RouterLink
    class="group relative w-full h-[300px] lg:h-auto lg:aspect-3/5 rounded-[26px] sm:rounded-4xl xl:rounded-[40px] cursor-pointer shadow-custom-sm md:shadow-custom-xl overflow-hidden"
    :to="{ name: props.routeName }"
  >
    <img
      class="w-full h-full object-cover rounded-[26px] sm:rounded-4xl xl:rounded-[40px]"
      :src="props.imgSrc"
      alt="img"
    />

    <div
      class="absolute top-0 left-0 w-full h-full rounded-[26px] sm:rounded-4xl xl:rounded-[40px] pointer-events-none bg-black transition duration-500 opacity-0 group-hover:opacity-15"
    ></div>

    <div
      class="absolute left-0 w-full p-[2px] flex items-center gap-2 rounded-[26px] sm:rounded-4xl xl:rounded-[40px] bg-light-bege md:shadow-custom-sm transition-all duration-500 group-hover:py-2 xl:group-hover:py-[10px]"
      :class="isReversed ? 'bottom-0' : 'bottom-0 lg:top-0 lg:bottom-auto'"
    >
      <p class="ml-4 text-lg sm:text-xl xl:text-2xl font-medium">{{ props.text }}</p>

      <div
        class="flex justify-center items-center shrink-0 w-[50px] sm:w-15 xl:w-19 aspect-square rounded-full ml-auto bg-bege transition duration-500 group-hover:bg-transparent"
      >
        <ArrowIcon color="black" />
      </div>
    </div>
  </RouterLink>
</template>
