
<template>
  <div class="panes">
    <div class="pane-map">
      <MapSearch></MapSearch>
    </div>
    <p/>
    <div class="pane-list">
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
.panes {
  height: calc(100vh-4rem);
  display: flex;
}
.pane-map,
.pane-list {
  display: flex;
}
.pane-map {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.pane-list {
  flex: 1;
  padding: 2 rem;
  /* 세로로 정렬하면서 옆으로 꽉 차게 해줌 */
  flex-direction: column;
  /* 내용이 넘치면 스크롤 */
  overflow-y: auto;
}
</style>