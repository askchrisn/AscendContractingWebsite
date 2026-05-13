import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home' },
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue'),
      meta: { title: 'Services' },
    },
    {
      path: '/services/roofs',
      name: 'services-roofs',
      component: () => import('@/views/services/RoofsView.vue'),
      meta: { title: 'Roofing' },
    },
    {
      path: '/services/kitchen',
      name: 'services-kitchen',
      component: () => import('@/views/services/KitchenView.vue'),
      meta: { title: 'Kitchen Remodels' },
    },
    {
      path: '/services/bathrooms',
      name: 'services-bathrooms',
      component: () => import('@/views/services/BathroomsView.vue'),
      meta: { title: 'Bathroom Remodels' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: { title: 'Contact Us' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const base = 'Ascend Contracting'
  document.title =
    typeof to.meta.title === 'string' && to.meta.title
      ? `${to.meta.title} · ${base}`
      : base
})

export default router
