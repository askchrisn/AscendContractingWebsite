<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <main class="main">
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
.main {
  flex: 1;
  min-width: 0;
  padding-top: calc(var(--header-h) + env(safe-area-inset-top, 0px));
}
</style>
