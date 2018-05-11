import Vue from 'vue';
import axios from 'axios';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export const posts = {
    find(id) {
        return axios.get(`/posts/${id}`);
    }
};