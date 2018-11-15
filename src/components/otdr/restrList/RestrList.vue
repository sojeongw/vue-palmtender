<template>
    <div id="app">
        <div v-if="hasResult">
             <div v-for="list in lists" v-bind:key="list.restr_id">
                 <div>{{list.restrName}}</div>
                 <p></p>
             </div>
        </div>
    <button v-on:click="searchList">글 불러오기</button>
    </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      lists: []
    };
  },
  computed: {
    hasResult() {
      return this.lists.length > 0;
    }
  },
  methods: {
    searchList() {
      const baseURI = "http://10.30.39.157:4000";
      this.$http.get(`${baseURI}/otdr?lat=100&lng=100`).then(result => {
        console.log(result);
        this.lists = result.data;
      });
    }
  }
};
</script>

<style scoped>
</style>