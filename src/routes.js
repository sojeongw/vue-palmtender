import RestrListPage from "./components/otdr/restrList/RestrListPage";
import RestrDetailPage from "./components/otdr/restrDetail/RestrDetailPage";
import ReviewPage from "./components/common/review/ReviewPage";
import CartPage from "./components/indrCart/CartPage";
import MenuPage from "./components/indrMenu/MenuPage";
import MenuDetailPage from "./components/indrMenu/MenuDetailPage";
import PayPage from "./components/indrPay/PayPage";
import OrderPage from "./components/indrOrder/OrderPage";
import OrderComplPage from "./components/indrOrder/OrderComplPage";
import CartCompleted from "./components/indrCart/CartCompleted";
import PayComplPage from "./components/indrPay/PayComplPage";
import MenuOption from "./components/indrMenu/MenuOption";

// const Foo = () => import("./components/indrCart/CartPage.vue");
// const Koo = () => import("./components/indrOrder/OrderComplPage.vue");

const routes = [
  { mode: "history", path: "/", redirect: "/otdr/" },
  {
    // mode: "history",
    path: "/otdr/",
    component: RestrListPage,
    children: [
      {
        // mode: "history",
        path: "/otdr/:lat/:lng",
        component: RestrListPage,
        children: []
      }
    ]
  },
  {
    // mode: "history",
    path: "/detail/:restr_id",
    component: RestrDetailPage,
    name: "restr-detail"
    // children: [
    //   {
    //     // path가 parent랑 이어지는건 아니고 내용만 chlid로 포함됨
    //   }
    // ]
  },
  {
    // mode: "history",
    path: "/review_r",
    component: ReviewPage,
    name: "reviewPage"
  },
  {
    // mode: "history",
    path: "/cart/:restr_id/:table_id",
    component: CartPage,
    name: "cart-page"
    // props: true
  },
  {
    // mode: "history",
    path: "/menu/:restr_id/:table_id/:retag",
    component: MenuPage,
    name: "menu-page"
  },
  {
    // mode: "history",
    path: "/menu-detail/:menu_id",
    component: MenuDetailPage,
    name: "menu-detail",
    // 테이블 id를 props로 전달하기 위함
    props: true
  },
  {
    // mode: "history",
    path: "/pay",
    component: PayPage,
    name: "pay"
  },
  {
    // mode: "history",
    path: "/order",
    component: OrderPage,
    name: "order"
  },
  {
    // mode: "history",
    path: "/order-completed",
    component: OrderComplPage,
    name: "order-completed"
  },
  {
    // mode: "history",
    path: "/cart-completed",
    component: CartCompleted,
    name: "cart-completed"
  },
  {
    // mode: "history",
    path: "/pay-completed",
    component: PayComplPage,
    name: "pay-completed"
  },
  {
    // mode: "history",
    path: "/test",
    component: MenuOption,
    name: "test"
  }
];

export default routes;
