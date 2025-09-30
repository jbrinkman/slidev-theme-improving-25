---
inclusion: manual
---

# Slidev Theme Development Documentation

This document provides quick reference and links to official Slidev documentation for theme development.

## Key Documentation Links

### Core Theme Development

- [Write a Theme](https://sli.dev/themes/write-a-theme.html) - Complete guide to creating custom themes
- [Theme Configuration](https://sli.dev/themes/use.html) - How themes are configured and used
- [Directory Structure](https://sli.dev/themes/write-a-theme.html#directory-structure) - Required theme file organization

### Layout System

- [Built-in Layouts](https://sli.dev/builtin/layouts.html) - Reference for all default layouts
- [Custom Layouts](https://sli.dev/custom/directory-structure.html#layouts) - Creating custom layout components
- [Layout Props](https://sli.dev/builtin/layouts.html#layout-props) - Available props for layouts

### Customization & Styling

- [Customization Guide](https://sli.dev/custom/) - Overview of customization options
- [Vue Global Context](https://sli.dev/custom/vue-context.html) - Available Vue composables and utilities
- [CSS Variables](https://sli.dev/themes/write-a-theme.html#styling) - Theme CSS variable conventions

### Configuration

- [Vue Configuration](https://sli.dev/custom/config-vue.html) - Vue app configuration
- [Vite Configuration](https://sli.dev/custom/config-vite.html) - Build tool configuration
- [Setup Files](https://sli.dev/custom/directory-structure.html#setup) - Theme setup and initialization

## Quick Reference

### Theme Structure Requirements

```
theme-name/
├── package.json          # Theme package configuration
├── layouts/              # Custom layout components
│   ├── cover.vue
│   ├── intro.vue
│   └── default.vue
├── components/           # Reusable Vue components
├── styles/              # CSS and styling
│   └── index.ts         # Style entry point
├── setup/               # Configuration files
│   ├── shiki.ts         # Syntax highlighting
│   └── main.ts          # Main setup
└── example.md           # Demo presentation
```

### Layout Component Conventions

- Use Vue 3 Composition API
- Export default Vue component
- Access slide content via `$slidev.nav.currentSlide.content`
- Use `<slot />` for slide content placement
- Follow naming: `layouts/[layout-name].vue`

### CSS Variable Patterns

```css
:root {
  --slidev-theme-primary: #your-color;
  --slidev-theme-secondary: #your-color;
  --slidev-code-background: #your-color;
  --slidev-code-foreground: #your-color;
}
```

### Setup File Patterns

```typescript
// setup/main.ts
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // App configuration
})

// setup/shiki.ts
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: ['vitesse-light', 'vitesse-dark'],
    transformers: []
  }
})
```

### Common Layout Props

- `class`: CSS classes for the layout
- `clicks`: Current click count in slide
- `clicksElements`: Elements with click animations
- `is-presenter`: Boolean for presenter mode
- `scale`: Current zoom scale

## Development Tips

1. **Hot Reload**: Changes to layouts and styles auto-reload during development
2. **Theme Testing**: Use `example.md` to showcase all layouts and features
3. **CSS Scoping**: Use `.slidev-layout-[name]` classes for layout-specific styles
4. **Component Registration**: Components in `/components` are auto-registered globally
5. **TypeScript Support**: Use `@slidev/types` for proper type definitions

## Common Patterns

### Responsive Layouts

```vue
<template>
  <div class="slidev-layout cover">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  @apply h-full flex flex-col justify-center items-center text-center;
}

@media (max-width: 768px) {
  .container {
    @apply px-4;
  }
}
</style>
```

### Dynamic Theming

```css
.slidev-theme-dark {
  --slidev-theme-primary: #64b5f6;
}

.slidev-theme-light {
  --slidev-theme-primary: #1976d2;
}
```

### Code Block Styling

```css
.slidev-code {
  @apply rounded-lg border;
  background: var(--slidev-code-background);
  color: var(--slidev-code-foreground);
}
```
