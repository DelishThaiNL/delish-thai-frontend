<script setup lang="ts">
import CardAbout from '@/components/util/CardAbout.vue'
import streetFoodCorner from '@/assets/images/streetFoodCorner.png'
</script>

<template>
  <section class="py-5 my-10 sm:py-7 sm:my-13 lg:py-10 lg:my-20" id="streetFoodCorner">
    <div class="container">
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
    </div>
  </section>
</template>
