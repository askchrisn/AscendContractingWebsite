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
        <span class="brand-mark" aria-hidden="true" />
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
            <svg class="chev" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" />
            </svg>
          </button>
          <div class="subnav">
            <RouterLink
              to="/services"
              class="subnav-link"
              :class="{ 'subnav-link--active': route.path === '/services' }"
              @click="closeMobile"
            >
              All services
            </RouterLink>
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

        <RouterLink
          to="/contact"
          class="nav-link nav-cta"
          active-class="nav-cta--active"
          @click="closeMobile"
        >
          Request a quote
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
  background: rgba(246, 244, 239, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(30, 58, 95, 0.08);
}

.inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 max(1rem, env(safe-area-inset-left)) 0 max(1rem, env(safe-area-inset-right));
  height: var(--header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.nav-backdrop {
  display: none;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
}

.brand-mark {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: linear-gradient(145deg, var(--color-deep), #152a45);
  box-shadow: var(--shadow-sm);
  position: relative;
}

.brand-mark::before {
  content: '';
  position: absolute;
  inset: 8px;
  border: 2px solid var(--color-accent);
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  clip-path: polygon(0 100%, 50% 20%, 100% 100%);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}

.brand-sub {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-muted);
  font-weight: 500;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 8px;
  -webkit-tap-highlight-color: transparent;
}

.menu-toggle:hover {
  background: rgba(30, 58, 95, 0.06);
}

.bar {
  display: block;
  height: 2px;
  width: 22px;
  margin: 0 auto;
  background: var(--color-deep);
  border-radius: 1px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 0.85rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--color-ink);
  text-decoration: none;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
}

.nav-link:hover {
  background: rgba(30, 58, 95, 0.06);
}

.nav-link--active {
  color: var(--color-deep);
  background: rgba(30, 58, 95, 0.08);
}

.nav-group {
  position: relative;
}

.subnav {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.35rem;
  min-width: 200px;
  padding: 0.5rem;
  background: var(--color-surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(30, 58, 95, 0.08);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition:
    opacity 0.15s ease,
    transform 0.15s ease,
    visibility 0.15s;
}

.nav-group:hover .subnav,
.nav-group:focus-within .subnav,
.nav-group--open .subnav {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.chev {
  transition: transform 0.15s ease;
}

.nav-group--open .chev {
  transform: rotate(180deg);
}

.subnav-link {
  display: block;
  padding: 0.55rem 0.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--color-ink);
  text-decoration: none;
}

.subnav-link:hover {
  background: rgba(30, 58, 95, 0.06);
}

.subnav-link.router-link-active,
.subnav-link--active {
  color: var(--color-deep);
  font-weight: 600;
  background: rgba(201, 162, 39, 0.12);
}

.nav-cta {
  margin-left: 0.35rem;
  background: var(--color-deep);
  color: #fff !important;
}

.nav-cta:hover {
  background: var(--color-deep-hover);
}

.nav-cta--active {
  background: var(--color-deep-hover);
}

@media (max-width: 899px) {
  .nav-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 98;
    background: rgba(26, 35, 50, 0.45);
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
    padding: 0.75rem max(1rem, env(safe-area-inset-left)) max(1.5rem, env(safe-area-inset-bottom))
      max(1rem, env(safe-area-inset-right));
    background: var(--color-bg);
    border-top: 1px solid rgba(30, 58, 95, 0.08);
    transform: translateX(100%);
    transition: transform 0.22s ease;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }

  .nav--open {
    transform: translateX(0);
  }

  .nav-link {
    min-height: 48px;
    padding: 0.75rem 1rem;
    font-size: 1.05rem;
    justify-content: flex-start;
    -webkit-tap-highlight-color: transparent;
  }

  .nav-link--trigger {
    width: 100%;
    justify-content: space-between;
  }

  .nav-cta {
    margin-left: 0;
    margin-top: 0.5rem;
    justify-content: center;
    min-height: 52px;
    font-size: 1rem;
  }

  .subnav {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    border: none;
    background: rgba(30, 58, 95, 0.04);
    margin: 0.25rem 0 0.5rem;
    display: none;
    border-radius: 10px;
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
    min-height: 48px;
    display: flex;
    align-items: center;
    padding: 0.65rem 1rem;
    font-size: 1rem;
    -webkit-tap-highlight-color: transparent;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav {
    transition: none;
  }
}
</style>
