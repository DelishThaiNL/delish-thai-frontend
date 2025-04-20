<script setup lang="ts">
import CardAbout from '@/components/util/CardAbout.vue'
import AppTitle from '@/components/util/AppTitle.vue'

import newsPhoto from '@/assets/images/news.jpg'
</script>

<template>
  <section class="py-5 my-10 sm:py-7 sm:my-13 lg:py-10 lg:my-20" id="news">
    <div class="container">
      <div class="flex flex-col items-center">
        <AppTitle :text="$t('home.news.title')" />

        <div class="w-full">
          <CardAbout :imgSrc="newsPhoto" :title="$t('home.news.item1.date')">
            <template #text>
              <h4 class="mt-auto text-lg sm:text-xl md:text-2xl xl:text-[28px] font-medium">
                  {{ $t('home.news.item1.title') }}
              </h4>
            </template>
          </CardAbout>
        </div>
      </div>
    </div>
  </section>
</template>
