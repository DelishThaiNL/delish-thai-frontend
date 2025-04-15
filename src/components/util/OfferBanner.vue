<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

const props = defineProps({
  routeName: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: true,
  },
  color: {
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
})
</script>

<template>
  <RouterLink
    class="group w-full p-[2px] flex items-center gap-4 xl:gap-6 rounded-full cursor-pointer transition duration-500 hover:bg-white hover:text-black shadow-custom-sm md:shadow-custom-md"
    :class="`${props.bgColor} text-${props.color}`"
    :to="{ name: props.routeName }"
  >
    <div
      class="flex justify-center items-center shrink-0 w-14 sm:w-19 xl:w-24 aspect-square rounded-full"
    >
      <img
        class="w-full h-full object-cover rounded-full border border-black"
        :src="props.imgSrc"
        alt="img"
      />
    </div>

    <p class="text-xs sm:text-base md:text-xl xl:text-2xl 2xl:text-[28px] font-medium">
      {{ props.text }}
    </p>

    <div
      class="flex justify-center items-center shrink-0 w-14 sm:w-19 xl:w-24 aspect-square rounded-full ml-auto border-2 xl:border-3 hover:border-black"
      :class="`border-${color}`"
    >
      <div class="w-10 h-10 flex group-hover:hidden">
        <ArrowIcon :color="props.color" class="w-full h-full" />
      </div>

      <div class="w-10 h-10 hidden group-hover:flex">
        <ArrowIcon color="black" class="w-full h-full" />
      </div>
    </div>
  </RouterLink>
</template>
