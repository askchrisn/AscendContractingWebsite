<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageHero from '@/components/PageHero.vue'
import PortfolioGrid from '@/components/PortfolioGrid.vue'
import type { PortfolioImage } from '@/components/PortfolioGrid.vue'

const portfolioImages: readonly PortfolioImage[] = [
  {
    src: '/images/portfolio/roof-aerial-architectural-shingles.png',
    alt: 'Aerial view of a home with new dark gray architectural asphalt shingles, brick chimneys, and neat installation.',
  },
  {
    src: '/images/portfolio/portfolio-kitchen-shaker-island.png',
    alt: 'Bright kitchen with white shaker cabinets, dark quartz countertops, subway tile backsplash, and a central island.',
  },
  {
    src: '/images/portfolio/portfolio-kitchen-bright-glass.png',
    alt: 'Airy kitchen with white cabinets, glass uppers, marble-look counters, and black accent hardware.',
  },
  {
    src: '/images/portfolio/portfolio-bath-primary-spa.png',
    alt: 'Primary bathroom with walk-in glass shower, freestanding tub, and double vanity.',
  },
  {
    src: '/images/portfolio/portfolio-bath-walk-in-modern.png',
    alt: 'Modern bathroom with walk-in shower, floating vanity, and contrasting tile details.',
  },
] as const
</script>

<template>
  <div>
    <PageHero
      eyebrow="Local · Licensed · Insured"
      title="Build upward with a crew you can trust."
      subtitle="Ascend Contracting handles roofing and interior remodels with clear estimates, respectful crews, and workmanship that holds up to real life."
    >
      <div class="hero-actions">
        <RouterLink to="/contact" class="btn btn-primary">Request a free quote</RouterLink>
        <RouterLink to="/services" class="btn btn-ghost">See our services</RouterLink>
      </div>
    </PageHero>

    <section class="section">
      <div class="wrap split">
        <div>
          <h2 class="h2">Who we are</h2>
          <p class="lead">
            We are a neighborhood-focused contracting team. Whether you need a roof that sheds
            storms or a kitchen that fits how your family actually cooks, we plan the work
            carefully, communicate often, and leave your property tidy.
          </p>
          <ul class="checks">
            <li>Written scopes and realistic schedules</li>
            <li>Respect for your home and your time</li>
            <li>Quality materials matched to your budget</li>
          </ul>
        </div>
        <div class="card card-stat">
          <p class="stat-label">On your side</p>
          <p class="stat">
            From first walkthrough to final punch list, you get a single point of contact and
            tradespeople who show up when we say we will.
          </p>
        </div>
      </div>
    </section>

    <PortfolioGrid
      heading="Work we are proud to stand behind"
      :images="portfolioImages"
      footnote="The aerial roof photo is from a recent replacement. Interior images are representative of finishes and layouts we often build—ask us for photos from jobs near you."
    />

    <section class="section section-alt">
      <div class="wrap">
        <h2 class="h2 center">What we do best</h2>
        <p class="intro center">
          Three core specialties—each backed by experience on local homes like yours.
        </p>
        <div class="grid">
          <article class="tile">
            <h3>Roofs</h3>
            <p>Repairs, replacements, and storm-ready systems with ventilation and flashing done right.</p>
            <RouterLink to="/services/roofs" class="tile-link">Learn more →</RouterLink>
          </article>
          <article class="tile">
            <h3>Kitchen</h3>
            <p>Layouts, cabinets, surfaces, and lighting that make the heart of your home work harder.</p>
            <RouterLink to="/services/kitchen" class="tile-link">Learn more →</RouterLink>
          </article>
          <article class="tile">
            <h3>Bathrooms</h3>
            <p>Waterproofing, fixtures, tile, and storage—spa feel or practical family bath, your call.</p>
            <RouterLink to="/services/bathrooms" class="tile-link">Learn more →</RouterLink>
          </article>
        </div>
      </div>
    </section>

    <section class="section cta">
      <div class="wrap cta-inner">
        <div>
          <h2 class="h2 h2-light">Ready to talk through your project?</h2>
          <p class="cta-text">
            Tell us what you are hoping to change. We will follow up with questions, a site visit
            if it helps, and a straightforward quote—no pressure.
          </p>
        </div>
        <RouterLink to="/contact" class="btn btn-accent">Contact us</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.35rem;
  min-height: 48px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  transition:
    background 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease;
  -webkit-tap-highlight-color: transparent;
}

.btn-primary {
  background: var(--color-accent);
  color: #1a1a1a;
  border: 2px solid var(--color-accent);
}

.btn-primary:hover {
  background: var(--color-accent-dark);
  border-color: var(--color-accent-dark);
  color: #111;
}

.btn-ghost {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.45);
}

.btn-ghost:hover {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

.section {
  padding: clamp(2.5rem, 6vw, 4rem) max(1rem, env(safe-area-inset-right)) clamp(2.5rem, 6vw, 4rem)
    max(1rem, env(safe-area-inset-left));
}

.wrap {
  max-width: 1120px;
  margin: 0 auto;
  min-width: 0;
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

@media (max-width: 800px) {
  .split {
    grid-template-columns: 1fr;
  }
}

.h2 {
  font-size: clamp(1.65rem, 3vw, 2rem);
  margin: 0 0 1rem;
}

.h2-light {
  color: #fff;
  margin: 0 0 0.75rem;
}

.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.intro {
  margin: 0 auto 2.5rem;
  max-width: 52ch;
  color: var(--color-muted);
  font-size: 1.05rem;
}

.lead {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-muted);
  margin: 0 0 1.25rem;
}

.checks {
  margin: 0;
  padding-left: 1.15rem;
  color: var(--color-ink);
  line-height: 1.8;
}

.card {
  background: var(--color-surface);
  border-radius: var(--radius);
  padding: 1.75rem;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(30, 58, 95, 0.06);
}

.card-stat {
  align-self: center;
}

.stat-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-deep);
  font-weight: 600;
  margin: 0 0 0.5rem;
}

.stat {
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: var(--color-muted);
}

.section-alt {
  background: #ebe7de;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.tile {
  background: var(--color-surface);
  border-radius: var(--radius);
  padding: 1.75rem;
  border: 1px solid rgba(30, 58, 95, 0.08);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}

.tile h3 {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
}

.tile p {
  margin: 0 0 1rem;
  flex: 1;
  color: var(--color-muted);
  line-height: 1.65;
  font-size: 0.98rem;
}

.tile-link {
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
  color: var(--color-deep);
}

.tile-link:hover {
  color: var(--color-accent-dark);
}

.cta {
  background: linear-gradient(135deg, #1e3a5f, #243d52);
  color: #fff;
}

.cta-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

@media (max-width: 640px) {
  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .cta-inner {
    flex-direction: column;
    align-items: stretch;
  }

  .cta-inner .btn-accent {
    width: 100%;
    justify-content: center;
    white-space: normal;
  }
}

.cta-text {
  margin: 0;
  max-width: 52ch;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.65;
}

.btn-accent {
  background: var(--color-accent);
  color: #1a1a1a;
  border: 2px solid var(--color-accent);
  white-space: nowrap;
}

.btn-accent:hover {
  background: #ddb82e;
  border-color: #ddb82e;
}
</style>
