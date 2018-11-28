<template>
  <div>
    <menu-option optionParamParent="0"></menu-option>
    <menu-option optionParamParent="1"></menu-option>
    <menu-option optionParamParent="2"></menu-option>
    <menu-option optionParamParent="3"></menu-option>
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
      optionParam: 1
    };
  },
  components: {
    MenuOption: MenuOption
  }
};
</script>

<style scoped>
</style>