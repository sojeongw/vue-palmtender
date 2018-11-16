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
<google-maps/>
    </div>
</template>

<script>
import googleMaps from "/Users/sojeong/web_proj/vue/palmtender_frontend/src/api/googleMaps.vue";

export default {
  components: {
    googleMaps: googleMaps
    // RestrDetailPage: RestrDetailPage
  },
  methods: {
    // receives a place object via the autocomplete component
    // searchList() {
    //   var lat = this.$refs.getLat.value;
    //   var lng = this.$refs.getLng.value;
    //   console.log("searchList: " + lat + lng);
    // },
    //  searchList(getLat, getLng) {
    //   var lat = this.getLat.value;
    //   var lng = this.getLng.value;
    //   console.log("searchList: " + lat + lng);
    // },
  }
};
</script>

<style scoped>
</style>