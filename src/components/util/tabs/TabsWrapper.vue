<script setup lang="ts">
import TabButton from '@/components/util/tabs/TabButton.vue'
import { ref } from 'vue'
import type { PropType } from 'vue'

interface Tab {
  title: string
  content: string
  [key: string]: unknown
}

const props = defineProps({
  tabs: {
    type: Array as PropType<Tab[]>,
    required: true,
  },
})

const activeTab = ref(0)
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-[285px_1fr] gap-6">
    <div class="flex flex-col gap-10">
      <!-- Slot for title, description etc block -->
      <slot name="intro" />

      <div class="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
        <TabButton
          v-for="(tab, index) in props.tabs"
          :key="index"
          :tab="tab"
          :isActive="activeTab === index"
          @click="activeTab = index"
        />
      </div>
    </div>

    <div class="flex">
      <!-- Tab content -->
      <div v-for="(tab, index) in props.tabs" :key="index" v-show="activeTab === index">
        <p>{{ tab.content }}</p>
      </div>
    </div>
  </div>
</template>
