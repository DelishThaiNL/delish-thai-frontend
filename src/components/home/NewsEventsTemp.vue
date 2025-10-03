<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CardAbout from '@/components/util/CardAbout.vue'
import AppTitle from '@/components/util/AppTitle.vue'
import newsPhoto from '@/assets/images/news.jpg'
import AppButton from '@/components/util/AppButton.vue'

type NewsItem = {
  title: string
  description: string
  date: string
  buttonText: string
  link: string
  src?: string // filename only, e.g. "02-10-2025-winkelstad.jpg"
}

const { t, tm } = useI18n()

// Localized array from i18n
const items = computed<NewsItem[]>(() => (tm('home.news.items') as NewsItem[]) || [])

// Load all news images as URLs (Vite transforms them)
const images = import.meta.glob('/src/assets/images/news/*', {
  eager: true,
  as: 'url'
}) as Record<string, string>

// Helper to resolve filename from i18n to a bundled URL
function resolveImg(name?: string) {
  if (!name) return newsPhoto
  // If you sometimes put full URLs or /public paths in i18n, allow those too:
  if (name.startsWith('http') || name.startsWith('/')) return name
  const key = `/src/assets/images/news/${name}`
  return images[key] ?? newsPhoto
}
</script>

<template>
  <section class="py-5 my-10 sm:py-7 sm:my-13 lg:py-10 lg:my-20" id="news">
    <div class="container">
      <div class="flex flex-col items-center">
        <AppTitle :text="t('home.news.title')" />

        <!-- ONE PER ROW -->
        <div class="w-full space-y-8">
          <div v-for="(item, idx) in items" :key="idx">
            <CardAbout :imgSrc="resolveImg(item.src)" :title="item.date">
              <template #text>
                <div class="flex flex-col h-full">
                  <h4 class="text-lg sm:text-xl md:text-2xl xl:text-[28px] font-medium mb-4">
                    {{ item.title }}
                  </h4>

                  <p class="text-sm md:text-base leading-relaxed">
                    {{ item.description }}
                  </p>

                  <div class="mt-4"></div> <!-- spacer if needed -->

                  <a
                    :href="item.link"
                    target="_blank"
                    rel="noopener"
                    class="mt-4"
                  >
                    <AppButton
                      class="w-full"
                      :text="item.buttonText"
                      type="transparent-border"
                    />
                  </a>
                </div>
              </template>
            </CardAbout>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



