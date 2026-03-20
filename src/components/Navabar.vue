<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-pink-200 bg-linear-to-r from-orange-100 via-rose-100 to-amber-100/95 shadow-[0_8px_30px_rgba(244,114,182,0.12)] backdrop-blur">
    <nav class="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
      <a href="/#hero-section" class="font-display text-2xl text-pink-600" @click.prevent="goToHomepageTop">Francesca Bianchetti</a>

      <button
        class="inline-flex items-center justify-center rounded-full bg-pink-500 px-4 py-2 text-sm text-white shadow-sm transition hover:bg-pink-600 md:hidden"
        type="button"
        :aria-expanded="isOpen"
        aria-label="Apri menu"
        @click="isOpen = !isOpen"
      >
        <span v-if="!isOpen">Menu</span>
        <span v-else>Chiudi</span>
      </button>

      <ul class="hidden items-center gap-2 md:flex">
        <li v-if="!isAlbumDetail">
          <NavItem :href="sectionHref('gallery')">Gallery</NavItem>
        </li>
        <li v-if="!isAlbumDetail">
          <NavItem :href="sectionHref('about')">About</NavItem>
        </li>
        <li>
          <NavItem :href="sectionHref('info')" :highlight="true">Contatti</NavItem>
        </li>
      </ul>
    </nav>

    <div v-if="isOpen" class="border-t border-pink-200 bg-linear-to-b from-orange-100 via-rose-100 to-amber-100 px-6 py-4 md:hidden sm:px-10">
      <ul class="flex flex-col gap-4">
        <li v-if="!isAlbumDetail"><NavItem :href="sectionHref('gallery')" class="text-center" @navigate="closeMenu">Gallery</NavItem></li>
        <li v-if="!isAlbumDetail"><NavItem :href="sectionHref('about')" class="text-center" @navigate="closeMenu">About</NavItem></li>
        <li><NavItem :href="sectionHref('info')" class="text-center" :highlight="true" @navigate="closeMenu">Contatti</NavItem></li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavItem from './NavItem.vue'

const route = useRoute()
const router = useRouter()
const isOpen = ref(false)
const isAlbumDetail = computed(() => route.name === 'album-detail')

const closeMenu = () => {
  isOpen.value = false
}

const goToHomepageTop = async () => {
  closeMenu()

  if (route.path !== '/' || route.hash !== '#hero-section') {
    await router.push({ path: '/', hash: '#hero-section' })
  }

  await nextTick()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const sectionHref = (sectionId: string) => `/#${sectionId}`
</script>

<style scoped>
:global(html) {
  scroll-padding-top: 96px;
}
</style>
