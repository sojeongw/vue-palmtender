
<template>
  <div>
    <div>
      <MapSearch></MapSearch>
    </div>
    <p/>
    <div>
      <RestrList></RestrList>
    </div>
  </div>
</template>

<script>
import RestrList from "./RestrList";
import MapSearch from "./MapSearch";

export default {
  components: {
    RestrList: RestrList,
    MapSearch: MapSearch
  }
};
</script>

<style scoped>
</style>