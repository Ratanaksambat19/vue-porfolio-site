import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home.vue'
// import About from './views/about.vue'
// import Contact from './views/contact.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },

        {
            path: '/about',
            component: () => import(/* webpackChunkName: 'About' */"./views/about")
        },

        {
            path: '/contact',
            component: () => import(/* webpackChunkName: 'Contact' */"./views/contact")
        },
    ]
})