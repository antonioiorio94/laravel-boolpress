<template>
    <div class="d-flex justify-content-center mt-5">
        <div v-for="(post, index) in posts" :key="index">
            <PostCardComponent
                :title="post.title"
                :cover="post.cover"
                :content="post.content"
            />
        </div>
    </div>
</template>

<script>
import PostCardComponent from "./PostCardComponent.vue";
export default {
    name: "PostCardListComponent",
    props: ["posts"],
    components: { PostCardComponent },
};
</script>

<style></style>
