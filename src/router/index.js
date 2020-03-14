import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/:eventId',
    name: 'event-show',
    component: () => import('../views/EventShow.vue')
  },
  {
    path: '/create',
    name: 'event-create',
    component: () => import('../views/EventCreate.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
