import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Stories from '../views/Stories.vue'
import Features from '../views/Features.vue'
import Pricing from '../views/Pricing.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Photosnap'
    }
  },
  {
    path: '/stories',
    name: 'Stories',
    component: Stories,
    meta: {
      title: 'Photosnap | Stories'
    }
  },
  {
    path: '/features',
    name: 'Features',
    component: Features,
    meta: {
      title: 'Photosnap | Features'
    }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
    meta: {
      title: 'Photosnap | Pricing'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title =  to.meta.title
  next()
})

export default router
