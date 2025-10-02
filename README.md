# slidev-theme-improving-25

[![NPM version](https://img.shields.io/npm/v/slidev-theme-improving-25?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-improving-25)

A theme for [Slidev](https://github.com/slidevjs/slidev) based on the Improving Powerpoint theme.

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
- **Gradient background** - Official Improving brand colors

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

## Contributing

- `pnpm install`
- `pnpm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `pnpm run export` to generate the preview PDF
- `pnpm run screenshot` to generate the preview PNG

### Commit Message Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automated semantic versioning and changelog generation. Please follow these guidelines when making commits:

#### Commit Message Format

```text
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

#### Commit Types and Version Impact

| Type | Description | Version Impact | Example |
|------|-------------|----------------|---------|
| `feat` | New feature | **Minor** (0.1.0) | `feat: add new slide layout` |
| `fix` | Bug fix | **Patch** (0.0.1) | `fix: resolve footer alignment issue` |
| `perf` | Performance improvement | **Patch** (0.0.1) | `perf: optimize CSS loading` |
| `docs` | Documentation changes | No version bump | `docs: update README examples` |
| `style` | Code style changes | No version bump | `style: format CSS files` |
| `refactor` | Code refactoring | No version bump | `refactor: reorganize component structure` |
| `test` | Test additions/modifications | No version bump | `test: add layout component tests` |
| `chore` | Build/tooling changes | No version bump | `chore: update dependencies` |

#### Breaking Changes

For breaking changes that require a **Major** version bump (1.0.0), use one of these formats:

1. Add `!` after the type: `feat!: remove deprecated layout`
2. Include `BREAKING CHANGE:` in the footer:

   ```text
   feat: update theme API
   
   BREAKING CHANGE: The theme configuration format has changed.
   See migration guide for details.
   ```

#### Examples

##### New Feature (Minor Version Bump)

```text
feat(layouts): add image-center layout

Add new layout for centered images with caption support.
Includes responsive design and dark mode compatibility.
```

##### Bug Fix (Patch Version Bump)

```text
fix(footer): correct logo positioning in dark mode

The Improving logo was misaligned in dark mode due to
incorrect CSS selector specificity.

Fixes #123
```

##### Breaking Change (Major Version Bump)

```text
feat!: update component prop names for consistency

BREAKING CHANGE: Component prop names have been updated:
- `showFooter` is now `footer`
- `showPageNumber` is now `pageNumber`
- `showLogo` is now `logo`

Migration: Update your slide frontmatter to use the new prop names.
```

##### Documentation Update (No Version Bump)

```text
docs: add examples for custom logo configuration

Include step-by-step guide for replacing the default
Improving logo with custom branding.
```

##### Performance Improvement (Patch Version Bump)

```text
perf(styles): reduce CSS bundle size

Remove unused utility classes and optimize color definitions.
Reduces theme CSS from 45KB to 32KB.
```

#### Scope Guidelines

Use these common scopes to categorize your changes:

- `layouts`: Changes to slide layouts
- `components`: Changes to Vue components
- `styles`: CSS and styling changes
- `setup`: Configuration and setup files
- `deps`: Dependency updates
- `build`: Build system changes

#### Tips for Good Commit Messages

1. **Use imperative mood**: "add feature" not "added feature"
2. **Keep the subject line under 50 characters**
3. **Capitalize the subject line**
4. **Don't end the subject line with a period**
5. **Use the body to explain what and why, not how**
6. **Reference issues and pull requests when relevant**

## Features

### Color Theme
Based on official Improving PowerPoint theme colors:

![Color Theme](assets/slides/6.png)

- **Primary Colors**: Dark1, Dark2, Light1, Light2
- **Accent Colors**: 6 branded accent colors for highlights and emphasis
- **Automatic theming**: Supports both light and dark modes
- **Utility classes**: Complete set of `text-improving-*` and `bg-improving-*` classes

### Typography

- **Headings**: Use Accent 2 color (#005596) with subtle borders
- **Links**: Proper hyperlink and visited link colors
- **Font**: [Poppins](https://fonts.google.com/specimen/Poppins) sans-serif for clean, modern appearance

### Layout Features

- **Responsive design**: Works on different screen sizes
- **Consistent footer**: Appears on all theme layouts. Can be hidden when not needed.
- **Image layouts**: Support for left and right image positioning
- **Theme-aware styling**: Adapts to light/dark mode preferences
