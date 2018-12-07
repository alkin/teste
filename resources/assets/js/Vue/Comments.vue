<template>
    <div>
        <!-- Exemplo de comentário -->
        <div class="ui comments">
            <div class="comment">
                <a class="avatar">
                    <img src="http://media.socastsrm.com/wordpress/wp-content/blogs.dir/684/files/2017/04/thor.jpg">
                </a>
                <div class="content">
                    <a class="author">Matt</a>
                    <div class="metadata">
                        <span class="date">Today at 5:42PM</span>
                    </div>
                    <div class="text">
                        How artistic!
                    </div>
                </div>
            </div>
        </div>

        <!-- COMMENT INPUT -->
        <div class="comments input">
            <img src="http://media.socastsrm.com/wordpress/wp-content/blogs.dir/684/files/2017/04/thor.jpg" style="float: left; width: 42px; display: inline-block;">
            <div class="ui input form-group" style="padding-left: 1em; width: 475px;">
                <input class="form-control" type="text" placeholder="Digite seu comentário">
            </div>
        </div>
    </div>
</template>

<script>
import { comments } from '@/api.js';

export default {
    props: {
        comments: {
            default: () => []
        },
        commentableType: String,
        commentableId: Number
    },
    data() {
        return {
            data: this.comments
        };
    },
    methods: {
        createComment() {
            //
        }
    }
};
</script>

<style lang="scss">
</style>