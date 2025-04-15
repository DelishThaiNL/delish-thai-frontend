<script setup lang="ts">
const props = defineProps({
  tab: {
    type: Object,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="group w-28 lg:w-full min-w-28 min-h-50 lg:min-h-0 p-[2px] lg:pl-6 flex flex-col lg:flex-row items-center gap-4 rounded-full cursor-pointer transition duration-500 text-black lg:hover:shadow-custom-md"
    :class="props.isActive ? 'bg-bege lg:shadow-custom-md' : 'hover:bg-white'"
  >
    <p class="mt-8 lg:mt-0 px-3 lg:px-0 text-sm lg:text-base font-semibold">
      {{ props.tab.title }}
    </p>

    <div
      class="flex justify-center items-center shrink-0 w-full lg:w-24 aspect-square rounded-full mt-auto lg:mt-0 lg:ml-auto"
    >
      <img class="w-full h-full object-cover rounded-full" :src="props.tab.imgSrc" alt="img" />
    </div>
  </div>
</template>
