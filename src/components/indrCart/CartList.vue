<template>
  <!-- <div v-if="hasResult"> -->
  <div>
    <!-- <div v-for="(name,key) in result.optionName" :key="key">{{name}}</div> -->
    <!-- <div v-for="(price,index)in result.optionPrice" :key="index">{{price}}</div> -->
    {{result}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // restr_id: null,
      // table_id: null,
      // menu_id: null,
      // optionAmount: null,
      // menuPrice: null,
      // total: null,
      // menuItems: [{}]
    };
  },
  props: ["result"],
  methods: {
    addToCart() {}
  },
  computed: {
    // hasResult() {
    //   return this.result.length > 0;
    // }
  },
  created() {
    console.log("cart list created");
  },
  mounted() {
    console.log("cart list mounted");
  },
  watch: {
    menuItems: function(data) {
      console.log("데이터 갱신", data);
    }
  }
};
</script>

<style scoped>
</style>