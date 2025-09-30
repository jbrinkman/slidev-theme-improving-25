# Project Structure

## Root Directory

- `package.json`: Project configuration and dependencies
- `example.md`: Demo presentation showcasing theme features
- `README.md`: Documentation and usage instructions
- `.npmrc`: npm configuration
- `.gitignore`: Git ignore patterns

## Core Theme Directories

### `/layouts`

Contains Vue components for slide layouts:

- `cover.vue`: Cover slide layout with centered content
- `intro.vue`: Introduction slide layout
- Custom layouts should follow the naming convention `[layout-name].vue`

### `/styles`

Theme styling and CSS:

- `index.ts`: Main style entry point, imports base layouts and custom CSS
- `layout.css`: Custom CSS with theme variables and layout-specific styles
- Uses CSS custom properties for theming (e.g., `--slidev-theme-primary`)

### `/setup`

Slidev configuration files:

- `shiki.ts`: Syntax highlighting configuration with theme definitions
- Setup files should export default functions using Slidev's define helpers

### `/components`

Vue components for the theme:

- Currently contains only `.gitkeep`
- Custom components should be Vue 3 compatible
- Components are automatically available in presentations using this theme

## Development Files

- `.vscode/`: VS Code workspace configuration
- `node_modules/`: Installed dependencies (ignored in git)
- `pnpm-lock.yaml`: Dependency lock file
- `slidev-theme-improving-25.code-workspace`: VS Code workspace file

## Conventions

- Use TypeScript for setup files
- Vue components should use `<template>`, `<script>`, `<style>` structure
- CSS classes follow Slidev's naming convention with `slidev-layout` prefix
- Theme colors defined as CSS custom properties in `:root`
