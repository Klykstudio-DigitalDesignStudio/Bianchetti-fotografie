import aboutHomepageImage from '../assets/aboutHomepage.webp'
import { fetchSanityData, isSanityConfigured } from './sanity'

function optimizeImageUrl(url: string, width = 1800) {
    if (!url) {
        return url
    }

    if (url.includes('cdn.sanity.io/images/')) {
        const separator = url.includes('?') ? '&' : '?'
        return `${url}${separator}auto=format&fit=max&w=${width}`
    }

    if (url.includes('images.unsplash.com/')) {
        const separator = url.includes('?') ? '&' : '?'
        return `${url}${separator}auto=format&fit=crop&w=${width}&q=80`
    }

    return url
}

export type HeroCta = {
    label: string
    href: string
}

export type HeroSettings = {
    eyebrow: string
    title: string
    subtitle: string
    description: string
    primaryCta: HeroCta
    secondaryCta: HeroCta
}

export type GallerySettings = {
    eyebrow: string
    title: string
    description: string
    expandLabel: string
    collapseLabel: string
}

export type AboutSettings = {
    imageUrl: string
    imageAlt: string
    title: string
    role: string
    firstParagraph: string
    secondParagraph: string
}

export type MarqueeSettings = {
    lines: string[]
}

export type SocialCard = {
    label: string
    title: string
    description: string
    href: string
}

export type SocialSettings = {
    eyebrow: string
    title: string
    description: string
    cards: SocialCard[]
}

export type ContactCta = {
    eyebrow: string
    title: string
    description: string
    label: string
    href: string
    actionLabel: string
}

export type ContactSettings = {
    eyebrow: string
    title: string
    description: string
    whatsapp: ContactCta
    email: ContactCta
}

export type FooterLink = {
    label: string
    href: string
}

export type FooterSettings = {
    brandName: string
    description: string
    links: FooterLink[]
    backToTopLabel: string
    backToTopHref: string
}

export type AlbumPhoto = {
    _key: string
    title: string
    alt: string
    imageUrl: string
    featuredInHomepage: boolean
    heroOrder?: number
}

export type PhotoAlbum = {
    _id: string
    title: string
    slug: string
    summary: string
    location: string
    coverImageUrl: string
    coverImageAlt: string
    orderRank?: number
    photos: AlbumPhoto[]
}

export type HeroImage = AlbumPhoto & {
    albumSlug: string
    albumTitle: string
}

export type HomepageContent = {
    hero: HeroSettings
    gallery: GallerySettings
    about: AboutSettings
    marquee: MarqueeSettings
    social: SocialSettings
    contact: ContactSettings
    footer: FooterSettings
    albums: PhotoAlbum[]
    featuredImages: HeroImage[]
}

type SanityHomepageResponse = {
    hero?: Partial<HeroSettings>
    gallery?: Partial<GallerySettings>
    about?: Partial<AboutSettings>
    marquee?: Partial<MarqueeSettings>
    social?: Partial<SocialSettings>
    contact?: Partial<ContactSettings>
    footer?: Partial<FooterSettings>
    albums?: Array<Partial<PhotoAlbum>>
}

type SanityAlbumResponse = Partial<PhotoAlbum> | null

export const seedHeroSettings: HeroSettings = {
    eyebrow: 'Fotografia di ritratto, maternita e storie vere',
    title: 'Album fotografici che raccontano persone, emozioni e luce',
    subtitle: 'Ogni cover apre un progetto completo.',
    description:
        'La cliente potra aggiornare titolo, testi, CTA e decidere quali immagini degli album devono comparire nello slider hero della homepage.',
    primaryCta: {
        label: 'Scopri gli album',
        href: '#gallery',
    },
    secondaryCta: {
        label: 'Parliamone',
        href: '#info',
    },
}

export const seedGallerySettings: GallerySettings = {
    eyebrow: 'Album fotografici',
    title: 'Gallery',
    description:
        'Ogni cover apre un album completo. Da Sanity la cliente potra caricare tutte le foto, scegliere la cover e decidere quali immagini segnare come featured per la hero.',
    expandLabel: 'Scopri di più',
    collapseLabel: 'Mostra meno',
}

export const seedAboutSettings: AboutSettings = {
    imageUrl: aboutHomepageImage,
    imageAlt: 'Ritratto di Francesca Bianchetti',
    title: 'Francesca Bianchetti',
    role: 'Fotografa',
    firstParagraph:
        "Ogni scatto nasce dall'ascolto: luce, persone, gesto e atmosfera. Il mio lavoro unisce sensibilita narrativa e cura tecnica per raccontare storie autentiche.",
    secondParagraph:
        'Realizzo servizi fotografici con uno stile elegante ma contemporaneo, costruendo immagini pensate per durare nel tempo e restituire identita a chi ho davanti.',
}

export const seedMarqueeSettings: MarqueeSettings = {
    lines: [
        'Francesca Bianchetti • Dettaglio • Fotografia di Ritratto',
        'Storie Autentiche • Eleganza Contemporanea',
        'Narrazione Visiva • Cura Tecnica • Sensibilita',
        'Galleria • Portfolio • Servizi Fotografici',
    ],
}

export const seedSocialSettings: SocialSettings = {
    eyebrow: 'SEGUIMI',
    title: 'Seguimi sui social',
    description:
        'Qui Francesca potra mostrare i profili social collegati da Sanity, con link aggiornabili dal back office senza toccare il codice.',
    cards: [
        {
            label: 'SOCIAL',
            title: 'Instagram',
            description: 'Portfolio, backstage e nuovi lavori pubblicati con continuita.',
            href: 'https://www.instagram.com/francescabianchetti/',
        },
        {
            label: 'ISPIRAZIONI',
            title: 'Pinterest',
            description: 'Raccolte visive, moodboard e immagini selezionate da esplorare.',
            href: 'https://www.pinterest.com/',
        },
        {
            label: 'PROGETTI',
            title: 'Behance',
            description: 'Progetti completi e narrazioni visive presentate in modo piu editoriale.',
            href: 'https://www.behance.net/',
        },
    ],
}

export const seedContactSettings: ContactSettings = {
    eyebrow: 'CONTATTAMI',
    title: 'Parliamone',
    description:
        'Se vuoi chiedere informazioni, raccontarmi il tuo progetto o prenotare uno shooting, puoi contattarmi direttamente.',
    whatsapp: {
        eyebrow: 'CONTATTAMI SU',
        title: 'WhatsApp',
        description: 'Risposta rapida per info e disponibilita',
        label: 'Apri chat',
        href: 'https://wa.me/393331234567',
        actionLabel: 'Apri chat',
    },
    email: {
        eyebrow: 'OPPURE INVIAMI UNA',
        title: 'Email',
        description: 'Per richieste dettagliate e collaborazioni',
        label: 'Apri mail',
        href: 'mailto:francesca@example.com',
        actionLabel: 'Apri mail',
    },
}

export const seedFooterSettings: FooterSettings = {
    brandName: 'Francesca Bianchetti',
    description: 'Fotografia di ritratto, storie e identita visive.',
    links: [
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/francescabianchetti/',
        },
        {
            label: 'Email',
            href: 'mailto:francesca@example.com',
        },
    ],
    backToTopLabel: 'Torna su',
    backToTopHref: '#hero-section',
}

export const seedAlbums: PhotoAlbum[] = [
    {
        _id: 'album-maternita-luce',
        title: 'Maternita in controluce',
        slug: 'maternita-in-controluce',
        summary: 'Un album morbido e luminoso, costruito tra gesti lenti, attese e dettagli delicati.',
        location: 'Como',
        coverImageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
        coverImageAlt: 'Cover album maternita in controluce',
        orderRank: 1,
        photos: [
            {
                _key: 'maternita-1',
                title: 'Ritratto frontale',
                alt: 'Ritratto maternita in una stanza luminosa',
                imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
                featuredInHomepage: true,
                heroOrder: 1,
            },
            {
                _key: 'maternita-2',
                title: 'Mani sul ventre',
                alt: 'Dettaglio delle mani sul ventre in gravidanza',
                imageUrl: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
                featuredInHomepage: false,
            },
            {
                _key: 'maternita-3',
                title: 'Profilo vicino alla finestra',
                alt: 'Profilo in controluce vicino a una finestra',
                imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
                featuredInHomepage: true,
                heroOrder: 4,
            },
        ],
    },
    {
        _id: 'album-famiglia-casa',
        title: 'Famiglia a casa',
        slug: 'famiglia-a-casa',
        summary: 'Una serie spontanea, intima e quotidiana pensata per conservare movimenti veri.',
        location: 'Milano',
        coverImageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
        coverImageAlt: 'Cover album famiglia a casa',
        orderRank: 2,
        photos: [
            {
                _key: 'famiglia-1',
                title: 'Abbraccio sul divano',
                alt: 'Famiglia seduta insieme sul divano',
                imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
                featuredInHomepage: true,
                heroOrder: 2,
            },
            {
                _key: 'famiglia-2',
                title: 'Gioco sul tappeto',
                alt: 'Genitori e bambini mentre giocano sul tappeto',
                imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1200&q=80',
                featuredInHomepage: false,
            },
            {
                _key: 'famiglia-3',
                title: 'Ritratto naturale',
                alt: 'Ritratto di famiglia con luce naturale',
                imageUrl: 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&w=1200&q=80',
                featuredInHomepage: false,
            },
        ],
    },
    {
        _id: 'album-brand-editoriale',
        title: 'Branding editoriale',
        slug: 'branding-editoriale',
        summary: 'Un racconto fotografico pensato per professioniste, brand personali e contenuti coordinati.',
        location: 'Bologna',
        coverImageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
        coverImageAlt: 'Cover album branding editoriale',
        orderRank: 3,
        photos: [
            {
                _key: 'branding-1',
                title: 'Ritratto editoriale',
                alt: 'Ritratto editoriale in studio',
                imageUrl: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80',
                featuredInHomepage: true,
                heroOrder: 3,
            },
            {
                _key: 'branding-2',
                title: 'Dettaglio prodotto',
                alt: 'Dettaglio mani e materiali del brand',
                imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
                featuredInHomepage: false,
            },
            {
                _key: 'branding-3',
                title: 'Scena di lavoro',
                alt: 'Professionista al lavoro davanti a una scrivania',
                imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
                featuredInHomepage: false,
            },
        ],
    },
    {
        _id: 'album-coppia-lago',
        title: 'Coppia al lago',
        slug: 'coppia-al-lago',
        summary: 'Un servizio essenziale e arioso, costruito tra acqua, silenzi e movimenti naturali.',
        location: 'Lago di Garda',
        coverImageUrl: 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&w=1200&q=80',
        coverImageAlt: 'Cover album coppia al lago',
        orderRank: 4,
        photos: [
            {
                _key: 'coppia-1',
                title: 'Passeggiata sul molo',
                alt: 'Coppia che cammina sul molo al tramonto',
                imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
                featuredInHomepage: false,
            },
        ],
    },
    {
        _id: 'album-neonato-casa',
        title: 'Neonato a casa',
        slug: 'neonato-a-casa',
        summary: 'Un racconto intimo fatto di dettagli, mani, sonno leggero e ambienti vissuti.',
        location: 'Parma',
        coverImageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1200&q=80',
        coverImageAlt: 'Cover album neonato a casa',
        orderRank: 5,
        photos: [
            {
                _key: 'neonato-1',
                title: 'Dettaglio mani',
                alt: 'Dettaglio delle mani di un neonato',
                imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
                featuredInHomepage: false,
            },
        ],
    },
    {
        _id: 'album-ritratti-studio',
        title: 'Ritratti in studio',
        slug: 'ritratti-in-studio',
        summary: 'Una serie pulita e diretta, pensata per enfatizzare presenza, sguardo e personalita.',
        location: 'Studio, Verona',
        coverImageUrl: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80',
        coverImageAlt: 'Cover album ritratti in studio',
        orderRank: 6,
        photos: [
            {
                _key: 'studio-1',
                title: 'Ritratto neutro',
                alt: 'Ritratto in studio con sfondo neutro',
                imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
                featuredInHomepage: false,
            },
        ],
    },
    {
        _id: 'album-evento-intimo',
        title: 'Evento intimo',
        slug: 'evento-intimo',
        summary: 'Piccoli eventi, atmosfere raccolte e immagini che tengono insieme persone e spazio.',
        location: 'Modena',
        coverImageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
        coverImageAlt: 'Cover album evento intimo',
        orderRank: 7,
        photos: [
            {
                _key: 'evento-1',
                title: 'Brindisi serale',
                alt: 'Piccolo brindisi durante un evento serale',
                imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
                featuredInHomepage: false,
            },
        ],
    },
]

const homepageQuery = `
{
  "hero": *[_type == "heroSettings" && _id == "heroSettings"][0]{
    eyebrow,
    title,
    subtitle,
    description,
    primaryCta,
    secondaryCta
  },
  "gallery": *[_type == "heroSettings" && _id == "heroSettings"][0]{
    "eyebrow": galleryEyebrow,
    "title": galleryTitle,
    "description": galleryDescription,
    "expandLabel": galleryExpandLabel,
    "collapseLabel": galleryCollapseLabel
  },
  "about": *[_type == "heroSettings" && _id == "heroSettings"][0]{
    "imageUrl": aboutImage.asset->url,
    "imageAlt": coalesce(aboutImageAlt, aboutTitle, "Ritratto about"),
    "title": aboutTitle,
    "role": aboutRole,
    "firstParagraph": aboutFirstParagraph,
    "secondParagraph": aboutSecondParagraph
  },
  "marquee": *[_type == "heroSettings" && _id == "heroSettings"][0]{
    "lines": [
      marqueeLine1,
      marqueeLine2,
      marqueeLine3,
      marqueeLine4
    ]
  },
  "social": *[_type == "heroSettings" && _id == "heroSettings"][0]{
    "eyebrow": socialEyebrow,
    "title": socialTitle,
    "description": socialDescription,
    "cards": [
      {
        "label": socialCard1Label,
        "title": socialCard1Title,
        "description": socialCard1Description,
        "href": socialCard1Href
      },
      {
        "label": socialCard2Label,
        "title": socialCard2Title,
        "description": socialCard2Description,
        "href": socialCard2Href
      },
      {
        "label": socialCard3Label,
        "title": socialCard3Title,
        "description": socialCard3Description,
        "href": socialCard3Href
      }
    ]
  },
  "contact": *[_type == "heroSettings" && _id == "heroSettings"][0]{
    "eyebrow": contactEyebrow,
    "title": contactTitle,
    "description": contactDescription,
    "whatsapp": {
      "eyebrow": whatsappEyebrow,
      "title": whatsappTitle,
      "description": whatsappDescription,
      "label": whatsappLabel,
      "href": whatsappHref,
      "actionLabel": whatsappActionLabel
    },
    "email": {
      "eyebrow": emailEyebrow,
      "title": emailTitle,
      "description": emailDescription,
      "label": emailLabel,
      "href": emailHref,
      "actionLabel": emailActionLabel
    }
  },
  "footer": *[_type == "heroSettings" && _id == "heroSettings"][0]{
    "brandName": footerBrandName,
    "description": footerDescription,
    "links": [
      {
        "label": footerLink1Label,
        "href": footerLink1Href
      },
      {
        "label": footerLink2Label,
        "href": footerLink2Href
      }
    ],
    "backToTopLabel": footerBackToTopLabel,
    "backToTopHref": footerBackToTopHref
  },
  "albums": *[_type == "photoAlbum"] | order(coalesce(orderRank, 999) asc, _createdAt desc)[]{
    _id,
    title,
    "slug": slug.current,
    summary,
    location,
    "coverImageUrl": coverImage.asset->url,
    "coverImageAlt": coalesce(coverImageAlt, title),
    orderRank,
    photos[]{
      _key,
      title,
      "alt": coalesce(alt, title, "Foto album"),
      "imageUrl": image.asset->url,
      featuredInHomepage,
      heroOrder
    }
  }
}
`

function albumQuery(slug: string) {
    return `
*[_type == "photoAlbum" && slug.current == "${slug}"][0]{
  _id,
  title,
  "slug": slug.current,
  summary,
  location,
  "coverImageUrl": coverImage.asset->url,
  "coverImageAlt": coalesce(coverImageAlt, title),
  orderRank,
  photos[]{
    _key,
    title,
    "alt": coalesce(alt, title, "Foto album"),
    "imageUrl": image.asset->url,
    featuredInHomepage,
    heroOrder
  }
}
`
}

function normalizeCta(value: Partial<HeroCta> | undefined, fallback: HeroCta): HeroCta {
    return {
        label: value?.label?.trim() || fallback.label,
        href: value?.href?.trim() || fallback.href,
    }
}

function normalizeHero(value: Partial<HeroSettings> | undefined): HeroSettings {
    return {
        eyebrow: value?.eyebrow?.trim() || seedHeroSettings.eyebrow,
        title: value?.title?.trim() || seedHeroSettings.title,
        subtitle: value?.subtitle?.trim() || seedHeroSettings.subtitle,
        description: value?.description?.trim() || seedHeroSettings.description,
        primaryCta: normalizeCta(value?.primaryCta, seedHeroSettings.primaryCta),
        secondaryCta: normalizeCta(value?.secondaryCta, seedHeroSettings.secondaryCta),
    }
}

function normalizeGallery(value: Partial<GallerySettings> | undefined): GallerySettings {
    return {
        eyebrow: value?.eyebrow?.trim() || seedGallerySettings.eyebrow,
        title: value?.title?.trim() || seedGallerySettings.title,
        description: value?.description?.trim() || seedGallerySettings.description,
        expandLabel: value?.expandLabel?.trim() || seedGallerySettings.expandLabel,
        collapseLabel: value?.collapseLabel?.trim() || seedGallerySettings.collapseLabel,
    }
}

function normalizeAbout(value: Partial<AboutSettings> | undefined): AboutSettings {
    return {
        imageUrl: optimizeImageUrl(value?.imageUrl?.trim() || seedAboutSettings.imageUrl, 1400),
        imageAlt: value?.imageAlt?.trim() || seedAboutSettings.imageAlt,
        title: value?.title?.trim() || seedAboutSettings.title,
        role: value?.role?.trim() || seedAboutSettings.role,
        firstParagraph: value?.firstParagraph?.trim() || seedAboutSettings.firstParagraph,
        secondParagraph: value?.secondParagraph?.trim() || seedAboutSettings.secondParagraph,
    }
}

function normalizeMarquee(value: Partial<MarqueeSettings> | undefined): MarqueeSettings {
    const lines = (value?.lines || []).map((line) => line?.trim() || '').filter(Boolean)

    return {
        lines: lines.length === 4 ? lines : seedMarqueeSettings.lines,
    }
}

function normalizeSocialCard(value: Partial<SocialCard> | undefined, fallback: SocialCard): SocialCard {
    return {
        label: value?.label?.trim() || fallback.label,
        title: value?.title?.trim() || fallback.title,
        description: value?.description?.trim() || fallback.description,
        href: value?.href?.trim() || fallback.href,
    }
}

function normalizeSocial(value: Partial<SocialSettings> | undefined): SocialSettings {
    const rawCards = value?.cards || []
    const hasConfiguredCards = rawCards.some((card) => {
        return Boolean(card?.title?.trim() && card?.href?.trim())
    })

    const cards = hasConfiguredCards
        ? rawCards
            .slice(0, 3)
            .filter((card) => Boolean(card?.title?.trim() && card?.href?.trim()))
            .map((card, index) => normalizeSocialCard(card, seedSocialSettings.cards[index] || seedSocialSettings.cards[0]))
        : seedSocialSettings.cards

    return {
        eyebrow: value?.eyebrow?.trim() || seedSocialSettings.eyebrow,
        title: value?.title?.trim() || seedSocialSettings.title,
        description: value?.description?.trim() || seedSocialSettings.description,
        cards,
    }
}

function normalizeContactCta(value: Partial<ContactCta> | undefined, fallback: ContactCta): ContactCta {
    return {
        eyebrow: value?.eyebrow?.trim() || fallback.eyebrow,
        title: value?.title?.trim() || fallback.title,
        description: value?.description?.trim() || fallback.description,
        label: value?.label?.trim() || fallback.label,
        href: value?.href?.trim() || fallback.href,
        actionLabel: value?.actionLabel?.trim() || fallback.actionLabel,
    }
}

function normalizeContact(value: Partial<ContactSettings> | undefined): ContactSettings {
    return {
        eyebrow: value?.eyebrow?.trim() || seedContactSettings.eyebrow,
        title: value?.title?.trim() || seedContactSettings.title,
        description: value?.description?.trim() || seedContactSettings.description,
        whatsapp: normalizeContactCta(value?.whatsapp, seedContactSettings.whatsapp),
        email: normalizeContactCta(value?.email, seedContactSettings.email),
    }
}

function normalizeFooterLink(value: Partial<FooterLink> | undefined, fallback: FooterLink): FooterLink {
    return {
        label: value?.label?.trim() || fallback.label,
        href: value?.href?.trim() || fallback.href,
    }
}

function normalizeFooter(value: Partial<FooterSettings> | undefined): FooterSettings {
    const rawLinks = value?.links || []
    const hasConfiguredLinks = rawLinks.some((link) => Boolean(link?.label?.trim() && link?.href?.trim()))

    const links = hasConfiguredLinks
        ? rawLinks
            .slice(0, 2)
            .filter((link) => Boolean(link?.label?.trim() && link?.href?.trim()))
            .map((link, index) => normalizeFooterLink(link, seedFooterSettings.links[index] || seedFooterSettings.links[0]))
        : seedFooterSettings.links

    return {
        brandName: value?.brandName?.trim() || seedFooterSettings.brandName,
        description: value?.description?.trim() || seedFooterSettings.description,
        links,
        backToTopLabel: value?.backToTopLabel?.trim() || seedFooterSettings.backToTopLabel,
        backToTopHref: value?.backToTopHref?.trim() || seedFooterSettings.backToTopHref,
    }
}

function normalizePhotos(
    photos: Array<Partial<AlbumPhoto>> | undefined,
    fallbackPhotos: AlbumPhoto[]
): AlbumPhoto[] {
    const normalizedPhotos = (photos || [])
        .filter((photo): photo is Partial<AlbumPhoto> & { imageUrl: string } => Boolean(photo?.imageUrl))
        .map((photo, index) => ({
            _key: photo._key || `photo-${index + 1}`,
            title: photo.title?.trim() || `Foto ${index + 1}`,
            alt: photo.alt?.trim() || photo.title?.trim() || `Foto ${index + 1}`,
            imageUrl: optimizeImageUrl(photo.imageUrl, 1800),
            featuredInHomepage: Boolean(photo.featuredInHomepage),
            heroOrder: typeof photo.heroOrder === 'number' ? photo.heroOrder : undefined,
        }))

    return normalizedPhotos.length ? normalizedPhotos : fallbackPhotos
}

function normalizeAlbums(albums: Array<Partial<PhotoAlbum>> | undefined, fallbackAlbums: PhotoAlbum[]): PhotoAlbum[] {
    const normalizedAlbums = (albums || [])
        .filter((album): album is Partial<PhotoAlbum> & { slug: string; coverImageUrl: string } => {
            return Boolean(album?.slug && album?.coverImageUrl)
        })
        .map((album, index) => {
            const fallbackAlbum = fallbackAlbums[index]

            return {
                _id: album._id || fallbackAlbum?._id || `album-${index + 1}`,
                title: album.title?.trim() || fallbackAlbum?.title || `Album ${index + 1}`,
                slug: album.slug,
                summary: album.summary?.trim() || fallbackAlbum?.summary || '',
                location: album.location?.trim() || fallbackAlbum?.location || '',
                coverImageUrl: optimizeImageUrl(album.coverImageUrl, 1800),
                coverImageAlt: album.coverImageAlt?.trim() || album.title?.trim() || fallbackAlbum?.coverImageAlt || `Cover album ${index + 1}`,
                orderRank: typeof album.orderRank === 'number' ? album.orderRank : fallbackAlbum?.orderRank,
                photos: normalizePhotos(album.photos, fallbackAlbum?.photos || []),
            }
        })

    return normalizedAlbums.length ? normalizedAlbums : fallbackAlbums
}

function getFeaturedImages(albums: PhotoAlbum[]): HeroImage[] {
    return albums
        .flatMap((album) =>
            album.photos
                .filter((photo) => photo.featuredInHomepage)
                .map((photo) => ({
                    ...photo,
                    albumSlug: album.slug,
                    albumTitle: album.title,
                }))
        )
        .sort((first, second) => {
            const firstOrder = first.heroOrder ?? 999
            const secondOrder = second.heroOrder ?? 999

            return firstOrder - secondOrder
        })
}

function buildHomepageContent(
    hero: HeroSettings,
    gallery: GallerySettings,
    about: AboutSettings,
    marquee: MarqueeSettings,
    social: SocialSettings,
    contact: ContactSettings,
    footer: FooterSettings,
    albums: PhotoAlbum[]
): HomepageContent {
    const featuredImages = getFeaturedImages(albums)

    return {
        hero,
        gallery,
        about,
        marquee,
        social,
        contact,
        footer,
        albums,
        featuredImages: featuredImages.length ? featuredImages : getFeaturedImages(seedAlbums),
    }
}

export async function getHomepageContent(): Promise<HomepageContent> {
    if (!isSanityConfigured) {
        return buildHomepageContent(
            seedHeroSettings,
            seedGallerySettings,
            seedAboutSettings,
            seedMarqueeSettings,
            seedSocialSettings,
            seedContactSettings,
            seedFooterSettings,
            seedAlbums
        )
    }

    try {
        const response = await fetchSanityData<SanityHomepageResponse>(homepageQuery)
        const albums = normalizeAlbums(response.albums, seedAlbums)
        const hero = normalizeHero(response.hero)
        const gallery = normalizeGallery(response.gallery)
        const about = normalizeAbout(response.about)
        const marquee = normalizeMarquee(response.marquee)
        const social = normalizeSocial(response.social)
        const contact = normalizeContact(response.contact)
        const footer = normalizeFooter(response.footer)

        return buildHomepageContent(hero, gallery, about, marquee, social, contact, footer, albums)
    } catch (error) {
        console.error('Unable to load homepage content from Sanity.', error)
        return buildHomepageContent(
            seedHeroSettings,
            seedGallerySettings,
            seedAboutSettings,
            seedMarqueeSettings,
            seedSocialSettings,
            seedContactSettings,
            seedFooterSettings,
            seedAlbums
        )
    }
}

export async function getAlbumBySlug(slug: string): Promise<PhotoAlbum | null> {
    if (!isSanityConfigured) {
        return seedAlbums.find((album) => album.slug === slug) || null
    }

    try {
        const response = await fetchSanityData<SanityAlbumResponse>(albumQuery(slug))

        if (!response?.slug || !response.coverImageUrl) {
            return seedAlbums.find((album) => album.slug === slug) || null
        }

        return normalizeAlbums([response], seedAlbums).find((album) => album.slug === slug) || null
    } catch (error) {
        console.error(`Unable to load album "${slug}" from Sanity.`, error)
        return seedAlbums.find((album) => album.slug === slug) || null
    }
}
