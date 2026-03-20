<template>
    <section v-if="album" ref="pageSection" class="min-h-screen bg-[#fbf2ea] py-14 lg:py-16 xl:py-20">
        <div class="mx-auto w-full max-w-screen-2xl px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
            <RouterLink to="/" class="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-pink-600 transition hover:text-pink-700">
                <svg viewBox="0 0 16 16" aria-hidden="true" class="h-3.5 w-3.5 fill-current">
                    <path d="M9.62 3.22L4.84 8l4.78 4.78-1.06 1.06L2.72 8l5.84-5.84z" />
                </svg>
                <span>Torna alla homepage</span>
            </RouterLink>

            <div class="pt-8 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:pb-10 xl:grid-cols-[0.95fr_1.05fr] xl:gap-10">
                <button type="button" class="cursor-pointer overflow-hidden bg-[#2f1722] text-left" data-gsap-album-cover @click="openCoverLightbox">
                    <img :src="album.coverImageUrl" :alt="album.coverImageAlt" class="h-[24rem] w-full object-cover transition duration-500 hover:scale-[1.02] sm:h-[32rem] lg:h-[36rem] xl:h-[42rem] 2xl:h-[46rem]" />
                </button>

                <div class="bg-white px-6 py-8 sm:px-8 lg:flex lg:flex-col lg:justify-end lg:px-10 lg:py-10" data-gsap-album-copy>
                    <p class="pb-4 text-sm uppercase tracking-[0.18em] text-[#243b63]">Album fotografico</p>
                    <h1 class="font-display text-5xl text-[#ff63b4] sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] 2xl:text-[6rem]">{{ album.title }}</h1>
                    <p class="pt-6 text-base leading-relaxed text-slate-700 sm:text-lg">{{ album.summary }}</p>

                    <div class="grid gap-4 pt-8 sm:grid-cols-2">
                        <div class="border border-pink-100 bg-[#fff8f2] px-4 py-4">
                            <p class="text-xs uppercase tracking-[0.14em] text-slate-500">Numero foto</p>
                            <p class="pt-2 font-display text-3xl text-orange-400">{{ album.photos.length }}</p>
                        </div>
                        <div class="border border-pink-100 bg-[#fff8f2] px-4 py-4">
                            <p class="text-xs uppercase tracking-[0.14em] text-slate-500">Luogo</p>
                            <p class="pt-2 font-display text-3xl text-orange-400">{{ album.location }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <section class="pt-8 xl:pt-10">
                <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
                    <button
                        v-for="(photo, index) in album.photos"
                        :key="photo._key"
                        type="button"
                        class="group relative cursor-pointer overflow-hidden bg-[#2f1722] text-left"
                        data-gsap-album-photo
                        @click="openLightbox(index)">
                        <img
                            :src="photo.imageUrl"
                            :alt="photo.alt"
                            class="h-[20rem] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[24rem] lg:h-[26rem] xl:h-[30rem] 2xl:h-[34rem]" />
                        <div class="absolute inset-0 bg-white/0 transition duration-300 group-hover:bg-white/6"></div>
                    </button>
                </div>
            </section>

        </div>
    </section>

    <section v-else class="min-h-screen bg-[#fbf2ea] py-16">
        <div class="mx-auto max-w-screen-2xl space-y-6 px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
            <RouterLink to="/" class="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-pink-600 transition hover:text-pink-700">
                <svg viewBox="0 0 16 16" aria-hidden="true" class="h-3.5 w-3.5 fill-current">
                    <path d="M9.62 3.22L4.84 8l4.78 4.78-1.06 1.06L2.72 8l5.84-5.84z" />
                </svg>
                <span>Torna alla homepage</span>
            </RouterLink>
            <h1 class="font-display text-5xl text-[#ff63b4]">Album non trovato</h1>
            <p class="max-w-2xl text-slate-700">
                Questo slug non corrisponde a nessun album disponibile. Quando colleghiamo Sanity, qui vedremo i dettagli del documento album selezionato.
            </p>
        </div>
    </section>

    <div
        v-if="album && activeLightboxItem"
        class="fixed inset-0 z-50 flex items-center justify-center bg-[#1d0f15]/92 px-4 py-6 sm:px-8"
        @click.self="closeLightbox">
        <button
            type="button"
            class="absolute right-4 top-4 rounded-full border border-white/30 px-4 py-2 text-sm uppercase tracking-[0.14em] text-white transition hover:bg-white/10 sm:right-8 sm:top-8"
            @click="closeLightbox">
            Chiudi
        </button>

        <button
            v-if="activeLightboxItem"
            type="button"
            class="absolute right-4 top-18 rounded-full border border-white/30 px-4 py-2 text-sm uppercase tracking-[0.14em] text-white transition hover:bg-white/10 sm:right-8 sm:top-22"
            @click="toggleZoom">
            {{ isZoomed ? 'Riduci' : 'Zoom' }}
        </button>

        <button
            v-if="album.photos.length > 0"
            type="button"
            class="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.14em] text-white transition hover:bg-white/10 sm:left-8"
            @click="showPreviousPhoto">
            Prev
        </button>

        <div class="flex max-h-full w-full max-w-6xl flex-col overflow-hidden lg:grid lg:grid-cols-[1.25fr_0.75fr]">
            <div class="overflow-auto">
                <img
                    :src="activeLightboxItem.imageUrl"
                    :alt="activeLightboxItem.alt"
                    class="max-h-[72vh] w-full object-contain transition duration-300 lg:h-[80vh]"
                    :class="isZoomed ? 'cursor-zoom-out scale-[1.8]' : 'cursor-zoom-in'"
                    @click="toggleZoom" />
            </div>

            <div class="flex flex-col justify-between bg-[#fff8f2] px-6 py-6 sm:px-8">
                <div>
                    <p class="text-xs uppercase tracking-[0.16em] text-[#243b63]">
                        {{ activeLightboxItem.kind === 'cover' ? 'Cover album' : `Foto ${activePhotoNumber} / ${album.photos.length}` }}
                    </p>
                    <h2 class="pt-3 font-display text-4xl text-[#ff63b4]">{{ activeLightboxItem.title }}</h2>
                    <p class="pt-4 text-base leading-relaxed text-slate-700">{{ activeLightboxItem.alt }}</p>
                </div>

                <div class="pt-8">
                    <div class="grid grid-cols-4 gap-3 sm:grid-cols-5">
                        <button
                            type="button"
                            class="overflow-hidden border transition"
                            :class="activeLightboxItem.kind === 'cover' ? 'border-pink-500' : 'border-transparent opacity-70 hover:opacity-100'"
                            @click="openCoverLightbox">
                            <img :src="album.coverImageUrl" :alt="album.coverImageAlt" class="h-20 w-full object-cover" />
                        </button>
                        <button
                            v-for="(photo, index) in album.photos"
                            :key="`${photo._key}-thumb`"
                            type="button"
                            class="overflow-hidden border transition"
                            :class="activeLightboxItem.kind === 'photo' && index === activePhotoIndex ? 'border-pink-500' : 'border-transparent opacity-70 hover:opacity-100'"
                            @click="openLightbox(index)">
                            <img :src="photo.imageUrl" :alt="photo.alt" class="h-20 w-full object-cover" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <button
            v-if="album.photos.length > 0"
            type="button"
            class="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.14em] text-white transition hover:bg-white/10 sm:right-8"
            @click="showNextPhoto">
            Next
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRoute } from 'vue-router'
import { getAlbumBySlug, type AlbumPhoto, type PhotoAlbum } from '../lib/content'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const pageSection = ref<HTMLElement | null>(null)
const album = ref<PhotoAlbum | null>(null)
const activePhotoIndex = ref<number | null>(null)
const isCoverActive = ref(false)
const isZoomed = ref(false)
let animationCleanup: Array<() => void> = []

const activePhoto = computed(() => {
    if (!album.value || activePhotoIndex.value === null) {
        return null
    }

    return album.value.photos[activePhotoIndex.value] || null
})

const activeLightboxItem = computed<
    | { kind: 'cover'; title: string; alt: string; imageUrl: string }
    | ({ kind: 'photo' } & AlbumPhoto)
    | null
>(() => {
    if (!album.value) {
        return null
    }

    if (isCoverActive.value) {
        return {
            kind: 'cover',
            title: album.value.title,
            alt: album.value.coverImageAlt,
            imageUrl: album.value.coverImageUrl,
        }
    }

    if (!activePhoto.value) {
        return null
    }

    return {
        kind: 'photo',
        ...activePhoto.value,
    }
})

const activePhotoNumber = computed(() => {
    return activePhotoIndex.value === null ? 0 : activePhotoIndex.value + 1
})

function openLightbox(index: number) {
    isCoverActive.value = false
    activePhotoIndex.value = index
    isZoomed.value = false
    document.body.style.overflow = 'hidden'
}

function openCoverLightbox() {
    isCoverActive.value = true
    activePhotoIndex.value = null
    isZoomed.value = false
    document.body.style.overflow = 'hidden'
}

function closeLightbox() {
    activePhotoIndex.value = null
    isCoverActive.value = false
    isZoomed.value = false
    document.body.style.overflow = ''
}

function toggleZoom() {
    if (!activeLightboxItem.value) {
        return
    }

    isZoomed.value = !isZoomed.value
}

function showPreviousPhoto() {
    if (!album.value) {
        return
    }

    if (isCoverActive.value) {
        isCoverActive.value = false
        activePhotoIndex.value = album.value.photos.length - 1
        isZoomed.value = false
        return
    }

    if (activePhotoIndex.value === null) {
        return
    }

    if (activePhotoIndex.value === 0) {
        isCoverActive.value = true
        activePhotoIndex.value = null
        isZoomed.value = false
        return
    }

    activePhotoIndex.value = activePhotoIndex.value - 1
    isZoomed.value = false
}

function showNextPhoto() {
    if (!album.value) {
        return
    }

    if (isCoverActive.value) {
        isCoverActive.value = false
        activePhotoIndex.value = 0
        isZoomed.value = false
        return
    }

    if (activePhotoIndex.value === null) {
        return
    }

    activePhotoIndex.value = (activePhotoIndex.value + 1) % album.value.photos.length
    isZoomed.value = false
}

function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
        closeLightbox()
        return
    }

    if (activePhotoIndex.value === null && !isCoverActive.value) {
        return
    }

    if (event.key === 'ArrowLeft') {
        showPreviousPhoto()
        return
    }

    if (event.key === 'ArrowRight') {
        showNextPhoto()
    }
}

function clearAnimations() {
    animationCleanup.forEach((cleanup) => cleanup())
    animationCleanup = []
    ScrollTrigger.refresh()
}

function setupAlbumAnimations() {
    clearAnimations()

    if (!pageSection.value || typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
    }

    const context = gsap.context(() => {
        const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } })

        timeline
            .from('[data-gsap-album-cover]', {
                y: 28,
                duration: 0.9,
            })
            .from(
                '[data-gsap-album-copy] > *',
                {
                    y: 24,
                    duration: 0.75,
                    stagger: 0.08,
                },
                0.14
            )

        gsap.from('[data-gsap-album-photo]', {
            y: 30,
            duration: 0.75,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '[data-gsap-album-photo]',
                start: 'top 82%',
                once: true,
            },
        })
    }, pageSection.value)

    animationCleanup.push(() => context.revert())
}

watch(
    () => route.params.slug,
    async (slugParam) => {
        const slug = typeof slugParam === 'string' ? slugParam : ''
        album.value = await getAlbumBySlug(slug)
        closeLightbox()
        await nextTick()
        setupAlbumAnimations()
    },
    { immediate: true }
)

onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
    clearAnimations()
})
</script>
