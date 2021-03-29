import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { title: 'Авторизация', layout: 'empty', auth: false }
  },
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Employees.vue'),
    meta: { title: 'Сотрудники', layout: 'main', auth: true }
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/Error404.vue'),
    meta: { title: 'Ошибка', layout: 'empty', auth: true }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  base: process.env.BASE_URL,
  linkActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.auth);

  if (requireAuth && !localStorage.token) {
    next('/login');
  } else {
    next();
  }
});

const DEFAULT_TITLE = 'Quattro Office';
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title + ' :: ' + DEFAULT_TITLE || DEFAULT_TITLE;
  });
});

export default router;
