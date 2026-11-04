import type { CSSProperties } from 'vue'

// Named backgrounds that map to approved design system gradients
const GRADIENTS: Record<string, string> = {
  'gradient-deep': 'var(--gradient-deep)',
}

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}

function isColorValue(background?: string) {
  return !!background && (background[0] === '#' || background.startsWith('rgb'))
}

/**
 * Whether paper-colored text and the knockout logo are needed on a background.
 * Images and named gradients are treated as dark; colors are measured. An
 * explicit tone ('light' or 'dark') wins, e.g. for a light image shown
 * without a dim overlay.
 */
export function isDarkBackground(background?: string, tone?: string): boolean {
  if (tone === 'light' || tone === 'dark')
    return tone === 'dark'
  if (!background)
    return false
  if (!isColorValue(background))
    return true

  let r: number, g: number, b: number
  if (background[0] === '#') {
    const hex = background.slice(1)
    const full = hex.length === 3 ? hex.split('').map(c => c + c).join('') : hex.slice(0, 6)
    if (!/^[0-9a-f]{6}$/i.test(full))
      return false;
    [r, g, b] = [0, 2, 4].map(i => Number.parseInt(full.slice(i, i + 2), 16))
  } else {
    const channels = background.match(/[\d.]+%?/g)
    if (!channels || channels.length < 3)
      return false;
    // Percentage channels (rgb(100% 0% 0%)) scale to 0-255
    [r, g, b] = channels.slice(0, 3).map(c => c.endsWith('%') ? Number.parseFloat(c) * 2.55 : Number(c))
  }

  // WCAG relative luminance; paper text beats ink text below this midpoint
  const lin = (c: number) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b) < 0.18
}

export function handleBackground(background?: string, dim = false, backgroundSize = 'cover'): CSSProperties {
  const style: CSSProperties = {}

  if (background && GRADIENTS[background]) {
    // It's a named design system gradient
    style.backgroundImage = GRADIENTS[background]
    style.color = 'var(--paper)'
  } else if (isColorValue(background)) {
    // It's a color value
    style.background = background
  } else if (background) {
    // It's an image URL
    style.color = 'white'
    style.backgroundImage = dim
      ? `linear-gradient(#0005, #0008), url(${resolveAssetUrl(background)})`
      : `url("${resolveAssetUrl(background)}")`
    style.backgroundRepeat = 'no-repeat'
    style.backgroundPosition = 'center'
    style.backgroundSize = backgroundSize
  }

  return style
}
