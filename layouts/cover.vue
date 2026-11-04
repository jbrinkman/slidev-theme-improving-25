<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import { handleBackground, isDarkBackground } from './layoutHelper'
import logoFullTagline from '../assets/logo-full-tagline.svg'
import logoKnockout from '../assets/logo-full-knockout.svg'

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
  if (!backgroundValue.value)
    return {}
  const result = handleBackground(backgroundValue.value, shouldDim.value)
  // A light tone keeps ink text instead of the white forced for images
  if (!onDark.value)
    delete result.color
  return result
})

// A fixed background pins the layout to light or dark; otherwise it follows the color scheme
const onDark = computed(() => isDarkBackground(backgroundValue.value, $frontmatter.backgroundTone))
const backgroundMode = computed(() => {
  if (!backgroundValue.value)
    return ''
  return onDark.value ? 'on-dark' : 'on-light'
})

// The cover carries the primary logo, so the footer logo is hidden here
const showLogo = computed(() => $frontmatter.showLogo !== false)

const customLogo = computed(() => $frontmatter.customLogo)
</script>

<template>
  <div class="slidev-layout cover text-center" :class="backgroundMode" :style="style">
    <template v-if="showLogo">
      <img v-if="customLogo" :src="customLogo" alt="Improving" class="cover-logo custom-logo">
      <template v-else>
        <img :src="logoFullTagline" alt="Improving" class="cover-logo logo-on-light">
        <img :src="logoKnockout" alt="Improving" class="cover-logo logo-on-dark">
      </template>
    </template>
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>

  <!-- ImprovingFooter component -->
  <ImprovingFooter hide-logo />
</template>
