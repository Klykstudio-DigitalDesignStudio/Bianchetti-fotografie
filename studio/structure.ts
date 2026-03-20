import type { StructureResolver } from 'sanity/structure'

export const singletonTypes = new Set(['heroSettings'])

export const deskStructure: StructureResolver = (S) =>
    S.list()
        .title('Contenuti')
        .items([
            S.listItem()
                .title('Homepage')
                .id('heroSettings')
                .child(S.document().schemaType('heroSettings').documentId('heroSettings')),
            S.divider(),
            S.documentTypeListItem('photoAlbum').title('Album fotografici'),
        ])
