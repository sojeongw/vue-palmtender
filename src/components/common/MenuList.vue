<template>
  <div>
    <p/>
    <h3>menu list</h3>
    <div v-if="hasResult">
      <div v-for="list in lists" v-bind:key="list.restr_id">
        <div>
          {{list.menuName}}
          <article>{{list.menuInfo}} - {{list.menuAllergy}} - {{list.menuPrice}}</article>
          <p/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: []
    };
  }, // data
  created() {
    const baseURI = "http://219.240.99.118:4000";
    // const baseURI = "http://localhost:4000";
    this.$http
      .get(`${baseURI}/detail?restr_id=` + this.$route.params.restr_id)
      .then(result => {
        console.log("MenuList created()");
        console.log(result.data[0].menu);
        // this.lists = result.data;
        this.lists = result.data[0].menu;
      });
  }, // created
  computed: {
    hasResult() {
      console.log("MenuList hasResult()");
      return this.lists.length > 0;
    }
  } // computed
};
</script>

<style scoped>
</style>