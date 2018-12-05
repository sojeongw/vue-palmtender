<template>
  <div>
    <div>주문들어간 목록</div>메뉴판으로 가기
    <!-- <div>{{cartItem}}</div> -->
    <!-- <div v-for="item in cartItem" :key="item.key">{{item}}</div> -->
    <!-- <router-link :to="{name:'order-completed'}" exact> -->
    <button @click="sendToServer">주문하기</button>
    <!-- </router-link> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cartItem: [],
      restr_id: null,
      table_id: null,
      menu_id: []
    };
  },
  created() {
    const baseURI = "http://219.240.99.118:4000";
    axios
      .get(baseURI + "/paypage/", {
        params: {
          restr_id: localStorage.getItem("restr_id"),
          // menu_id: localStorage.getItem("menu_id"),
          table_id: localStorage.getItem("table_id")
        }
      })
      .then(function(response) {
        console.log("axios 성공" + response);
      })
      .catch(function(error) {
        console.log(error);
      });
    //   console.log("order page created");
    //   // console.log("CartPage: created()", this.$route.params.restr_id);
    //   // console.log("CartPage: created()", this.$route.params.table_id);
    //   // this.restr_id = this.$route.params.restr_id;
    //   // this.table_id = this.$route.params.table_id;
    //   this.restr_id = localStorage.getItem("restr_id");
    //   this.table_id = localStorage.getItem("table_id");

    //   const baseURI = "http://219.240.99.118:4000";
    //   this.$http
    //     .get(
    //       `${baseURI}/cart-check?restr_id=` +
    //         this.restr_id +
    //         `&table_id=` +
    //         this.table_id
    //     )
    //     .then(result => {
    //       // console.log("카트 조회", result.data.length);
    //       // console.log("카트 조회", result.data[0]);
    //       if (result.data.length > 0) {
    //         // 카트 내용
    //         this.result = result.data;
    //         // 메뉴 아이디 저장
    //         for (var i in this.result) {
    //           console.log("cart check result값" + i + ": ", this.result[i]);
    //           this.menu_id[i] = this.result[i].cartMenu_id;
    //         }
    //         console.log("menu_id: ", this.menu_id);
    //         // console.log("cartList menuItems ", this.menuItems);
    //       }
    //       // return this.menuItems;
    //     }); // get
  },
  methods: {
    getAmount(value, opName, subName) {
      console.log("parent price", value, opName, subName);
      // this.price = value;
      // this.optionName = opName;
      // this.amount.push({ option: [{ optionName: opName }, { price: value }] });

      // localStorage.setItem(opName, subName + "-" + value);
    },
    // sendToOrder(result) {
    //   console.log("sendToOrder in orderPage ", result);
    //   // this.cartItem = cartItem;
    // }, // send to order
    sendToServer() {
      console.log("send to server");
      const baseURI = "http://219.240.99.118:4000";
      // const baseURI = "http://localhost:4000";
    } // send to server
  }
};
</script>

<style scoped>
</style>