import { createRouter, createWebHistory } from 'vue-router';
import BookList from '../components/BookList.vue';
import BookEdit from '../components/BookEdit.vue';
import BookCreate from '../components/BookCreate.vue';
import LoginPage from '@/components/LoginPage.vue';
const routes = [
  
  
  
   {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
   },
   {
    path: '/bookList',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/edit/:id',
    name: 'BookEdit',
    component: BookEdit,
    props: true
  },
  {
    path: '/create',
    name: 'BookCreate',
    component: BookCreate
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
