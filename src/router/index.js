import Vue from 'vue';
import Router from 'vue-router';
import menu from '@/components/menu/menu';
import rapairs from '@/components/rapairs/rapairs';
import pay from '@/components/pay/pay';
import stop from '@/components/stop/stop';

Vue.use(Router);

const routes = [{
    path: '/',
    name: 'menu',
    component: menu
  }, {
    path: '/rapairs',
    component: rapairs
  }, {
    path: '/pay',
    component: pay
  }, {
    path: '/stop',
    component: stop
  }
];

export default new Router({
  routes
});
