<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">404 - Not Found</div>
        </div>
        <div class="col-12 text-center">
            <router-link :to="{ name: 'home' }">Torna alla Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFoundComponent",
};
</script>

<style></style>
