import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 注册全局组件
import subsection from 'components/common/highUI/k-subsection/subsection.vue'
Vue.component('k-subsection',subsection)
import toast from 'components/common/baseUI/k-toast/toast.vue'
Vue.component('k-toast',toast)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
