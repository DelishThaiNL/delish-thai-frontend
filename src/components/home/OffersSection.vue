<script setup lang="ts">
import OfferBanner from '@/components/util/OfferBanner.vue'
import offer1 from '@/assets/images/offer1.png'
import offer2 from '@/assets/images/offer2.png'
</script>

<template>
  <section class="z-10 px-2 flex flex-col gap-2">
    <OfferBanner
      :route="{name: 'offerings', query: { tab: 'street-food' }}"
      :bgColor="'bg-green-primary'"
      :color="'white'"
      :imgSrc="offer1"
      :text="$t('home.offers.title1')"
    />
    <OfferBanner
      :route="{name: 'offerings', query: { tab: 'mini-market' }}"
      :bgColor="'bg-light-bege'"
      :color="'black'"
      :imgSrc="offer2"
      :text="$t('home.offers.title2')"
    />
  </section>
</template>
