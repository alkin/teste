<template>
    <div class="ui container">
        <Post :post="post" />
        <MyImage :image="image" />
        <Quote :quote="quote" />
    </div>
</template>

<script>
import { posts, images, quotes } from '@/api.js';

export default {
    components: {
        Post: require('./Post.vue'),
        MyImage: require('./Image.vue'),
        Quote: require('./Quote.vue')
    },
    data() {
        return {
            post: {},
            image: {},
            quote: {}
        };
    },
    mounted() {
        posts.find(1).then(response => {
            this.post = response.data;
        });

        images.find(1).then(response => {
            this.image = response.data;
        });

        quotes.find(1).then(response => {
            this.quote = response.data;
        });
    }
};
</script>
