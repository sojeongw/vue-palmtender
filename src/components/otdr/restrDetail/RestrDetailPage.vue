
<template>
  <div>
    <h3>detail page</h3>
    <restr-detail/>
    <menu-list/>
    <table-status/>
    <review-list/>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import RestrDetail from "./RestrDetail";
import MenuList from "../../common/MenuList";
import TableStatus from "../../common/TableStatus";
import ReviewList from "../../common/review/ReviewList";

export default {
  components: {
    RestrDetail: RestrDetail,
    ReviewList: ReviewList,
    MenuList: MenuList,
    TableStatus: TableStatus
  },
  data() {
    return {
      lists: []
    };
  },
  created() {
    console.log("RestrDetailPage created()");
    const baseURI = "http://219.240.99.118:4000";
    // const baseURI = "http://localhost:4000";
    this.$http.get(`${baseURI}/detail?restr_id=` + 1).then(result => {
      this.lists = result.data;
    });
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
  } //method
}; //export
</script>

<style scoped>
</style>