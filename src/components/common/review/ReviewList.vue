<template>
    <div>
<h3>review list</h3>
<div v-if="hasResult">
    <div v-for="item in items" v-bind:key="item.restr_id">
         <div>
            {{item.review[0].reviewDate}}
              <article> {{item.review[0].reviewContents}} - {{item.review[0].reviewRating}}</article>
              <article> {{item.review[0].reviewUser_id}} - {{item.review[0].review_id}}</article>
                
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
    const baseURI = "http://10.30.39.157:4000";
    this.$http.get(`${baseURI}/detail?restr_id=` + 1).then(result => {
      console.log("ReviewList: created()");
      console.log(result.data);
      this.items = result.data;
    });
  } // created
};
</script>

<style scoped>
</style>