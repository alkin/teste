
window.Vue = require('vue');

import App from './Vue/App.vue';
const app = new Vue({
    el: '#app',
    render: h => h(App),
});