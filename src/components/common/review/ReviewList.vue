<template>
  <div>
    <h3>review list</h3>
    <div v-if="hasResult">
      <div v-for="item in items" v-bind:key="item.restr_id">
        <div>
          {{item.reviewDate}}
          <article>{{item.reviewContents}} - {{item.reviewRating}}</article>
          <article>{{item.reviewUser_id}} - {{item.review_id}}</article>
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
      console.log("ReviewList hasResult()");
      return this.items.length > 0;
    }
  },
  created() {
    const baseURI = "http://219.240.99.118:4000";
    // const baseURI = "http://localhost:4000";
    this.$http
      .get(`${baseURI}/detail?restr_id=` + this.$route.params.restr_id)
      .then(result => {
        console.log("ReviewList: created()");
        console.log(result.data[0].review);
        this.items = result.data[0].review;
      })
      .catch(err => {
        console.log(err);
      });
  } // created
};
</script>

<style scoped>
</style>