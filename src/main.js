import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAwiWa3qZAc9srjhvaTC_Ty-Ai9KhQBUYI",
    libraries: "places" // necessary for places input
  }
});

Vue.prototype.$http = axios;
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  axios
});
