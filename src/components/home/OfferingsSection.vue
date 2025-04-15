<script setup lang="ts">
import AppTitle from '@/components/util/AppTitle.vue'
import CardLink from '@/components/util/CardLink.vue'
import offering1 from '@/assets/images/offering1.png'
import offering2 from '@/assets/images/offering2.png'
import offering3 from '@/assets/images/offering3.png'
</script>

<template>
  <section class="py-5 my-10 sm:py-7 sm:my-13 lg:py-10 lg:my-20" id="offerings">
    <div class="container">
      <div class="flex flex-col items-center">
        <AppTitle :text="$t('home.offerings.title')" />

        <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-7 xl:gap-10">
          <CardLink
            :routeName="'products'"
            :imgSrc="offering1"
            :text="$t('home.offerings.item1.title')"
          />
          <CardLink
            :routeName="'products'"
            :imgSrc="offering2"
            :text="$t('home.offerings.item2.title')"
            :isReversed="true"
          />
          <CardLink
            :routeName="'products'"
            :imgSrc="offering3"
            :text="$t('home.offerings.item3.title')"
          />
        </div>
      </div>
    </div>
  </section>
</template>
