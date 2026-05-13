<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="inner">
      <div class="col brand">
        <p class="logo">Ascend Contracting</p>
        <p class="tag">
          Licensed general contractor. Clear scopes, respectful crews, and workmanship that holds
          up to real life in your home.
        </p>
      </div>
      <div class="col">
        <p class="heading">Explore</p>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
      <div class="col">
        <p class="heading">Trades</p>
        <RouterLink to="/services/roofs">Roofs</RouterLink>
        <RouterLink to="/services/kitchen">Kitchen</RouterLink>
        <RouterLink to="/services/bathrooms">Bathrooms</RouterLink>
      </div>
      <div class="col">
        <p class="heading">Get in touch</p>
        <a href="tel:+15551234567">(555) 123-4567</a>
        <a href="mailto:hello@ascendcontracting.example">hello@ascendcontracting.example</a>
        <p class="hours">Mon–Sat · 7am–6pm</p>
      </div>
    </div>
    <div class="bar">
      <p>© {{ new Date().getFullYear() }} Ascend Contracting. Licensed & insured.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-footer);
  color: rgba(255, 255, 255, 0.9);
  margin-top: auto;
}

.inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: clamp(2.25rem, 5vw, 3rem) max(1.25rem, env(safe-area-inset-right)) clamp(2rem, 5vw, 2.5rem)
    max(1.25rem, env(safe-area-inset-left));
  display: grid;
  grid-template-columns: 1.4fr repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 900px) {
  .inner {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 520px) {
  .inner {
    grid-template-columns: 1fr;
  }
}

.logo {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.35rem;
  margin: 0 0 0.5rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.tag {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.72);
  max-width: 280px;
}

.heading {
  font-family: var(--font-display);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: 600;
  color: var(--color-accent-soft);
  margin: 0 0 0.85rem;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.col a {
  color: rgba(255, 255, 255, 0.88);
  text-decoration: none;
  font-size: 0.95rem;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  overflow-wrap: anywhere;
}

.col a:hover {
  color: #fff;
  text-decoration: underline;
}

.hours {
  margin: 0.35rem 0 0;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.65);
}

.bar {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 1rem max(1.25rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom))
    max(1.25rem, env(safe-area-inset-left));
  text-align: center;
}

.bar p {
  margin: 0;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.55);
}
</style>
