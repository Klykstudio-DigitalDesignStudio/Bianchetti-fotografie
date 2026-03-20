<template>
  <div class="min-h-screen bg-white">
    <Navabar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'
import Navabar from './components/Navabar.vue'
</script>