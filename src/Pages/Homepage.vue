<template>
    <section
        id="hero-section"
        ref="heroSection"
        class="w-full bg-orange-50 px-6 py-12 sm:px-10 lg:flex lg:min-h-[calc(100svh-5rem)] lg:items-center lg:justify-center lg:gap-12 lg:px-16 lg:py-20 xl:gap-16 xl:py-24 2xl:px-24 2xl:py-28">
        <div id="Usp" class="w-full max-w-2xl lg:max-w-xl xl:max-w-2xl" data-gsap-hero-copy>
            <p id="eyebrow" class="py-4">{{ heroContent.eyebrow }}</p>
            <h1 class="max-w-[14ch] pb-6 font-display text-5xl font-semibold sm:text-6xl xl:text-7xl 2xl:text-[5.5rem]">{{ heroContent.title }}</h1>
            <h2 class="pb-2 font-display text-2xl">{{ heroContent.subtitle }}</h2>
            <p class="max-w-[56ch]">{{ heroContent.description }}</p>

            <div class="pt-6 flex flex-wrap justify-start gap-4">
                <Bottone as="a" :href="heroContent.primaryCta.href" variant="full" size="md">
                    {{ heroContent.primaryCta.label }}
                </Bottone>
                <Bottone as="a" :href="heroContent.secondaryCta.href" variant="outline" size="md">
                    {{ heroContent.secondaryCta.label }}
                </Bottone>
            </div>
        </div>
        <div id="featured" class="pt-12 lg:pt-0 w-full max-w-2xl lg:max-w-xl xl:max-w-2xl" data-gsap-hero-media>
            <svg viewBox="0 0 911 925" class="h-auto w-full lg:max-h-[72svh]" role="img" :aria-label="currentHeroImage.alt">
                <defs>
                    <clipPath id="hero-featured-shape" clipPathUnits="userSpaceOnUse">
                        <path
                            d="M676.07 0C805.739 0 910.856 76.3048 910.856 170.432C910.856 215.308 886.962 256.132 847.906 286.567C829.964 300.549 829.964 333.09 847.906 347.071C886.962 377.507 910.856 418.331 910.856 463.207C910.856 507.875 887.183 548.53 848.448 578.921C830.682 592.859 830.682 624.916 848.448 638.855C887.183 669.246 910.856 709.9 910.856 754.568C910.856 848.695 805.739 925 676.07 925C597.843 925 528.552 897.228 485.885 854.526C470.774 839.402 440.082 839.402 424.97 854.526C382.304 897.228 313.013 925 234.786 925C105.118 925 0.000215905 848.695 0 754.568C0 709.9 23.6728 669.246 62.408 638.855C80.1735 624.916 80.1735 592.859 62.408 578.921C23.6728 548.53 0 507.875 0 463.207C5.95786e-05 418.331 23.894 377.507 62.9502 347.071C80.892 333.09 80.892 300.549 62.9502 286.567C23.894 256.132 0 215.308 0 170.432C0.000238569 76.3048 105.118 0 234.786 0C313.013 4.6949e-05 382.304 27.7717 424.97 70.4737C440.082 85.5977 470.774 85.5976 485.885 70.4736C528.552 27.7716 597.843 3.61235e-06 676.07 0Z" />
                    </clipPath>
                </defs>
                <image
                    v-for="(image, index) in featuredImages"
                    :key="image._key"
                    :href="image.imageUrl"
                    width="911"
                    height="925"
                    preserveAspectRatio="xMidYMid slice"
                    clip-path="url(#hero-featured-shape)"
                    :style="{
                        opacity: index === activeHeroSlide ? 1 : 0,
                        transition: 'opacity 2200ms ease-in-out',
                    }" />
            </svg>
            <div class="pt-4 flex items-center justify-between gap-4 text-sm text-slate-700">
                <p class="uppercase tracking-[0.16em]">Featured da album fotografici</p>
                <RouterLink
                    :to="{ name: 'album-detail', params: { slug: currentHeroImage.albumSlug } }"
                    class="font-medium text-pink-600 transition hover:text-pink-700">
                    {{ currentHeroImage.albumTitle }}
                </RouterLink>
            </div>
        </div>
    </section>
    <section id="decorative-zig-zag" class="h-16 w-full bg-orange-50">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="h-full w-full">
            <path
                d="M0,50 C5,0 5,100 10,50 C15,0 15,100 20,50 C25,0 25,100 30,50 C35,0 35,100 40,50 C45,0 45,100 50,50 C55,0 55,100 60,50 C65,0 65,100 70,50 C75,0 75,100 80,50 C85,0 85,100 90,50 C95,0 95,100 100,50 L100,100 L0,100 Z"
                fill="#f9a8d4" />
        </svg>
    </section>
    <section id="gallery" ref="gallerySection" class="w-full bg-pink-300 px-6 py-20 sm:px-12 lg:px-24 lg:py-24 xl:px-32 xl:py-28 2xl:px-40">
        <div class="h-full w-full bg-[#fbf2ea] p-8 sm:p-10 lg:p-12" data-gsap-panel>
            <div class="flex flex-col gap-6 pb-4 lg:flex-row lg:items-end lg:justify-between" data-gsap-heading>
                <div>
                    <p id="eyebrow" class="py-4 text-base tracking-[0.18em] text-[#243b63] uppercase">{{ galleryContent.eyebrow }}</p>
                    <h3 class="font-display text-5xl font-semibold text-[#ff63b4] sm:text-6xl xl:text-7xl">{{ galleryContent.title }}</h3>
                    <p class="max-w-2xl pt-4 text-slate-700">
                        {{ galleryContent.description }}
                    </p>
                </div>

                <div class="border border-pink-100 bg-white px-5 py-4 text-left lg:min-w-44 lg:text-right">
                    <p class="text-xs uppercase tracking-[0.16em] text-slate-500">Album mostrati</p>
                    <p class="pt-2 font-display text-4xl text-orange-400">
                        {{ visibleAlbums.length.toString().padStart(2, '0') }}
                        <span class="px-1 text-2xl text-pink-300">/</span>
                        {{ albums.length.toString().padStart(2, '0') }}
                    </p>
                </div>
            </div>
            <div class="grid gap-6 py-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
                <RouterLink
                    v-for="album in visibleAlbums"
                    :key="album._id"
                    :to="{ name: 'album-detail', params: { slug: album.slug } }"
                    class="group block"
                    data-gsap-card>
                    <article class="relative overflow-hidden bg-[#2f1722] text-white">
                        <img
                            :src="album.coverImageUrl"
                            :alt="album.coverImageAlt"
                            class="h-[30rem] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[34rem] lg:h-[32rem] xl:h-[38rem]" />
                        <div
                            class="p-6 md:pointer-events-none md:absolute md:inset-0 md:flex md:flex-col md:justify-end md:bg-gradient-to-t md:from-[#2f1722]/92 md:via-[#2f1722]/45 md:to-transparent md:opacity-0 md:transition md:duration-300 md:group-hover:opacity-100">
                            <div class="space-y-3">
                                <p class="text-xs uppercase tracking-[0.16em] text-pink-200">Album fotografico</p>
                                <h4 class="font-display text-3xl">{{ album.title }}</h4>
                                <p class="text-sm leading-relaxed text-pink-50/90">{{ album.summary }}</p>
                                <p class="text-sm font-semibold uppercase tracking-[0.14em] text-pink-200">Apri album</p>
                            </div>
                        </div>
                    </article>
                </RouterLink>
            </div>
            <div v-if="albums.length > initialVisibleAlbums" class="flex justify-center">
                <Bottone as="button" variant="outline" size="sm" @click="toggleAlbums">
                    {{ isShowingAllAlbums ? galleryContent.collapseLabel : galleryContent.expandLabel }}
                </Bottone>
            </div>
        </div>
    </section>
    <section id="decorative-zig-zag" class="h-16 w-full bg-pink-300">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="h-full w-full">
            <path
                d="M0,50 C5,0 5,100 10,50 C15,0 15,100 20,50 C25,0 25,100 30,50 C35,0 35,100 40,50 C45,0 45,100 50,50 C55,0 55,100 60,50 C65,0 65,100 70,50 C75,0 75,100 80,50 C85,0 85,100 90,50 C95,0 95,100 100,50 L100,100 L0,100 Z"
                fill="#ffffff" />
        </svg>
    </section>
    <section id="about" ref="aboutSection" class="flex w-full flex-col items-center justify-center gap-12 px-6 py-20 sm:px-10 lg:flex-row lg:gap-16 lg:px-16 lg:py-24 xl:gap-24 xl:py-28 2xl:px-24">
        <div class="w-full max-w-xl xl:max-w-2xl" data-gsap-about-media>
            <svg viewBox="0 0 911 925" class="h-auto w-full" role="img" :aria-label="aboutContent.imageAlt">
                <defs>
                    <clipPath id="franci-shape-exact" clipPathUnits="userSpaceOnUse">
                        <path
                            d="M676.07 0C805.739 0 910.856 76.3048 910.856 170.432C910.856 215.308 886.962 256.132 847.906 286.567C829.964 300.549 829.964 333.09 847.906 347.071C886.962 377.507 910.856 418.331 910.856 463.207C910.856 507.875 887.183 548.53 848.448 578.921C830.682 592.859 830.682 624.916 848.448 638.855C887.183 669.246 910.856 709.9 910.856 754.568C910.856 848.695 805.739 925 676.07 925C597.843 925 528.552 897.228 485.885 854.526C470.774 839.402 440.082 839.402 424.97 854.526C382.304 897.228 313.013 925 234.786 925C105.118 925 0.000215905 848.695 0 754.568C0 709.9 23.6728 669.246 62.408 638.855C80.1735 624.916 80.1735 592.859 62.408 578.921C23.6728 548.53 0 507.875 0 463.207C5.95786e-05 418.331 23.894 377.507 62.9502 347.071C80.892 333.09 80.892 300.549 62.9502 286.567C23.894 256.132 0 215.308 0 170.432C0.000238569 76.3048 105.118 0 234.786 0C313.013 4.6949e-05 382.304 27.7717 424.97 70.4737C440.082 85.5977 470.774 85.5976 485.885 70.4736C528.552 27.7716 597.843 3.61235e-06 676.07 0Z" />
                    </clipPath>
                </defs>
                <image
                    :href="aboutContent.imageUrl"
                    width="911"
                    height="925"
                    preserveAspectRatio="xMidYMid slice"
                    clip-path="url(#franci-shape-exact)" />
            </svg>
        </div>

        <div class="w-full max-w-2xl py-4 xl:max-w-[44rem]" data-gsap-about-copy>
            <p class="py-4 text-base tracking-[0.18em] text-[#243b63] uppercase">{{ aboutContent.role }}</p>
            <h2 class="font-display text-5xl font-semibold text-orange-400 sm:text-6xl xl:text-7xl">{{ aboutContent.title }}</h2>

            <div class="pt-6">
                <p class="pb-4">{{ aboutContent.firstParagraph }}</p>
                <p class="pt-2">{{ aboutContent.secondParagraph }}</p>
            </div>
        </div>
    </section>
    <section id="lineerotanti" ref="marqueeSection" class="w-full overflow-hidden bg-white py-20 lg:py-24 xl:py-28">
        <div class="lineerotanti-row lineerotanti-speed-a">
            <div class="lineerotanti-track font-display text-[52px] leading-tight text-[#FF95C3] py-3 sm:text-[72px] lg:text-8xl">
                {{ marqueeContent.lines[0] }} {{ marqueeContent.lines[0] }}
            </div>
        </div>
        <div class="lineerotanti-row lineerotanti-speed-b">
            <div
                class="lineerotanti-track font-display text-[44px] leading-tight text-[#FF95C3] py-3 sm:text-[64px] lg:text-[120px]">
                {{ marqueeContent.lines[1] }} {{ marqueeContent.lines[1] }}
            </div>
        </div>
        <div class="lineerotanti-row lineerotanti-speed-c">
            <div
                class="lineerotanti-track font-display text-[48px] leading-tight text-[#FF95C3] py-3 sm:text-[68px] lg:text-[140px]">
                {{ marqueeContent.lines[2] }} {{ marqueeContent.lines[2] }}
            </div>
        </div>
        <div class="lineerotanti-row lineerotanti-speed-d">
            <div
                class="lineerotanti-track font-display text-[56px] leading-tight text-[#FF95C3] py-3 sm:text-[78px] lg:text-[180px]">
                {{ marqueeContent.lines[3] }} {{ marqueeContent.lines[3] }}
            </div>
        </div>
    </section>
    <section id="info" ref="infoSection" class="flex w-full flex-col items-stretch gap-0 lg:flex-row">
        <div class="w-full bg-orange-50 px-6 py-16 sm:px-10 lg:w-1/2 lg:px-16 lg:py-20 xl:px-20 xl:py-24 2xl:px-24" data-gsap-info-left>
            <p class="pb-6 text-sm tracking-widest text-gray-600">{{ socialContent.eyebrow }}</p>
            <h2 class="pb-8 font-display text-4xl font-bold text-pink-400 sm:text-5xl lg:text-6xl xl:text-7xl">{{ socialContent.title }}</h2>
            <p class="pb-12 leading-relaxed text-gray-700">
                {{ socialContent.description }}
            </p>

            <div class="flex flex-col gap-4 xl:flex-row xl:gap-6">
                <a
                    v-for="(card, index) in socialContent.cards"
                    :key="`${card.title}-${index}`"
                    :href="card.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    :class="[
                        'flex-1 p-6 text-white transition lg:p-8',
                        getSocialCardClasses(index),
                    ]">
                    <p class="pb-2 text-xs tracking-widest">{{ card.label }}</p>
                    <h3 class="font-display text-3xl font-bold lg:text-4xl">{{ card.title }}</h3>
                    <p class="pt-4 text-sm leading-relaxed">{{ card.description }}</p>
                </a>
            </div>
        </div>

        <div class="flex w-full flex-col justify-center bg-orange-200 px-6 py-16 sm:px-10 lg:w-1/2 lg:px-16 lg:py-20 xl:px-20 xl:py-24 2xl:px-24" data-gsap-info-right>
            <p class="pb-6 text-sm tracking-widest text-gray-700">{{ contactContent.eyebrow }}</p>
            <h2 class="pb-8 font-display text-4xl font-bold text-pink-400 sm:text-5xl lg:text-6xl xl:text-7xl">{{ contactContent.title }}</h2>
            <p class="pb-8 leading-relaxed text-gray-800 lg:pb-12">
                {{ contactContent.description }}
            </p>

            <div class="space-y-4 lg:space-y-5">
                <Bottone
                    as="a"
                    :href="contactContent.whatsapp.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="full"
                    size="lg"
                    class="block min-h-30 w-full rounded-none bg-rose-400 p-5 text-left hover:bg-rose-500 sm:p-6">
                    <div class="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <div>
                            <p class="pb-1 text-xs tracking-widest">{{ contactContent.whatsapp.eyebrow }}</p>
                            <h3 class="font-display text-2xl font-semibold leading-none sm:text-3xl">{{ contactContent.whatsapp.title }}</h3>
                            <p class="pt-2 text-sm">{{ contactContent.whatsapp.description }}</p>
                        </div>
                        <span class="text-sm font-semibold uppercase tracking-[0.12em]">{{ contactContent.whatsapp.actionLabel }}</span>
                    </div>
                </Bottone>

                <Bottone
                    as="a"
                    :href="contactContent.email.href"
                    variant="outline"
                    size="lg"
                    class="block min-h-30 w-full rounded-none border-rose-400 bg-white p-5 text-left text-rose-600 hover:bg-rose-50 sm:p-6">
                    <div class="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <div>
                            <p class="pb-1 text-xs tracking-widest">{{ contactContent.email.eyebrow }}</p>
                            <h3 class="font-display text-2xl font-semibold leading-none sm:text-3xl">{{ contactContent.email.title }}</h3>
                            <p class="pt-2 text-sm">{{ contactContent.email.description }}</p>
                        </div>
                        <span class="text-sm font-semibold uppercase tracking-[0.12em]">{{ contactContent.email.actionLabel }}</span>
                    </div>
                </Bottone>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Bottone from '../components/Bottone.vue'
import {
    getHomepageContent,
    seedAboutSettings,
    seedAlbums,
    seedContactSettings,
    seedGallerySettings,
    seedHeroSettings,
    seedMarqueeSettings,
    seedSocialSettings,
} from '../lib/content'

gsap.registerPlugin(ScrollTrigger)

const initialVisibleAlbums = 6
const heroSection = ref<HTMLElement | null>(null)
const gallerySection = ref<HTMLElement | null>(null)
const aboutSection = ref<HTMLElement | null>(null)
const marqueeSection = ref<HTMLElement | null>(null)
const infoSection = ref<HTMLElement | null>(null)
const albums = ref(seedAlbums)
const aboutContent = ref(seedAboutSettings)
const contactContent = ref(seedContactSettings)
const galleryContent = ref(seedGallerySettings)
const heroContent = ref(seedHeroSettings)
const marqueeContent = ref(seedMarqueeSettings)
const socialContent = ref(seedSocialSettings)
const featuredImages = ref(getSeedFeaturedImages())
const activeHeroSlide = ref(0)
const isShowingAllAlbums = ref(false)
let heroSliderInterval: ReturnType<typeof setInterval> | null = null
let animationCleanup: Array<() => void> = []

function getSeedFeaturedImages() {
    return seedAlbums
        .flatMap((album) =>
            album.photos
                .filter((photo) => photo.featuredInHomepage)
                .map((photo) => ({
                    ...photo,
                    albumSlug: album.slug,
                    albumTitle: album.title,
                }))
        )
        .sort((first, second) => (first.heroOrder ?? 999) - (second.heroOrder ?? 999))
}

const currentHeroImage = computed(() => {
    return featuredImages.value[activeHeroSlide.value] || featuredImages.value[0]
})

const visibleAlbums = computed(() => {
    if (isShowingAllAlbums.value) {
        return albums.value
    }

    return albums.value.slice(0, initialVisibleAlbums)
})

function toggleAlbums() {
    isShowingAllAlbums.value = !isShowingAllAlbums.value
}

function getSocialCardClasses(index: number) {
    if (index % 3 === 0) {
        return 'bg-pink-400 hover:bg-pink-500'
    }

    if (index % 3 === 1) {
        return 'bg-orange-400 hover:bg-orange-500'
    }

    return 'bg-pink-300 hover:bg-pink-400'
}

function stopHeroSlider() {
    if (!heroSliderInterval) {
        return
    }

    clearInterval(heroSliderInterval)
    heroSliderInterval = null
}

function startHeroSlider() {
    stopHeroSlider()

    if (featuredImages.value.length <= 1) {
        activeHeroSlide.value = 0
        return
    }

    heroSliderInterval = setInterval(() => {
        activeHeroSlide.value = (activeHeroSlide.value + 1) % featuredImages.value.length
    }, 6500)
}

function clearAnimations() {
    animationCleanup.forEach((cleanup) => cleanup())
    animationCleanup = []
    ScrollTrigger.refresh()
}

function setupScrollAnimation(target: HTMLElement | null, animation: () => void) {
    if (!target) {
        return
    }

    const context = gsap.context(animation, target)
    animationCleanup.push(() => context.revert())
}

function setupHomepageAnimations() {
    clearAnimations()

    if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
    }

    setupScrollAnimation(heroSection.value, () => {
        const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } })
        timeline
            .from('[data-gsap-hero-copy] > *', {
                y: 24,
                opacity: 0,
                duration: 0.8,
                stagger: 0.08,
            })
            .from(
                '[data-gsap-hero-media]',
                {
                    y: 28,
                    opacity: 0,
                    scale: 0.98,
                    duration: 1,
                },
                0.18
            )
    })

    setupScrollAnimation(gallerySection.value, () => {
        gsap.from('[data-gsap-panel]', {
            y: 40,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: gallerySection.value,
                start: 'top 78%',
                once: true,
            },
        })

        gsap.from('[data-gsap-card]', {
            y: 34,
            duration: 0.75,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: gallerySection.value,
                start: 'top 70%',
                once: true,
            },
        })
    })

    setupScrollAnimation(aboutSection.value, () => {
        const timeline = gsap.timeline({
            defaults: { ease: 'power2.out' },
            scrollTrigger: {
                trigger: aboutSection.value,
                start: 'top 75%',
                once: true,
            },
        })

        timeline
            .from('[data-gsap-about-media]', {
                y: 36,
                opacity: 0,
                duration: 0.9,
            })
            .from(
                '[data-gsap-about-copy] > *',
                {
                    y: 22,
                    opacity: 0,
                    duration: 0.75,
                    stagger: 0.08,
                },
                0.16
            )
    })

    setupScrollAnimation(marqueeSection.value, () => {
        gsap.from('.lineerotanti-row', {
            y: 24,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: marqueeSection.value,
                start: 'top 80%',
                once: true,
            },
        })
    })

    setupScrollAnimation(infoSection.value, () => {
        gsap.from('[data-gsap-info-left], [data-gsap-info-right]', {
            y: 34,
            opacity: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: infoSection.value,
                start: 'top 76%',
                once: true,
            },
        })
    })
}

onMounted(async () => {
    const homepageContent = await getHomepageContent()

    albums.value = homepageContent.albums
    aboutContent.value = homepageContent.about
    contactContent.value = homepageContent.contact
    galleryContent.value = homepageContent.gallery
    heroContent.value = homepageContent.hero
    marqueeContent.value = homepageContent.marquee
    socialContent.value = homepageContent.social
    featuredImages.value = homepageContent.featuredImages
    activeHeroSlide.value = 0

    startHeroSlider()
    await nextTick()
    setupHomepageAnimations()
})

onBeforeUnmount(() => {
    stopHeroSlider()
    clearAnimations()
})

</script>
