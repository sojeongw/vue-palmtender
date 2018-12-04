<template>
  <div>장바구니 완료!
    <router-link
      :to="{name:'menu-page', params:{restr_id:restr_id, table_id:table_id, retag:retag}}"
      tag="button"
    >메뉴로 돌아가기</router-link>
    <router-link :to="{name:'cart-completed'}" tag="button">장바구니 보기</router-link>
  </div>
</template>

<script>
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