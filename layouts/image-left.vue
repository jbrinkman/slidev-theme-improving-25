<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from './layoutHelper'
import ImprovingFooter from '../components/ImprovingFooter.vue'

const props = defineProps({
  image: {
    type: String,
  },
  class: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: 'cover',
  },
  frontmatter: {
    type: Object,
    default: () => ({}),
  },
})

const style = computed(() => handleBackground(props.image, false, props.backgroundSize))
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full auto-rows-fr">
    <div class="w-full h-full" :style="style" />
    <div class="slidev-layout default" :class="props.class">
      <slot />
    </div>
  </div>
  <!-- ImprovingFooter component -->
  <ImprovingFooter />
</template>
