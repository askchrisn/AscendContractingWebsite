<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageHero from '@/components/PageHero.vue'
import PortfolioGrid from '@/components/PortfolioGrid.vue'
import type { PortfolioImage } from '@/components/PortfolioGrid.vue'

const portfolioImages: readonly PortfolioImage[] = [
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
  {
    src: '/images/portfolio/roof-aerial-architectural-shingles.png',
    alt: 'Aerial view of a home with new dark gray architectural asphalt shingles, brick chimneys, and neat installation.',
  },
] as const

const serviceShowcase = [
  {
    title: 'Roofs',
    path: '/services/roofs',
    blurb: 'Storm-ready installs and honest inspections—coordinated with the rest of your project so the site stays organized.',
    image: '/images/portfolio/roof-aerial-architectural-shingles.png',
  },
  {
    title: 'Kitchens',
    path: '/services/kitchen',
    blurb: 'Layouts, cabinets, and finishes built around how your family actually cooks and gathers.',
    image: '/images/portfolio/portfolio-kitchen-shaker-island.png',
  },
  {
    title: 'Bathrooms',
    path: '/services/bathrooms',
    blurb: 'Waterproofing done right, fixtures you will not fight with, tile that feels intentional.',
    image: '/images/portfolio/portfolio-bath-primary-spa.png',
  },
] as const
</script>

<template>
  <div>
    <PageHero
      size="tall"
      bg-image="/images/portfolio/hero-general-contracting.png"
      eyebrow="General contractor · MA & NH · Licensed & insured"
      title="Kitchens, baths, and whole-home remodels."
      subtitle="Proudly serving Massachusetts and New Hampshire."
    >
      <div class="hero-actions">
        <RouterLink to="/contact" class="btn btn-primary">Get a free quote</RouterLink>
        <RouterLink to="/services" class="btn btn-ghost">Browse services</RouterLink>
      </div>
      <ul class="trust-strip" aria-label="Highlights">
        <li>Competitive pricing</li>
        <li>Realistic schedules</li>
        <li>Clean jobsites</li>
      </ul>
    </PageHero>

    <section class="section">
      <div class="wrap split">
        <div class="story-copy">
          <p class="kicker">Who we are</p>
          <h2 class="h2">Contractors who still answer the phone.</h2>
          <p class="lead">
            We are a neighborhood-focused general contractor. Whether you are opening up a floor
            plan, refreshing baths and kitchens, or coordinating exterior and interior work, we
            plan carefully, communicate often, and leave your property ready to enjoy—not a
            punch list nightmare.
          </p>
          <ul class="checks">
            <li>One point of contact from walkthrough to punch list</li>
            <li>Materials matched to your budget, not upsold for sport</li>
            <li>Tradespeople who respect your home and your schedule</li>
          </ul>
        </div>
        <figure class="story-photo">
          <img
            src="/images/portfolio/portfolio-kitchen-bright-glass.png"
            alt="Remodeled kitchen with bright cabinets, quality lighting, and durable surfaces."
            loading="lazy"
            decoding="async"
            width="900"
            height="1120"
          />
          <figcaption class="photo-cap">Residential remodels</figcaption>
        </figure>
      </div>

      <blockquote class="callout wrap">
        <p>
          From the first walkthrough to the final walkthrough, you get straight answers and
          tradespeople who show up when we say we will.
        </p>
      </blockquote>
    </section>

    <PortfolioGrid
      heading="Work that backs up our word"
      :images="portfolioImages"
      footnote="Mix of recent local project photography and representative finish examples—ask us for references and photos from jobs near you."
    />

    <section class="section section-showcase">
      <div class="wrap">
        <p class="kicker center">What we hang our hat on</p>
        <h2 class="h2 center">Core trades. One general contractor standard.</h2>
        <p class="intro center">
          Tap a card to see how we scope the work, what we watch for on site, and how we protect
          your home while construction is underway.
        </p>
        <div class="showcase-grid">
          <RouterLink
            v-for="s in serviceShowcase"
            :key="s.path"
            :to="s.path"
            class="showcase-card"
          >
            <div
              class="showcase-bg"
              :style="{ backgroundImage: `url('${s.image}')` }"
              role="presentation"
            />
            <div class="showcase-overlay" aria-hidden="true" />
            <div class="showcase-content">
              <h3 class="showcase-title">{{ s.title }}</h3>
              <p class="showcase-blurb">{{ s.blurb }}</p>
              <span class="showcase-cta">See details</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section cta">
      <div class="wrap cta-inner">
        <div>
          <p class="cta-kicker">Next step</p>
          <h2 class="h2 h2-light">Tell us what you want fixed or reimagined.</h2>
          <p class="cta-text">
            We will ask smart questions, schedule a site visit when it helps, and send a
            straightforward quote—no pressure and no mystery line items.
          </p>
        </div>
        <RouterLink to="/contact" class="btn btn-accent">Start the conversation</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.85rem;
}

.trust-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  list-style: none;
  margin: 1.75rem 0 0;
  padding: 0;
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.78);
}

.trust-strip li {
  position: relative;
  padding-left: 1rem;
}

.trust-strip li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.45em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 0 2px rgba(45, 106, 79, 0.35);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.5rem;
  min-height: 50px;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: 1rem;
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none;
  text-align: center;
  transition:
    background 0.18s ease,
    color 0.18s ease,
    border-color 0.18s ease,
    transform 0.18s ease;
  -webkit-tap-highlight-color: transparent;
}

.btn-primary {
  background: var(--color-accent);
  color: #fff;
  border: 2px solid var(--color-accent);
  box-shadow: var(--shadow-glow);
}

.btn-primary:hover {
  background: var(--color-accent-dark);
  border-color: var(--color-accent-dark);
  color: #fff;
  transform: translateY(-1px);
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.55);
}

.btn-ghost:hover {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.16);
}

.section {
  padding: clamp(2.75rem, 6vw, 4.25rem) max(1rem, env(safe-area-inset-right))
    clamp(2.75rem, 6vw, 4.25rem) max(1rem, env(safe-area-inset-left));
}

.wrap {
  max-width: 1120px;
  margin: 0 auto;
  min-width: 0;
}

.kicker {
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--color-accent-dark);
  margin: 0 0 0.5rem;
}

.kicker.center {
  text-align: center;
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 5vw, 3.5rem);
  align-items: center;
}

@media (max-width: 880px) {
  .split {
    grid-template-columns: 1fr;
  }
}

.h2 {
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 4vw, 2.35rem);
  font-weight: 700;
  margin: 0 0 1rem;
  line-height: 1.12;
  color: var(--color-ink);
}

.h2-light {
  color: #fff;
  margin: 0 0 0.65rem;
}

.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.intro {
  margin: 0 auto 2.25rem;
  max-width: 48ch;
  color: var(--color-muted);
  font-size: 1.05rem;
  line-height: 1.65;
}

.lead {
  font-size: 1.08rem;
  line-height: 1.7;
  color: var(--color-muted);
  margin: 0 0 1.25rem;
}

.checks {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--color-ink);
  line-height: 1.85;
}

.story-photo {
  margin: 0;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(28, 25, 23, 0.1);
  position: relative;
}

.story-photo img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  display: block;
}

.photo-cap {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0.65rem 1rem;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #fff;
  background: linear-gradient(to top, rgba(12, 10, 9, 0.85), transparent);
}

.callout {
  margin-top: clamp(2rem, 5vw, 3rem);
  padding: 1.35rem 1.5rem 1.35rem 1.25rem;
  border-left: 4px solid var(--color-accent);
  background: linear-gradient(90deg, var(--color-accent-soft), transparent 65%);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}

.callout p {
  margin: 0;
  font-size: clamp(1.05rem, 2.5vw, 1.2rem);
  font-weight: 600;
  line-height: 1.55;
  color: var(--color-ink);
  font-family: var(--font-display);
}

.section-showcase {
  background: var(--color-bg-elevated);
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.15rem;
}

@media (max-width: 900px) {
  .showcase-grid {
    grid-template-columns: 1fr;
  }
}

.showcase-card {
  position: relative;
  min-height: 300px;
  border-radius: var(--radius);
  overflow: hidden;
  text-decoration: none;
  color: #fff;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid rgba(28, 25, 23, 0.12);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.showcase-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 48px rgba(28, 25, 23, 0.18);
}

.showcase-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.45s ease;
}

.showcase-card:hover .showcase-bg {
  transform: scale(1.06);
}

.showcase-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(12, 10, 9, 0.94) 0%,
    rgba(28, 25, 23, 0.35) 48%,
    rgba(28, 25, 23, 0.1) 100%
  );
}

.showcase-content {
  position: relative;
  z-index: 1;
  padding: 1.5rem 1.35rem 1.35rem;
}

.showcase-title {
  font-family: var(--font-display);
  font-size: clamp(1.65rem, 3vw, 2rem);
  font-weight: 700;
  margin: 0 0 0.45rem;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}

.showcase-blurb {
  margin: 0 0 1rem;
  font-size: 0.95rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);
  max-width: 36ch;
}

.showcase-cta {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-accent-soft);
}

.showcase-card:hover .showcase-cta {
  color: #fff;
}

.cta {
  background: linear-gradient(125deg, #292524 0%, #1c1917 55%, #1b4332 100%);
  color: #fff;
}

.cta-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.75rem;
}

.cta-kicker {
  font-family: var(--font-display);
  margin: 0 0 0.35rem;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-accent-soft);
  font-weight: 600;
}

.cta-text {
  margin: 0;
  max-width: 46ch;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.65;
  font-size: 1.02rem;
}

.btn-accent {
  background: var(--color-accent);
  color: #fff;
  border: 2px solid var(--color-accent);
  white-space: nowrap;
  box-shadow: var(--shadow-glow);
}

.btn-accent:hover {
  background: var(--color-accent-dark);
  border-color: var(--color-accent-dark);
  color: #fff;
  transform: translateY(-1px);
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
</style>
