<template>
  <div>
    <h3>menu list</h3>
    <div v-if="hasResult">
      <div v-for="(item, key) in items" v-bind:key="key">
        <div>
          <router-link
            :to="{name:'menu-detail', params:{menu_id: item.menu_id}}"
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
      restrId: "1"
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
      .get(`${baseURI}/detail?restr_id=` + this.restrId)
      .then(result => {
        console.log("MenuPage: created()");
        console.log(result.data[0].menu);
        this.items = result.data[0].menu;
      });
  } // created
};
</script>

<style scoped>
</style>