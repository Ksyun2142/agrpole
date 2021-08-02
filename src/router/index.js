import VueRouter from 'vue-router'

import MainPage from '../pages/MainPage'
import mainmenu from '../pages/mainmenu'
import one from '../components/one'
import two from '../components/two'
import three from '../components/three'


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/main',
      name: 'mainmenu',
      component: mainmenu
      },
      {
      path: '/one',
      name: 'one',
      component: one
    },
    {
      path: '/two',
      name: 'two',
      component: two
    },
    {
      path: '/three',
      name: 'three',
      component: three
    }

  ]
})

