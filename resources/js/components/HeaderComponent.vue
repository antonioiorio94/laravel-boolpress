<template>
    <header>
        <div class="container">
            <div class="row justify-content-center">
                <nav class="navbar navbar-light bg-white">
                    <ul class="nav">
                        <li
                            v-for="(menuItem, index) in menu"
                            :key="index"
                            class="nav-item mr-5"
                        >
                            <router-link :to="{ name: menuItem.linkName }">{{
                                menuItem.label
                            }}</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
    data() {
        return {
            menu: [
                { linkName: "home", label: "Home" },
                { linkName: "blog", label: "My Post" },
                { linkName: "who-we-are", label: "Who we are" },
                { linkName: "contacts", label: "Contacts" },
            ],
        };
    },
};
</script>

<style></style>
