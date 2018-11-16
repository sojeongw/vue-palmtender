import Vue from "vue";
import VueRouter from "vue-router";
import RestrListPage from "./components/otdr/restrList/RestrListPage";
import RestrDetailPage from "./components/otdr/restrDetail/RestrDetailPage";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/otdr"
    },
    {
      path: "/otdr/:lat/:lng",
      component: RestrListPage,
      children: []
    },
    {
      path: "/detail/:restr_id",
      component: RestrDetailPage,
      name: "restrDetail"
    }
  ]
});
