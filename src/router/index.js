import Vue from 'vue'
import Router from 'vue-router'
import personalCenter from '@/views/personalCenter' //个人中心


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'personalCenter',
      component: personalCenter
    }
  ]
})
