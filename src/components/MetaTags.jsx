import { useEffect } from 'react'
import {
  SEO,
  getPageSeo,
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebsiteSchema,
} from '../data/seo'

const MetaTags = ({
  page,
  title,
  description,
  keywords,
  path,
  image,
  imageAlt,
  noIndex = false,
  includeSchema = true,
}) => {
  useEffect(() => {
    const pageData = page ? getPageSeo(page) : null

    const metaTitle = title || pageData?.fullTitle || `${SEO.targetKeyword} | ${SEO.siteName}`
    const metaDescription =
      description ||
      pageData?.description ||
      `Prakash N Electricals — ${SEO.targetKeyword}. Wholesale wires, cables, MCB, switches & industrial electrical components.`
    const metaKeywords = keywords || pageData?.keywords || SEO.targetKeyword
    const metaPath = path || pageData?.path || '/'
    const canonicalUrl = `${SEO.siteUrl}${metaPath === '/' ? '' : metaPath}`
    const ogImage = image || SEO.defaultImage
    const ogImageAlt = imageAlt || SEO.defaultImageAlt

    document.title = metaTitle

    const setMeta = (name, content, { property = false, id = null } = {}) => {
      if (!content) return
      const selector = id
        ? `#${id}`
        : property
          ? `meta[property="${name}"]`
          : `meta[name="${name}"]`
      let element = document.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        if (id) element.id = id
        else if (property) element.setAttribute('property', name)
        else element.setAttribute('name', name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    const setLink = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`)
      if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', rel)
        document.head.appendChild(element)
      }
      element.setAttribute('href', href)
    }

    // Standard meta
    setMeta('description', metaDescription)
    setMeta('keywords', metaKeywords)
    setMeta('author', SEO.siteName)
    setMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')
    setMeta('googlebot', noIndex ? 'noindex, nofollow' : 'index, follow')
    setMeta('language', SEO.language)
    setMeta('geo.region', SEO.geo.region)
    setMeta('geo.placename', SEO.geo.placename)
    setMeta('geo.position', SEO.geo.position)
    setMeta('ICBM', SEO.geo.position.replace(';', ', '))

    // Open Graph
    setMeta('og:type', 'website', { property: true })
    setMeta('og:site_name', SEO.siteName, { property: true })
    setMeta('og:title', metaTitle, { property: true })
    setMeta('og:description', metaDescription, { property: true })
    setMeta('og:url', canonicalUrl, { property: true })
    setMeta('og:image', ogImage, { property: true })
    setMeta('og:image:alt', ogImageAlt, { property: true })
    setMeta('og:image:width', '1200', { property: true })
    setMeta('og:image:height', '630', { property: true })
    setMeta('og:locale', SEO.locale, { property: true })

    // Twitter Card
    setMeta('twitter:card', SEO.twitterCard)
    setMeta('twitter:site', SEO.twitterSite)
    setMeta('twitter:title', metaTitle)
    setMeta('twitter:description', metaDescription)
    setMeta('twitter:image', ogImage)
    setMeta('twitter:image:alt', ogImageAlt)

    // Canonical & alternates
    setLink('canonical', canonicalUrl)

    // JSON-LD structured data
    if (includeSchema) {
      const schemas = [getLocalBusinessSchema(), getOrganizationSchema(), getWebsiteSchema()]
      let script = document.getElementById('seo-jsonld')
      if (!script) {
        script = document.createElement('script')
        script.id = 'seo-jsonld'
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(schemas)
    }
  }, [page, title, description, keywords, path, image, imageAlt, noIndex, includeSchema])

  return null
}

export default MetaTags
