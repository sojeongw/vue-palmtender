<template>
  <div id="app">
    <Header/>
  <!-- <RestrListPage></RestrListPage>
  <RestrDetailPage></RestrDetailPage> -->
  <router-view></router-view>
  <Footer/>
  </div>
</template>

<script>
import RestrListPage from "./components/otdr/restrList/RestrListPage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
// import RestrDetailPage from "./components/otdr/restrDetail/RestrDetailPage";

export default {
  components: {
    Header: Header,
    Footer: Footer,
    RestrListPage: RestrListPage

    // RestrDetailPage: RestrDetailPage
  }
};
</script>

<style lang="scss">
</style>
