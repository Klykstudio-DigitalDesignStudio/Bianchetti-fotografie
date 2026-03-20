<template>
  <footer class="border-t border-pink-200 bg-linear-to-r from-rose-200 via-orange-200 to-amber-200">
    <div class="mx-auto flex w-full max-w-screen-2xl flex-col gap-8 px-6 py-10 sm:px-10 lg:px-16">
      <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p class="font-display text-3xl text-pink-700">{{ footerContent.brandName }}</p>
          <p class="pt-2 text-sm text-gray-700">{{ footerContent.description }}</p>
        </div>

        <div class="flex flex-col gap-3 text-sm sm:flex-row sm:gap-4">
          <a
            v-for="(link, index) in footerContent.links"
            :key="`${link.label}-${index}`"
            :href="link.href"
            :target="isExternalLink(link.href) ? '_blank' : undefined"
            :rel="isExternalLink(link.href) ? 'noopener noreferrer' : undefined"
            :class="[
              'rounded-full px-4 py-2 text-center text-white transition',
              index % 2 === 0 ? 'bg-pink-500 hover:bg-pink-600' : 'bg-orange-500 hover:bg-orange-600',
            ]">
            {{ link.label }}
          </a>
          <a
            :href="footerContent.backToTopHref"
            class="rounded-full bg-amber-500 px-4 py-2 text-center text-white transition hover:bg-amber-600">
            {{ footerContent.backToTopLabel }}
          </a>
        </div>
      </div>

      <p class="text-sm text-gray-700">
        Made by
        <a href="https://www.klyk.studio" target="_blank" rel="noopener noreferrer" class="font-medium text-pink-700 transition hover:text-pink-800">klyk.studio</a>
        and
        <a href="https://www.thefroggystudio.com" target="_blank" rel="noopener noreferrer" class="font-medium text-pink-700 transition hover:text-pink-800">thefroggystudio</a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getHomepageContent, seedFooterSettings } from '../lib/content'

const footerContent = ref(seedFooterSettings)

function isExternalLink(href: string) {
  return href.startsWith('http') || href.startsWith('mailto:')
}

onMounted(async () => {
  const homepageContent = await getHomepageContent()
  footerContent.value = homepageContent.footer
})
</script>
