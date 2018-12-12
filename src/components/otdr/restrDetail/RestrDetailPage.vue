
<template>
  <div class="panes">
    <div class="top-pane">
      <restr-detail/>
    </div>
    <div class="bottom-pane">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="메뉴" active>
            <menu-list/>
          </b-tab>
          <b-tab title="테이블 현황">
            <table-status/>
          </b-tab>
          <b-tab title="리뷰">
            <review-list/>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
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
    // const baseURI = "http://219.240.99.118:4000";
    // // const baseURI = "http://localhost:4000";
    // this.$http.get(`${baseURI}/detail?restr_id=` + 1).then(result => {
    //   this.lists = result.data;
    // });
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
.panes {
  padding: 0.5rem;
  padding-left: 5rem;
  padding-right: 5rem;
  /* display: flex;
  flex-wrap: wrap; */
  align-content: center;
}
.top-pane {
  /* display: flex; */
  height: 45vh;
}
.bottom-pane {
  width: 80vh;
}
@media screen and (max-width: 800px) {
  .panes {
    padding: 0.5rem;

    display: table-cell;
    vertical-align: middle;
    /* overflow: hidden; */
    /* position: absolute; */
  }
  .top-pane {
    height: auto;
    width: auto;
  }
  .bottom-pane {
    /* position: absolute; */
    width: auto;
    /* height: 20vh; */
  }

  /*height: 100%; */
  /* overflow-y: hidden; */
}
</style>