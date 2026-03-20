import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const projectRoot = process.cwd()
const publicDir = resolve(projectRoot, 'public')
const contentFile = resolve(projectRoot, 'src/lib/content.ts')
const siteUrl = (process.env.VITE_SITE_URL || 'https://example.com').trim().replace(/\/+$/, '')

const contentSource = readFileSync(contentFile, 'utf8')
const slugMatches = [...contentSource.matchAll(/slug:\s*'([^']+)'/g)]
const albumSlugs = [...new Set(slugMatches.map((match) => match[1]))]

const urls = ['/', ...albumSlugs.map((slug) => `/album/${slug}`)]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
        (url) => `  <url>
    <loc>${siteUrl}${url}</loc>
    <changefreq>${url === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

mkdirSync(publicDir, { recursive: true })
writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap, 'utf8')
writeFileSync(resolve(publicDir, 'robots.txt'), robots, 'utf8')
