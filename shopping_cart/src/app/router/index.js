import { createRouter, createWebHistory } from 'vue-router'
import CartList from '../components/cart/CartList'
import ProductList from '../components/product/ProductList'
import NotFound from '../components/NotFound'
import ProductItem from '../components/product/ProductItem'

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
      name: 'products',
      path: '/products/:id',
      component: ProductItem,
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
})

export default router
