<template>
  <div>
    <div>
      <button v-on:click="searchList(37.40078, 127.10813)">회사</button>
      <button v-on:click="searchList(37.39618, 127.11120)">판교역</button>
      <button v-on:click="searchList(37.49792, 127.02746)">강남역</button>
    </div>
    <google-maps/>
  </div>
</template>

<script>
import googleMaps from "/Users/sojeong/web_proj/vue/palmtender_frontend/src/api/googleMaps.vue";
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