<template>
  <div id="app">
    <googleMaps/>
  <RestrListPage></RestrListPage>
  <!-- <RestrDetailPage></RestrDetailPage> -->
  </div>
</template>

<script>
import RestrListPage from "./components/otdr/restrList/RestrListPage";
// import RestrDetailPage from "./components/otdr/restrDetail/RestrDetailPage";
import googleMaps from "./api/googleMaps.vue";

export default {
  components: {
    RestrListPage: RestrListPage,
    googleMaps: googleMaps
    // RestrDetailPage: RestrDetailPage
  }
};
</script>

<style lang="scss">
</style>
