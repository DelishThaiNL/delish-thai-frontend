<script setup lang="ts">
const props = defineProps({
  opened: {
    type: Boolean,
    default: false,
  },
  white: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <svg
    class="icon"
    :class="{ active: props.opened }"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="line line1"
      d="M5 7H19"
      :stroke="props.white ? 'white' : 'black'"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      class="line line2"
      d="M5 12H19"
      :stroke="props.white ? 'white' : 'black'"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      class="line line3"
      d="M5 17H19"
      :stroke="props.white ? 'white' : 'black'"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>

<style scoped lang="scss">
.icon .line {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  transform-origin: center;
}

.icon.active .line2 {
  opacity: 0;
}

.icon.active .line1 {
  transform: translate(-4px, 4px) rotate(45deg);
}

.icon.active .line3 {
  transform: translate(-4px, -3px) rotate(-45deg);
}
</style>
