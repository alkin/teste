<template>
    <div>
        <img src="http://media.socastsrm.com/wordpress/wp-content/blogs.dir/684/files/2017/04/thor.jpg" style="float: left; width: 42px; display: inline-block;">
        <div class="ui input form-group" style="padding-left: 1em; width: 475px;">
            <input class="form-control" type="text" placeholder="Digite seu comentário">
        </div>

        <!-- COMMENTS -->
    </div>
</template>

<script>
import { posts } from '@/api.js';

export default {
    props: {
        comments: {
            default: []
        }
    }
};
</script>

<style lang="scss">

</style>