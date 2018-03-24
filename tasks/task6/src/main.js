import Vue from 'vue'
import App from './App.vue'
import ServerHeader from './components/shared/ServerHeader.vue';
import ServerList from './components/server/ServerList.vue';
import ServerFooter from './components/shared/ServerFooter.vue';

Vue.component('server-header', ServerHeader);
Vue.component('server-list', ServerList);
Vue.component('server-footer', ServerFooter);

new Vue({
  el: '#app',
  render: h => h(App)
})
