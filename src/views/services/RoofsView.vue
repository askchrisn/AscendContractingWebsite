<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageHero from '@/components/PageHero.vue'
import PortfolioGrid from '@/components/PortfolioGrid.vue'
import type { PortfolioImage } from '@/components/PortfolioGrid.vue'

const roofPhotos: readonly PortfolioImage[] = [
  {
    src: '/images/portfolio/roof-aerial-architectural-shingles.png',
    alt: 'Aerial view of a home showing new architectural asphalt shingles, ridge lines, and chimney flashing details.',
  },
] as const

const bullets = [
  'Full roof replacements and targeted repairs',
  'Asphalt architectural shingles, metal, and low-slope options discussed in plain language',
  'Decking inspection, underlayment, ice & water shield, and ridge ventilation',
  'Flashing details at chimneys, walls, and penetrations—where leaks like to start',
  'Cleanup and magnet sweep; we treat your yard like our own',
] as const
</script>

<template>
  <div>
    <PageHero
      bg-image="/images/portfolio/roof-aerial-architectural-shingles.png"
      eyebrow="Roofing"
      title="Roofs that shed weather and protect what is underneath."
      subtitle="Whether you are seeing granules in the gutter or planning ahead before selling, we inspect honestly, document what we find, and recommend repairs or replacement only when it makes sense."
    />

    <PortfolioGrid
      heading="Roofing in the field"
      :images="roofPhotos"
      footnote="Drone photo from a completed shingle installation—cleanup and magnet sweep included on every full replacement."
    />

    <section class="section">
      <div class="wrap prose">
        <h2>How we approach roofing</h2>
        <p>
          Every roof tells a story from the attic out. We check ventilation, moisture patterns,
          and structural soundness. That way your investment addresses the
          whole system, not just the visible shingles.
        </p>
        <ul>
          <li v-for="b in bullets" :key="b">{{ b }}</li>
        </ul>
        <p>
          Storm damage? We can help you understand what urgent temporary protection looks like
          while options are weighed with your insurance process, if applicable.
        </p>
        <RouterLink to="/contact" class="cta">Discuss your roof →</RouterLink>
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
