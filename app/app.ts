import Vue from 'nativescript-vue';
import Home from './components/Home.vue';

// Configura Vue para estar en modo "silencioso" en producción
Vue.config.silent = process.env.NODE_ENV === 'production';

// Registra el componente principal (Home.vue) para iniciar la aplicación
new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start();
