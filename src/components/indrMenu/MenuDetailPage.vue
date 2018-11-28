<template>
  <div>
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
    {{options[0].optionName}}
    <div v-for="option in options" :key="option.key">
      <b-form-select size="300px" v-model="selected" :options="option.optionValue" class="mb-3"/>
    </div>

    <div>
      Selected:
      <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from "vue";
var eventBus = new Vue();

export default {
  data() {
    return {
      selected: [],
      newName: "",
      newPrice: "",
      // menu_id를 키, option을 value로 해서 보내기
      menu_id: "",
      options: [
        {
          optionName: null,
          optionValue: [
            { value: { subname: "", price: null }, text: "선택하세요" }
          ]
        }, // 1
        {
          optionName: null,
          optionValue: [
            { value: { subname: "", price: null }, text: "선택하세요" }
          ]
        }, // 1
        {
          optionName: null,
          optionValue: [
            { value: { subname: "", price: null }, text: "선택하세요" }
          ]
        }, // 1
        {
          optionName: null,
          optionValue: [
            { value: { subname: "", price: null }, text: "선택하세요" }
          ]
        } // 1
      ]
    };
  },
  methods: {
    toggleActive: function(s) {
      s.active = !s.active;
    },
    total: function() {
      var total = 0;
      this.services.forEach(function(s) {
        if (s.selected) {
          total += s.price;
        }
      });

      return total;
    },
    addService: function() {},
    deleteService: function() {},
    setOptions(result, optionIndex, subOptionIndex) {
      // console.log("length: ", result.data[0].options.length);
      console.log("result: ", result.length);

      //// 한꺼번에 넣기
      // 일단 기존 내용을 삭제하고
      this.options.splice(0);
      // 값을 집어넣는다
      for (var i = 0; i < result.length; i++) {
        this.options.push(result[i]);
      }
      // 초기 선택값 세팅 및 선택 요소 반영
      this.selected = this.options[0].optionValue[0].value;
      // 확인
      console.log("setOptions push: ", this.options);

      // for (var i = 0; i < data.length; i++) {
      //   this.options[i].optionName = data[i].options[i].optionName;
      //   for (var j = 0; j < data.options.length; i++) {
      //     this.options[i].optionValue[j].value =
      //       data[i].options[i].optionValue[j];
      //   }
      //   console.log("key in data: ", this.options);
      // }

      /////////////////////////   첫번째 옵션
      // this.options[optionIndex].menu_id = data.optionMenu_id;

      // this.options[0].optionName = data.options[subOptionIndex].optionName;

      // ///////   첫번째 sub 옵션값
      // this.options[optionIndex].subOptions[0].text =
      //   data.options[subOptionIndex].optionValue[0].subname;

      // this.options[optionIndex].subOptions[0].value.subname =
      //   data.options[subOptionIndex].optionValue[0].subname;

      // this.options[optionIndex].subOptions[0].value.price =
      //   data.options[subOptionIndex].optionValue[0].price;
      // ////// default 값 설정
      // this.selected = this.options[optionIndex].subOptions[0].value;

      // ///////   두번째 sub 옵션값
      // this.options[optionIndex].subOptions[1].text =
      //   data.options[subOptionIndex].optionValue[1].subname;

      // this.options[optionIndex].subOptions[1].value.subname =
      //   data.options[subOptionIndex].optionValue[1].subname;

      // this.options[optionIndex].subOptions[1].value.price =
      //   data.options[subOptionIndex].optionValue[1].price;

      // ///////   세번째 sub 옵션값
      // this.options[optionIndex].subOptions[2].text =
      //   data.options[subOptionIndex].optionValue[2].subname;

      // this.options[optionIndex].subOptions[2].value.subname =
      //   data.options[subOptionIndex].optionValue[2].subname;

      // this.options[optionIndex].subOptions[2].value.price =
      //   data.options[subOptionIndex].optionValue[2].price;
    }
  },
  created() {
    const baseURI = "http://219.240.99.118:4000";
    // const baseURI = "http://localhost:4000";
    this.$http
      .get(`${baseURI}/menu-detail?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        console.log("MenuDetail: created()");
        this.checkedMenu_id = result.data[0].menu_id;
        this.menuItems = result.data[0];
        console.log("최종 menu items:", this.menuItems);
      }); // get
    this.$http
      .get(`${baseURI}/menu-option?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        // this.optionItems = result.data[0].options;
        // console.log("최종 options 값: ", this.optionItems);

        ////////  select 메뉴 초기 설정값
        // console.log("확인---->", this.options[0].subOptions[0].text);
        var optionIndex = 0;
        var subOptionIndex = 0;
        this.setOptions(result.data[0].options, optionIndex, subOptionIndex);
        // console.log("왜 이건 안해줌? ", result.data[0].options.length);
      }); // get
  } // created
};
</script>

<style scoped>
</style>



