/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */
// Composables
import classPage from '../components/class.vue'
import dashboard from '../components/dashboard.vue'
import members from '../components/members.vue'
import monthlyPayment from '../components/monthlyPayment.vue'
import woreda from '../components/woreda.vue'

import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      component: dashboard
    },
    {
      path: '/members',
      component: members
    },
    {
      path: '/class',
      component: classPage
    },
    {
      path: '/monthlyPayment',
      component: monthlyPayment
    },
    {
      path: '/woreda',
      component: woreda
    }
    // Add more routes as needed
  ]
})

export default router
