<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">My post</div>
        </div>
        <div v-if="post">
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
            <div>
                <ul>
                    <li v-for="tag in post.tags" :key="tag.id">
                        {{ tag.name }}
                    </li>
                </ul>
            </div>
        </div>
        <div v-else>Caricamento in corso</div>
    </div>
</template>

<script>
export default {
    name: "SingleBlogComponent",
    data() {
        return { post: undefined };
    },
    mounted() {
        const id = this.$route.params.id;
        window.axios
            .get("http://127.0.0.1:8000/api/posts/" + id)
            .then(({ status, data }) => {
                console.log(data);
                if (status === 200 && data.success) {
                    this.post = data.results;
                }
            })
            .catch((e) => {
                console.log(e);
            });
    },
};
</script>

<style></style>
