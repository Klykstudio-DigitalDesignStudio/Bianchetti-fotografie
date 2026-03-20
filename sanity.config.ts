import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './studio/schemaTypes'
import { deskStructure, singletonTypes } from './studio/structure'

export default defineConfig({
    name: 'default',
    title: 'Francesca Bianchetti Fotografie',
    projectId: 'axuo70sl',
    dataset: 'production',
    basePath: '/studio',
    plugins: [
        structureTool({
            structure: deskStructure,
        }),
        visionTool(),
    ],
    schema: {
        types: schemaTypes,
        templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
    },
    document: {
        newDocumentOptions: (previousOptions, { creationContext }) => {
            if (creationContext.type === 'global') {
                return previousOptions.filter((templateItem) => !singletonTypes.has(templateItem.templateId))
            }

            return previousOptions
        },
        actions: (previousActions, context) => {
            if (singletonTypes.has(context.schemaType)) {
                return previousActions.filter(({ action }) => action !== 'duplicate')
            }

            return previousActions
        },
    },
})
