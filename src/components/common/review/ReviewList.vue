<template>
  <div>
    <div v-if="hasResult">
      <div v-for="(item, index) in items" v-bind:key="index">
        <div>
          <article>{{index+1}}. {{item.reviewContents}}</article>
          <star-rating read-only :rating="item.reviewRating" :star-size="20"></star-rating>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating
  },
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