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
    path: '/create',
    name: 'event-create',
    component: () => import('../views/EventCreate.vue')
  },
  {
    path: '/:eventId',
    name: 'event-show',
    component: () => import('../views/EventShow.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
