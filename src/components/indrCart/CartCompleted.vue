<template>
  <div class="pane">
    <link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/vue-material.min.css">
    <!-- <link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/theme/default.css"> -->
    <md-empty-state
      class="md-primary"
      md-icon="done"
      md-label="Completed"
      md-description="장바구니에 성공적으로 메뉴를 담았습니다."
    ></md-empty-state>
    <!-- <div class="link">
      <router-link
        :to="{name:'menu-page', params:{restr_id:restr_id, table_id:table_id, retag:retag}}"
        tag="b-button"
        variant="primary"
      >메뉴</router-link>
      <router-link
        :to="{name:'cart-page', params:{restr_id:restr_id, table_id:table_id}}"
        tag="b-button"
      >장바구니</router-link>
    </div>-->
    <!-- <router-link :to="{name:'order'}" tag="b-button">주문하기</router-link> -->
  </div>
</template>

<script>
import VueMaterial from "vue-material";
import Vue from "vue";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueMaterial);

// Vue.use(VueMaterial);
export default {
  data() {
    return {
      retag: null,
      restr_id: null,
      table_id: null
    };
  },
  created() {
    this.retag = sessionStorage.getItem("retag");
    this.restr_id = sessionStorage.getItem("restr_id");
    this.table_id = sessionStorage.getItem("table_id");
  }
};
</script>

<style scoped>
.link {
  justify-content: space-between;
}
.pane {
  margin-top: 5rem;
}
</style>