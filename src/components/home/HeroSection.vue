<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

const modules = [Autoplay, Pagination, Navigation]

const navigation = ref<{
  nextEl: HTMLElement | string | null
  prevEl: HTMLElement | string | null
}>({
  nextEl: null,
  prevEl: null,
})

const pagination = ref<{
  el: HTMLElement | string | null
  clickable: boolean
}>({
  el: null,
  clickable: true,
})

onMounted(() => {
  navigation.value = {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  }
  pagination.value.el = '.slider-pagination'
})
</script>

<template>
  <section class="p-2" id="hero">
    <div class="relative">
      <!-- Background slider only -->
      <Swiper
        class="!overflow-hidden rounded-3xl lg:rounded-4xl xl:rounded-[48px] shadow-custom-sm md:shadow-custom-xl"
        :loop="true"
        :slidesPerView="1"
        :allowTouchMove="false"
        :spaceBetween="16"
        :autoplay="{ delay: 4000 }"
        :navigation="navigation"
        :pagination="pagination"
        :modules="modules"
      >
        <SwiperSlide>
          <div
            class="w-full h-[500px] sm:h-[600px] 2xl:h-[800px] bg-banner1 bg-no-repeat bg-center bg-cover"
          ></div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            class="w-full h-[500px] sm:h-[600px] 2xl:h-[800px] bg-banner2 bg-no-repeat bg-center bg-cover"
          ></div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            class="w-full h-[500px] sm:h-[600px] 2xl:h-[800px] bg-banner3 bg-no-repeat bg-center bg-cover"
          ></div>
        </SwiperSlide>
      </Swiper>

      <!-- Fixed content overlay -->
      <div class="absolute inset-0 z-10 pointer-events-none">
        <div
          class="container h-full py-24 flex items-center justify-center flex-col lg:flex-row gap-8 lg:gap-0"
        >
          <div
            class="lg:flex-1 flex flex-col items-center gap-8 lg:gap-12 xl:gap-16 text-center pointer-events-auto"
          >
            <h1
              class="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl italic tracking-widest leading-tight w-full max-w-60 sm:max-w-xs lg:max-w-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
            >
              {{ $t('home.hero.sliderItem1.title') }}
            </h1>

            <div>
              <a
                href="https://delishthai.sitedish.shop"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-block"
              >
                <div
                  class="relative inline-flex items-center gap-2 p-[2px] rounded-[26px] sm:rounded-4xl xl:rounded-[40px] bg-light-bege md:shadow-custom-sm transition-all duration-500 group-hover:py-2 xl:group-hover:py-[10px]"
                >
                  <p class="ml-4 text-lg sm:text-xl xl:text-2xl font-medium">
                    {{ $t('home.hero.sliderItem1.description') }}
                  </p>

                  <div
                    class="flex justify-center items-center shrink-0 w-[50px] sm:w-15 xl:w-19 aspect-square rounded-full ml-auto bg-bege transition duration-500 group-hover:bg-transparent"
                  >
                    <ArrowIcon color="black" />
                  </div>

                  <!-- Hover overlay -->
                  <div
                    class="absolute inset-0 rounded-[26px] sm:rounded-4xl xl:rounded-[40px] pointer-events-none bg-black opacity-0 transition duration-500 group-hover:opacity-15 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
                  ></div>
                </div>
              </a>

              <div class="mt-2 text-white">
                {{ $t('home.hero.sliderItem1.subDescription') }}
              </div>
            </div>
          </div>

          <div class="hidden lg:flex lg:flex-1"></div>
        </div>
      </div>

      <!-- Custom slider controls -->
      <div
        class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center gap-6"
      >
        <button
          type="button"
          aria-label="Previous slide"
          class="slider-prev w-11 h-11 rounded-full bg-[#333] hover:bg-[#666] transition flex justify-center items-center shrink-0 cursor-pointer"
        >
          <ArrowIcon class="rotate-180" />
        </button>

        <div class="slider-pagination flex items-center gap-3"></div>

        <button
          type="button"
          aria-label="Next slide"
          class="slider-next w-11 h-11 rounded-full bg-[#333] hover:bg-[#666] transition flex justify-center items-center shrink-0 cursor-pointer"
        >
          <ArrowIcon />
        </button>
      </div>
    </div>
  </section>
</template>
