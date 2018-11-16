import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./routes";
import axios from "axios";
import * as VueGoogleMaps from "vue2-google-maps";

// googleMaps
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAwiWa3qZAc9srjhvaTC_Ty-Ai9KhQBUYI",
    libraries: "places" // necessary for places input
  }
});

// axios
Vue.prototype.$http = axios;

// router
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  // el: "#app",
  render: h => h(App),
  router
}).$mount("#app");
