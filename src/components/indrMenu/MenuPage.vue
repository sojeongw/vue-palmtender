<template>
  <div>
    <h3>menu list</h3>
    <div v-if="hasResult">
      <div v-for="(item, key) in items" v-bind:key="key">
        <div>
          <router-link
            :to="{name:'menu-detail', params:{menu_id: item.menu_id, table_id:table_id}}"
            exact
          >{{item.menuName}}</router-link>
          <article>{{key}}: {{item.menuInfo}} - {{item.menuAllergy}} - {{item.menuPrice}}</article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      // NFC에서 받는 값
      // restr_Id: 2,
      table_id: null
      // retag: 0
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
        console.log("MenuPage: created()", result.data);
        this.items = result.data;

        // 태그 유무
        localStorage.setItem("retag", parseInt(this.$route.params.retag) + 1);
        localStorage.setItem("restr_id", parseInt(this.$route.params.restr_id));
        localStorage.setItem("table_id", parseInt(this.$route.params.table_id));
      });
  } // created
};
</script>

<style scoped>
</style>