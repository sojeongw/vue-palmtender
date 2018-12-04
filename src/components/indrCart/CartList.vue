<template>
  <div v-if="hasResult">
    <!-- <div v-for="(item,key) in menuItems" :key="key">
      {{item.optionName}}
      {{item.subName}}
    {{item.optionPrice}}-->
    {{menuItems()}}
    <!-- </div> -->
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
  props: ["menuItems"],
  methods: {
    addToCart() {}
  },
  computed: {
    hasResult() {
      return this.menuItems.length > 0;
    }
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