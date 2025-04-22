import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/offerings',
      name: 'offerings',
      component: () => import('../views/OfferingsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue'),
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'instant' }
  },
})

export default router
