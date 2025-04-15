<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CardPromo from '@/components/util/CardPromo.vue'
import AppButton from '@/components/util/AppButton.vue'
import eventPhoto from '@/assets/images/event.png'
import newsPhoto from '@/assets/images/news.png'
</script>

<template>
  <section class="py-5 my-10 sm:py-7 sm:my-13 lg:py-10 lg:my-20" id="news">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-7 xl:gap-10 mb-8 sm:mb-12 lg:mb-15">
        <div class="flex flex-col gap-3 sm:gap-4 lg:gap-6">
          <h3 class="text-xl sm:text-2xl lg:text-[28px] font-medium">
            {{ $t('home.events.title') }}
          </h3>

          <CardPromo :imgSrc="eventPhoto" :bgColor="'bg-light-bege'">
            <template #content>
              <div class="flex flex-col gap-3 h-full text-center">
                <div class="flex items-start justify-between gap-3">
                  <div class="bg-white rounded-full py-2 px-[10px] text-xs font-medium">12:00</div>

                  <div
                    class="bg-white rounded-xl text-xs leading-tight font-medium p-[2px] pb-1 flex flex-col min-w-12"
                  >
                    <div class="bg-black text-white rounded-t-xl p-1 mb-[2px]">Aug</div>
                    <p class="text-base font-semibold">2</p>
                    <p class="text-gray-caption">{{ $t('home.events.item1.day') }}</p>
                  </div>
                </div>

                <h4 class="mt-auto text-lg sm:text-xl md:text-2xl xl:text-[28px] font-medium">
                  {{ $t('home.events.item1.title') }}
                </h4>

                <RouterLink :to="{ name: 'products' }">
                  <AppButton
                    class="w-full"
                    :text="$t('home.events.item1.buttonText')"
                    type="transparent-border"
                  />
                </RouterLink>
              </div>
            </template>
          </CardPromo>
        </div>

        <div class="flex flex-col gap-3 sm:gap-4 lg:gap-6">
          <h3 class="text-xl sm:text-2xl lg:text-[28px] font-medium">
            {{ $t('home.news.title') }}
          </h3>

          <CardPromo :imgSrc="newsPhoto" :bgColor="'bg-gray-thin'">
            <template #content>
              <div class="flex flex-col gap-3 h-full text-center">
                <p class="text-xs font-medium text-gray-caption">8 April 2025</p>

                <h4 class="mt-auto text-lg sm:text-xl md:text-2xl xl:text-[28px] font-medium">
                  {{ $t('home.news.item1.title') }}
                </h4>

                <RouterLink :to="{ name: 'products' }">
                  <AppButton
                    class="w-full"
                    :text="$t('home.news.item1.buttonText')"
                    type="transparent-border"
                  />
                </RouterLink>
              </div>
            </template>
          </CardPromo>
        </div>
      </div>

      <div class="flex justify-center">
        <RouterLink :to="{ name: 'products' }">
          <AppButton :text="$t('home.buttonViewAll')" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
