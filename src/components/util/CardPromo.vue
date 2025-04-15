<script setup lang="ts">
const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="relative flex-1 w-full min-h-[200px] sm:min-h-[300px] overflow-hidden flex items-stretch justify-end shadow-custom-sm md:shadow-custom-md rounded-2xl sm:rounded-3xl"
  >
    <img
      class="absolute -z-1 top-0 left-0 w-full h-full max-w-[44%] sm:max-w-[53%] object-cover rounded-2xl sm:rounded-3xl"
      :src="props.imgSrc"
      alt="img"
    />

    <div
      class="w-full max-w-[62%] sm:max-w-[53%] p-3 rounded-2xl sm:rounded-3xl"
      :class="props.bgColor"
    >
      <slot name="content" />
    </div>
  </div>
</template>
