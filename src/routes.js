import RestrListPage from "./components/otdr/restrList/RestrListPage";
import RestrDetailPage from "./components/otdr/restrDetail/RestrDetailPage";
import ReviewPage from "./components/common/review/ReviewPage";

const routes = [
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
    // children: [
    //   {
    //     // path가 parent랑 이어지는건 아니고 내용만 chlid로 포함됨
    //     path: "/review_r",
    //     component: ReviewList,
    //     name: "reviewList"
    //   },
    //   {
    //     path: "/menu",
    //     component: MenuList,
    //     name: "menuList"
    //   }
    // ]
  },
  {
    // path가 parent랑 이어지는건 아니고 내용만 chlid로 포함됨
    path: "/review_r",
    component: ReviewPage,
    name: "reviewPage"
  }
];

export default routes;
