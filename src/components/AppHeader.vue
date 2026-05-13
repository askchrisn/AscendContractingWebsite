<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)
const servicesOpen = ref(false)

function closeMobile() {
  mobileOpen.value = false
  servicesOpen.value = false
}

function toggleServices() {
  servicesOpen.value = !servicesOpen.value
}

function onResize() {
  if (window.innerWidth >= 900) {
    mobileOpen.value = false
    servicesOpen.value = false
  }
}

watch(mobileOpen, (open) => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
})

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
    servicesOpen.value = false
  },
)

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  document.documentElement.style.overflow = ''
})
</script>

<template>
  <header class="header">
    <button
      v-if="mobileOpen"
      type="button"
      class="nav-backdrop"
      aria-label="Close menu"
      @click="closeMobile"
    />
    <div class="inner">
      <RouterLink to="/" class="brand" @click="closeMobile">
        <span class="brand-accent" aria-hidden="true" />
        <span class="brand-text">
          <span class="brand-name">Ascend</span>
          <span class="brand-sub">Contracting</span>
        </span>
      </RouterLink>

      <button
        type="button"
        class="menu-toggle"
        :aria-expanded="mobileOpen"
        aria-controls="site-nav"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="sr-only">Menu</span>
        <span class="bar" />
        <span class="bar" />
        <span class="bar" />
      </button>

      <nav id="site-nav" class="nav" :class="{ 'nav--open': mobileOpen }">
        <div class="nav-links">
          <RouterLink to="/" class="nav-link" active-class="nav-link--active" @click="closeMobile">
            Home
          </RouterLink>

          <div class="nav-group" :class="{ 'nav-group--open': servicesOpen }">
            <button
              type="button"
              class="nav-link nav-link--trigger"
              :class="{ 'nav-link--active': route.path.startsWith('/services') }"
              :aria-expanded="servicesOpen"
              aria-haspopup="true"
              @click="toggleServices"
            >
              Services
              <svg class="chev" width="11" height="11" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" />
              </svg>
            </button>
            <div class="subnav">
              <RouterLink to="/services/roofs" class="subnav-link" @click="closeMobile">
                Roofs
              </RouterLink>
              <RouterLink to="/services/kitchen" class="subnav-link" @click="closeMobile">
                Kitchen
              </RouterLink>
              <RouterLink to="/services/bathrooms" class="subnav-link" @click="closeMobile">
                Bathrooms
              </RouterLink>
            </div>
          </div>
        </div>

        <RouterLink
          to="/contact"
          class="nav-cta"
          active-class="nav-cta--active"
          @click="closeMobile"
        >
          Get a quote
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding-top: env(safe-area-inset-top, 0px);
  background: var(--color-surface);
  border-bottom: 1px solid rgba(28, 25, 23, 0.08);
}

.inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 max(1rem, env(safe-area-inset-left)) 0 max(1rem, env(safe-area-inset-right));
  height: var(--header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
}

.nav-backdrop {
  display: none;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex-shrink: 0;
}

.brand-accent {
  width: 4px;
  height: 34px;
  border-radius: 2px;
  background: var(--color-accent);
  flex-shrink: 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
  min-width: 0;
}

.brand-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.18rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--color-ink);
}

.brand-sub {
  font-size: 0.66rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-muted);
  font-weight: 600;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid rgba(28, 25, 23, 0.12);
  background: var(--color-surface);
  cursor: pointer;
  border-radius: 8px;
  -webkit-tap-highlight-color: transparent;
}

.menu-toggle:hover {
  border-color: rgba(28, 25, 23, 0.22);
  background: var(--color-bg);
}

.bar {
  display: block;
  height: 2px;
  width: 18px;
  margin: 0 auto;
  background: var(--color-ink);
  border-radius: 1px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.15rem;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.45rem 0.65rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--color-muted);
  text-decoration: none;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  transition: color 0.15s ease;
}

.nav-link:hover {
  color: var(--color-ink);
  background: transparent;
}

.nav-link--active {
  color: var(--color-ink);
  font-weight: 600;
}

.nav-group {
  position: relative;
}

.subnav {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.4rem;
  min-width: 208px;
  padding: 0.4rem;
  background: var(--color-surface);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(28, 25, 23, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
  transition:
    opacity 0.16s ease,
    transform 0.16s ease,
    visibility 0.16s;
}

.nav-group:hover .subnav,
.nav-group:focus-within .subnav,
.nav-group--open .subnav {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.chev {
  opacity: 0.75;
  transition: transform 0.15s ease;
}

.nav-group--open .chev {
  transform: rotate(180deg);
}

.subnav-link {
  display: block;
  padding: 0.5rem 0.7rem;
  border-radius: 6px;
  font-size: 0.9rem;
  color: var(--color-ink);
  text-decoration: none;
  font-weight: 500;
}

.subnav-link:hover {
  background: var(--color-bg);
}

.subnav-link.router-link-active,
.subnav-link--active {
  color: var(--color-accent-dark);
  font-weight: 600;
  background: var(--color-accent-soft);
}

.nav-cta {
  margin-left: 0.25rem;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  background: var(--color-accent);
  border: 1px solid var(--color-accent);
  white-space: nowrap;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}

.nav-cta:hover {
  background: var(--color-accent-dark);
  border-color: var(--color-accent-dark);
  color: #fff;
}

.nav-cta--active {
  background: var(--color-accent-dark);
  border-color: var(--color-accent-dark);
  color: #fff;
}

@media (min-width: 900px) {
  .nav-links {
    padding-right: 1rem;
    margin-right: 0.25rem;
    border-right: 1px solid rgba(28, 25, 23, 0.1);
  }
}

@media (max-width: 899px) {
  .nav-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 98;
    background: rgba(12, 10, 9, 0.35);
    border: none;
    padding: 0;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .menu-toggle {
    display: flex;
  }

  .nav {
    position: fixed;
    z-index: 99;
    top: calc(var(--header-h) + env(safe-area-inset-top, 0px));
    left: 0;
    right: 0;
    height: calc(100dvh - var(--header-h) - env(safe-area-inset-top, 0px));
    max-height: calc(100vh - var(--header-h) - env(safe-area-inset-top, 0px));
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0.5rem max(1rem, env(safe-area-inset-left)) max(1.25rem, env(safe-area-inset-bottom))
      max(1rem, env(safe-area-inset-right));
    background: var(--color-surface);
    border-top: 1px solid rgba(28, 25, 23, 0.08);
    transform: translateX(100%);
    transition: transform 0.22s ease;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }

  .nav--open {
    transform: translateX(0);
  }

  .nav-links {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    border-right: none;
    padding-right: 0;
    margin-right: 0;
  }

  .nav-link {
    min-height: 48px;
    padding: 0.75rem 0.5rem;
    font-size: 1.05rem;
    justify-content: flex-start;
    color: var(--color-ink);
    -webkit-tap-highlight-color: transparent;
  }

  .nav-link--trigger {
    width: 100%;
    justify-content: space-between;
  }

  .nav-cta {
    margin: 1rem 0 0;
    justify-content: center;
    min-height: 50px;
    text-align: center;
    border-radius: 10px;
  }

  .subnav {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    border: none;
    background: var(--color-bg);
    margin: 0.15rem 0 0.35rem;
    display: none;
    border-radius: 8px;
    padding: 0.35rem;
  }

  .nav-group--open .subnav {
    display: block;
  }

  .nav-group:hover .subnav {
    display: none;
  }

  .nav-group--open:hover .subnav {
    display: block;
  }

  .subnav-link {
    min-height: 46px;
    display: flex;
    align-items: center;
    padding: 0.55rem 0.85rem;
    font-size: 0.98rem;
    -webkit-tap-highlight-color: transparent;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav {
    transition: none;
  }
}
</style>
