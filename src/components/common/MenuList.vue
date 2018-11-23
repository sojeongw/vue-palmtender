<template>
    <div>
        <p/>
<h3>menu list</h3>
  <div v-if="hasResult">
             <div v-for="list in lists" v-bind:key="list.restr_id">
                 <div>
             {{list.menu[0].menuName}}
              <article> {{list.menu[0].menuInfo}} - {{list.menu[0].menuAllergy}} - {{list.menu[0].menuPrice}}</article>
                 </div>
             </div>
        </div>
    
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
    const baseURI = "http://10.20.201.156:4000";
    this.$http.get(`${baseURI}/detail?restr_id=` + 1).then(result => {
      console.log("MenuList created()");
      console.log(result.data);
      this.lists = result.data;
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
</style>