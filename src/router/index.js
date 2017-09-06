import Vue from 'vue'
import Router from 'vue-router'
import Test from '../components/Test.vue'
import Item from '../components/Item.vue'

Vue.use(Router);

let mRouter = new Router({
  routes: [
    {
      path: '/',
      name: '测验',
      component: Test
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    }
  ]
});

mRouter.afterEach((to, from, next) => {
  document.title = to.name;
});

export default mRouter;
