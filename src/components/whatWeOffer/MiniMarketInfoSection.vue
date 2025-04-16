<script setup lang="ts">
import CardAbout from '@/components/util/CardAbout.vue'
import minimarket from '@/assets/images/minimarket.png'
</script>

<template>
  <section class="py-5 my-10 sm:py-7 sm:my-13 lg:py-10 lg:my-20" id="minimarket">
    <div class="container">
      <div class="flex flex-col items-center">
        <div class="w-full">
          <CardAbout :imgSrc="minimarket" :title="$t('whatWeOffer.minimarket.info.title')">
            <template #text>
              <span>{{ $t('whatWeOffer.minimarket.info.description.chunk1') }}</span
              ><br /><br />
              <span>{{ $t('whatWeOffer.minimarket.info.description.chunk2') }}</span
              ><br /><br />
              <span>{{ $t('whatWeOffer.minimarket.info.description.chunk3') }}</span
              ><br /><br />
              <span>{{ $t('whatWeOffer.minimarket.info.description.chunk4') }}</span
              ><br /><br />
              <span>{{ $t('whatWeOffer.minimarket.info.description.chunk5') }}</span>
            </template>
          </CardAbout>
        </div>
      </div>
    </div>
  </section>
</template>
