import Vue from 'vue';
import axios from 'axios';

export const posts = {
    find(id) {
        return axios.get(`/posts/${id}`);
    }
};