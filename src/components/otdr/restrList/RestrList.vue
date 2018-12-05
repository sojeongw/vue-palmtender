<template>
  <div id="app">
    <b-card no-body header="식당 리스트" header-tag="header">
      <b-list-group flush v-if="hasResult">
        <div v-for="(list,index) in lists" v-bind:key="index">
          <b-list-group-item
            :to="{name:'restr-detail', params:{restr_id: list.restr_id}}"
            class="flex-column align-items-start"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{index+1}}. {{list.restrName}}</h5>
              <small>{{list.restrCategoryName}}</small>
            </div>
            <p class="mb-1">{{list.restrInfo}}</p>
            <small class="text-muted">사용 가능 테이블: {{list.usableTable}}</small>
          </b-list-group-item>
        </div>
      </b-list-group>
      <b-list-group-item v-else class="align-items-start">검색결과가 없습니다</b-list-group-item>
    </b-card>
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
#app {
  padding: 0.5rem;
}
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