<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import { handleBackground } from './layoutHelper'

const { $frontmatter } = useSlideContext()

const props = defineProps({
  background: {
    type: String,
  },
  backgroundDim: {
    type: Boolean,
    default: true,
  },
})

// Access frontmatter background, no default
const backgroundValue = computed(() => {
  return props.background || $frontmatter.background
})

// Access frontmatter backgroundDim, default to true
const shouldDim = computed(() => {
  return $frontmatter.backgroundDim !== undefined ? $frontmatter.backgroundDim : props.backgroundDim
})

const style = computed(() => {
  // Only apply background styling if background is actually provided
  return backgroundValue.value ? handleBackground(backgroundValue.value, shouldDim.value) : {}
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
