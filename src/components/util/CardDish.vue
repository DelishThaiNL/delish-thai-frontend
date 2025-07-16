<script setup lang="ts">
import { computed } from 'vue'
import type { Component } from 'vue'
import AppLabel from '@/components/util/AppLabel.vue'
import AppButton from '@/components/util/AppButton.vue'

import BeefIcon from '@/components/icons/allergences/BeefIcon.vue'
import CashewIcon from '@/components/icons/allergences/CashewIcon.vue'
import ChickenIcon from '@/components/icons/allergences/ChickenIcon.vue'
import EggIcon from '@/components/icons/allergences/EggIcon.vue'
import FishIcon from '@/components/icons/allergences/FishIcon.vue'
import GlutenIcon from '@/components/icons/allergences/GlutenIcon.vue'
import MilkIcon from '@/components/icons/allergences/MilkIcon.vue'
import PeanutIcon from '@/components/icons/allergences/PeanutIcon.vue'
import ShellfishIcon from '@/components/icons/allergences/ShellfishIcon.vue'
import ShrimpIcon from '@/components/icons/allergences/ShrimpIcon.vue'
import SoyIcon from '@/components/icons/allergences/SoyIcon.vue'
import TofuIcon from '@/components/icons/allergences/TofuIcon.vue'

import ChilliIcon from '@/components/icons/allergences/ChilliIcon.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  allergences: {
    type: Array as () => string[],
    default: () => [],
  },
  description: {
    type: String,
    default: '',
  },
  spicyLevel: {
    type: Number,
    default: 0,
  },
  recommendation: {
    type: String,
    required: false,
  },
  imgSrc: {
    type: String,
    required: true,
  },
})

const allergenIcons: Record<string, Component> = {
  beef: BeefIcon,
  cashew: CashewIcon,
  chicken: ChickenIcon,
  egg: EggIcon,
  fish: FishIcon,
  gluten: GlutenIcon,
  milk: MilkIcon,
  peanut: PeanutIcon,
  shellfish: ShellfishIcon,
  shrimp: ShrimpIcon,
  soy: SoyIcon,
  tofu: TofuIcon,
}

const allergenIconList = computed(() =>
  props.allergences.map((a) => ({ name: a, icon: allergenIcons[a] })).filter((a) => a.icon),
)

const spicyIcons = computed(() => Array(props.spicyLevel).fill(ChilliIcon))

const images = import.meta.glob('../../assets/images/menu/**/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>
const imgUrl = computed(() => images[`../../assets/images/menu/${props.imgSrc}.webp`] || '')
</script>

<template>
  <div
    class="group relative flex-1 w-full lg:min-h-[300px] pt-[320px] sm:pt-[490px] lg:pt-0 overflow-hidden flex lg:items-stretch lg:justify-end shadow-custom-sm md:shadow-custom-md rounded-3xl"
  >
    <img
      class="absolute -z-1 top-0 left-0 w-full h-[446px] sm:h-[546px] lg:h-full lg:max-w-[52%] object-cover transition-all duration-500 lg:group-hover:scale-125 rounded-3xl lg:rounded-r-none"
      :src="imgUrl"
      alt="img"
    />

    <div
      class="w-full lg:max-w-[52%] lg:group-hover:max-w-[66%] transition-all duration-500 bg-white p-4 flex flex-col gap-2 font-medium rounded-3xl"
    >
      <div class="flex items-center gap-4 h-8">
        <AppLabel v-if="props.recommendation" :text="props.recommendation" />

        <div v-if="!props.recommendation" class="flex gap-1">
          <span
            v-for="({ name, icon }, index) in allergenIconList"
            :key="`allergen-${index}`"
            :title="name"
          >
            <component :is="icon" class="w-6 h-6" />
          </span>

          <span v-for="(_, index) in spicyIcons" :key="`spicy-${index}`" title="Spicy">
            <component :is="ChilliIcon" class="w-6 h-6" />
          </span>
        </div>

        <p class="text-xl font-semibold ml-auto">€{{ props.price }}</p>
      </div>

      <div v-if="props.recommendation" class="flex gap-1">
        <span
          v-for="({ name, icon }, index) in allergenIconList"
          :key="`allergen-${index}`"
          :title="name"
        >
          <component :is="icon" class="w-6 h-6" />
        </span>

        <span v-for="(_, index) in spicyIcons" :key="`spicy-${index}`" title="Spicy">
          <component :is="ChilliIcon" class="w-6 h-6" />
        </span>
      </div>

      <p class="py-4 lg:py-0 lg:mt-auto text-sm text-center">{{ props.description }}</p>

      <div class="lg:mt-auto flex flex-col gap-2 text-center">
        <h3 class="text-[28px]">{{ props.title }}</h3>

        <AppButton text="View" type="transparent-border" />
      </div>
    </div>
  </div>
</template>
