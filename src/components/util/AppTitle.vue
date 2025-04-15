<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h2
    class="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] font-semibold mb-6 sm:mb-10 lg:mb-15"
  >
    {{ props.text }}
  </h2>
</template>
