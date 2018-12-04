<template>
  <div id="app">
    <Header/>

    <router-view></router-view>
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
  }
};
</script>

<style lang="scss">
</style>
