import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import Axios from 'axios';
import VueRouter from 'vue-router';
import './stylus/main.styl';

Vue.use(Vuetify);
Vue.use(VueRouter);

let component1 = {
  template:`<div class="title">Page 1</div>`
}
let component2 = {
  template:`<div class="title">Page 2</div>`
}
let component3 = {
  template:`<div class="title">Page 3</div>`
}

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/products',
      name: 'Producten',
      component: require('./Products.vue'),
    },
    {
      path: '/meals',
      name: 'Maaltijden',
      component: component2,
    },
    {
      path: '/tags',
      name: 'Tags',
      component: component3,
    },
    {
      path: '/settings',
      name: 'Instellingen',
      component: component3,
    },
    { path: '*', redirect: '/products' }
  ]
})

window.http = Axios;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
