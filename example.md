---
theme: ./
author: Joe Brinkman
title: Slidev Theme - Improving
transition: slide-left
fonts:
  sans: Poppins
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

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---
layout: image-right
image: https://cover.sli.dev
class: px-5
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
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
showFooter: true          # Show footer (default)
showPageNumber: false     # Hide page number
showLogo: true           # Show logo (default)
showTitle: true          # Show title (default)
showAuthor: false        # Hide author
customLogo: './my-logo.svg'  # Use custom logo
---
```

---

# Improving Color Theme

<div class="grid grid-cols-2 gap-8 mt-4">

<div>
<h3 class="text-lg mb-3">Primary Colors</h3>
<div class="space-y-2 text-sm">
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 bg-improving-dark1 border border-gray-300 rounded"></div>
    <span><strong>Dark1:</strong> #000000</span>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 bg-improving-dark2 border border-gray-300 rounded"></div>
    <span><strong>Dark2:</strong> #44546A</span>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 bg-improving-light1 border border-gray-300 rounded"></div>
    <span><strong>Light1:</strong> #FFFFFF</span>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 bg-improving-light2 border border-gray-300 rounded"></div>
    <span><strong>Light2:</strong> #E7E6E6</span>
  </div>
</div>

<h3 class="text-lg mb-3 mt-6">Special Colors</h3>
<div class="space-y-2 text-sm">
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 border border-gray-300 rounded" style="background-color: #0563C1"></div>
    <span><strong>Hyperlink:</strong> #0563C1</span>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 border border-gray-300 rounded" style="background-color: #954F72"></div>
    <span><strong>Followed:</strong> #954F72</span>
  </div>
</div>
</div>

<div>
<h3 class="text-lg mb-3">Accent Colors</h3>
<div class="space-y-2 text-sm">
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 bg-improving-accent1 border border-gray-300 rounded"></div>
    <span><strong>Accent 1:</strong> #4597D3</span>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 bg-improving-accent2 border border-gray-300 rounded"></div>
    <span><strong>Accent 2:</strong> #005596 (Headings)</span>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 bg-improving-accent3 border border-gray-300 rounded"></div>
    <span><strong>Accent 3:</strong> #FF9300</span>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 bg-improving-accent4 border border-gray-300 rounded"></div>
    <span><strong>Accent 4:</strong> #5BC2A7</span>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 bg-improving-accent5 border border-gray-300 rounded"></div>
    <span><strong>Accent 5:</strong> #606060</span>
  </div>
  <div class="flex items-center gap-2">
    <div class="w-6 h-6 bg-improving-accent6 border border-gray-300 rounded"></div>
    <span><strong>Accent 6:</strong> #F5BB41</span>
  </div>
</div>
</div>

</div>

<div class="mt-6 text-sm">
<strong>Usage:</strong> Headings use <span class="text-improving-accent2">Accent 2</span> • Links use <a href="#">hyperlink colors</a> • Utility classes: <code>text-improving-accent1</code>, <code>bg-improving-accent2</code>
</div>

---
layout: center
class: "text-center"
---

# Learn More

[Documentation](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
