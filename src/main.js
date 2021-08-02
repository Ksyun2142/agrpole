import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ru-RU';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VueRouter from 'vue-router'
import router from './router/index'


Vue.use(VueRouter)

// Vue.config.productionTip = false
Vue.use(ElementUI, { locale });
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  store,
  render: h => h(App),
  el: '#app',
  router

})
