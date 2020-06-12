import Vue from 'vue'
import Router from 'vue-router'
const LOGIN = () => import('../pages/login/login.vue')
const LAYOUT = () => import('../pages/layout/index.vue')
const HOME = () => import('../pages/home/index.vue')
const ABOUT = () => import('../pages/about/index.vue')
const CLASSROOM = () => import('../pages/other/classroom.vue')
const CLOUDROOM = () => import('../pages/other/cloudroom.vue')
const MINIROOM = () => import('../pages/other/miniroom.vue')
Vue.use(Router)

const routerList = [{
  path: '/login',
  name: 'login',
  component: LOGIN,
}, {
  path: '/',
  name: 'layout',
  component: LAYOUT,
  children: [{
      path: '/home',
      name: 'home',
      component: HOME,
    }, {
      path: '/about',
      name: 'about',
      component: ABOUT,
    },
    {
      path: '/classroom',
      name: 'classroom',
      component: CLASSROOM,
    },
    {
      path: '/cloudroom',
      name: 'cloudroom',
      component: CLOUDROOM,
    },
    {
      path: '/miniroom',
      name: 'miniroom',
      component: MINIROOM,
    }
  ]
}]
const router = new Router({
  mode: 'history',
  routes: routerList
})

// 解决路由重复点击报错
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  const userInfo = window.sessionStorage.getItem("userInfo")
  if (to.path === '/login') {
    next();
  } else if (userInfo) {
    next()
  } else {
    next('/login')
  }
})
export default router