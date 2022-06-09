/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.axios = require("axios");

window.axios
    .get("http://127.0.0.1:8000/api/posts")
    .then((results) => {
        console.log(results);
    })
    .catch((e) => {
        console.log(e);
    });

window.Vue = require("vue");

import AppComponent from "./app/AppComponent";

const app = new Vue({
    el: "#app",
    render: (createElement) => createElement(AppComponent),
});
