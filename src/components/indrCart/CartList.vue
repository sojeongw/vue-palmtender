<template>
  <div class="row">cart 조회
    <br>
    <router-link :to="{name:'order'}" exact>
      <button>주문하기</button>
    </router-link>
    <p/>
    <!-- <div class="col-md-3" v-for="item in listHeader" :key="item.id">
{{item.name}}
</div>

<input type="text" v-model="items">
<button v-on:click='addCart'>추가</button>
<div v-for="item in items" :key="item.id">
{{item.name}}
{{item.price}}
    </div>-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      menu_id: 3,
      menuName: "트러플오일을 올린 어린 송아지 스테이크 맛이 나는 떡튀순 세트",
      opName: "1",
      opValue: "",
      ea: "100",
      memo: "5인분같은 1인분"
    };
  },
  methods: {
    addToCart() {
      const baseURI = "http://219.240.99.118:4000";
      // const baseURI = "http://localhost:4000";
      var params = new URLSearchParams();
      params.append("menu_id", this.menu_id);
      params.append("menuName", this.menuName);
      params.append("opName", this.opName);
      params.append("opValue", this.opValue);
      params.append("ea", this.ea);
      params.append("memo", this.memo);

      console.log("addtocart");
      this.$http
        .post(`${baseURI}/cart/push/`, params)

        .then(result => {
          console.log(result.data);
          //   this.cart = result.data;
        })
        .catch(error => console.log(error));

      //   const locationInCart = this.cart.findIndex(p => {
      //     return p.details.sku === product.sku;
      //   });
      //   if (locationInCart === -1) {
      //     this.cart.push({
      //       details: product,
      //       quantity: 1
      //     });
      //   } else {
      //     this.cart[locationInCart].quantity++;
      //   }
    } // add to cart
    // removeFromCart(sku) {
    //   const locationInCart = this.cart.findIndex(p => {
    //     return p.details.sku === sku;
    //   });
    //   if (this.cart[locationInCart].quantity <= 1) {
    //     this.cart.splice(locationInCart, 1);
    //   } else {
    //     this.cart[locationInCart].quantity--;
    //   }
    // }
  },
  computed: {
    // hasResult() {
    //   console.log("CartList hasResult()");
    //   return this.items.length > 0;
    // },
    // totalCost() {
    //   return this.cart.reduce((accum, product) => {
    //     return accum + product.details.price * product.quantity;
    //   }, 0);
    // }
  },
  created() {
    console.log("CartList: created()");
  } // created
};
</script>

<style scoped>
</style>