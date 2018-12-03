<template>
  <div id="pane">
    <div v-for="length in optionLength" :key="length.index">
      <menu-option :optionParamParent="length-1"></menu-option>
    </div>
    <!-- amount: {{price}} -->
    <div>
      <button @click="addToCart">장바구니 넣기</button>
      <b-modal size="sm" ref="myModalRef" hide-footer title="Shopping Cart">
        <div class="d-block text-center">장바구니에 담았습니다</div>
        <!-- <b-btn class="mt-3" variant="info" block @click="hideModal">장바구니로 이동</b-btn> -->
        <b-btn class="mt-3" variant="info" block @click="hideModal">닫기</b-btn>
      </b-modal>
    </div>
    <p/>
    <div>
      <!-- <router-link :to="{name:'order'}"> -->
      <button>바로 주문하기</button>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import MenuOption from "./MenuOption";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from "vue";
var eventBus = new Vue();

export default {
  data() {
    return {
      optionLength: null,
      menu_id: null,
      optionName: "",
      // selectedOption: [],
      amount: null,
      price: null
    };
  },
  components: {
    MenuOption: MenuOption
  },
  methods: {
    getAmount(value, opName, subName) {
      console.log("parent price", value, opName, subName);
      // this.price = value;
      // this.optionName = opName;
      // this.amount.push({ option: [{ optionName: opName }, { price: value }] });

      localStorage.setItem(opName, subName + "-" + value);
    },
    addToCart() {
      // alert("장바구니에 담았습니다");
      this.$refs.myModalRef.show();
    },
    hideModal() {
      this.$refs.myModalRef.hide();
    }
  },
  created() {
    const baseURI = "http://219.240.99.118:4000";
    this.$http
      .get(`${baseURI}/menu-option?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        // console.log("option length", result.data[0].options.length);
        this.optionLength = result.data[0].options.length;
        // console.log("menuid", result.data[0].optionMenu_id);
        this.menu_id = result.data[0].optionMenu_id;
      }); // get
  } // created
};
</script>

<style scoped>
#pane {
  padding: 1rem;
}
</style>