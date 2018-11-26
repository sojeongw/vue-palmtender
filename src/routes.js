import RestrListPage from "./components/otdr/restrList/RestrListPage";
import RestrDetailPage from "./components/otdr/restrDetail/RestrDetailPage";
import ReviewPage from "./components/common/review/ReviewPage";
import CartPage from "./components/indrCart/CartPage";
import MenuPage from "./components/indrMenu/MenuPage";
import MenuDetailPage from "./components/indrMenu/MenuDetailPage";
import PayPage from "./components/indrPay/PayPage";
import OrderPage from "./components/indrOrder/OrderPage";

const routes = [
  {
    path: "/",
    redirect: "/otdr/"
  },
  {
    path: "/otdr/",
    component: RestrListPage,
    children: [
      {
        path: "/otdr/:lat/:lng",
        component: RestrListPage,
        children: []
      }
    ]
  },
  {
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
    path: "/review_r",
    component: ReviewPage,
    name: "reviewPage"
  },
  {
    path: "/cart",
    component: CartPage,
    name: "cart-page"
  },
  {
    path: "/menu/:restr_id/:table_id",
    component: MenuPage,
    name: "menu-page"
  },
  {
    path: "/menu-detail/:menu_id",
    component: MenuDetailPage,
    name: "menu-detail"
  },
  {
    path: "/pay",
    component: PayPage,
    name: "pay"
  },
  {
    path: "/order",
    component: OrderPage,
    name: "order"
  }
];

export default routes;
