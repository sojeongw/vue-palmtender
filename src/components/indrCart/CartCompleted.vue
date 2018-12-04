<template>
  <div>
    <link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/vue-material.min.css">
    
    <link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/theme/default.css">
    <md-empty-state
      class="md-primary"
      md-icon="done"
      md-label="장바구니 성공"
      md-description="장바구니에 성공적으로 메뉴를 담았습니다."
    ></md-empty-state>
    <router-link
      :to="{name:'menu-page', params:{restr_id:restr_id, table_id:table_id, retag:retag}}"
      tag="button"
    >메뉴로 돌아가기</router-link>
    <router-link
      :to="{name:'cart-page', params:{restr_id:restr_id, table_id:table_id}}"
      tag="button"
    >장바구니 보기</router-link>
    <router-link :to="{name:'order'}" tag="button">주문하기</router-link>
  </div>
</template>

<script>
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

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
    this.retag = localStorage.getItem("retag");
    this.restr_id = localStorage.getItem("restr_id");
    this.table_id = localStorage.getItem("table_id");
  }
};
</script>

<style scoped>
</style>