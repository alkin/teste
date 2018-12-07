<template>
    <div v-if="image" class="ui card">
        <div class="content card-body">
            <img :src="image.image" class="picture">
        </div>
        <div class="content card-body">
            <Comments :comments="image.comments" commentableType="image" :commentableId="image.id" />
        </div>
    </div>
</template>

<script>
import Comments from './Comments.vue';

export default {
    props: ['image'],
    components: {
        Comments
    }
};
</script>

<style lang="scss">
</style>