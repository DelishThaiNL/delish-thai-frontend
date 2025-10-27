<script setup lang="ts">
import { RouterLink } from 'vue-router'
import FacebookIcon from '@/components/icons/social/FacebookIcon.vue'
import InstagramIcon from '@/components/icons/social/InstagramIcon.vue'
</script>

<template>
  <footer class="p-2 mt-auto">
    <div class="relative bg-light-bege rounded-3xl sm:rounded-4xl xl:rounded-[48px] py-6 xl:py-10">
      <div class="container">
        <div class="flex flex-col gap-4 lg:gap-6 sm:px-2 xl:px-0">
          <div class="relative flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <RouterLink :to="{ name: 'home' }" class="relative z-1 flex select-none">
              <img class="w-18 h-18" src="@/assets/images/logo-dark.png" alt="Delish Thai Logo" />
            </RouterLink>
          </div>

          <div
            class="flex flex-col sm:flex-row justify-between gap-4 text-sm text-gray-secondary font-medium px-[6px]"
          >
            <div class="flex flex-col gap-2 items-start">
              <span> Din - do: 16:00-19:00 </span>
              <span> Vrijdag: 12:00-20:00 </span>
              <span> Zaterdag: 12:00-19:00 </span>

              <span> Bernard van Kreelpoort 5, Veenendaal </span>
            </div>

            <div class="flex flex-col gap-2 items-start sm:items-end">
              <a href="mailto:info@delishthai.nl"> info@delishthai.nl </a>

              <a href="tel:+31623866623"> +31 623866623 </a>
            </div>
          </div>

          <div
            class="flex items-center justify-between gap-4 text-sm text-gray-secondary font-medium pr-[6px]"
          >
            <div class="flex items-center gap-2">
              <a
                class="flex p-1"
                href="https://www.facebook.com/delishthai.nl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>

              <a
                class="flex p-1"
                href="https://www.instagram.com/delishthai.nl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </div>

            <RouterLink :to="{ name: 'privacy' }"> Privacy policy </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
