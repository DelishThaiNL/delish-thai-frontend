<script setup lang="ts">
import type { Component } from 'vue'
import { CategoryKey } from '@/types/dishes'
import ChickenIcon from '@/components/icons/allergences/ChickenIcon.vue'
import TofuIcon from '@/components/icons/allergences/TofuIcon.vue'
import BeefIcon from '@/components/icons/allergences/BeefIcon.vue'
import ShrimpIcon from '@/components/icons/allergences/ShrimpIcon.vue'
import { computed } from 'vue'

interface ModifierGroup {
  type: CategoryKey;
  modifiers: Record<string, number>;
}

const props = defineProps({
  priceModifiers: {
    type: Array as () => ModifierGroup[],
    default: () => [],
  },
  selectedCategory: {
    type: String as () => CategoryKey,
  },
})

const iconMap: Record<string, Component> = {
  chicken: ChickenIcon,
  tofu: TofuIcon,
  beef: BeefIcon,
  shrimp: ShrimpIcon,
}

const activeModifierGroup = computed(() => {
  if (props.selectedCategory === CategoryKey.Main || props.selectedCategory === CategoryKey.All) {
    return props.priceModifiers.find(m => m.type === CategoryKey.Main)
  }
  return null
})

const activeModifierIcons = computed(() => {
  if (!activeModifierGroup.value) return []

  // Ensure chicken and tofu come first
  const order = ['chicken', 'tofu', 'beef', 'shrimp']

  return order
    .filter(name => Object.keys(activeModifierGroup.value!.modifiers).includes(name))
    .map(name => ({
      name,
      value: activeModifierGroup.value!.modifiers[name],
      icon: iconMap[name],
    }))
    .filter(m => m.icon)
})
</script>

<template>
  <div class="w-[100vw] sm:w-full flex items-center gap-2 flex-wrap bg-green-primary text-white text-sm px-3 py-[6px] -mx-4 sm:mx-0 sm:rounded-xl">
    <span>{{ $t('offerings.streetFoodCorner.info.banner.chunk1') }}</span>

    <div class="flex items-center gap-2" v-if="activeModifierIcons.length">
      <div
        v-for="({ name, value, icon }, index) in activeModifierIcons"
        :key="`mod-${name}-${index}`"
        class="flex items-center gap-1"
      >
        <span :title="name">
          <component :is="icon" class="w-6 h-6" />
        </span>
        <span>+{{ value }}</span>
      </div>
    </div>
  </div>
</template>
