import { createRouter, createWebHistory } from 'vue-router'
import CartList from '../components/cart/CartList'
import ProductList from '../components/product/ProductList'
import NotFound from '../components/NotFound'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/products',
      component: ProductList,
    },
    {
      path: '/cart',
      component: CartList,
    },
    {
      path: '/',
      redirect: '/products',
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
})

export default router
