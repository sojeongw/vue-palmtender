<template>
    <div>
 <div v-if="hasResult">
    <div v-for="item in items" v-bind:key="item.restr_id">
         <div>
            {{item.restrName}}
              <article> {{item.restrInfo}} - {{item.restrCategoryName}} - {{item.table[0].tableSeatTotal}}</article>
              <article> {{item.restrParking}} - {{item.restrTel}} - {{item.table[0].tableAmountRemaining}}</article>
                
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  computed: {
    hasResult() {
      console.log("RestrDetail hasResult()");
      return this.items.length > 0;
    }
  },
  created() {
    const baseURI = "http://10.20.201.156:4000";
    this.$http.get(`${baseURI}/detail?restr_id=` + 1).then(result => {
      console.log("restrDetail: created()");
      console.log(result.data);
      this.items = result.data;
    });
  } // created
};
</script>

<style scoped>
</style>