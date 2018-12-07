<template>
    <div v-if="post" class="ui card">
        <div class="head content card-body">
            <div style="width: 32px;">
                <img :src="post.user_image" class="user-picture">
            </div>
            <div style="width: 480px; padding-left: 0.5em;">
                <strong>{{post.user_name}}</strong> postou uma nova foto.<br>
                <small>{{post.created_at}}</small>
            </div>
        </div>
        <div class="content card-body">
            {{post.message}}
        </div>
        <div class="content card-body">
            <img :src="post.picture" class="picture">
        </div>
        <div class="content card-body">
            <Comments :comments="post.comments" commentableType="post" :commentableId="post.id" />
        </div>
    </div>
</template>

<script>
import { posts } from '@/api.js';
import Comments from './Comments.vue';

export default {
    props: ['post'],
    components: {
        Comments
    }
};
</script>

<style lang="scss">
</style>