import Vue from 'vue'
import Router from 'vue-router'
// 我的
const my = r => require.ensure([], () => r(require('@/views/my')), 'my'); //我的
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/my',name: 'my',component: my,meta: {title: '我的',requireAuth:true}},
  ]
})
