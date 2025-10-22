<script setup lang="ts">
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: 'default',
    validator: (value: string) => {
      return ['default', 'transparent', 'transparent-border'].includes(value)
    },
  },
})
</script>

<template>
  <button
    class="relative group flex justify-center items-center gap-2 text-base font-medium text-center px-4 rounded-full cursor-pointer transition-all duration-500"
    :class="{
      'min-w-[154px] bg-green-primary text-white py-3 hover:bg-white hover:text-black':
        props.type === 'default',
      'bg-transparent text-green-primary py-2 hover:bg-white': props.type === 'transparent',
      'bg-white text-xl text-black py-2 hover:bg-green-primary hover:text-white': props.type === 'bg-white',
      'bg-transparent text-green-primary py-2 outline-2 outline-green-primary -outline-offset-2 hover:bg-white':
        props.type === 'transparent-border',
    }"
  >
    <span
      class="inline-block transition-all duration-500"
      :class="{ 'group-hover:pr-11': props.type === 'default' }"
    >
      {{ props.text }}
    </span>

    <div
      v-if="props.type === 'default'"
      class="absolute top-[2px] right-[2px] w-11 h-11 rounded-full bg-green-primary flex justify-center items-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
    >
      <ArrowIcon />
    </div>
  </button>
</template>
