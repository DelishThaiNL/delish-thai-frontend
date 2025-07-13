<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="text-xs p-2 rounded-full bg-green-primary text-white font-medium text-center">
    {{ props.text }}
  </div>
</template>
