<template>
  <div>
    <b-navbar class="nav-bar" toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse" v-if="status"></b-navbar-toggle>
      <b-navbar-brand class="brand-logo" to="/otdr">Palmtender</b-navbar-brand>
      <!-- <b-navbar-brand
        class="brand-logo"
        :to="{name:'menu-page',params:{restr_id:restr_id, table_id:table_id, retag:retag}}"
      >Palmtender</b-navbar-brand>-->
      <b-collapse is-nav id="nav_collapse" v-if="status!==0">
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <!-- <b-nav-item href="#">Sign In</b-nav-item>
            <b-nav-item href="#">Join</b-nav-item>-->
            <b-nav-item
              :to="{name:'menu-page',params:{restr_id:restr_id, table_id:table_id,retag:retag}}"
            >메뉴</b-nav-item>
            <b-nav-item :to="{name:'cart-page',params:{restr_id:restr_id, table_id:table_id}}">장바구니</b-nav-item>
            <b-nav-item :to="{name:'order',params:{restr_id:restr_id, table_id:table_id}}">주문내역</b-nav-item>
            <!-- <b-dropdown-divider style="color:gray"></b-dropdown-divider>
            <b-nav-item :to="{name:'sign-in'}">로그인</b-nav-item>
            <b-nav-item :to="{name:'join'}">회원가입</b-nav-item>-->
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import "~open-color/open-color";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import "vuetify/dist/vuetify.min.css";

import Vue from "vue";
var bus = new Vue();
export default {
  data() {
    return {
      restr_id: null,
      table_id: null,
      retag: null
      // status: null
    };
  },
  computed: {
    status() {
      // if (sessionStorage.getItem("restr_id") === null) return false;
      // else return true;
      if (this.$route.name == "otdr" || this.$route.name == "restr-detail")
        return false;
      else return true;
    }
  },
  methods: {},
  created() {
    console.log("route 정보", this.$route.name, this.$route);
    console.log("세션 길이", sessionStorage.length);
    // console.log("콘솔 테스트", this.$route.name, this.$route.name);
    this.table_id = sessionStorage.getItem("table_id");
    this.restr_id = sessionStorage.getItem("restr_id");
    this.retag = sessionStorage.getItem("retag");

    // session에 값이 없으면 nav 메뉴를 표시하지 않음
    // this.status = sessionStorage.length;
    console.log("session storage length: ", this.status);

    // bus.$on("setTable_id", function(table_id) {
    //   console.log("set table id", table_id);
    // });

    console.log("header test", sessionStorage.getItem("restr_id"));
  }
};
</script>

<style scoped>
.brand-logo {
  text-decoration: none;
  color: white;
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
</style>