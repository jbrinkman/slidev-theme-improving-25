<template>
    <div v-if="showFooter" class="improving-footer fixed bottom-0 left-0 right-0 h-12 z-10">
        <div class="footer-content grid grid-cols-4 h-full px-6">
            <!-- Column 1: Page Number -->
            <div class="flex items-center page-number">
                <span v-if="showPageNumber">{{ $slidev.nav.currentPage }}</span>
            </div>

            <!-- Middle columns: Title and/or Author -->
            <template v-if="showTitle && showAuthor">
                <!-- Both visible: separate columns -->
                <div class="flex items-center justify-center footer-label">
                    <span>{{ globalTitle }}</span>
                </div>
                <div class="flex items-center justify-center footer-label">
                    <span>{{ globalAuthor }}</span>
                </div>
            </template>
            <template v-else-if="showTitle && !showAuthor">
                <!-- Title only: spans both middle columns -->
                <div class="col-span-2 flex items-center justify-center footer-label">
                    <span>{{ globalTitle }}</span>
                </div>
            </template>
            <template v-else-if="!showTitle && showAuthor">
                <!-- Author only: spans both middle columns -->
                <div class="col-span-2 flex items-center justify-center footer-label">
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
                <img v-if="showLogo" :src="logoSrc" alt="Improving" class="logo h-9 w-auto"
                    :class="{ 'brightness-0 invert': hasCustomLogo }" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import defaultLogo from '../assets/logo-full-knockout.svg'

const { $slidev, $frontmatter } = useSlideContext()

// Layouts that show their own logo (cover) hide the footer logo
const props = defineProps({
    hideLogo: {
        type: Boolean,
        default: false,
    },
})

// Control visibility based on frontmatter
const showPageNumber = computed(() =>
    $frontmatter.showPageNumber !== false
)

const showLogo = computed(() =>
    $frontmatter.showLogo !== false && !props.hideLogo
)

const showAuthor = computed(() =>
    $frontmatter.showAuthor !== false && globalAuthor.value !== ''
)

const showTitle = computed(() =>
    $frontmatter.showTitle !== false && globalTitle.value !== ''
)

// The default logo is the knockout (white) logo; a custom logo is forced to white
const hasCustomLogo = computed(() => !!$frontmatter.customLogo)

const logoSrc = computed(() =>
    $frontmatter.customLogo || defaultLogo
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

<style scoped>
/* improving-blue ground, paper text; the approved gradient-deep marks the top edge */
.improving-footer {
    background: var(--improving-blue);
    color: var(--paper);
    font-family: var(--font-body);
}

.improving-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: var(--s-1);
    background: var(--gradient-deep);
}

.page-number {
    font-family: var(--font-display);
    font-size: var(--fs-18);
    font-weight: var(--weight-medium);
}

.footer-label {
    font-size: var(--fs-14);
    font-weight: var(--weight-semibold);
}
</style>
