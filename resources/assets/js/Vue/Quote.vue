<template>
    <div v-if="quote" class="ui card">
        <div class="content card-body quote">
            &ldquo;
            {{quote.text}}
            &rdquo;
            <br>
            <small>{{quote.author}}</small>
        </div>
        <div class="content card-body">
            <Comments :comments="quote.comments" commentableType="quote" :commentableId="quote.id" />
        </div>
    </div>
</template>

<script>
import { posts } from '@/api.js';
import Comments from './Comments.vue';

export default {
    props: ['quote'],
    components: {
        Comments
    }
};
</script>

<style lang="scss">
.ui.card {
    .content.quote {
        text-align: center;
        font-size: 2rem;
    }
}
</style>