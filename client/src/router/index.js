import Vue from 'vue';
import VueRouter from 'vue-router';
import Projects from '../views/Projects.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/Register.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
