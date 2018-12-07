<template>
  <div id="app">
    <Header/>
    <div class="pane">
      <router-view></router-view>
    </div>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import RestrListPage from "./components/otdr/restrList/RestrListPage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export default {
  components: {
    Header: Header,
    Footer: Footer
  },
  created() {}
};
</script>

<style lang="scss">
</style>
