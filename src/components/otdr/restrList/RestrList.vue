<template>
  <div id="app" v-if="hasResult">
    <b-list-group>
      <div v-for="(list,index) in lists" v-bind:key="index">
        <b-list-group-item
          :to="{name:'restr-detail', params:{restr_id: list.restr_id}}"
          class="flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-between">
            <!-- <img src="http://www.newsculture.tv/imgdata/newsculture_tv/201709/201709283725878.jpg"> -->
            <h5 class="mb-1">{{index+1}}. {{list.restrName}}</h5>
            <small>{{list.restrCategoryName}}</small>
          </div>
          <p class="mb-1">{{list.restrInfo}}</p>
          <small class="text-muted">사용 가능 테이블: {{list.usableTable}}</small>
        </b-list-group-item>
      </div>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      lists: [],
      restr_id: ""
    };
  }, // data()
  computed: {
    hasResult() {
      console.log("hasResult()");
      return this.lists.length > 0;
    }
  }, //computed
  created() {
    this.$eventBus.$on("searchList", this.searchList);
  },
  methods: {
    searchList(data) {
      // const baseURI = "http://219.240.99.118:4000";
      // // const baseURI = "http://localhost:4000";

      // this.$http
      //   .get(`${baseURI}/otdr?lat=` + lat + `&lng=` + lng)
      //   .then(result => {
      //     this.lists = result.data;
      //     console.log("searchList(): ", this.lists);
      //   });
      console.log("eventbus on", data);
      this.lists = data;
    }
  }
};
</script>

<style scoped>
img {
  display: block;
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;
  /* height: 200px; */
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>