---
theme: ./
author: Joe Brinkman
title: Slidev Theme - Improving
transition: slide-left
layout: cover
---

# Slidev Theme / Improving-25

It’s what we do.

---

<h1 class="text-center">Slidev Theme / Improving-25</h1>

<div class="flex flex-col items-center h-full relative">
  <img src="/assets/trust.png" alt="Trust" class="w-full max-w-4xl h-auto flex-grow object-contain" />
  
  <!-- Navigation button positioned relative to image -->
  <div class="absolute bottom-2 right-2 z-20">
    <span @click="$slidev.nav.next"
          class="cursor-pointer text-sm font-medium text-white transition-all duration-200"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);"
          flex="~ justify-center items-center gap-2">
      Press Space for next page <div class="i-carbon:arrow-right inline-block"/>
    </span>
  </div>
</div>

---

# What is Slidev?

Slidev is a slide maker and presentation tool designed for developers. It includes the following features:

- 📝 **Text-based** - focus on your content with Markdown, then style it later
- 🎨 **Themable** - themes can be shared and reused as npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embed Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export to PDF, PPTX, PNGs, or even a hostable SPA
- 🛠 **Hackable** - virtually anything that's possible on a webpage is possible in Slidev

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|                                                      |                             |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd> / <kbd>shift</kbd><kbd>space</kbd>   | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

---
layout: image-right
image: https://cover.sli.dev
class: px-5
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id);
  const newUser = { ...user, ...update };
  saveUser(id, newUser);
}
```

---

# Footer Configuration

The ImprovingFooter component supports various frontmatter properties to control its appearance:

## Visibility Controls

- **`showFooter`**: Master switch to show/hide entire footer (default: `true`)
- **`showPageNumber`**: Display current page number (default: `true`)
- **`showLogo`**: Display company logo (default: `true`)
- **`showTitle`**: Display presentation title from global frontmatter (default: `true`)
- **`showAuthor`**: Display author name from global frontmatter (default: `true`)

<br>

## Customization Options

- **`customLogo`**: Override default logo with custom image path

---

# Footer Configuration (cont.)

## Example Usage

```yaml
---
showFooter: true # Show footer (default)
showPageNumber: false # Hide page number
showLogo: true # Show logo (default)
showTitle: true # Show title (default)
showAuthor: false # Hide author
customLogo: "./my-logo.svg" # Use custom logo
---
```

---

# Improving Color Palette

<div class="grid grid-cols-2 gap-8 mt-4">

<div>
<h3 class="mb-3">Brand and accents</h3>
<div class="space-y-2 text-sm">
  <div class="flex items-center gap-2"><div class="w-6 h-6 rounded bg-improving-blue"></div><span><strong>Improving Blue:</strong> #005596 (headlines, links)</span></div>
  <div class="flex items-center gap-2"><div class="w-6 h-6 rounded bg-improving-light-blue"></div><span><strong>Light Blue:</strong> #4597D3</span></div>
  <div class="flex items-center gap-2"><div class="w-6 h-6 rounded bg-accent-green"></div><span><strong>Green:</strong> #5BC2A7</span></div>
  <div class="flex items-center gap-2"><div class="w-6 h-6 rounded bg-accent-orange"></div><span><strong>Orange:</strong> #F5BB41</span></div>
  <div class="flex items-center gap-2"><div class="w-6 h-6 rounded bg-accent-purple"></div><span><strong>Purple:</strong> #9D1D96 (special use)</span></div>
  <div class="flex items-center gap-2"><div class="w-6 h-6 rounded bg-accent-gray"></div><span><strong>Gray:</strong> #A7A8A9</span></div>
</div>
</div>

<div>
<h3 class="mb-3">Neutrals</h3>
<div class="space-y-2 text-sm">
  <div class="flex items-center gap-2"><div class="w-6 h-6 rounded bg-ink-900"></div><span><strong>Ink 900:</strong> #0E1A26 (body text)</span></div>
  <div class="flex items-center gap-2"><div class="w-6 h-6 rounded bg-ink-700"></div><span><strong>Ink 700:</strong> #2A3A4A</span></div>
  <div class="flex items-center gap-2"><div class="w-6 h-6 rounded bg-ink-500"></div><span><strong>Ink 500:</strong> #5A6B7C (muted text)</span></div>
  <div class="flex items-center gap-2"><div class="w-6 h-6 rounded bg-ink-300"></div><span><strong>Ink 300:</strong> #9AA8B5</span></div>
  <div class="flex items-center gap-2"><div class="w-6 h-6 rounded bg-ink-100 border border-gray-300"></div><span><strong>Ink 100:</strong> #E3E8EC (borders)</span></div>
  <div class="flex items-center gap-2"><div class="w-6 h-6 rounded bg-ink-50 border border-gray-300"></div><span><strong>Ink 50:</strong> #F4F6F8</span></div>
</div>
</div>

</div>

<div class="mt-6 text-sm">
<strong>Usage:</strong> Headlines use <span class="text-improving-blue">Improving Blue</span> • Utility classes: <code>text-improving-blue</code>, <code>bg-accent-green</code>, <code>bg-gradient-deep</code> • CSS variables: <code>--improving-blue</code>, <code>--ink-900</code>
</div>

---

# Typography

<p class="eyebrow">Poppins and Khula</p>

## Poppins for titles, Khula for text

Headings are Poppins in Improving Blue. Body copy is Khula in Ink 900, set at 16px. Use sentence case for headlines, and reserve capitals for short eyebrows.

### Sub-heading in Poppins medium

Captions and metadata use Khula in <span class="text-ink-500">Ink 500</span>.

---

# Components

<div class="stat-grid mb-6">
  <div class="stat"><div class="num">12</div><div class="caption">Cities</div></div>
  <div class="stat"><div class="num">1,400</div><div class="caption">Improvers</div></div>
  <div class="stat"><div class="num">25</div><div class="caption">Years</div></div>
</div>

<blockquote class="pull-quote">
  Confident, plain-spoken, specific.
  <footer>Improving brand voice</footer>
</blockquote>

<div class="mt-6 flex gap-2">
  <span class="badge blue">Blue</span>
  <span class="badge green">Green</span>
  <span class="badge orange">Orange</span>
  <span class="badge purple">Purple</span>
  <span class="badge gray">Gray</span>
</div>

---
layout: center
class: "text-center"
---

# Learn More

[Documentation](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
