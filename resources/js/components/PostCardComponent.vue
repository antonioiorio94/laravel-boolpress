<template>
    <div class="card">
        <img :src="'storage/' + cover" :alt="title" />
        <div>
            <h3>{{ title }}</h3>
            <p>{{ trimmedContent }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostCardComponent",
    props: ["title", "cover", "content"],
    computed: {
        trimmedContent() {
            const shortContent =
                this.content.length > 20
                    ? this.content.substring(0, 20) + "..."
                    : this.content;
            return shortContent;
        },
    },
};
</script>

<style lang="scss" scoped>
.card {
    max-width: 300px;
    height: 400px;
    padding: 20px;
    margin-right: 10px;
}
</style>
