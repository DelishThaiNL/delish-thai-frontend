<script setup lang="ts">
import AppTitle from '@/components/util/AppTitle.vue'
import CardLink from '@/components/util/CardLink.vue'
import streetFoodCorner from '@/assets/images/streetFoodCorner.png'
import minimarket from '@/assets/images/minimarket.png'
import mealKit from '@/assets/images/mealKit.png'
</script>

<template>
  <section class="py-5 my-10 sm:py-7 sm:my-13 lg:py-10 lg:my-20" id="offerings">
    <div class="container">
      <div class="flex flex-col items-center">
        <AppTitle :text="$t('home.offerings.title')" />

        <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-7 xl:gap-10">
          <CardLink
            :routeName="'offerings'"
            :routeQuery="'street-food'"
            :imgSrc="streetFoodCorner"
            :text="$t('home.offerings.streetFoodCorner.title')"
          />
          <CardLink
            :routeName="'offerings'"
            :routeQuery="'mini-market'"
            :imgSrc="minimarket"
            :text="$t('home.offerings.minimarket.title')"
            :isReversed="true"
          />
          <CardLink
            :routeName="'offerings'"
            :routeQuery="'meal-kits'"
            :imgSrc="mealKit"
            :text="$t('home.offerings.mealKit.title')"
          />
        </div>
      </div>
    </div>
  </section>
</template>
