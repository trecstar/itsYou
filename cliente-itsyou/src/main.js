import Vue from 'vue';
//import App from './App.vue';
import router from './router';
import App from './App.vue'

// agregar bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css"
import "./assets/css/cliente.css"
import "./assets/css/administrador.css"


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
