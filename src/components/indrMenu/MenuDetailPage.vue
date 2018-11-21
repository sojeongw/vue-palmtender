<template>
    <div v-if="hasResult">
<div>
    <!-- <div v-for="item in items" v-bind:key="item.menu_id">
         <div>
            {{item.restrName}}
              <article> {{item.menuName}} - {{item.menuPrice}} - {{item.menuIngredients}}</article>
                 </div>
             </div> -->
             <p/>
             메뉴 사진: {{items.menuPhoto}}
             <p/>
             메뉴 카테고리: {{this.items.menuCategory_id}}
             <p/>
             메뉴 이름: {{this.items.menuName}}
             <p/>
             메뉴 정보: {{this.items.menuInfo}}
             <p/>
             메뉴 재료: {{this.items.menuIngredients}}
             <p/>
             메뉴 가격: {{this.items.menuPrice}}
             <p/>
            알러지 정보: {{this.items.menuAllergy}}
             <p/>
           메뉴가 속한 식당 아이디:  {{this.items.menuRestr_id}}
            <p/>
           메뉴 아이디:  {{this.items.menu_id}}
             <p/>
</div>
            ---------------------
    <div>{{this.optionItems.options[0].optionName}}</div>
  <div v-for="option in optionItems.options[0].optionValue" v-bind:key="option.key">
     {{option}}
    </div>
    <div>{{this.optionItems.options[0].optionPrice}}</div>
    
</div>
       <!-- {{option.optionValue}}
       {{option.optionPrice}} -->
  <!-- 메뉴 옵션 선택하기 -->
  <!-- <form @submit.prevent="submit"> -->
   <!-- <input type="checkbox" id="option" :value="{optionName: option.options[0].optionName}" v-model="checkedOptions">
   <label for="option-1">{{option.options[0].optionName}}
   - {{option.options[0].optionPrice}}
   - {{option.options[0].optionValue[0]}}</label>
    <p/>
     <input type="checkbox" id="option" :value="{optionName: option.options[1].optionName}" v-model="checkedOptions">
   <label for="option-2">{{option.options[1].optionName}}
   - {{option.options[1].optionPrice}}
   - {{option.options[1].optionValue[1]}}</label>
<p/>
    <input type="checkbox" id="option" :value="{optionName: option.options[2].optionName}" v-model="checkedOptions">
   <label for="option-3">{{option.options[2].optionName}}
   - {{option.options[2].optionPrice}}
   - {{option.options[2].optionValue[2]}}</label> -->
   <!-- <p/>
   <div><span>선택한 옵션: {{checkedOptions}}</span></div>
   <div><span>옵션 총액: </span></div>
     <div>   <button v-on:click="addToCart">장바구니 넣기</button></div> -->
     <!-- </form> -->
     
    
</template>

<script>
export default {
  data() {
    return {
      items: [],
      optionItems: [],
      checkedOptions: [],
      optionPrice: [],
      cartItem: ""
    };
  },

  methods: {
    submit() {},
    addToCart() {
      localStorage.setItem(this.checkedOptions, this.checkedOptions);
      // console.log("add to cart(): " + this.checkedOptions[0].optionName);
    }
  },
  watch: {
    items: function(newVal, oldVal) {
      return this.items;
    },
    optionItems: function(newVal, oldVal) {
      return this.items;
    }
  },
  created() {
    const baseURI = "http://10.30.39.220:4000";
    this.$http
      .get(`${baseURI}/menu-detail?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        console.log("MenuDetail: created()");
        // console.log("MenuDetail: created()", result.data[0].menuName);
        // this.items = result.data;

        this.items = result.data[0];

        console.log("최종 items:", this.items);
      }); // get
    this.$http
      .get(`${baseURI}/menu-option?menu_id=` + this.$route.params.menu_id)
      .then(result => {
        console.log("MenuOptionDetail: created()", result.data[0]);
        this.optionItems.optionMenu_id = result.data[0].optionMenu_id;
        this.optionItems.options = result.data[0].options;
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