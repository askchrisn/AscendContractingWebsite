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
        <li
          v-for="(img, i) in images"
          :key="`${img.src}-${i}`"
          class="cell"
          :class="{ 'cell--wide': i === 0 && (images.length === 1 || images.length >= 3) }"
        >
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
  padding: clamp(2.5rem, 6vw, 3.5rem) max(1rem, env(safe-area-inset-right)) clamp(3rem, 8vw, 4.5rem)
    max(1rem, env(safe-area-inset-left));
  background: var(--color-surface);
  border-top: 1px solid rgba(28, 25, 23, 0.08);
}

.inner {
  max-width: 1120px;
  margin: 0 auto;
  min-width: 0;
}

.h2 {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-weight: 700;
  margin: 0 0 1.5rem;
  text-align: left;
  line-height: 1.15;
  color: var(--color-ink);
}

.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: 1rem;
}

@media (min-width: 900px) {
  .cell--wide {
    grid-column: span 2;
  }
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
  border: 1px solid rgba(28, 25, 23, 0.1);
  background: var(--color-bg);
  transition: transform 0.22s ease;
}

.fig:hover {
  transform: translateY(-3px);
}

.img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.cell--wide .img {
  aspect-ratio: 21 / 9;
}

@media (max-width: 899px) {
  .cell--wide .img {
    aspect-ratio: 16 / 10;
  }
}

.footnote {
  margin: 1.35rem 0 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--color-muted);
  text-align: left;
  max-width: 65ch;
}
</style>
