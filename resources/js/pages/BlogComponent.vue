<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">Blog</div>
        </div>
        <div v-if="posts.length > 0">
            <PostCardListComponent :posts="posts" />
            <div class="d-flex justify-content-center mt-5">
                <button
                    type="button"
                    v-if="previousPageLink"
                    @click="goPreviousPage()"
                    class="btn btn-primary mr-5"
                >
                    Indietro
                </button>
                <button
                    v-if="nextPageLink"
                    @click="goNextPage()"
                    class="btn btn-primary"
                >
                    Avanti
                </button>
            </div>
        </div>
        <div v-else>Caricamento in corso</div>
    </div>
</template>

<script>
import PostCardListComponent from "../components/PostCardListComponent.vue";
export default {
    name: "BlogComponent",
    components: { PostCardListComponent },
    data() {
        return {
            posts: [],
            currentPage: 1,
            previousPageLink: "",
            nextPageLink: "",
        };
    },
    mounted() {
        this.loadPage("http://127.0.0.1:8000/api/posts");
    },
    methods: {
        loadPage(url) {
            window.axios
                .get(url)
                .then(({ status, data }) => {
                    console.log(data);
                    if (status === 200 && data.success) {
                        this.posts = data.results.data;
                        this.currentPage = data.results.current_page;
                        this.previousPageLink = data.results.prev_page_url;
                        this.nextPageLink = data.results.next_page_url;
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        goPreviousPage() {
            this.loadPage(this.previousPageLink);
        },
        goNextPage() {
            this.loadPage(this.nextPageLink);
        },
    },
};
</script>

<style></style>
