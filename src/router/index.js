import Vue from 'vue';
import Router from 'vue-router';
import login from '@/views/login'; //登录界面
import personalCenter from '@/views/personalCenter'; //个人中心

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'personalCenter',
      component: personalCenter
    }
  ]
})
