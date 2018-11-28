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
    <div id="option-select">
      {{options[0].optionName}}
      <!-- <b-form-group :id="options[0].optionName" :name="options[0].optionName"> -->
      <b-form-select
        v-model="selected"
        v-on:change="getAmount"
        :options="options[0].optionValue"
        class="mb-3"
      />
      <!-- </b-form-group> -->
    </div>
    <!-- <div>
        Selected:
        <strong>{{ selected }}</strong>
        <p/>
    </div>-->
    <!-- </b-form> -->
  </div>
</template>

<script>
import Vue from "vue";
var eventBus = new Vue();

export default {
  beforeMount() {
    this.optionParam = this.optionParamParent;
  },
  props: {
    optionParamParent: {
      //   type: Number,
      default() {
        return null;
      }
    }
  },
  data() {
    return {
      opIndex: null,
      optionParam: null,
      selected: null,
      newName: "",
      newPrice: "",
      // menu_id를 키, option을 value로 해서 보내기
      menu_id: "",
      options: [
        {
          optionName: null,
          optionValue: [{ value: { subname: "", price: null }, text: "" }]
        } // 0
      ]
    };
  },
  methods: {
    getAmount(value) {
      value = value.price;
      // console.log("child add to cart()", value, this.options[0].optionName);

      // 키값 넣어 전송
      // this.$eventBus.$emit("getAmount", value, this.options[0].optionName);

      // 키값 없이 전송
      this.$eventBus.$emit(
        "getAmount",
        value,
        this.options[0].optionName,
        this.options[0].optionValue[0].value.subname
      );

      // console.log(this.options[0].optionValue[0].value.price);
      // this.total();
    },
    // toggleActive: function(s) {
    //   s.active = !s.active;
    // },
    // total: function() {
    //   var total = 0;
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
    setOptions(result, opIndex) {
      // console.log("length: ", result.data[0].options.length);
      // console.log("result: ", result);

      //// 한꺼번에 넣기
      // 일단 기존 내용을 삭제하고
      this.options.splice(0);
      // 값을 집어넣는다

      this.options.push(result[opIndex]);
      // console.log("set options push: ", this.options);

      this.selected = this.options[0].optionValue[0].value;
      // 확인
      // console.log("selected ", this.selected);
      // console.log("setOptions push: ", this.options);

      this.getAmount(this.options[0].optionValue[0].value);
    }
  },
  created() {
    const baseURI = "http://219.240.99.118:4000";
    // const baseURI = "http://localhost:4000";
    this.$http
      .get(`${baseURI}/menu-detail?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        // console.log("MenuDetail: created()");
        // this.checkedMenu_id = result.data[0].menu_id;
        // this.menuItems = result.data[0];
        // console.log("최종 menu items:", this.menuItems);
        this.menu_id = result.data[0].menu_id;
      }); // get
    this.$http
      .get(`${baseURI}/menu-option?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        // this.optionItems = result.data[0].options;
        // console.log("최종 options 값: ", this.optionItems);

        ////////  select 메뉴 초기 설정값
        // console.log("확인---->", this.options[0].subOptions[0].text);

        // console.log("created param: ", this.optionParam);
        this.opIndex = this.optionParam;
        this.setOptions(result.data[0].options, this.opIndex);
        // console.log("왜 이건 안해줌? ", result.data[0].options.length);
      }); // get
  } // created
};
</script>

<style scoped>
#option-select {
  width: 150px;
}
</style>



