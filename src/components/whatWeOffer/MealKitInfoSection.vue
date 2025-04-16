<script setup lang="ts">
import CardAbout from '@/components/util/CardAbout.vue'
import mealKit from '@/assets/images/mealKit.png'
</script>

<template>
  <section class="py-5 my-10 sm:py-7 sm:my-13 lg:py-10 lg:my-20" id="mealKit">
    <div class="container">
      <div class="flex flex-col items-center">
        <div class="w-full">
          <CardAbout :imgSrc="mealKit" :title="$t('whatWeOffer.mealKit.info.title')">
            <template #text>
              <span>{{ $t('whatWeOffer.mealKit.info.description.chunk1') }}</span
              ><br /><br />
              <span>{{ $t('whatWeOffer.mealKit.info.description.chunk2') }}</span
              ><br /><br />
              <span>{{ $t('whatWeOffer.mealKit.info.description.chunk3') }}</span
              ><br /><br />
              <span>{{ $t('whatWeOffer.mealKit.info.description.chunk4') }}</span
              ><br /><br />
              <span>{{ $t('whatWeOffer.mealKit.info.description.chunk5') }}</span
              ><br /><br />
              <span>{{ $t('whatWeOffer.mealKit.info.description.chunk6') }}</span>
            </template>
          </CardAbout>
        </div>
      </div>
    </div>
  </section>
</template>
