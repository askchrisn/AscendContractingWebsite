<script setup lang="ts">
export interface PortfolioImage {
  src: string
  alt: string
}

defineProps<{
  heading?: string
  images: readonly PortfolioImage[]
  footnote?: string
}>()
</script>

<template>
  <section class="portfolio" aria-label="Project photography">
    <div class="inner">
      <h2 v-if="heading" class="h2">{{ heading }}</h2>
      <ul class="grid">
        <li v-for="(img, i) in images" :key="`${img.src}-${i}`" class="cell">
          <figure class="fig">
            <img
              class="img"
              :src="img.src"
              :alt="img.alt"
              loading="lazy"
              decoding="async"
              width="1600"
              height="900"
            />
          </figure>
        </li>
      </ul>
      <p v-if="footnote" class="footnote">{{ footnote }}</p>
    </div>
  </section>
</template>

<style scoped>
.portfolio {
  padding: clamp(2.25rem, 5vw, 3rem) max(1rem, env(safe-area-inset-right)) clamp(3rem, 7vw, 4rem)
    max(1rem, env(safe-area-inset-left));
  background: var(--color-bg);
  border-top: 1px solid rgba(30, 58, 95, 0.08);
}

.inner {
  max-width: 1120px;
  margin: 0 auto;
  min-width: 0;
}

.h2 {
  font-size: clamp(1.5rem, 3vw, 1.85rem);
  margin: 0 0 1.25rem;
  text-align: center;
}

.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 1rem;
}

.cell {
  margin: 0;
  min-width: 0;
}

.fig {
  margin: 0;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(30, 58, 95, 0.08);
  background: var(--color-surface);
}

.img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.footnote {
  margin: 1.25rem 0 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-muted);
  text-align: center;
  max-width: 62ch;
  margin-left: auto;
  margin-right: auto;
}
</style>
