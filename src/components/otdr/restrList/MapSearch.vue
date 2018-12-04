<template>
  <div>
    <google-maps/>
  </div>
</template>

<script>
import googleMaps from "/Users/sojeong/web_proj/vue/palmtender_frontend/src/api/googleMaps.vue";
// import googleMaps from "C:/Users/sktsuser/Documents/vue-palmtender/src/api/googleMaps.vue";
import Vue from "vue";

var eventBus = new Vue();

export default {
  data() {
    return {
      lat: "",
      lng: ""
    };
  },
  components: {
    googleMaps: googleMaps
  },
  methods: {
    searchList(lat, lng) {
      console.log("이벤트 실행: ", lat, lng);
      this.$eventBus.$emit("searchList", lat, lng);
    }
  }
};
</script>

<style scoped>
</style>