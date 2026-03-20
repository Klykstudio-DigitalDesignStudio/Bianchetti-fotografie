<template>
  <a :href="href" :class="['fb-nav-item', { 'fb-nav-item-highlight': highlight }]" @click="$emit('navigate')">
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  highlight?: boolean
}>()

defineEmits<{
  (e: 'navigate'): void
}>()
</script>

<style scoped>
.fb-nav-item {
  display: block;
  border-radius: 9999px;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgb(55 65 81);
  transition: color 180ms ease, background-color 180ms ease;
}

.fb-nav-item:hover {
  background: rgb(255 255 255 / 0.65);
  color: rgb(219 39 119);
}

.fb-nav-item-highlight {
  background: rgb(236 72 153);
  color: white;
}

.fb-nav-item-highlight:hover {
  background: rgb(219 39 119);
  color: white;
}
</style>
