
window.$ = window.jQuery = require('jquery');
window.Vue = require('vue');

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import App from './Vue/App.vue';

const app = new Vue({
    el: '#app',
    render: h => h(App),
});