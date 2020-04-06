import Vue from 'vue'
import store from './store/index.js'
import App from './App'
import Nav from './components/Nav.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
// import animate from 'animate.css'

Vue.config.productionTip = false
Vue.component('Nav',Nav)
// Vue.use(animate)
// Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
