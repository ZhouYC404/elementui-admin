import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from '../components/ArticleList.vue';
import CreateArticle from '../components/CreateArticle.vue';
import EditArticle from '../components/EditArticle.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/posts/list'
  },
  {
    path:'/posts/create',
    component:CreateArticle
  },
  {
    path:'/posts/list',
    component:ArticleList
  },
  {
    path:'/posts/edit/:id',
    component:EditArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
