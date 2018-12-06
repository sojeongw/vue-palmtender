import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./routes";
import axios from "axios";
import * as VueGoogleMaps from "vue2-google-maps";
import BootstrapVue from "bootstrap-vue";
import VueMaterial from "vue-material";

Vue.use(VueMaterial);

// event bus
// Vue.prototype.$EventBus = new Vue();
// 아래를 써줘야 event bus 설정해준 게 동작함
var EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $eventBus: {
    get: function() {
      return EventBus;
    }
  }
});

Vue.use(BootstrapVue);

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
  el: "#app",
  render: h => h(App),
  router
}).$mount("#app");
