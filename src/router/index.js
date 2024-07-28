import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {auth } from '../firebase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta : {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta : {
        requiresAuth: true
      }
    },
    {
      path:'/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    }
  ]
})

  router.beforeEach((to, from, next) =>{
    if(to.path === '/login' && auth.currentUser){
      next('/')
      return;
    }

    if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser)
    {
      next('/login')
      return;
    }

    next();
  })

export default router
