import Vue from "vue";
import VueRouter from "vue-router";
import RestrListPage from "./components/otdr/restrList/RestrListPage";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/otdr"
    },
    {
      path: "/otdr",
      component: RestrListPage
    }
  ]
});
