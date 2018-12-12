<template>
  <div class="pane">
    <!-- <b-card no-body header="메뉴" header-tag="header"> -->
    <b-list-group flush>
      <div v-for="(list,index) in lists" v-bind:key="index" class="list-pane">
        <b-list-group-item class="align-items-start">
          <div class="d-flex w-100">
            <!-- <div class="d-flex w-100 justify-content-between"> -->
            <div class="menu-img">
              <img :src="list.menuPhoto">
            </div>
            <div class="menu-info">
              <h5 class="mb-1">{{list.menuName}}</h5>
              <p class="mb-1">{{list.menuInfo}}</p>
              <div v-if="list.menuPrice!=0">
                <p class="mb-1">{{list.menuPrice}}원</p>
              </div>
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
        console.log("MenuList created()", result.data[0].menu);
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
  /* width: 940; */
  /* display: flex;
  flex-direction: row;
  flex: 1; */
  /* 메뉴 출력 부분 높이 */
  height: 50vh;
  /* position: absolute; */
  overflow-y: auto;
}
.menu-info {
  position: relative;
  float: right;
  /* position 변경에 따라 띄워주기 */
  padding-left: 8rem;
  padding-top: 0.5rem;
  text-align: left;
}
.menu-img {
  position: absolute;
  float: left;
  width: 100px;
  height: 100px;
  /* max-width: 100px;
  max-height: 100px; */
  object-fit: cover;
}
@media screen and (max-width: 800px) {
  .pane {
    height: 33vh;
    /* overflow-y: auto; */
    padding-right: 0rem;
    padding-left: 0rem;
    /* display: table-cell; */
    /* 그 밑에 직개 자식에는 display 성질을 table-cell으로 바꾸어 줘야 한다.*/
    vertical-align: middle;
    /*table에 관한 수직정렬 속성 top, middle, bottom 3가지가 있다.*/
  }
}
</style>