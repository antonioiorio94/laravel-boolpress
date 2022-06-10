import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeComponent from "./pages/HomeComponent";
import ContactsComponent from "./pages/ContactsComponent";
import NotFoundComponent from "./pages/NotFoundComponent";
import WhoWeAreComponent from "./pages/WhoWeAreComponent";
import BlogComponent from "./pages/BlogComponent";
import SingleBlogComponent from "./pages/SingleBlogComponent";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeComponent,
        },
        {
            path: "/blog",
            name: "blog",
            component: BlogComponent,
        },
        {
            path: "/blog/:id",
            name: "single-blog",
            component: SingleBlogComponent,
        },
        {
            path: "/who-we-are",
            name: "who-we-are",
            component: WhoWeAreComponent,
        },

        {
            path: "/contacts",
            name: "contacts",
            component: ContactsComponent,
        },
        {
            path: "/*",
            name: "notFound",
            component: NotFoundComponent,
        },
    ],
});

export default router;
