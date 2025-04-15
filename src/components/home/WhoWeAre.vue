<script setup lang="ts">
import AppTitle from '@/components/util/AppTitle.vue'
import CardAbout from '@/components/util/CardAbout.vue'
import sawiGerardPhoto from '@/assets/images/sawi-gerard.png'
</script>

<template>
  <section class="py-5 my-10 sm:py-7 sm:my-13 lg:py-10 lg:my-20" id="about">
    <div class="container">
      <div class="flex flex-col items-center">
        <AppTitle :text="$t('home.about.title')" />

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
      </div>
    </div>
  </section>
</template>
