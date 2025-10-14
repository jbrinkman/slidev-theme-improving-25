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

// Access frontmatter background, no default
const backgroundValue = computed(() => {
  return props.background || $frontmatter.background
})

const style = computed(() => {
  // Only apply dim effect if background is actually provided
  return backgroundValue.value ? handleBackground(backgroundValue.value, true) : {}
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
