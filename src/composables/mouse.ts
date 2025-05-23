import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref<number>(0)
  const y = ref<number>(0)

  function update(event: MouseEvent): void {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}
