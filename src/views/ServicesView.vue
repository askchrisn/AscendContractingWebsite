<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageHero from '@/components/PageHero.vue'

const services = [
  {
    title: 'Roofs',
    path: '/services/roofs',
    image: '/images/portfolio/roof-aerial-architectural-shingles.png',
    blurb:
      'Leak fixes, full tear-offs, and new installs with attention to decking, ice barrier, and ventilation.',
  },
  {
    title: 'Kitchen',
    path: '/services/kitchen',
    image: '/images/portfolio/portfolio-kitchen-shaker-island.png',
    blurb:
      'Cabinetry, counters, flooring, lighting, and layout tweaks that make cooking and gathering easier.',
  },
  {
    title: 'Bathrooms',
    path: '/services/bathrooms',
    image: '/images/portfolio/portfolio-bath-primary-spa.png',
    blurb:
      'Waterproof builds, accessible options, tile, fixtures, and storage tailored to your daily routine.',
  },
] as const
</script>

<template>
  <div>
    <PageHero
      eyebrow="Services"
      title="The work we stake our name on."
      subtitle="Roofing that sheds weather. Kitchens and baths built for real mornings and real messes. Tap a category to see how we run a job from estimate to final walkthrough."
    />

    <section class="section">
      <div class="wrap list">
        <article v-for="s in services" :key="s.path" class="row">
          <div class="thumb-wrap" aria-hidden="true">
            <div class="thumb" :style="{ backgroundImage: `url('${s.image}')` }" />
          </div>
          <div class="row-main">
            <h2 class="title">{{ s.title }}</h2>
            <p class="blurb">{{ s.blurb }}</p>
          </div>
          <RouterLink :to="s.path" class="btn">View details</RouterLink>
        </article>
      </div>
    </section>

    <section class="banner">
      <div class="wrap banner-inner">
        <p>
          Not sure where your project fits? Describe it on our contact form—we will point you in
          the right direction.
        </p>
        <RouterLink to="/contact" class="btn btn-dark">Request a quote</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section {
  padding: clamp(2.25rem, 5vw, 3rem) max(1rem, env(safe-area-inset-right)) clamp(3rem, 7vw, 4rem)
    max(1rem, env(safe-area-inset-left));
}

.wrap {
  max-width: 1120px;
  margin: 0 auto;
  min-width: 0;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.row {
  display: grid;
  grid-template-columns: 160px 1fr auto;
  align-items: center;
  gap: 1.35rem;
  padding: 1.15rem 1.35rem;
  background: var(--color-surface);
  border-radius: var(--radius);
  border: 1px solid rgba(28, 25, 23, 0.1);
  box-shadow: var(--shadow-sm);
}

.thumb-wrap {
  border-radius: var(--radius-sm);
  overflow: hidden;
  aspect-ratio: 4 / 3;
  min-height: 0;
}

.thumb {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.35s ease;
}

.row:hover .thumb {
  transform: scale(1.05);
}

.row-main {
  min-width: 0;
}

@media (max-width: 720px) {
  .row {
    grid-template-columns: 1fr;
    padding: 1.15rem;
  }

  .thumb-wrap {
    aspect-ratio: 16 / 9;
    max-height: 200px;
  }

  .row .btn {
    width: 100%;
    min-height: 52px;
    justify-content: center;
    font-size: 0.9rem;
    -webkit-tap-highlight-color: transparent;
  }
}

@media (max-width: 640px) {
  .banner-inner {
    flex-direction: column;
    align-items: stretch;
  }

  .banner-inner .btn {
    width: 100%;
    min-height: 52px;
    justify-content: center;
    font-size: 1rem;
    -webkit-tap-highlight-color: transparent;
  }
}

.title {
  font-family: var(--font-display);
  margin: 0 0 0.35rem;
  font-size: 1.55rem;
  font-weight: 700;
}

.blurb {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.65;
  max-width: 60ch;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 1.25rem;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-family: var(--font-display);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  background: var(--color-accent);
  color: #fff;
  border: 2px solid var(--color-accent);
  white-space: nowrap;
}

.btn:hover {
  background: var(--color-accent-dark);
  border-color: var(--color-accent-dark);
  color: #fff;
}

.banner {
  background: var(--color-bg-elevated);
  padding: clamp(2rem, 5vw, 2.5rem) max(1rem, env(safe-area-inset-right)) clamp(2rem, 5vw, 2.5rem)
    max(1rem, env(safe-area-inset-left));
}

.banner-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
}

.banner-inner p {
  margin: 0;
  max-width: 55ch;
  color: var(--color-muted);
  line-height: 1.65;
  font-size: 1.02rem;
}

.btn-dark {
  background: var(--color-footer);
  border-color: var(--color-footer);
  color: #fff;
}

.btn-dark:hover {
  background: var(--color-footer-elevated);
  border-color: var(--color-footer-elevated);
  color: #fff;
}
</style>
