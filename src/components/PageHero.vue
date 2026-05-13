<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    subtitle?: string
    /** Full-bleed background photo (URL path). */
    bgImage?: string
    /** Taller hero for landing pages with photography. */
    size?: 'default' | 'tall'
  }>(),
  { size: 'default' },
)

const sectionStyle = computed(() =>
  props.bgImage ? ({ '--hero-bg': `url(${props.bgImage})` } as Record<string, string>) : undefined,
)
</script>

<template>
  <section
    class="hero"
    :class="{
      'hero--tall': size === 'tall',
      'hero--photo': !!bgImage,
    }"
    :style="sectionStyle"
  >
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
  position: relative;
  color: #fff;
  padding: clamp(2.5rem, 7vw, 4rem) max(1rem, env(safe-area-inset-right)) clamp(3rem, 9vw, 5rem)
    max(1rem, env(safe-area-inset-left));
  background: linear-gradient(155deg, #44403c 0%, #292524 42%, #1c1917 100%);
  overflow: hidden;
}

.hero--photo {
  background-image:
    linear-gradient(
      105deg,
      rgba(12, 10, 9, 0.92) 0%,
      rgba(28, 25, 23, 0.72) 38%,
      rgba(28, 25, 23, 0.35) 100%
    ),
    var(--hero-bg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero--photo:not(.hero--tall) {
  min-height: min(42vh, 400px);
  display: flex;
  align-items: flex-end;
}

.hero--photo:not(.hero--tall) .hero-inner {
  width: 100%;
}

.hero--tall {
  min-height: clamp(460px, 78vh, 720px);
  display: flex;
  align-items: flex-end;
  padding-top: clamp(4rem, 12vw, 6rem);
}

.hero--tall .hero-inner {
  width: 100%;
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 1120px;
  margin: 0 auto;
  min-width: 0;
}

.eyebrow {
  font-family: var(--font-display);
  font-size: clamp(0.8rem, 2vw, 0.95rem);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--color-accent-soft);
  font-weight: 600;
  margin: 0 0 0.85rem;
}

.title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2.1rem, 6.5vw, 3.35rem);
  line-height: 1.05;
  margin: 0 0 1rem;
  max-width: 100%;
  overflow-wrap: anywhere;
  hyphens: auto;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.35);
  max-width: min(100%, 36rem);
}

.subtitle {
  margin: 0;
  font-size: clamp(1.02rem, 2.8vw, 1.2rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 38rem;
  overflow-wrap: anywhere;
  font-weight: 500;
}
</style>
