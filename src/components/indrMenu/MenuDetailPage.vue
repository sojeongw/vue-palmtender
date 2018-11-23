<template>
  <div>
    <div>
      <div>메뉴 사진: {{menuItems.menuPhoto}}</div>
      <div>메뉴 정보: {{menuItems.menuInfo}}</div>
      <div>메뉴 재료: {{menuItems.menuIngredients}}</div>
      <div>메뉴 이름: {{menuItems.menuName}}</div>
      <div>메뉴 카테고리: {{menuItems.menuCategory_id}}</div>
      <div>메뉴 가격: {{menuItems.menuPrice}}</div>
      <div>알러지 정보: {{menuItems.menuAllergy}}</div>
      <div>메뉴가 속한 식당 아이디: {{menuItems.menuRestr_id}}</div>
      <div>메뉴 아이디: {{menuItems.menu_id}}</div>
    </div>---------------------
    <!-- <div>     {{optionItems[0].optionName}}</div>
    <div>     {{optionItems[0].optionPrice}}</div>-->
    <!-- <div v-for="(option,i) in optionItems" v-bind:key="i">
         {{option.optionName}}: 
         {{option.optionPrice}}원 추가
<div>
  <select v-model="checkedOptions[i]">
    <option :value="value" v-for="(value,index) in option.optionValue"
     v-bind:key="index" >
  {{value}}
  </option>
  </select>
  <p/>
  </div>
    </div>-->
    <!-- 테스트 -->
    <div v-for="(option, i) in optionItems" v-bind:key="i">
      {{option.optionName}}:
      {{option.optionPrice}}원 추가
      <div v-for="(value, index) in option.optionValue" v-bind:key="index">
        <input
          type="radio"
          :name="option.optionName"
          :value="option.optionName+'-'+value"
          v-model="checkedOptions[i]"
          v-on:change="updateOptionPrice(option.optionPrice, index, i)"
        >
        <label :name="option.optionName" :for="option">{{value}}</label>
      </div>
      <p/>
    </div>
    <!-- 테스트 -->
    <div>옵션 내용: {{checkedOptions}}</div>
    <div>중간 정산: {{optionPrice}}</div>
    <div>카트에 담긴 가격: {{cartItem[0].totalAmount}}</div>
    <p/>
    <button v-on:click="addToCart">장바구니 넣기</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      // 받아온 menu 정보 세팅
      menuItems: [],
      optionMenu_id: null,
      optionItems: [
        {
          optionName: "",
          optionPrice: null,
          optionValue: []
        },
        {}
      ],
      ////////////////
      checkedOptions: [],
      optionPrice: [],
      // 전송할 최종값
      cartItem: [
        {
          checkedMenu_id: null,
          checkedOptionItems: [
            {
              key: "value"
            }
          ],
          totalAmount: null
        }
      ]
    };
  },
  methods: {
    updateOptionPrice(price, index, i) {
      // 받은 파라미터 확인
      console.log("updateOptionPrice(): ", price, index, i);

      // 옵션 가격 계산
      this.optionPrice[i] = price * index;
      console.log("updateOptionPrice() 가격: ", this.optionPrice);

      // 로컬 스토리지에 가격 저장
      // localStorage.setItem("optionPrice", this.optionPrice);
    },
    addToCart() {
      // 메뉴 아이디
      this.cartItem[0].checkedMenu_id = this.menuItems.menu_id;

      // 선택한 옵션
      this.cartItem[0].checkedOptionItems = this.checkedOptions;

      // console.log("------키 확인:", this.cartItem[0].checkedOptionItems);

      // 옵션 가격 합계
      var i;
      var data = [];
      var amount = null;
      for (i = 0; i < this.optionPrice.length; i++) {
        data[i] = Object.values(this.optionPrice)[i];
        amount += data[i];
        console.log("개별 가격 ", i, ": ", data[i]);
      }
      console.log("총 가격: ", amount);

      // 메뉴 + 옵션 가격
      this.cartItem[0].totalAmount = this.menuItems.menuPrice + amount;

      // cart에 담길 총 가격 확인
      console.log("add to cart(): " + this.cartItem[0].totalAmount);

      // cart에 담길 내용
      console.log("add to cart(): " + JSON.stringify(this.cartItem));
      localStorage.setItem("서버에 보낼 내용", JSON.stringify(this.cartItem));

      //   // 로컬에 저장
      //   localStorage.setItem(selecteMenuId, this.selectedMenuItems);
    }
  },
  created() {
    const baseURI = "http://10.20.111.4:4000";
    this.$http
      .get(`${baseURI}/menu-detail?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        console.log("MenuDetail: created()");
        // console.log("MenuDetail: created()", result.data[0].menuName);
        // this.items = result.data;
        this.checkedMenu_id = result.data[0].menu_id;
        this.menuItems = result.data[0];

        console.log("최종 items:", this.menuItems);
      }); // get
    this.$http
      .get(`${baseURI}/menu-option?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        console.log("MenuOptionDetail: created()", result.data[0]);
        // this.optionItems.optionMenu_id = result.data[0].optionMenu_id;
        // this.menu_id = result.data[0].optionMenu_id;
        this.optionItems = result.data[0].options;
        console.log("최종 options 값: ", this.optionItems);
      }); // get
  } // created
  // computed: {
  //   hasResult() {
  //     console.log("MenuDetail hasResult()");
  //     return this.items.length > 0;
  //   }
  // }
};
</script>

<style scoped>
</style>