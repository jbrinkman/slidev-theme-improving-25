<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import { handleBackground } from './layoutHelper'

const { $frontmatter } = useSlideContext()

const props = defineProps({
  background: {
    type: String,
  },
})

// Access frontmatter background, with fallback to default
const backgroundValue = computed(() => {
  return props.background || $frontmatter.background || 'https://source.unsplash.com/collection/94734566/1920x1080'
})

console.log('Background prop:', props.background)
console.log('Frontmatter background:', $frontmatter.background)
console.log('Background value:', backgroundValue.value)

const style = computed(() => {
  const result = handleBackground(backgroundValue.value, true)
  console.log('Computed style:', result)
  return result
})
</script>

<template>
  <div class="slidev-layout cover text-center" :style="style">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>

  <!-- ImprovingFooter component -->
  <ImprovingFooter />
</template>
