<script setup lang="ts">
import CardAbout from '@/components/util/CardAbout.vue'
import minimarket from '@/assets/images/minimarket.png'
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="w-full">
      <CardAbout :imgSrc="minimarket" :title="$t('offerings.minimarket.info.title')">
        <template #text>
          <span>{{ $t('offerings.minimarket.info.description.chunk1') }}</span
          ><br /><br />
          <span>{{ $t('offerings.minimarket.info.description.chunk2') }}</span
          ><br /><br />
          <span>{{ $t('offerings.minimarket.info.description.chunk3') }}</span
          ><br /><br />
          <span>{{ $t('offerings.minimarket.info.description.chunk4') }}</span
          ><br /><br />
          <span>{{ $t('offerings.minimarket.info.description.chunk5') }}</span>
        </template>
      </CardAbout>
    </div>
  </div>
</template>
