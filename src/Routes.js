import { createWebHistory, createRouter } from 'vue-router';
import LoginForm from './pages/LoginForm.vue';
import Home from './pages/Home.vue';

const routes = [
  {
    name: 'Login',
    path: '/login',
    component: LoginForm,
  },
  {
    name: 'Home',
    path: '/home',
    component: Home,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
