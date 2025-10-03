<script setup lang="ts">
import CloseIcon from '@/components//icons/CloseIcon.vue';

const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isModal: {
    type: Boolean,
    required: false,
  },
})

const emit = defineEmits(['close'])
</script>

<template>
  <div
    class="group relative flex-1 w-full lg:min-h-[488px] sm:pt-[490px] lg:pt-0 overflow-hidden flex lg:items-stretch lg:justify-end shadow-custom-sm md:shadow-custom-md rounded-3xl"
    :class="props.isModal ? 'pt-[320px]' : 'pt-[390px]'"
  >
    <img
      class="absolute -z-1 top-0 left-0 w-full h-[446px] sm:h-[546px] lg:h-full lg:max-w-[52%] object-cover transition-all duration-500 lg:group-hover:scale-125 rounded-3xl"
      :src="props.imgSrc"
      alt="img"
    />

    <div
      class="w-full lg:max-w-[52%] lg:group-hover:max-w-[66%] transition-all duration-500 bg-white p-6 flex flex-col gap-2 font-medium rounded-3xl"
    >
      <div class="flex">
        <h3 class="text-xl sm:text-2xl">{{ props.title }}</h3>

        <CloseIcon
          v-if="props.isModal"
          class="ml-auto cursor-pointer"
          @click="emit('close')"
        />
      </div>

      <p class="text-sm text-gray-secondary">
        <slot name="text" />
      </p>
    </div>
  </div>
</template>
