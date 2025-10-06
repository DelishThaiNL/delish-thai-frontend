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
    <a
      href="https://forms.leat.com/forms/a8989f33-ee5e-41f9-922f-12f24c55fdd0?account-uuid=a69850a0-d85d-47a2-ae41-8f0a2ee6ed6e">
      <OfferBanner
        :bgColor="'bg-light-bege'"
        :color="'black'"
        :imgSrc="offer2"
        :text="$t('home.offers.title2')"
      />
    </a>
  </section>
</template>
