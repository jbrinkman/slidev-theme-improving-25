<template>
    <div v-if="showFooter" class="improving-footer fixed bottom-0 left-0 right-0 h-11 z-10"
        style="background: linear-gradient(90deg, #4A90B8 0%, #5BA8A0 100%);">
        <div class="footer-content grid grid-cols-4 h-full px-6">
            <!-- Column 1: Page Number -->
            <div class="flex items-center text-white text-lg font-medium">
                <span v-if="showPageNumber">{{ $slidev.nav.currentPage }}</span>
            </div>

            <!-- Middle columns: Title and/or Author -->
            <template v-if="showTitle && showAuthor">
                <!-- Both visible: separate columns -->
                <div class="flex items-center justify-center text-white text-sm font-medium">
                    <span>{{ globalTitle }}</span>
                </div>
                <div class="flex items-center justify-center text-white text-sm font-medium">
                    <span>{{ globalAuthor }}</span>
                </div>
            </template>
            <template v-else-if="showTitle && !showAuthor">
                <!-- Title only: spans both middle columns -->
                <div class="col-span-2 flex items-center justify-center text-white text-sm font-medium">
                    <span>{{ globalTitle }}</span>
                </div>
            </template>
            <template v-else-if="!showTitle && showAuthor">
                <!-- Author only: spans both middle columns -->
                <div class="col-span-2 flex items-center justify-center text-white text-sm font-medium">
                    <span>{{ globalAuthor }}</span>
                </div>
            </template>
            <template v-else>
                <!-- Neither visible: empty columns -->
                <div></div>
                <div></div>
            </template>

            <!-- Column 4: Logo -->
            <div class="flex items-center justify-end">
                <img v-if="showLogo" :src="logoSrc" alt="Logo" class="logo h-7 w-auto brightness-0 invert" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $slidev, $frontmatter } = useSlideContext()

// Control visibility based on frontmatter
const showPageNumber = computed(() =>
    $frontmatter.showPageNumber !== false
)

const showLogo = computed(() =>
    $frontmatter.showLogo !== false
)

const showAuthor = computed(() =>
    $frontmatter.showAuthor !== false
)

const showTitle = computed(() =>
    $frontmatter.showTitle !== false
)

const logoSrc = computed(() =>
    $frontmatter.customLogo || './assets/logo.png'
)

// Access global frontmatter for title and author content
const globalTitle = computed(() =>
    $slidev.configs?.title || ''
)

const globalAuthor = computed(() =>
    $slidev.configs?.author || ''
)

// Control entire footer visibility
const showFooter = computed(() =>
    $frontmatter.showFooter !== false
)

</script>
