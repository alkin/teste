import Vue from 'vue';
import axios from 'axios';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export const comments = {
};

export const posts = {
    find(id) {
        return axios.get(`/posts/${id}`);
    }
};

export const images = {
    find(id) {
        return axios.get(`/images/${id}`);
    }
};

export const quotes = {
    find(id) {
        return axios.get(`/quotes/${id}`);
    }
};