<template>
  <div>
    <cart-list :result="result"></cart-list>

    <router-link :to="{name:'order'}" exact tag="button">주문하기</router-link>
    <button v-on:click="deleteItem">삭제하기</button>
  </div>
</template>

<script>
import CartList from "./CartList";
export default {
  data() {
    return {
      // restr_id: null,
      // table_id: null,
      // menu_id: null,
      // optionAmount: null,
      // menuPrice: null,
      total: null,
      menuItems: [],
      result: []
    };
  },
  components: {
    CartList: CartList
  },
  watch: {
    menuItems: function(data) {
      console.log("데이터 갱신", data);
    }
  },
  methods: {
    deleteItem() {
      const baseURI = "http://219.240.99.118:4000";
      this.$http
        .get(
          `${baseURI}/cart-delete?restr_id=` +
            this.restr_id +
            `&table_id=` +
            this.table_id +
            `&menu_id=` +
            this.menu_id
        )
        .then(result => {
          console.log("카트 아이템 지우기");
        }); // get
    }
  },
  //
  created() {
    console.log("cart page created");
    // console.log("CartPage: created()", this.$route.params.restr_id);
    // console.log("CartPage: created()", this.$route.params.table_id);
    this.restr_id = this.$route.params.restr_id;
    this.table_id = this.$route.params.table_id;

    const baseURI = "http://219.240.99.118:4000";
    this.$http
      .get(
        `${baseURI}/cart-check?restr_id=` +
          this.restr_id +
          `&table_id=` +
          this.table_id
      )
      .then(result => {
        // console.log("카트 조회", result.data.length);
        // console.log("카트 조회", result.data[0]);
        if (result.data.length > 0) {
          this.result = result.data[0];
          console.log("----------result값: ", this.result);
          // this.menu_id = result.data[0].cartMenu_id;
          // this.table_id = result.data[0].cartMenu_id;
          // this.menuPrice = result.data[0].menuPrice;
          // this.optionAmount = result.data[0].optionAmount;
          // this.total = result.data[0].total;

          // for (var key in result.data[0].optionIndex) {
          //   var optionPrice = result.data[0].optionPrice[key];
          //   var subName = result.data[0].subName[key];
          //   var optionName = result.data[0].optionName[key];
          //   // this.menuItems[key].push(result.data[0].optionPrice[key]);
          //   // this.menuItems[key].push(result.data[0].subName[key]);
          //   // this.menuItems[key].push(result.data[0].optionName[key]);
          //   // this.menuItems=Object.assign({})
          //   this.menuItems[key] = { optionName, subName, optionPrice };
          // }

          console.log("cartList menuItems ", this.menuItems);
        }
        return this.menuItems;
      }); // get
  }
};
</script>

<style scoped>
</style>