import Vue from 'vue'
import App from './App.vue'

Vue.filter('appendLength', function(value) {
    return value.concat('('+value.length+')');
});

new Vue({
  el: '#app',
  render: h => h(App)
})
