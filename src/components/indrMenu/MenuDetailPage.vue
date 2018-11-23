<template>
    <div>
<div>
             <p/>
             메뉴 사진: {{menuItems.menuPhoto}}
             <p/>
             메뉴 카테고리: {{menuItems.menuCategory_id}}
             <p/>
             메뉴 이름: {{menuItems.menuName}}
             <p/>
             메뉴 정보: {{menuItems.menuInfo}}
             <p/>
             메뉴 재료: {{menuItems.menuIngredients}}
             <p/>
             메뉴 가격: {{menuItems.menuPrice}}
             <p/>
            알러지 정보: {{menuItems.menuAllergy}}
             <p/>
           메뉴가 속한 식당 아이디:  {{menuItems.menuRestr_id}}
            <p/>
           메뉴 아이디:  {{menuItems.menu_id}}
             <p/>
</div>
            ---------------------
       <!-- <div>     {{optionItems[0].optionName}}</div>
       <div>     {{optionItems[0].optionPrice}}</div> -->
      
       <div v-for="(option,i) in optionItems" v-bind:key="i">
         {{option.optionName}}: 
         {{option.optionPrice}}원 추가
       <!-- <div>   <input type="radio" :name="option.optionName" value="0" checked> 선택 안 함</div> -->
        <div v-for="(value,index) in option.optionValue" v-bind:key="index">
          <input type="radio" :name="option.optionName " :id="option" :value="value" v-model="checkedOptions[i]"
          v-on:click="updateOptionPrice(option.optionPrice, index)">
       <label :for="option">{{value}}</label>
          
        </div>
        <p/>
         </div>
      
         <!-- <input type="radio" id="one" :value="optionItems[0].optionValue[0]" v-model="checkedOptions[0]">
         <label for="one">{{optionItems[0].optionValue[0]}}</label>

         <input type="radio" id="two" :value="optionItems[0].optionValue[1]" v-model="checkedOptions[0]">
         <label for="value1">{{optionItems[0].optionValue[1]}}</label>

         <input type="radio" id="three" :value="optionItems[0].optionValue[2]" v-model="checkedOptions[0]">
         <label for="three">{{optionItems[0].optionValue[2]}}</label>
<p/>

     <input type="radio" id="one" :value="optionItems[1].optionValue[0]" v-model="checkedOptions[1]">
         <label for="one">대</label>
         <input type="radio" id="two" value="중,2000" v-model="checkedOptions[1]">
         <label for="value1">중</label>
         <input type="radio" id="three" value="소,1000" v-model="checkedOptions[1]">
         <label for="three">소</label>
<p/> -->
<div>{{checkedOptions}}</div>
<p/>
         <!-- <label for="value1">{{optionItems.optionValue[2]}}</label> -->
  <!-- <div v-for="option in optionItems" v-bind:key="option.optionName">
     {{option.optionName}} - 
     {{option.optionPrice}}원
 <div v-for="value in option.optionValue" v-bind:key="value" >
     <input type="radio" :name="option.optionName" v-bind:value="value"
     v-model="checkedOptions.val"
     >
  {{value}}
    </div>
    <p/> -->
    
<!-- <form @submit.prevent="addToCart($event.target.value)"> -->
  <!-- 3번째 값은 존재할 때만 출력 -->
 <!-- <div>   <input v-if="option.optionValue[2]" type="radio" :name="option.optionName"
 v-on:click="updateOptionPrice(option.optionPrice, $event.target)"
 v-bind:value="option.optionValue[2]" >
  <label>  {{option.optionValue[2]}}</label></div>
     <p/> -->

    <!-- </div> -->
<button v-on:click="clickRadio" >장바구니 넣기</button>

</div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [],
      optionMenu_id: null,
      optionItems: [
        {
          optionName: "",
          optionPrice: null,
          optionValue: [
            {
              // 0: "",
              // 1: "",
              // 2: ""
            }
          ]
        },
        {}
      ],
      checkedOptions: [],
      optionPrice: null,
      selectedMenuItems: []
    };
  },

  methods: {
    clickRadio() {
      // this.checkedOptions.push({ val: "" });
      console.log(this.checkedOptions);
    },
    updateOptionPrice(price, index) {
      // console.log("updateOptionPrice(): ", prVal);
      console.log("updateOptionPrice(): ", price, index);
      // console.log("updateOptionPrice(): ", tgVal.checked);

      // if (tgVal.checked == true) {
      //   this.optionPrice += prVal;
      //   console.log(this.optionPrice);
      //   localStorage.setItem("optionPrice", this.optionPrice);
      // } else {
      //   this.optionPrice -= prVal;
      //   console.log(this.optionPrice);
      //   localStorage.setItem("optionPrice", this.optionPrice);
      // }
    },
    removeOption(opName, opPrice, index) {
      console.log(opName, opPrice);
    },

    addToCart() {
      // this.checkedOptions.push({ value: "" });
      console.log("add to cart(): " + this.checkedOptions);
      // console.log("add to cart(): " + selecteMenuId, selectedMenuPrice);
      //   this.selectedMenuItems = {
      //     menu_id: selecteMenuId,
      //     menuPrice: selectedMenuPrice
      //   };

      //   // 객체에 담겼는지 확인
      //   console.log("add to cart(): " + JSON.stringify(this.selectedMenuItems));

      //   // 로컬에 저장
      //   localStorage.setItem(selecteMenuId, this.selectedMenuItems);
    }
  },

  created() {
    const baseURI = "http://10.20.201.156:4000";
    this.$http
      .get(`${baseURI}/menu-detail?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        console.log("MenuDetail: created()");
        // console.log("MenuDetail: created()", result.data[0].menuName);
        // this.items = result.data;

        this.menuItems = result.data[0];

        console.log("최종 items:", this.menuItems);
      }); // get
    this.$http
      .get(`${baseURI}/menu-option?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        console.log("MenuOptionDetail: created()", result.data[0]);
        // this.optionItems.optionMenu_id = result.data[0].optionMenu_id;
        this.optionMenu_id = result.data[0].optionMenu_id;
        this.optionItems = result.data[0].options;
        console.log("최종 options 값: ", this.optionItems);
      }); // get
  }, // created
  computed: {
    hasResult() {
      console.log("MenuDetail hasResult()");
      return this.items.length > 0;
    }
  }
};
</script>

<style scoped>
</style>