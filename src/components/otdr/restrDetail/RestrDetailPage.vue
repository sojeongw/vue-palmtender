
<template>
    <div>
detailpage
<router-view></router-view>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    // created() {
    //   eventBus.$on("seeDetail", function(result) {
    //     const baseURI = "http://10.30.39.157:4000";
    //     this.$http.get(`${baseURI}/detail?restr_id=` + result).then(result => {
    //       console.log(result);
    //       this.list = result;
    //     });
    //   });
    // } //created
    created(result) {
      const baseURI = "http://10.30.39.157:4000";
      this.$http.get(`${baseURI}/detail?restr_id=` + result).then(result => {
        console.log(result.data);
        this.list = result.data;
      });
    }
  } //method
}; //export
</script>

<style scoped>
</style>