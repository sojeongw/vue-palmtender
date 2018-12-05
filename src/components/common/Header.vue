<template>
  <div>
    <b-navbar class="nav-bar" toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/otdr">Palmtender</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <!-- <b-nav-item href="#">Sign In</b-nav-item>
            <b-nav-item href="#">Join</b-nav-item>-->
            <b-nav-item href="/cart/:restr_id/:table_id">장바구니</b-nav-item>
            <b-nav-item href="/order">결제하기</b-nav-item>
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

export default {
  data() {
    return {
      restr_id: null,
      table_id: null
    };
  },
  created() {
    this.table_id = localStorage.getItem("table_id");
    this.restr_id = localStorage.getItem("restr_id");
  }
};
</script>

<style scoped>
</style>