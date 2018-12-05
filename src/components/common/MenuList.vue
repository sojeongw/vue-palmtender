<template>
  <div class="pane">
    <!-- <b-card no-body header="메뉴" header-tag="header"> -->
    <b-list-group flush>
      <div v-for="(list,index) in lists" v-bind:key="index">
        <b-list-group-item class="align-items-start">
          <div class="d-flex w-100">
            <!-- <div class="d-flex w-100 justify-content-between"> -->
            <div class="menu-img">
              <img src="/src/assets/images/bongchu/Bongchu_menu_4.jpg">
            </div>
            <div class="menu-info">
              <h5 class="mb-1">{{list.menuName}}</h5>
              <p class="mb-1">{{list.menuInfo}}</p>
              <p class="mb-1">{{list.menuPrice}}원</p>
              <small class="text-muted">알러지 정보: {{list.menuAllergy}}</small>
            </div>
          </div>
        </b-list-group-item>
      </div>
    </b-list-group>
    <!-- </b-card> -->
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
.pane {
  padding-left: 0.5rem;
  padding-right: 5rem;
  width: 940;
  /* display: flex;
  flex-direction: row;
  flex: 1; */
  /* height: 500px; */
  overflow-y: auto;
}
.menu-info {
  float: right;
  padding-left: 3rem;
}
.menu-img {
  float: left;
  width: auto;
  height: auto;
  max-width: 100px;
  max-height: 100px;
}
</style>