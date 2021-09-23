import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import EditPost from '../views/EditPost.vue'
import AddPost from '../views/AddPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'EditPost',
    component: EditPost,
    props: true
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/addpost',
    name: 'AddPost',
    component: AddPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
