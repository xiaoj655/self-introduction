import { createRouter, createWebHashHistory } from 'vue-router'
// import mainPage from '../views/mainPage'
import projectDisplay from '../views/projectDisplay'
import selfIntroduction from '../views/selfIntroduction'
const routes = [
  // {
  //   path: '/',
  //   name: 'mainPage',
  //   component: mainPage
  // },
  {
    path: '/project-display',
    name: 'Project-display',
    component: projectDisplay
  },
  {
    path: '/',
    name: 'selfInroduction',
    component: selfIntroduction
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
