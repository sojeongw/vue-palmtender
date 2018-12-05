<template>
  <div id="pane">
    <menu-option></menu-option>
    table: {{table_id}}
    <p/>
  </div>
</template>

<script>
import MenuOption from "./MenuOption";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import Vue from "vue";
var eventBus = new Vue();

export default {
  data() {
    return {
      restr_id: null,
      menu_id: null,
      total: null,
      basicPrice: null,
      cartOption: [],
      table_id: null
    };
  },
  components: {
    MenuOption: MenuOption
  },
  // router에서 받아온 props
  // props: ["table_id"],
  methods: {
    addToCart(selected, options, amount) {
      // console.log("받은 테이블 아이디", this.table_id);
      console.log("emit on: ", selected, options, amount);

      for (var key in selected) {
        // console.log("for 확인1 : ", options[key].optionName);
        // console.log("for 확인2 : ", selected[key]);
        var opName = options[key].optionName;
        var opVal = selected[key];
        this.cartOption[key] = { opName, opVal };
        // this.cartOption[key] = { [`${opKey}`]: opVal };
      }
      console.log("key 확인: " + JSON.stringify(this.cartOption));

      // 총계
      this.total = amount + this.basicPrice;
      // console.log("총계", amount, this.basicPrice, this.total);

      /////////////////////////////////
      const baseURI = "http://219.240.99.118:4000";
      // const baseURI = "http://localhost:4000";

      axios
        .post(baseURI + "/cart-push/", {
          optionName: this.cartOption,
          restr_id: this.restr_id,
          menu_id: this.menu_id,
          table_id: this.table_id
        })
        .then(function(response) {
          console.log("axios 성공" + response);
        })
        .catch(function(error) {
          console.log(error);
        });

      // var params = new URLSearchParams();
      // // 메뉴 id
      // params.append("menu_id", this.menu_id);
      // // 선택한 옵션명과 내용
      // // params.append("selectedOptions", JSON/stringify(this.cartOption));
      // for (var key in this.cartOption) {
      //   // console.log("key값 저장: ", this.cartOption[key].opName);
      //   // console.log("value값 저장: ", this.cartOption[key].opVal.price);
      //   // console.log("value값 저장: ", this.cartOption[key].opVal.subname);
      //   params.append("optionIndex", key);
      //   params.append("optionName", this.cartOption[key].opName);
      //   params.append("subName", this.cartOption[key].opVal.subname);
      //   params.append("optionPrice", this.cartOption[key].opVal.price);
      // }
      // // 옵션 가격
      // params.append("optionAmount", amount);
      // // 메뉴 가격
      // params.append("menuPrice", this.basicPrice);
      // // 총 가격
      // params.append("total", this.total);
      // // 레스토랑 아이디
      // params.append("restr_id", this.restr_id);
      // // 테이블 아이디
      // params.append("table_id", this.table_id);

      // this.$http
      //   .post(`${baseURI}/cart-push/`, params)
      //   .then(result => {
      //     console.log("성공: ", result.data);
      //     //   this.cart = result.data;
      //   })
      //   .catch(error => console.log(error));
    },
    hideModal() {
      this.$refs.myModalRef.hide();
    }
  },
  created() {
    this.$eventBus.$on("addToCart", this.addToCart);
    this.table_id = localStorage.getItem("table_id");

    const baseURI = "http://219.240.99.118:4000";
    this.$http
      .get(`${baseURI}/menu-option?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        this.menu_id = result.data[0].optionMenu_id;
      }); // get
    this.$http
      .get(`${baseURI}/menu-detail?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        this.basicPrice = result.data[0].menuPrice;
        this.restr_id = result.data[0].menuRestr_id;
        console.log("메뉴 가격 구하깅", result.data[0]);
        console.log("cartoption 타입", typeof this.cartOption);
      }); // get
  } // created
};
</script>

<style scoped>
#pane {
  padding: 1rem;
}
</style>