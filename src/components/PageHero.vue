<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section class="hero">
    <div class="hero-inner">
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h1 class="title">{{ title }}</h1>
      <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(160deg, #1e3a5f 0%, #152a45 45%, #1a2740 100%);
  color: #fff;
  padding: clamp(2.25rem, 6vw, 3.5rem) max(1rem, env(safe-area-inset-right)) clamp(2.75rem, 7vw, 4rem)
    max(1rem, env(safe-area-inset-left));
}

.hero-inner {
  max-width: 1120px;
  margin: 0 auto;
  min-width: 0;
}

.eyebrow {
  font-size: clamp(0.72rem, 2vw, 0.8rem);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-accent);
  font-weight: 600;
  margin: 0 0 0.75rem;
}

.title {
  font-size: clamp(1.65rem, 5.5vw, 2.85rem);
  margin: 0 0 0.75rem;
  max-width: 100%;
  overflow-wrap: anywhere;
  hyphens: auto;
}

@media (min-width: 640px) {
  .eyebrow {
    letter-spacing: 0.16em;
  }

  .title {
    max-width: 18ch;
  }
}

.subtitle {
  margin: 0;
  font-size: clamp(0.98rem, 3.2vw, 1.1rem);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.82);
  max-width: 52ch;
  overflow-wrap: anywhere;
}
</style>
