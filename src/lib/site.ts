const rawSiteUrl = import.meta.env.VITE_SITE_URL?.trim()

export const siteName = import.meta.env.VITE_SITE_NAME?.trim() || 'Francesca Bianchetti'
export const siteTitleSuffix = 'Francesca Bianchetti Fotografia'
export const siteDefaultDescription =
    'Portfolio fotografico di Francesca Bianchetti tra ritratti, maternita, famiglia e storie autentiche.'

export function getSiteUrl() {
    if (rawSiteUrl) {
        return rawSiteUrl.replace(/\/+$/, '')
    }

    if (typeof window !== 'undefined') {
        return window.location.origin.replace(/\/+$/, '')
    }

    return 'https://example.com'
}

export function toAbsoluteUrl(path = '/') {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    return `${getSiteUrl()}${normalizedPath}`
}

export function buildPageTitle(title?: string) {
    const cleanTitle = title?.trim()

    if (!cleanTitle) {
        return siteTitleSuffix
    }

    if (cleanTitle === siteTitleSuffix) {
        return cleanTitle
    }

    return `${cleanTitle} | ${siteTitleSuffix}`
}

