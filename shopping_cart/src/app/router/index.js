import { createRouter, createWebHistory } from 'vue-router'
import CartList from '../components/cart/CartList'
import ProductList from '../components/product/ProductList'
import NotFound from '../components/NotFound'
import ProductItem from '../components/product/ProductItem'
import LoginBox from '../components/login/LoginBox'

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
      path: '/login',
      component: LoginBox,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
})

// The global route guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (!token && to.path !== '/login') next('/login')
  else next()
})

export default router
