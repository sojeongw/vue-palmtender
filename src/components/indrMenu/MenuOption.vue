<template>
  <div id="pane">
    <div>
      <div>
        <img :src="menuItems.menuPhoto">
      </div>
      <div class="menu-info">
        <h6>{{menuItems.menuName}}</h6>
        {{menuItems.menuInfo}}
        <br>
        <!-- {{menuItems.menuPrice}}원 -->
        <p/>
        재료: {{menuItems.menuIngredients}}
        <br>
        알러지 정보: {{menuItems.menuAllergy}}
        <p/>
      </div>
    </div>
    <!-- <b-form> -->
    <!-- param: {{optionParam}} -->
    <div id="option-select" v-for="(option,key) in options" :key="key">
      {{option.optionName}}
      <b-form-group :id="option.optionName" :name="option.optionName">
        <b-form-select
          v-on:Change="selectOption"
          v-model="selected[key]"
          :options="option.optionValue"
          class="mb-3"
        />
      </b-form-group>
    </div>

    <!-- <div>
      Selected:
      <strong>{{ selected }}</strong>
      <p/>
    </div>-->
    <div class="basic-price">
      <div class="bp-label">기본 가격</div>
      <div class="bp-value">
        <strong>{{menuItems.menuPrice}}원</strong>
      </div>
    </div>
    <div class="option-price">
      <div class="op-label">옵션 가격</div>
      <div class="op-value">
        +
        <strong>{{ amount }}원</strong>
      </div>
    </div>
    <div class="amount">
      <strong>{{menuItems.menuPrice+amount}}원</strong>
    </div>
    <!-- </b-form> -->
    <div class="btn-cart">
      <router-link :to="{name:'cart-completed'}">
        <b-button @click="addToCart(selected)" variant="primary">장바구니 넣기</b-button>
      </router-link>
      <!-- <router-link @click="addToCart(selected)" :to="{name:'cart-completed'}" tag="button">장바구니 추가</router-link> -->
    </div>
    <p/>
    <div>
      <!-- <router-link :to="{name:'order'}"> -->
      <!-- <button>바로 주문하기</button> -->
      <!-- </router-link> -->
    </div>
    <!-- <router-link
      :to="{name:'cart-page', params:{restr_id:restr_id, table_id:table_id}}"
      tag="button"
    >장바구니 보기</router-link>-->
  </div>
</template>

<script>
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
var eventBus = new Vue();

export default {
  data() {
    return {
      retag: null,
      restr_id: null,
      table_id: null,
      selected: [],
      // menu_id를 키, option을 value로 해서 보내기
      menu_id: null,
      options: [
        {
          optionName: null,
          optionValue: [{ value: { subname: "", price: null }, text: "" }]
        } // 0
      ],
      optionToCart: [],
      amount: 0,
      menuItems: []
    };
  },

  methods: {
    addToCart(selected) {
      console.log("add to cart: ", this.optionToCart);

      this.$eventBus.$emit("addToCart", selected, this.options, this.amount);
    },
    // toggleActive: function(s) {
    //   s.active = !s.active;
    // },
    // total: function() {
    //   this.amount = 0;
    //   this.options[0].optionValue[0].value.price.forEach(function(s) {
    //     if (s.selected) {
    //       total += s.price;
    //     }
    //   });
    //   console.log("total:", total);
    //   // return total;
    // },
    // addService: function() {},
    // deleteService: function() {},
    setOptions(result) {
      // 뷰에 뿌려주는 옵션 정보
      console.log("set options result: ", result);
      this.options = result;
    }
  },
  computed: {
    selectOption: function() {
      this.amount = 0;
      for (var key in this.selected) {
        // console.log("가격 구하기", this.selected[key].price);
        this.amount += this.selected[key].price;
      }
      return this.amount;
    }
  },
  created() {
    this.retag = sessionStorage.getItem("retag");
    this.restr_id = sessionStorage.getItem("restr_id");
    this.table_id = sessionStorage.getItem("table_id");

    const baseURI = "http://219.240.99.118:4000";
    // const baseURI = "http://localhost:4000";

    this.$http
      .get(`${baseURI}/menu-option?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        this.setOptions(result.data[0].options);
      }); // get

    this.$http
      .get(`${baseURI}/menu-detail?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        console.log("menuOption 메뉴정보: ", result.data[0]);
        this.menuItems = result.data[0];
      }); // get
  } // created
};
</script>

<style scoped>
#option-select {
  width: 150px;
}
.menu-info {
  padding-top: 1rem;
}
.basic-price {
  /* justify-content: space-between; */
  /* display: inline; */
}
.bp-label {
  display: inline;
  /* float: left;
  text-align: left; */
}
.bp-value {
  display: inline;
  /* float: right;
  text-align: right; */
}
.btn-cart {
  padding-top: 1rem;
  /* position: absolute; */
}
.option-price {
  /* justify-content: space-between; */
}
.op-label {
  display: inline;
  /* position: absolute;
  padding-top: 1rem;
  float: left;
  text-align: left; */
}
.op-value {
  display: inline;
  /* position: absolute;
  padding-top: 1rem;
  padding-left: 15rem;

  float: right;
  text-align: right; */
}
.amount {
  /* position: absolute;
  padding-top: 2.5rem;
 */
  padding-left: 3.5rem;
}
</style>



