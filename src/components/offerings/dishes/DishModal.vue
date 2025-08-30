<script setup lang="ts">
import CardAbout from '@/components/util/CardAbout.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: Object,
    default: () => {},
  },
  imgSrc: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <div class="fixed inset-0 z-2000 flex justify-center items-center">
    <div class="absolute inset-0 bg-black opacity-40" @click="closeModal"></div>

    <div class="relative z-10 w-full max-w-4xl p-2 max-h-screen overflow-y-auto scroll-hidden">
      <CardAbout :imgSrc="props.imgSrc" :title="props.title" :isModal="true" @close="closeModal">
        <template #text>
          <span>{{ props.description.chunk1 }}</span>
          <br />
          <br />
          <span>{{ props.description.chunk2 }}</span>
        </template>
      </CardAbout>
    </div>
  </div>
</template>
