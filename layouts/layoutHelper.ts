import type { CSSProperties } from 'vue'

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}

export function handleBackground(background?: string, dim = false, backgroundSize = 'cover'): CSSProperties {
  const isColor = background && (background[0] === '#' || background.startsWith('rgb'))

  const style: CSSProperties = {}

  if (isColor) {
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
