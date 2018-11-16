<template>
    <div id="app">
      <p> <button v-on:click="searchList(100,100)">식당 리스트 불러오기</button></p>
      <!-- 결과값이 있으면 출력 -->
        <div v-if="hasResult">
             <div v-for="list in lists" v-bind:key="list.restr_id">
                 <div>
             <router-link to="/detail/1"> {{list.restrName}}</router-link>
              <article> {{list.restrInfo}} - {{list.restrCategoryName}} - {{list.usableTable}}</article>
                 </div>
             </div>
        </div>
    
    <!-- <button v-on:click="seeDetail(1)">detail page로 가기</button> -->
    
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
    this.$http.get(`${baseURI}/otdr?lat=` + 1 + `&lng=` + 1).then(result => {
      console.log("created()");
      this.lists = result.data;
    });
  },
  methods: {
    searchList(lat, lng) {
      const baseURI = "http://10.30.39.157:4000";
      this.$http
        .get(`${baseURI}/otdr?lat=` + 100 + `&lng=` + 100)
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