<template>
  <div id="app">
    <div>
      <div v-for="list in lists" v-bind:key="list.restr_id">
        <div>
          <router-link
            :to="{name:'restr-detail', params:{restr_id: list.restr_id}}"
          >{{list.restrName}}</router-link>
          <article>{{list.restrInfo}} - {{list.restrCategoryName}} - {{list.usableTable}}</article>
        </div>
      </div>
    </div>
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
    searchList(lat, lng) {
      const baseURI = "http://219.240.99.118:4000";
      this.$http
        .get(`${baseURI}/otdr?lat=` + lat + `&lng=` + lng)
        .then(result => {
          this.lists = result.data;
          console.log("searchList(): ", this.lists);
        });
    }
  }
};
</script>

<style scoped>
</style>