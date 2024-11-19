export function getSlugFromParams(slug: string[] | string | undefined) {
  if (!slug) return undefined
  if (typeof slug === 'string') return slug
  return slug[slug.length - 1]
}
