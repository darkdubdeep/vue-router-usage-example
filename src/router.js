import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import HelloWorld from './components/HelloWorld.vue';
import TestComponent from './components/TestComponent.vue';
import TestComponentChild from './components/TestComponentChild.vue';
import TestComponentChildSecond from './components/TestComponentChildSecond.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test-copmonent',
      name: 'TestComponent',
      component: TestComponent,
      children: [
        {
          path: '',
          name: 'TestComponent',
          component: TestComponentChild
        },
        {
          path: '/child-second',
          name: 'TestComponentChildSecond',
          component: TestComponentChildSecond
        }
      ]
    }
  ]
});
