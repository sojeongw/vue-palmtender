<template>
  <div class="pane">
    <div v-if="hasResult">
      <div v-for="(item,key) in items" v-bind:key="key">
        <h6>{{item.table_id}}번 테이블</h6>
        전체 좌석 {{item.tableSeatTotal}}
        <br>
        <!-- 잔여 좌석{{item.tableAmountRemaining}}
        <br>
        점유 좌석{{item.tableAmountDone}}-->
        <!-- status 0이 사용불가 -->
        <b-button size="sm" v-if="item.tableStatus==0">사용 불가</b-button>
        <b-button size="sm" variant="primary" v-else>사용 가능</b-button>
        <p/>
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
  watch: {
    // items: function(status) {
    //   console.log("watch", status);
    //   this.items = status;
    //   return this.items;
    // }
    // items:
  },
  created() {
    const baseURI = "http://219.240.99.118:4000";
    // const baseURI = "http://localhost:4000";
    this.$http
      .get(`${baseURI}/detail?restr_id=` + this.$route.params.restr_id)
      .then(result => {
        console.log("TableStatus: created()", result.data[0].table);
        this.items = result.data[0].table;
      });
  }
};
</script>

<style scoped>
.pane {
  padding: 0.5rem;
  /* padding-right: 5rem; */
  /* height: 500px; */
  /* display: flex;
  flex-direction: row;
  flex: 1; */
  /* height: 500px; */
  overflow-y: auto;
}
</style>