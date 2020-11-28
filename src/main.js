import Vue from 'vue'
import App from './App.vue'

import scrollAnimation from './Directive/ScrollAnimation'
import router from './router'
import vuetify from './plugins/vuetify';
import 'animate.css';

Vue.directive('scrollanimation', scrollAnimation)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
