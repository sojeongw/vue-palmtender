<template>
  <div>
    <b-navbar class="nav-bar" toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand class="brand-logo" to="/otdr">Palmtender</b-navbar-brand>
      <!-- <b-navbar-brand
        class="brand-logo"
        :to="{name:'menu-page',params:{restr_id:restr_id, table_id:table_id, retag:retag}}"
      >Palmtender</b-navbar-brand>-->
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <!-- <b-nav-item href="#">Sign In</b-nav-item>
            <b-nav-item href="#">Join</b-nav-item>-->
            <b-nav-item
              :to="{name:'menu-page',params:{restr_id:restr_id, table_id:table_id,retag:retag}}"
            >메뉴</b-nav-item>
            <b-nav-item :to="{name:'cart-page',params:{restr_id:restr_id, table_id:table_id}}">장바구니</b-nav-item>
            <b-nav-item :to="{name:'order',params:{restr_id:restr_id, table_id:table_id}}">주문내역</b-nav-item>
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

import Vue from "vue";
var bus = new Vue();
export default {
  data() {
    return {
      restr_id: null,
      table_id: null,
      retag: null
    };
  },
  methods: {},
  created() {
    console.log("콘솔 테스트", this.$route.name, this.$route.name);
    this.table_id = sessionStorage.getItem("table_id");
    this.restr_id = sessionStorage.getItem("restr_id");
    this.retag = sessionStorage.getItem("retag");

    bus.$on("setTable_id", function(table_id) {
      console.log("set table id", table_id);
    });

    console.log("header test", this.table_id);
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