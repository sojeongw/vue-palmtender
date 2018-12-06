<template>
  <div class="body">
    <div class="pane" v-if="hasResult">
      <!-- <div class="card-text"> -->
      <div v-for="(res,index) in result" :key="index">
        <b-card :header="`No.`+(index+1)+` `+res.menuName" header-tag="header" class="card">
          <!-- <input type="checkbox" :id="res.cartMenu_id" :value="res" v-model="checkedMenu[index]"> -->
          <!-- <label :for="res.cartMenu_id"> -->
          <!-- 식당 id: {{res.cartRestr_id}} -->
          <strong>메뉴 가격</strong>
          {{res.menuPrice}}원
          <p/>
          <strong>옵션 가격</strong>
          <div v-for="(option, key) in res.selectedOptions" :key="key">
            {{option.opName}}: {{option.opVal.subname}}
            ( +{{option.opVal.price}}원)
          </div>
          <!-- </label> -->
          <p/>
        </b-card>
      </div>
      <!-- </div> -->
      <div class="btn-order">
        <!-- <b-btn></b-btn> -->
        <b-btn @click="orderMenu(result)" v-b-modal.modalsm variant="primary">주문하기</b-btn>
        <b-modal id="modalsm" size="sm" title="Small Modal">주문을 진행 하시겠습니까?</b-modal>
      </div>
    </div>
    <div v-else>장바구니 내역이 없습니다.</div>
    <!-- <span>체크한 이름: {{ checkedMenu }}</span> -->
    <!-- <b-navbar class="nav-bar" type="dark" variant="white" toggleable> -->
    <!-- </b-navbar> -->
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
      optionAmount: null,
      menuPrice: null,
      total: null,
      menuItems: [],
      result: [],
      checkedMenu: [],
      resultOptions: []
    };
  },
  watch: {
    menuItems: function(data) {
      console.log("데이터 갱신", data);
    }
  },
  computed: {
    hasResult() {
      console.log("hasResult()");
      return this.result.length > 0;
    }
  }, //computed
  methods: {
    orderMenu(result) {
      // console.log("orderMenu: ", result);
      const baseURI = "http://219.240.99.118:4000";

      // for (var i in this.result) {
      //   this.resultOptions[i] = this.result[i].selectedOptions;
      //   console.log("resultOptions: ", this.resultOptions);
      // }

      for (var i in this.result) {
        console.log("result for: ", this.result[i]);
        axios
          .post(baseURI + "/order/", {
            // order: this.result
            restr_id: this.result[i].cartRestr_id,
            table_id: this.result[i].cartTable_id,
            menu_id: this.result[i].cartMenu_id,
            ea: 1,
            memo: "test memo" + i,
            price: this.result[i].menuPrice,
            options: this.result[i].selectedOptions
          })
          .then(function(response) {
            console.log("order 성공 " + i);
            for (var key in response) {
              console.log("response: ", response[key]);
            }
            // this.$route.push("/order-completed");
          })
          .catch(function(error) {
            console.log("에러나따!!! " + i + error);
          });
      }

      this.$router.push("/order-completed");
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
    this.restr_id = parseInt(localStorage.getItem("restr_id"));
    this.table_id = parseInt(localStorage.getItem("table_id"));

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
            this.menu_id[i] = this.result[i].cartMenu_id;
          }
          console.log("cart check result값 ", this.result);
          this.optionAmount = this.result[i].menuPrice;
          // this.menuPrice = this.
          // console.log("menu_id: ", this.menu_id);

          // console.log("cartList menuItems ", this.menuItems);
        }
        // return this.menuItems;
      }); // get
  }
};
</script>

<style scoped>
.body {
  padding: 1rem;
}
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
  padding-top: 1rem;
  /* display: block;
  margin-left: auto;
  margin-right: auto;
  align-items: center; */
}
</style>