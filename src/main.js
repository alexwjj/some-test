import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './main.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Print from 'vue-iframe-print'
 
Vue.use(Print);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')