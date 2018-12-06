<template>
  <div class="pane">
    <b-card class="card" header="메뉴" header-tag="header">
      <b-list-group flush>
        <div v-for="(list,index) in lists" v-bind:key="index">
          <b-list-group-item
            class="align-items-start"
            :to="{name:'menu-detail', params:{menu_id: list.menu_id, menuName:list.menuName}}"
          >
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
    </b-card>
    <!-- <button>결제하기</button> -->
    <!-- <div v-if="hasResult">
      <div v-for="(item, key) in items" v-bind:key="key">
        <div>
          <router-link
            :to="{name:'menu-detail', params:{menu_id: item.menu_id}}"
            exact
          >{{item.menuName}}</router-link>
          <article>{{key}}: {{item.menuInfo}} - {{item.menuAllergy}} - {{item.menuPrice}}</article>
        </div>
      </div>
    </div>-->
  </div>
</template>


<script>
import Vue from "vue";
var bus = new Vue();

export default {
  data() {
    return {
      items: [],
      // NFC에서 받는 값
      // restr_Id: 2,
      table_id: null,
      // retag: 0
      lists: [],
      retag: null
    };
  },

  computed: {
    hasResult() {
      console.log("MenuPage hasResult()");
      return this.items.length > 0;
    }
  },
  created() {
    const baseURI = "http://219.240.99.118:4000";
    // const baseURI = "http://localhost:4000";
    this.$http
      .get(
        `${baseURI}/menu?restr_id=` +
          this.$route.params.restr_id +
          `&table_id=` +
          this.$route.params.table_id +
          `&retag=` +
          this.$route.params.retag
      )
      .then(result => {
        this.table_id = this.$route.params.table_id;
        console.log("MenuPage: created() menu", result.data);
        this.items = result.data;

        // 태그 유무
        localStorage.setItem("retag", parseInt(this.$route.params.retag) + 1);
        localStorage.setItem("restr_id", parseInt(this.$route.params.restr_id));
        localStorage.setItem("table_id", parseInt(this.table_id));
        console.log("타입체크", parseInt(this.table_id));
        // 테이블 아이디 보내기
        bus.$emit("setTable_id", parseInt(this.$route.params.table_id));
      });

    this.$http
      .get(`${baseURI}/detail?restr_id=` + this.$route.params.restr_id)
      .then(result => {
        console.log("MenuPage created() detail: ", result.data[0].menu);
        // this.lists = result.data;
        this.lists = result.data[0].menu;
      });
  } // created
};
</script>

<style scoped>
.pane {
  padding-top: 0.5rem;
  padding-left: 10rem;
  padding-right: 10rem;
  width: 100%;
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
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
@media (max-width: 600px) {
  .pane {
    padding: 0.5rem;
    display: table-cell;
    /* 그 밑에 직개 자식에는 display 성질을 table-cell으로 바꾸어 줘야 한다.*/
    vertical-align: middle;
    /*table에 관한 수직정렬 속성 top, middle, bottom 3가지가 있다.*/
    position: relative;
    height: 500px;
    overflow-y: scroll;
  }
  .menu-img {
    position: absolute;
    /* padding-left: 0rem;
    margin-left: 0rem; */
    /* float: none; */
    width: 50%;
    height: 50%;
  }
  .menu-info {
    /* position: absolute; */
    padding-left: 7.5rem;
    float: none;
  }
}
</style>