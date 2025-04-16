<script setup lang="ts">
import AppTitle from '@/components/util/AppTitle.vue'
import AppButton from '@/components/util/AppButton.vue'
import CardLink from '@/components/util/CardLink.vue'
import streetFoodCorner from '@/assets/images/streetFoodCorner.png'
import miniMarket from '@/assets/images/miniMarket.png'
import mealKit from '@/assets/images/mealKit.png'
import CardAbout from '@/components/util/CardAbout.vue'
import sawiGerardPhoto from '@/assets/images/sawi-gerard.png'
import OfferBanner from '@/components/util/OfferBanner.vue'
import offer1 from '@/assets/images/offer1.png'
import offer2 from '@/assets/images/offer2.png'
import TabsWrapper from '@/components/util/tabs/TabsWrapper.vue'
import AppInput from '@/components/util/AppInput.vue'

// Placeholder tabs
const tabs = [
  {
    title: 'Recipe name',
    imgSrc: streetFoodCorner,
    content: 'Content for Tab 1',
  },
  {
    title: 'Lorem ipsum',
    imgSrc: miniMarket,
    content: 'Content for Tab 2',
  },
  {
    title: 'Component demo',
    imgSrc: mealKit,
    content: 'Content for Tab 3',
  },
]
</script>

<template>
  <div class="container">
    <div class="pt-8 pb-16">
      <AppTitle class="text-left" :text="'Global components demo'" />

      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-6">
          <p class="text-xl sm:text-2xl lg:text-3xl font-semibold">Buttons</p>

          <div class="flex flex-wrap items-center gap-6">
            <AppButton text="Default" type="default" />
            <AppButton text="Transparent" type="transparent" />
            <AppButton text="Transparent Border" type="transparent-border" />
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <p class="text-xl sm:text-2xl lg:text-3xl font-semibold">Inputs</p>

          <div class="flex flex-wrap items-center gap-6">
            <AppInput :isSearch="true" :placeholder="'Search...'" />
            <AppInput :placeholder="'Placeholder'" />
            <AppInput :value="'Inserted value'" />
            <AppInput :disabled="true" :value="'Disabled'" />
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <p class="text-xl sm:text-2xl lg:text-3xl font-semibold">Tabs</p>

          <TabsWrapper :tabs="tabs" />
        </div>

        <div class="flex flex-col gap-6">
          <p class="text-xl sm:text-2xl lg:text-3xl font-semibold">Cards</p>

          <div class="flex flex-col gap-16">
            <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-7 xl:gap-10">
              <CardLink
                :routeName="'products'"
                :imgSrc="streetFoodCorner"
                :text="$t('home.offerings.item1.title')"
              />
              <CardLink
                :routeName="'products'"
                :imgSrc="miniMarket"
                :text="$t('home.offerings.item2.title')"
                :isReversed="true"
              />
              <CardLink
                :routeName="'products'"
                :imgSrc="mealKit"
                :text="$t('home.offerings.item3.title')"
              />
            </div>

            <div class="w-full">
              <CardAbout :imgSrc="sawiGerardPhoto" :title="'Sawi & Gerard'">
                <template #text>
                  <span>{{ $t('home.about.description.chunk1') }}</span
                  ><br /><br />
                  <span>{{ $t('home.about.description.chunk2') }}</span
                  ><br /><br />
                  <span>{{ $t('home.about.description.chunk3') }}</span
                  ><br /><br />
                  <span>{{ $t('home.about.description.chunk4') }}</span>
                </template>
              </CardAbout>
            </div>

            <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CardAbout :imgSrc="sawiGerardPhoto" :title="'Gerard'">
                <template #text>
                  <span
                    >Gerard discovered his love for Thai food during our visits to Thailand,
                    particularly drawn to its harmony of sweet, sour, salty, and spicy flavors, and
                    the kindness and hospitality of the Thai people. His enthusiasm and dedication
                    help create a warm and welcoming atmosphere for everyone who visits.</span
                  >
                </template>
              </CardAbout>

              <CardAbout :imgSrc="sawiGerardPhoto" :title="'Sawitree'">
                <template #text>
                  <span
                    >Sawitree, originally from Thailand, lovingly prepares dishes using family
                    recipes handed down through generations. With her background in chemical
                    engineering, she enjoys creatively experimenting with traditional Thai cooking,
                    ensuring every dish captures the authentic taste and charm of her
                    homeland.</span
                  >
                </template>
              </CardAbout>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <p class="text-xl sm:text-2xl lg:text-3xl font-semibold">Banners</p>

          <div class="flex flex-col gap-2">
            <OfferBanner
              :routeName="'products'"
              :bgColor="'bg-green-primary'"
              :color="'white'"
              :imgSrc="offer1"
              :text="'Lorem ipsum dolor sit amet consectetur adipisicing elit.'"
            />
            <OfferBanner
              :routeName="'products'"
              :bgColor="'bg-light-bege'"
              :color="'black'"
              :imgSrc="offer2"
              :text="'Inventore qui itaque temporibus accusantium, reiciendis enim a'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
