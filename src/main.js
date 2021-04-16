import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

window.axios = require('axios');

//const baseURL = 'https://reqres.in/';
const baseURL = 'https://backend.gavam.com.br/';
const API_URL = 'api/v1/';

Vue.prototype.$apiURL = API_URL;

// Default config options
axios.defaults.baseURL = baseURL;
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers['Content-Type'] = 'application/json';

// Set the AUTH token for any request
const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = token;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
