<template>
  <!-- <div v-if="hasResult"> -->
  <div>
    <div v-for="(option,index) in result.selectedOptions" :key="index">
      <!-- {{option}} -->
      {{option.opName}}
      {{option.opVal.subname}}
      {{option.opVal.price}}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
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
  }
};
</script>

<style scoped>
</style>