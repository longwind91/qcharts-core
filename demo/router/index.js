import Vue from 'vue'
import Router from 'vue-router'

import Article from '../components/Article.vue'
import docs from '../views/doc/routes.js'
import demos from '../views/demo/routes.js'
import plugins from '../views/plugin/routes.js'
import examples from '../views/examples/routes'

Vue.use(Router)

function withArticleContainer(parentRoutePath, routes) {
  return {
    template: '<Article :parentRoutePath="parentRoutePath" :routes="routes" />',
    components: {
      Article
    },
    data() {
      return {
        parentRoutePath,
        routes
      }
    }
  }
}

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/doc',
      component: withArticleContainer('doc', docs),
      children: docs
    },

    {
      path: '/demo',
      component: withArticleContainer('demo', demos),
      children: demos
    },
    {
      path: '/more',
      component: () => import('../views/more/index.vue')
    },
    {
      path: '/plugin',
      component: withArticleContainer('plugin', plugins),
      children: plugins
    },
    {
      path: '/examples',
      component: () => import('../views/examples/index.vue'),
      children: examples
    }
  ]
})
