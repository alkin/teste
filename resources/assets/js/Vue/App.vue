<template>
    <div class="ui container">
        <Post :post="post"></Post>
    </div>
</template>

<script>
import { posts } from '@/api.js';
import Post from './Post.vue';

export default {
    components: {
        Post
    },
    data() {
        return {
            post: {}
        };
    },
    mounted() {
        posts.find(1).then(response => {
            console.log('Teste de API:');
            console.log(response.data);

            this.post = response.data;
        });
    }
};
</script>
