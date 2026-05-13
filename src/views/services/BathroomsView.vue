<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageHero from '@/components/PageHero.vue'
import PortfolioGrid from '@/components/PortfolioGrid.vue'
import type { PortfolioImage } from '@/components/PortfolioGrid.vue'

const bathPhotos: readonly PortfolioImage[] = [
  {
    src: '/images/portfolio/portfolio-bath-primary-spa.png',
    alt: 'Spa-like bathroom with walk-in shower, freestanding tub, and double vanity.',
  },
  {
    src: '/images/portfolio/portfolio-bath-walk-in-modern.png',
    alt: 'Modern bathroom with walk-in shower, floating vanity, and crisp tile details.',
  },
] as const

const bullets = [
  'Waterproofing systems behind tile are a non-negotiable for us',
  'Walk-in showers, tub-shower combos, and accessibility minded layouts',
  'Ventilation upgrades to move moisture out efficiently',
  'Fixtures and finishes chosen for cleaning ease and daily comfort',
  'Coordinated tile layouts and niches that feel intentional, not cramped',
] as const
</script>

<template>
  <div>
    <PageHero
      bg-image="/images/portfolio/portfolio-bath-primary-spa.png"
      eyebrow="Bathrooms"
      title="Bathrooms that feel good today and stay solid tomorrow."
      subtitle="Moisture management, thoughtful layout, and finishes you will love. We build baths that work for busy mornings and slow evenings alike."
    />

    <PortfolioGrid
      heading="Bathroom inspiration"
      :images="bathPhotos"
      footnote="Representative photography of styles we build toward—waterproofing, ventilation, and layout are always matched to your space."
    />

    <section class="section">
      <div class="wrap prose">
        <h2>Bathroom work done right, layer by layer</h2>
        <p>
          Behind the pretty tile is where a bath succeeds or fails. We take substrate,
          waterproofing, and slope seriously so you are not chasing grout issues a year later.
        </p>
        <ul>
          <li v-for="b in bullets" :key="b">{{ b }}</li>
        </ul>
        <p>
          Powder room glow-up or primary suite retreat—we scale the scope to your goals and
          budget, and we flag trade-offs early so you can choose with confidence.
        </p>
        <RouterLink to="/contact" class="cta">Plan your bathroom project →</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section {
  padding: clamp(2.25rem, 5vw, 3rem) max(1rem, env(safe-area-inset-right)) clamp(3rem, 7vw, 4.5rem)
    max(1rem, env(safe-area-inset-left));
}

.wrap {
  max-width: 720px;
  margin: 0 auto;
  min-width: 0;
}

.prose h2 {
  font-family: var(--font-display);
  font-weight: 700;
  margin: 0 0 1rem;
  font-size: 1.55rem;
}

.prose p {
  margin: 0 0 1rem;
  color: var(--color-muted);
  line-height: 1.7;
  overflow-wrap: anywhere;
}

.prose ul {
  margin: 0 0 1.25rem;
  padding-left: 1.2rem;
  color: var(--color-ink);
  line-height: 1.8;
}

.cta {
  display: inline-block;
  font-weight: 700;
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.88rem;
  margin-top: 0.5rem;
}
</style>
