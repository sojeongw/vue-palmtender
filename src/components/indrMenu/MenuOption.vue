<template>
  <div id="pane">
    <!-- <div>
      <div>메뉴 사진: {{menuItems.menuPhoto}}</div>
      <div>메뉴 정보: {{menuItems.menuInfo}}</div>
      <div>메뉴 재료: {{menuItems.menuIngredients}}</div>
      <div>메뉴 이름: {{menuItems.menuName}}</div>
      <div>메뉴 카테고리: {{menuItems.menuCategory_id}}</div>
      <div>메뉴 가격: {{menuItems.menuPrice}}</div>
      <div>알러지 정보: {{menuItems.menuAllergy}}</div>
      <div>메뉴가 속한 식당 아이디: {{menuItems.menuRestr_id}}</div>
      <div>메뉴 아이디: {{menuItems.menu_id}}</div>
    </div>-->
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

    <div>
      Selected:
      <strong>{{ selected }}</strong>
      <p/>
    </div>
    <div>
      amount:
      <strong>{{ amount }}</strong>
      <p/>
    </div>
    <!-- </b-form> -->
    <div>
      <!-- <button @click="addToCart(selected)">장바구니 넣기</button> -->
      <router-link @click="addToCart(selected)" :to="{name:'cart-completed'}" tag="button">장바구니 추가</router-link>
    </div>
    <p/>
    <div>
      <!-- <router-link :to="{name:'order'}"> -->
      <button>바로 주문하기</button>
      <!-- </router-link> -->
    </div>
    <router-link
      :to="{name:'cart-page', params:{restr_id:restr_id, table_id:table_id}}"
      tag="button"
    >장바구니 보기</router-link>
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
      amount: 0
    };
  },

  methods: {
    hideModal() {
      this.$refs.myModalRef.hide();
    },
    addToCart(selected) {
      this.$refs.myModalRef.show();
      console.log("add to cart: ", this.optionToCart);

      this.$eventBus.$emit("addToCart", selected, this.options, this.amount);
    },
    // toggleActive: function(s) {
    //   s.active = !s.active;
    // },
    total: function() {
      this.amount = 0;
      this.options[0].optionValue[0].value.price.forEach(function(s) {
        if (s.selected) {
          total += s.price;
        }
      });
      console.log("total:", total);
      // return total;
    },
    // addService: function() {},
    // deleteService: function() {},
    setOptions(result) {
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
    this.retag = localStorage.getItem("retag");
    this.restr_id = localStorage.getItem("restr_id");
    this.table_id = localStorage.getItem("table_id");

    const baseURI = "http://219.240.99.118:4000";
    // const baseURI = "http://localhost:4000";

    this.$http
      .get(`${baseURI}/menu-option?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        this.setOptions(result.data[0].options);
      }); // get
  } // created
};
</script>

<style scoped>
#option-select {
  width: 150px;
}
</style>



