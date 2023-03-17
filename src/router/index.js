import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/Home.vue'
import chat from '../views/Chat.vue'

const routes = [
  { 
    path: '/',
    redirect:'/home',
  },
  {
   path:'/home',
    name: 'Home',
    component: home,

  },
  
    {
      path: '/chat',
    name: 'Chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: chat,
    }
]
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})


export default router
