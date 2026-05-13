<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageHero from '@/components/PageHero.vue'
import PortfolioGrid from '@/components/PortfolioGrid.vue'
import type { PortfolioImage } from '@/components/PortfolioGrid.vue'

const kitchenPhotos: readonly PortfolioImage[] = [
  {
    src: '/images/portfolio/portfolio-kitchen-shaker-island.png',
    alt: 'Kitchen with white shaker cabinets, island seating, pendant lighting, and quartz countertops.',
  },
  {
    src: '/images/portfolio/portfolio-kitchen-bright-glass.png',
    alt: 'Kitchen with glass-front uppers, marble-look counters, and layered lighting.',
  },
] as const

const bullets = [
  'Cabinet refacing or new layouts with improved work triangles',
  'Countertops, backsplashes, and durable flooring suited to traffic',
  'Lighting layers: task, ambient, and accent for work and mood',
  'Appliance fit-up, venting, and subtle electrical/plumbing coordination',
  'Dust control and phased work when you are living through the remodel',
] as const
</script>

<template>
  <div>
    <PageHero
      bg-image="/images/portfolio/portfolio-kitchen-shaker-island.png"
      eyebrow="Kitchen"
      title="Kitchens built around the way your household really moves."
      subtitle="From quick refreshes to full gut remodels, we align layout, storage, and finishes with how you cook, clean, and connect. We build with care so details line up when it all comes together."
    />

    <PortfolioGrid
      heading="Kitchen inspiration"
      :images="kitchenPhotos"
      footnote="Representative photography of finishes and layouts we commonly install—your selections and layout will be tailored to your home."
    />

    <section class="section">
      <div class="wrap prose">
        <h2>Kitchen remodels with a plan</h2>
        <p>
          We start with listening: who uses the space, where bottlenecks happen, and what you
          want to feel when the day winds down at the island. Then we translate that into a clear
          scope so surprises are minimized and decisions stay manageable.
        </p>
        <ul>
          <li v-for="b in bullets" :key="b">{{ b }}</li>
        </ul>
        <p>
          Have a designer or architect already? We are happy to collaborate. Need suggestions on
          materials that balance cost and longevity? We will share what we have seen hold up in
          local homes.
        </p>
        <RouterLink to="/contact" class="cta">Tell us about your kitchen →</RouterLink>
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
