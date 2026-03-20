const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID?.trim()
const sanityDataset = import.meta.env.VITE_SANITY_DATASET?.trim()
const sanityApiVersion = import.meta.env.VITE_SANITY_API_VERSION?.trim() || '2025-02-19'

export const isSanityConfigured = Boolean(sanityProjectId && sanityDataset)

function buildSanityQueryUrl(query: string) {
    if (!sanityProjectId || !sanityDataset) {
        throw new Error('Sanity environment variables are missing.')
    }

    const searchParams = new URLSearchParams({
        query,
    })

    return `https://${sanityProjectId}.api.sanity.io/v${sanityApiVersion}/data/query/${sanityDataset}?${searchParams.toString()}`
}

export async function fetchSanityData<T>(query: string): Promise<T> {
    const response = await fetch(buildSanityQueryUrl(query), {
        headers: {
            Accept: 'application/json',
        },
    })

    if (!response.ok) {
        throw new Error(`Sanity request failed with status ${response.status}.`)
    }

    const payload = (await response.json()) as { result: T }

    return payload.result
}
