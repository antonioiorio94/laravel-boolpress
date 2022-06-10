<template>
    <div class="d-flex justify-content-center mt-5">
        <div v-for="post in posts" :key="post.index">
            <PostCardComponent
                :title="post.title"
                :cover="post.cover"
                :content="post.content"
                :id="post.id"
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
