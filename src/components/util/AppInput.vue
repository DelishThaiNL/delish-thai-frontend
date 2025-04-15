<script setup lang="ts">
import { watch, ref } from 'vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'

const props = defineProps({
  placeholder: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    required: false,
  },
  inputType: {
    type: String,
    required: false,
    default: 'text',
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  isSearch: {
    type: Boolean,
    required: false,
  },
})

const emit = defineEmits(['update'])

const localValue = ref(props.value)
const localInputType = ref(props.inputType)

watch(
  () => props.value,
  (newValue: string | undefined) => {
    localValue.value = newValue
  },
)

watch(
  () => props.inputType,
  (newValue: string) => {
    localInputType.value = newValue
  },
)

const onInput = () => {
  emit('update', localValue.value)
}
</script>

<template>
  <label
    class="w-full max-w-xs flex items-center gap-2 px-4 py-2 bg-white-cream rounded-full border border-transparent focus-within:border-gray-secondary transition-colors"
  >
    <template v-if="props.isSearch">
      <div class="flex">
        <SearchIcon />
      </div>
    </template>

    <input
      class="w-full h-6 outline-none"
      :class="{ 'text-gray-caption': props.disabled }"
      :placeholder="props.placeholder"
      v-model="localValue"
      :type="localInputType"
      :disabled="props.disabled"
      @input="onInput"
    />
  </label>
</template>
