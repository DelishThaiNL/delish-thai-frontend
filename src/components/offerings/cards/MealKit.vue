<script setup lang="ts">
import CardAbout from '@/components/util/CardAbout.vue'
import mealKit from '@/assets/images/mealKit.png'
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="w-full">
      <CardAbout :imgSrc="mealKit" :title="$t('offerings.mealKit.info.title')">
        <template #text>
          <span>{{ $t('offerings.mealKit.info.description.chunk1') }}</span
          ><br /><br />
          <span>{{ $t('offerings.mealKit.info.description.chunk2') }}</span
          ><br /><br />
          <span>{{ $t('offerings.mealKit.info.description.chunk3') }}</span
          ><br /><br />
          <span>{{ $t('offerings.mealKit.info.description.chunk4') }}</span
          ><br /><br />
          <span>{{ $t('offerings.mealKit.info.description.chunk5') }}</span
          ><br /><br />
          <span>{{ $t('offerings.mealKit.info.description.chunk6') }}</span>
        </template>
      </CardAbout>
    </div>
  </div>
</template>
