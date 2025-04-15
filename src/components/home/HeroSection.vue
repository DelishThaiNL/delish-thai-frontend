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
      <Swiper
        class="!overflow-visible"
        :loop="true"
        :slidesPerView="1"
        :allowTouchMove="false"
        :spaceBetween="16"
        :autoplay="{ delay: 5000 }"
        :navigation="navigation"
        :pagination="pagination"
        :modules="modules"
      >
        <SwiperSlide>
          <div
            class="w-full h-[500px] sm:h-[600px] 2xl:h-[800px] bg-banner1-mobile lg:bg-banner1 bg-no-repeat bg-center bg-cover shadow-custom-sm md:shadow-custom-xl rounded-3xl lg:rounded-4xl xl:rounded-[48px]"
          >
            <div
              class="container h-full py-24 flex items-center justify-center flex-col lg:flex-row gap-8 lg:gap-0"
            >
              <div
                class="lg:flex-1 flex flex-col items-center gap-8 lg:gap-12 xl:gap-16 text-center"
              >
                <h1
                  class="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl italic tracking-widest leading-tight w-full max-w-60 sm:max-w-xs lg:max-w-sm"
                >
                  {{ $t('home.hero.sliderItem1.title') }}
                </h1>

                <div
                  class="bg-white py-1 sm:py-2 px-2 sm:px-6 text-sm sm:text-xl xl:text-2xl font-light rounded-lg sm:rounded-[20px]"
                >
                  {{ $t('home.hero.sliderItem1.description') }}
                </div>
              </div>

              <div class="lg:flex-1">
                <img
                  class="w-full max-w-28 sm:max-w-[200px] lg:max-w-[320px] xl:max-w-[400px] 2xl:max-w-[470px]"
                  src="@/assets/images/logo-white.png"
                  alt="Delish Thai Logo"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            class="w-full h-[500px] sm:h-[600px] 2xl:h-[800px] bg-banner2 bg-no-repeat bg-[35%] md:bg-left lg:bg-center bg-cover shadow-custom-sm md:shadow-custom-xl rounded-3xl lg:rounded-4xl xl:rounded-[48px]"
          >
            <div
              class="container h-full py-24 flex items-center justify-center flex-col lg:flex-row gap-8 lg:gap-0"
            >
              <div
                class="lg:flex-1 flex flex-col items-center gap-8 lg:gap-12 xl:gap-16 text-center"
              >
                <div class="text-white">
                  <h1
                    class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl italic tracking-widest leading-tight"
                  >
                    {{ $t('home.hero.sliderItem2.title') }}
                  </h1>
                  <p
                    class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl italic tracking-widest leading-tight"
                  >
                    {{ $t('home.hero.sliderItem2.subtitle') }}
                  </p>
                </div>

                <div
                  class="bg-white py-1 sm:py-2 px-2 sm:px-6 text-sm sm:text-xl xl:text-2xl font-light rounded-lg sm:rounded-[20px]"
                >
                  <p class="mb-2 lg:mb-3">{{ $t('home.hero.sliderItem2.description1') }}</p>
                  <p class="font-semibold">{{ $t('home.hero.sliderItem2.description2') }}</p>
                </div>
              </div>

              <div class="hidden lg:flex lg:flex-1"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Custom controls layout -->
      <div
        class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex justify-center items-center gap-6"
      >
        <button
          class="slider-prev w-11 h-11 rounded-full bg-[#333] hover:bg-[#666] transition flex justify-center items-center shrink-0 cursor-pointer"
        >
          <ArrowIcon class="rotate-180" />
        </button>

        <div class="slider-pagination flex items-center gap-3"></div>

        <button
          class="slider-next w-11 h-11 rounded-full bg-[#333] hover:bg-[#666] transition flex justify-center items-center shrink-0 cursor-pointer"
        >
          <ArrowIcon />
        </button>
      </div>
    </div>
  </section>
</template>
