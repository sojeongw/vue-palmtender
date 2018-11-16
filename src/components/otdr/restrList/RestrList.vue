<template>
    <div id="app">
        <div v-if="hasResult">
             <div v-for="list in lists" v-bind:key="list.restr_id">
                 <div>
              <h3>  {{list.restrName}}</h3>
              <article> {{list.restrInfo}} - {{list.restrCategoryName}} - {{list.usableTable}}</article>
                 </div>
             </div>
        </div>
    <button v-on:click="searchList(100,100)">글 불러오기</button>
    <!-- <button v-on:click="seeDetail(1)">detail page로 가기</button> -->
    <router-link to="/detail/1">detail page로 가기</router-link>
    
    </div>
</template>

<script>
import Vue from "vue";
var eventBus = new Vue();

export default {
  name: "app",
  data() {
    return {
      lists: [],
      restr_id: this.$route.params.restr_id,
      lat: this.$route.params.lat,
      lng: this.$route.params.lng
    };
  }, // data()
  computed: {
    hasResult() {
      return this.lists.length > 0;
    }
  }, //computed
  created() {
    const baseURI = "http://10.30.39.157:4000";
    this.$http
      .get(`${baseURI}/otdr?lat=` + 100 + `&lng=` + 100)
      .then(result => {
        console.log("created()");
        this.lists = result.data;
      });
  },
  methods: {
    searchList(lat, lng) {
      const baseURI = "http://10.30.39.157:4000";
      this.$http
        .get(`${baseURI}/otdr?lat=` + lat + `&lng=` + lng)
        .then(result => {
          console.log("searchList()");
          this.lists = result.data;
        });
    } // searchList()
    // seeDetail(restr_id) {
    //   const baseURI = "http://10.30.39.157:4000";
    //   this.$http.get(`${baseURI}/detail?restr_id=` + restr_id).then(result => {
    //     console.log(result);
    //     // this.restr_id = result.data;
    //     eventBus.$emit("seeDetail", result);
    //   });
    // }
  }
};
</script>

<style scoped>
</style>