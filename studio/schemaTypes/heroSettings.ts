const webpOnlyMessage = 'Per ora carica solo immagini in formato .webp, cosi evitiamo spreco di spazio.'

function validateWebpImage(value: { asset?: { _ref?: string } } | undefined) {
    if (!value?.asset?._ref) {
        return true
    }

    return value.asset._ref.endsWith('-webp') ? true : webpOnlyMessage
}

export default {
    name: 'heroSettings',
    title: 'Hero Homepage',
    type: 'document',
    fields: [
        {
            name: 'eyebrow',
            title: 'Eyebrow',
            type: 'string',
            validation: (Rule: { required: () => unknown }) => Rule.required(),
        },
        {
            name: 'title',
            title: 'Titolo',
            type: 'string',
            validation: (Rule: { required: () => unknown }) => Rule.required(),
        },
        {
            name: 'subtitle',
            title: 'Sottotitolo',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Descrizione',
            type: 'text',
            rows: 4,
        },
        {
            name: 'primaryCta',
            title: 'CTA principale',
            type: 'object',
            fields: [
                {
                    name: 'label',
                    title: 'Etichetta bottone',
                    type: 'string',
                    validation: (Rule: { required: () => unknown }) => Rule.required(),
                },
                {
                    name: 'href',
                    title: 'Link bottone',
                    type: 'string',
                    validation: (Rule: { required: () => unknown }) => Rule.required(),
                },
            ],
        },
        {
            name: 'secondaryCta',
            title: 'CTA secondaria',
            type: 'object',
            fields: [
                {
                    name: 'label',
                    title: 'Etichetta bottone',
                    type: 'string',
                    validation: (Rule: { required: () => unknown }) => Rule.required(),
                },
                {
                    name: 'href',
                    title: 'Link bottone',
                    type: 'string',
                    validation: (Rule: { required: () => unknown }) => Rule.required(),
                },
            ],
        },
        {
            name: 'galleryEyebrow',
            title: 'Gallery eyebrow',
            type: 'string',
        },
        {
            name: 'galleryTitle',
            title: 'Gallery titolo',
            type: 'string',
        },
        {
            name: 'galleryDescription',
            title: 'Gallery descrizione',
            type: 'text',
            rows: 4,
        },
        {
            name: 'galleryExpandLabel',
            title: 'Label bottone scopri di piu',
            type: 'string',
        },
        {
            name: 'galleryCollapseLabel',
            title: 'Label bottone mostra meno',
            type: 'string',
        },
        {
            name: 'aboutImage',
            title: 'About immagine',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Carica solo una immagine WebP per la sezione about.',
            validation: (Rule: { custom: (fn: (value: { asset?: { _ref?: string } } | undefined) => true | string) => unknown }) =>
                Rule.custom(validateWebpImage),
        },
        {
            name: 'aboutImageAlt',
            title: 'About immagine alt',
            type: 'string',
        },
        {
            name: 'aboutTitle',
            title: 'About titolo',
            type: 'string',
        },
        {
            name: 'aboutRole',
            title: 'About ruolo',
            type: 'string',
        },
        {
            name: 'aboutFirstParagraph',
            title: 'About primo paragrafo',
            type: 'text',
            rows: 4,
        },
        {
            name: 'aboutSecondParagraph',
            title: 'About secondo paragrafo',
            type: 'text',
            rows: 4,
        },
        {
            name: 'marqueeLine1',
            title: 'Linea rotante 1',
            type: 'string',
        },
        {
            name: 'marqueeLine2',
            title: 'Linea rotante 2',
            type: 'string',
        },
        {
            name: 'marqueeLine3',
            title: 'Linea rotante 3',
            type: 'string',
        },
        {
            name: 'marqueeLine4',
            title: 'Linea rotante 4',
            type: 'string',
        },
        {
            name: 'socialEyebrow',
            title: 'Social eyebrow',
            type: 'string',
        },
        {
            name: 'socialTitle',
            title: 'Social titolo',
            type: 'string',
        },
        {
            name: 'socialDescription',
            title: 'Social descrizione',
            type: 'text',
            rows: 4,
        },
        {
            name: 'socialCard1Label',
            title: 'Social card 1 label',
            type: 'string',
        },
        {
            name: 'socialCard1Title',
            title: 'Social card 1 titolo',
            type: 'string',
        },
        {
            name: 'socialCard1Description',
            title: 'Social card 1 descrizione',
            type: 'text',
            rows: 3,
        },
        {
            name: 'socialCard1Href',
            title: 'Social card 1 link',
            type: 'string',
        },
        {
            name: 'socialCard2Label',
            title: 'Social card 2 label',
            type: 'string',
        },
        {
            name: 'socialCard2Title',
            title: 'Social card 2 titolo',
            type: 'string',
        },
        {
            name: 'socialCard2Description',
            title: 'Social card 2 descrizione',
            type: 'text',
            rows: 3,
        },
        {
            name: 'socialCard2Href',
            title: 'Social card 2 link',
            type: 'string',
        },
        {
            name: 'socialCard3Label',
            title: 'Social card 3 label',
            type: 'string',
        },
        {
            name: 'socialCard3Title',
            title: 'Social card 3 titolo',
            type: 'string',
        },
        {
            name: 'socialCard3Description',
            title: 'Social card 3 descrizione',
            type: 'text',
            rows: 3,
        },
        {
            name: 'socialCard3Href',
            title: 'Social card 3 link',
            type: 'string',
        },
        {
            name: 'contactEyebrow',
            title: 'Contact eyebrow',
            type: 'string',
        },
        {
            name: 'contactTitle',
            title: 'Contact titolo',
            type: 'string',
        },
        {
            name: 'contactDescription',
            title: 'Contact descrizione',
            type: 'text',
            rows: 4,
        },
        {
            name: 'whatsappEyebrow',
            title: 'WhatsApp eyebrow',
            type: 'string',
        },
        {
            name: 'whatsappTitle',
            title: 'WhatsApp titolo',
            type: 'string',
        },
        {
            name: 'whatsappDescription',
            title: 'WhatsApp descrizione',
            type: 'text',
            rows: 3,
        },
        {
            name: 'whatsappLabel',
            title: 'WhatsApp label',
            type: 'string',
        },
        {
            name: 'whatsappHref',
            title: 'WhatsApp link o numero',
            type: 'string',
        },
        {
            name: 'whatsappActionLabel',
            title: 'WhatsApp action label',
            type: 'string',
        },
        {
            name: 'emailEyebrow',
            title: 'Email eyebrow',
            type: 'string',
        },
        {
            name: 'emailTitle',
            title: 'Email titolo',
            type: 'string',
        },
        {
            name: 'emailDescription',
            title: 'Email descrizione',
            type: 'text',
            rows: 3,
        },
        {
            name: 'emailLabel',
            title: 'Email label',
            type: 'string',
        },
        {
            name: 'emailHref',
            title: 'Email indirizzo o mailto',
            type: 'string',
        },
        {
            name: 'emailActionLabel',
            title: 'Email action label',
            type: 'string',
        },
        {
            name: 'footerBrandName',
            title: 'Footer nome brand',
            type: 'string',
        },
        {
            name: 'footerDescription',
            title: 'Footer descrizione',
            type: 'text',
            rows: 3,
        },
        {
            name: 'footerLink1Label',
            title: 'Footer link 1 label',
            type: 'string',
        },
        {
            name: 'footerLink1Href',
            title: 'Footer link 1 href',
            type: 'string',
        },
        {
            name: 'footerLink2Label',
            title: 'Footer link 2 label',
            type: 'string',
        },
        {
            name: 'footerLink2Href',
            title: 'Footer link 2 href',
            type: 'string',
        },
        {
            name: 'footerBackToTopLabel',
            title: 'Footer torna su label',
            type: 'string',
        },
        {
            name: 'footerBackToTopHref',
            title: 'Footer torna su href',
            type: 'string',
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'Hero Homepage',
                subtitle: 'Contenuti testuali e CTA della hero',
            }
        },
    },
}
