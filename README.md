# slidev-theme-improving-25

[![NPM version](https://img.shields.io/npm/v/slidev-theme-improving-25?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-improving-25)

A theme for [Slidev](https://github.com/slidevjs/slidev) built on the Improving Design System: brand colors, Poppins and Khula type, approved logos and gradients.

<!--
  Learn more about how to write a theme:
  https://sli.dev/guide/write-theme.html
--->

<!--
  run `npm run dev` to check out the slides for more details of how to start writing a theme
-->

<!--
  Put some screenshots here to demonstrate your theme

  Live demo: [...]
-->

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>improving-25</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Layouts

This theme provides the following layouts:

### `default`
The standard layout with ImprovingFooter. Includes H1 title bar styling with subtle borders and supports both light and dark modes.

### `cover`
Title slide with the full logo and tagline at the top left. Set `background` in frontmatter to a color, an image URL or `gradient-deep`; on dark grounds the text switches to paper and the knockout logo is used. Images count as dark; set `backgroundTone: light` for a light image shown with `backgroundDim: false`, or `backgroundTone: dark` to force the dark treatment. Set `showLogo: false` to hide the logo.

### `image-right`
Two-column layout with content on the left and image on the right. Includes ImprovingFooter.

### `image-left`
Two-column layout with image on the left and content on the right. Includes ImprovingFooter.

### Built-in Layouts
This theme also supports all standard Slidev layouts. See the [Slidev Built-in Layouts documentation](https://sli.dev/builtin/layouts) for `cover`, `intro`, `center`, and other available layouts.

## Components

This theme provides the following components:

### `ImprovingFooter`
A comprehensive footer component that displays:

- **Page numbers** - Current slide number
- **Global title** - Presentation title from frontmatter
- **Global author** - Author name from frontmatter  
- **Company logo** - Improving logo with custom logo support
- **Brand band** - The template's Light Blue to Green band (the approved fresh gradient) with white text and the knockout logo

#### Footer Configuration
Control footer elements via frontmatter:

```yaml
---
showFooter: true          # Master switch (default: true)
showPageNumber: true      # Show page number (default: true)
showLogo: true           # Show logo (default: true)
showTitle: true          # Show title (default: true)
showAuthor: true         # Show author (default: true)
customLogo: './logo.svg' # Custom logo path (optional)
---
```

## Features

### Design system

The theme combines the Improving Design System with the official PowerPoint template (Preso-2026): the footer band, title and body type sizes and the template palette come from the template, and tokens, logos and components come from the design system. Styles are generated from the Design System tokens in `styles/tokens.css`, which also carries the font faces. Slide CSS reads those variables and hard-codes only the four badge tints (`--tint-*`), for which the design system defines no token.

### Color

- **Brand**: Improving Blue `#005596` for headlines, links and the footer; Light Blue `#4597D3` for hover states and gradients
- **Accents**: green, orange, purple and gray, used as highlights only
- **Neutrals**: the `ink-900` to `ink-50` ramp for text, borders and panels
- **Gradients**: only `gradient-deep` and `gradient-fresh` are approved
- **Utility classes**: `text-improving-blue`, `bg-accent-green`, `bg-ink-100`, `bg-gradient-deep` and the rest of the design system palette
- **Dark mode**: the design system defines a light theme only. Dark mode is derived from the same tokens (`ink-900` ground, Light Blue headings and links)
- **PowerPoint template palette**: `--improving-dark1`, `--improving-accent1` to `--improving-accent6` and the matching `text-improving-*` and `bg-improving-*` classes keep the exact values from the official Preso-2026 template, including orange `#FF9300`

### Typography

- **Headings**: [Poppins](https://fonts.google.com/specimen/Poppins) in Improving Blue, with tight tracking; `h1` is bold, as in the PowerPoint template. `h5` and `h6` render as capitalized eyebrows
- **Body**: [Khula](https://fonts.google.com/specimen/Khula) at 16px in Ink 900
- **Cover**: Poppins bold at 48px
- **Links**: Improving Blue, underlined, Light Blue on hover
- **Fonts are bundled**, so slides render and export offline. Only the code font (Fira Code) loads from Google Fonts

### Components

Class-based components from the design system, usable in any slide: `eyebrow`, `badge` (`blue`, `green`, `orange`, `purple`, `gray`), `pull-quote`, `stat-grid` with `stat`, `feature-grid` with `feature-card`, and `cta-banner`. See `example.md` for markup.

### Layout Features

- **Responsive design**: Works on different screen sizes
- **Consistent footer**: Appears on all theme layouts. Can be hidden when not needed.
- **Image layouts**: Support for left and right image positioning
- **Theme-aware styling**: Adapts to light/dark mode preferences

## Contributing

Interested in contributing? See our [Contributing Guide](CONTRIBUTING.md) for development setup, commit guidelines, and pull request process.
