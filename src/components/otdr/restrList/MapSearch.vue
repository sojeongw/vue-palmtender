<template>
    <div>
    
      <!-- <form>
  <div>
    <label for="lat">lat</label>
    <input id="lat" v-model='this.getLat' type="text">
  </div>
  <div>
    <label for="lng">lng</label>
    <input id="lng"  v-model='this.getLng' type="text">
  </div>
  <div>
    <button v-on:click='searchList(lat,lng)'>식당 검색</button>
  </div>
</form> -->
<div class="form-group">
<input type="text" v-model="lat">
<input type="text" v-model="lng">
  <input type="submit" value="submit" v-on:click="searchList(lat, lng)">
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