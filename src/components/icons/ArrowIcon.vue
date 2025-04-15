<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: 'white',
  },
})
</script>

<template>
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.1785 7.03352C9.85503 7.29227 9.80259 7.76424 10.0613 8.08769L13.6865 12.6192L10.0613 17.1506C9.80259 17.4741 9.85503 17.9461 10.1785 18.2048C10.5019 18.4636 10.9739 18.4111 11.2327 18.0877L15.2327 13.0877C15.4518 12.8138 15.4518 12.4246 15.2327 12.1506L11.2327 7.15065C10.9739 6.8272 10.5019 6.77476 10.1785 7.03352Z"
      :fill="props.color"
    />
  </svg>
</template>
