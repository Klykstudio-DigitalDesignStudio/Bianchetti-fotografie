const webpOnlyMessage = 'Per ora carica solo immagini in formato .webp, cosi evitiamo spreco di spazio.'

function validateWebpImage(value: { asset?: { _ref?: string } } | undefined) {
    if (!value?.asset?._ref) {
        return true
    }

    return value.asset._ref.endsWith('-webp') ? true : webpOnlyMessage
}

export default {
    name: 'photoAlbum',
    title: 'Album fotografici',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titolo album',
            type: 'string',
            validation: (Rule: { required: () => unknown }) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: { required: () => unknown }) => Rule.required(),
        },
        {
            name: 'summary',
            title: 'Descrizione breve',
            type: 'text',
            rows: 4,
        },
        {
            name: 'location',
            title: 'Luogo',
            type: 'string',
            description: 'Luogo principale in cui e stato realizzato l album.',
        },
        {
            name: 'coverImage',
            title: 'Cover album',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Carica una cover gia ottimizzata in formato WebP.',
            validation: (Rule: { required: () => { custom: (fn: (value: { asset?: { _ref?: string } } | undefined) => true | string) => unknown } }) =>
                Rule.required().custom(validateWebpImage),
        },
        {
            name: 'coverImageAlt',
            title: 'Alt cover album',
            type: 'string',
        },
        {
            name: 'orderRank',
            title: 'Ordine in gallery',
            type: 'number',
            description: 'Gli album con numero piu basso compaiono prima nella griglia.',
        },
        {
            name: 'photos',
            title: 'Foto dell album',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Titolo interno',
                            type: 'string',
                        },
                        {
                            name: 'alt',
                            title: 'Testo alternativo',
                            type: 'string',
                        },
                        {
                            name: 'image',
                            title: 'Immagine',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                            description: 'Carica solo immagini WebP.',
                            validation: (Rule: { required: () => { custom: (fn: (value: { asset?: { _ref?: string } } | undefined) => true | string) => unknown } }) =>
                                Rule.required().custom(validateWebpImage),
                        },
                        {
                            name: 'featuredInHomepage',
                            title: 'Featured in homepage',
                            type: 'boolean',
                            initialValue: false,
                        },
                        {
                            name: 'heroOrder',
                            title: 'Ordine nello slider hero',
                            type: 'number',
                            description: 'Usato solo se la foto e featured in homepage.',
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            media: 'image',
                            subtitle: 'alt',
                        },
                    },
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'coverImage',
            subtitle: 'summary',
        },
    },
}
