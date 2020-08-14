import Vue from 'vue'
import VueRouter from 'vue-router'
// import index from '../views/index.vue'
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

  const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  //知识图谱首页
  {
    path: '/',
    name: 'index',
    component: () => import( '../views/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
