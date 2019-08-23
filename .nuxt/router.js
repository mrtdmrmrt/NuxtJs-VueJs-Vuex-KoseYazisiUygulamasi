import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _06bfb4d8 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _7c341ae0 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages_posts_index" */))
const _f1e47efa = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */))
const _1785dd5b = () => interopDefault(import('..\\pages\\admin\\new-post.vue' /* webpackChunkName: "pages_admin_new-post" */))
const _62d3bbc6 = () => interopDefault(import('..\\pages\\admin\\_postId\\index.vue' /* webpackChunkName: "pages_admin__postId_index" */))
const _8cc26b6c = () => interopDefault(import('..\\pages\\posts\\_postId\\index.vue' /* webpackChunkName: "pages_posts__postId_index" */))
const _73800b31 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/admin",
      component: _06bfb4d8,
      name: "admin"
    }, {
      path: "/posts",
      component: _7c341ae0,
      name: "posts"
    }, {
      path: "/test",
      component: _f1e47efa,
      name: "test"
    }, {
      path: "/admin/new-post",
      component: _1785dd5b,
      name: "admin-new-post"
    }, {
      path: "/admin/:postId",
      component: _62d3bbc6,
      name: "admin-postId"
    }, {
      path: "/posts/:postId",
      component: _8cc26b6c,
      name: "posts-postId"
    }, {
      path: "/",
      component: _73800b31,
      name: "index"
    }, {
      path: "/custom-route",
      component: _f1e47efa
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
