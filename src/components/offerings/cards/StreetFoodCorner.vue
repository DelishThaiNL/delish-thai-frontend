<script setup lang="ts">
import CardAbout from '@/components/util/CardAbout.vue'
import streetFoodCorner from '@/assets/images/streetFoodCorner.png'
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="w-full">
      <CardAbout :imgSrc="streetFoodCorner" :title="$t('offerings.streetFoodCorner.info.title')">
        <template #text>
          <span>{{ $t('offerings.streetFoodCorner.info.description.chunk1') }}</span
          ><br /><br />
          <span>{{ $t('offerings.streetFoodCorner.info.description.chunk2') }}</span
          ><br /><br />
          <span>{{ $t('offerings.streetFoodCorner.info.description.chunk3') }}</span
          ><br /><br />
          <span>{{ $t('offerings.streetFoodCorner.info.description.chunk4') }}</span
          ><br /><br />
          <span>{{ $t('offerings.streetFoodCorner.info.description.chunk5') }}</span
          ><br /><br />
          <span>{{ $t('offerings.streetFoodCorner.info.description.chunk6') }}</span>
        </template>
      </CardAbout>
    </div>
  </div>
</template>
