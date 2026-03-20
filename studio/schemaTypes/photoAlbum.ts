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
            validation: (Rule: { required: () => unknown }) => Rule.required(),
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
                            validation: (Rule: { required: () => unknown }) => Rule.required(),
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
