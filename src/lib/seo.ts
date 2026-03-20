import { buildPageTitle, siteDefaultDescription, toAbsoluteUrl } from './site'

type SeoPayload = {
    title?: string
    description?: string
    path?: string
    image?: string
    type?: 'website' | 'article'
    noindex?: boolean
    jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>
}

const dynamicMetaSelector = 'meta[data-seo-managed="true"]'
const canonicalId = 'dynamic-canonical'
const jsonLdId = 'dynamic-jsonld'

function normalizeUrl(url: string) {
    if (/^https?:\/\//i.test(url)) {
        return url
    }

    return toAbsoluteUrl(url)
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
    let tag = document.head.querySelector(selector) as HTMLMetaElement | null

    if (!tag) {
        tag = document.createElement('meta')
        tag.dataset.seoManaged = 'true'
        document.head.appendChild(tag)
    }

    Object.entries(attributes).forEach(([key, value]) => {
        tag?.setAttribute(key, value)
    })
}

function upsertCanonical(href: string) {
    let link = document.head.querySelector(`#${canonicalId}`) as HTMLLinkElement | null

    if (!link) {
        link = document.createElement('link')
        link.id = canonicalId
        link.rel = 'canonical'
        document.head.appendChild(link)
    }

    link.href = href
}

function upsertJsonLd(jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>) {
    const existing = document.head.querySelector(`#${jsonLdId}`)

    if (!jsonLd) {
        existing?.remove()
        return
    }

    const script = existing || document.createElement('script')
    script.id = jsonLdId
    script.setAttribute('type', 'application/ld+json')
    script.textContent = JSON.stringify(jsonLd)

    if (!existing) {
        document.head.appendChild(script)
    }
}

function removeMeta(selector: string) {
    document.head.querySelector(selector)?.remove()
}

export function resetSeoMeta() {
    document.head.querySelectorAll(dynamicMetaSelector).forEach((tag) => tag.remove())
    document.head.querySelector(`#${canonicalId}`)?.remove()
    document.head.querySelector(`#${jsonLdId}`)?.remove()
}

export function applySeo(payload: SeoPayload) {
    const title = buildPageTitle(payload.title)
    const description = payload.description?.trim() || siteDefaultDescription
    const canonicalUrl = toAbsoluteUrl(payload.path || '/')
    const imageUrl = payload.image ? normalizeUrl(payload.image) : ''
    const robots = payload.noindex ? 'noindex, nofollow' : 'index, follow'
    const type = payload.type || 'website'

    document.title = title

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robots })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: imageUrl ? 'summary_large_image' : 'summary' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })

    if (imageUrl) {
        upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
        upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })
    } else {
        removeMeta('meta[property="og:image"]')
        removeMeta('meta[name="twitter:image"]')
    }

    upsertCanonical(canonicalUrl)
    upsertJsonLd(payload.jsonLd)
}
