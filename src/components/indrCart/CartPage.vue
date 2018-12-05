<template>
  <div>
    <div class="pane">
      <!-- <div class="card-text"> -->
      <div v-for="(res,index) in result" :key="index">
        <b-card :header="`No.`+(index+1)+` `+res.menuName" header-tag="header" class="card">
          <!-- <input type="checkbox" :id="res.cartMenu_id" :value="res" v-model="checkedMenu[index]"> -->
          <!-- <label :for="res.cartMenu_id"> -->
          <!-- 식당 id: {{res.cartRestr_id}} -->
          <br>
          메뉴 가격: {{res.menuPrice}}
          <p/>
          <div v-for="(option, key) in res.selectedOptions" :key="key">
            {{option.opName}}: {{option.opVal.subname}}
            <br>
            +{{option.opVal.price}}원
            <p/>
          </div>
          <!-- </label> -->
          <p/>
        </b-card>
      </div>
      <!-- </div> -->
    </div>
    <!-- <span>체크한 이름: {{ checkedMenu }}</span> -->
    <b-navbar class="nav-bar" type="dark" variant="white" toggleable>
      <div class="btn-order">
        <!-- <router-link
          :to="{name:'order-completed'}"
          exact
          tag="b-button"
          size="sm"
          @click="orderMenu"
        >주문하기</router-link>-->
        <button @click="orderMenu">주문하기</button>
      </div>
    </b-navbar>
    <!-- <button v-on:click="deleteItem">삭제하기</button> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      restr_id: null,
      table_id: null,
      menu_id: [],
      // optionAmount: null,
      // menuPrice: null,
      total: null,
      menuItems: [],
      result: [],
      checkedMenu: []
    };
  },
  watch: {
    menuItems: function(data) {
      console.log("데이터 갱신", data);
    }
  },
  methods: {
    orderMenu() {
      console.log("오더!");
      const baseURI = "http://219.240.99.118:4000";
      axios
        .post(baseURI + "/order/", {
          restr_id: this.restr_id,
          table_id: this.table_id,
          menu_id: this.menu_id[0],
          ea: 1,
          memo: "test memo",
          price: 500,
          options: this.result[0].selectedOptions
        })
        .then(function(response) {
          console.log("order 성공 " + response);
          // this.$route.push("/order-completed");
        })
        .catch(function(error) {
          console.log("에러나따!!! " + error);
        });
    },
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
    // this.restr_id = this.$route.params.restr_id;
    // this.table_id = this.$route.params.table_id;
    this.restr_id = localStorage.getItem("restr_id");
    this.table_id = localStorage.getItem("table_id");

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
          // 카트 내용
          this.result = result.data;
          // 메뉴 아이디 저장
          for (var i in this.result) {
            console.log("cart check result값" + i + ": ", this.result[i]);
            this.menu_id[i] = this.result[i].cartMenu_id;
          }
          console.log("menu_id: ", this.menu_id);
          // console.log("cartList menuItems ", this.menuItems);
        }
        // return this.menuItems;
      }); // get
  }
};
</script>

<style scoped>
.pane {
  padding: 0.5rem;
  box-sizing: content-box;
  height: auto;
  max-height: 500px;
  overflow-y: scroll;
}
.card {
  margin-bottom: 0.5rem;
}
.nav-bar {
}
.btn-order {
  /* display: block;
  margin-left: auto;
  margin-right: auto;
  align-items: center; */
}
</style>