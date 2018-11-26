<template>
  <div>
    <h3>table status</h3>
    <div v-if="hasResult">
      <div v-for="item in items" v-bind:key="item.restr_id">
        <div>
          {{item.table[0].tableStatus}}
          <article>{{item.table[0].tableSeatTotal}} - {{item.table[0].tableAmountDone}} - {{item.table[0].tableAmountRemaining}}</article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  computed: {
    hasResult() {
      console.log("TableStatus hasResult()");
      return this.items.length > 0;
    }
  },
  created() {
    const baseURI = "http://219.240.99.118:4000";
    // const baseURI = "http://localhost:4000";
    this.$http.get(`${baseURI}/detail?restr_id=` + 1).then(result => {
      console.log("TableStatus: created()");
      console.log(result.data);
      this.items = result.data;
    });
  }
};
</script>

<style scoped>
</style>