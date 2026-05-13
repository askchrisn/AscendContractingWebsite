<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageHero from '@/components/PageHero.vue'

const services = [
  {
    title: 'Roofs',
    path: '/services/roofs',
    blurb:
      'Leak fixes, full tear-offs, and new installs with attention to decking, ice barrier, and ventilation.',
  },
  {
    title: 'Kitchen',
    path: '/services/kitchen',
    blurb:
      'Cabinetry, counters, flooring, lighting, and layout tweaks that make cooking and gathering easier.',
  },
  {
    title: 'Bathrooms',
    path: '/services/bathrooms',
    blurb:
      'Waterproof builds, accessible options, tile, fixtures, and storage tailored to your daily routine.',
  },
] as const
</script>

<template>
  <div>
    <PageHero
      eyebrow="Services"
      title="Craftsmanship across the projects that matter most."
      subtitle="Pick a category to see how we approach the work, what we typically include, and how we keep you informed from estimate to completion."
    />

    <section class="section">
      <div class="wrap list">
        <article v-for="s in services" :key="s.path" class="row">
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
        <p>Not sure where your project fits? Describe it on our contact form—we will point you in the right direction.</p>
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
  gap: 1.25rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 1.75rem 1.5rem;
  background: var(--color-surface);
  border-radius: var(--radius);
  border: 1px solid rgba(30, 58, 95, 0.08);
  box-shadow: var(--shadow-sm);
}

.row-main {
  flex: 1;
  min-width: 0;
}

@media (max-width: 640px) {
  .row {
    flex-direction: column;
    align-items: stretch;
    padding: 1.35rem 1.15rem;
  }

  .row .btn {
    width: 100%;
    min-height: 52px;
    font-size: 1rem;
    -webkit-tap-highlight-color: transparent;
  }

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
  margin: 0 0 0.35rem;
  font-size: 1.45rem;
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
  padding: 0.65rem 1.2rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
  background: var(--color-deep);
  color: #fff;
  border: 2px solid var(--color-deep);
}

.btn:hover {
  background: var(--color-deep-hover);
  border-color: var(--color-deep-hover);
}

.banner {
  background: #ebe7de;
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
}

.btn-dark {
  background: var(--color-ink);
  border-color: var(--color-ink);
}

.btn-dark:hover {
  background: #2a3545;
  border-color: #2a3545;
}
</style>
