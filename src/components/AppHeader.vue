<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useLocaleStore } from '@/stores/localeStore'
import type { Locale } from '@/types/locale'
import { menuItems } from '@/const/menuItems'
import MenuIcon from '@/components/icons/MenuIcon.vue'
import TranslateIcon from '@/components/icons/TranslateIcon.vue'

const props = defineProps({
  isTransparent: {
    type: Boolean,
    required: false,
  },
})

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const localeStore = useLocaleStore()

const switchLocale = (str: Locale) => {
  localeStore.changeLocale(str)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const handleMenuItemClick = (href: string) => {
  const element = document.getElementById(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMenuOpen.value = false
}

onMounted(() => {
  const mediaQuery = window.matchMedia('(max-width: 1023.98px)')

  window.addEventListener('resize', () => {
    if (!mediaQuery.matches) {
      isMenuOpen.value = false
    }
  })

  window.addEventListener('scroll', handleScroll)
})

watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="fixed w-full max-w-[1248px] mx-auto z-999"
    :class="isMenuOpen ? 'inset-0 p-0' : 'top-0 left-1/2 -translate-x-1/2 p-4 xl:px-6'"
  >
    <div
      class="flex"
      :class="[
        isMenuOpen
          ? 'w-full h-full flex-col gap-14 px-10 py-[22px]'
          : 'rounded-full items-center justify-between gap-2 px-6 lg:px-8 py-[6px] lg:py-2 shadow-custom-md',
        props.isTransparent && !isMenuOpen
          ? isScrolled
            ? 'bg-light-bege transition duration-250'
            : 'lg:bg-light-bege'
          : 'bg-light-bege',
      ]"
    >
      <div class="flex items-center justify-between w-full lg:w-auto">
        <RouterLink :to="{ name: 'home' }" class="hidden lg:flex select-none">
          <img class="w-14 h-14" src="@/assets/images/logo-dark.png" alt="Delish Thai Logo" />
        </RouterLink>

        <RouterLink
          :to="{ name: 'home' }"
          class="flex lg:hidden select-none"
          @click="isMenuOpen = false"
        >
          <img
            v-if="props.isTransparent && !isMenuOpen && !isScrolled"
            class="w-24 h-8"
            src="@/assets/images/logo-white-sm.svg"
            alt="Delish Thai Logo"
          />
          <img
            v-else
            class="w-24 h-8"
            src="@/assets/images/logo-dark-sm.svg"
            alt="Delish Thai Logo"
          />
        </RouterLink>

        <div class="flex lg:hidden p-1 cursor-pointer" @click="isMenuOpen = !isMenuOpen">
          <MenuIcon
            :opened="isMenuOpen"
            :white="props.isTransparent && !isMenuOpen && !isScrolled"
          />
        </div>
      </div>

      <ul
        class="items-center gap-2 lg:gap-8"
        :class="isMenuOpen ? 'flex flex-col' : 'hidden lg:flex'"
      >
        <li class="flex" v-for="(item, index) in menuItems" :key="index">
          <button
            v-if="$route.name === 'home'"
            class="px-[6px] py-3 lg:py-[6px] leading-none font-medium border-b transition border-transparent hover:border-black cursor-pointer"
            @click="handleMenuItemClick(item.href)"
          >
            {{ item.text() }}
          </button>

          <RouterLink
            v-else
            :to="{ name: 'home' }"
            class="px-[6px] py-3 lg:py-[6px] leading-none font-medium border-b transition border-transparent hover:border-black cursor-pointer"
            @click="isMenuOpen = false"
          >
            {{ item.text() }}
          </RouterLink>
        </li>
      </ul>

      <!-- Language Switcher -->
      <div
        class="justify-center items-center lg:gap-2"
        :class="isMenuOpen ? 'flex' : 'hidden lg:flex'"
      >
        <button
          class="flex items-center gap-2 px-3 py-2 lg:p-[6px] text-sm leading-none font-medium rounded-full lg:rounded-none border-b transition cursor-pointer"
          :class="
            localeStore.currentLocale === 'en'
              ? 'bg-green-primary lg:bg-transparent text-white lg:text-black border-transparent lg:border-black'
              : 'border-transparent'
          "
          @click="switchLocale('en')"
        >
          <TranslateIcon v-if="localeStore.currentLocale === 'en'" class="block lg:hidden" />
          ENG
        </button>

        <button
          class="flex items-center gap-2 px-3 py-2 lg:p-[6px] text-sm leading-none font-medium rounded-full lg:rounded-none border-b transition cursor-pointer"
          :class="
            localeStore.currentLocale === 'nl'
              ? 'bg-green-primary lg:bg-transparent text-white lg:text-black border-transparent lg:border-black'
              : 'border-transparent'
          "
          @click="switchLocale('nl')"
        >
          <TranslateIcon v-if="localeStore.currentLocale === 'nl'" class="block lg:hidden" />
          NL
        </button>
      </div>
    </div>
  </header>
</template>
