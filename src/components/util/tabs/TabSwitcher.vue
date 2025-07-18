<script setup lang="ts">
import type { PropType } from 'vue'
import type { OfferingKey } from '@/types/offerings'

const props = defineProps({
  tabs: {
    type: Array as PropType<{ name: string | (() => string); key: OfferingKey }[]>,
    required: true,
  },
  activeTab: {
    type: String as PropType<OfferingKey>,
    required: true,
  },
})

const emit = defineEmits(['switchTab'])

const switchTab = (tabKey: OfferingKey) => {
  emit('switchTab', tabKey)
}
</script>

<template>
  <div class="inline-flex gap-1 bg-light-bege rounded-3xl p-[2px]">
    <button
      v-for="tab in props.tabs"
      :key="tab.key"
      class="py-[6px] px-[14px] min-h-[44px] rounded-3xl cursor-pointer text-sm transition"
      :class="tab.key === activeTab ? 'bg-green-primary text-white' : 'bg-transparent text-black'"
      @click="switchTab(tab.key)"
    >
      {{ typeof tab.name === 'function' ? tab.name() : tab.name }}
    </button>
  </div>
</template>
