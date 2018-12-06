<template>
  <div class="pane">
    <link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/vue-material.min.css">
    <!-- <link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/theme/default.css"> -->
    <md-empty-state
      class="md-primary"
      md-icon="done"
      md-label="Completed"
      md-description="주문이 완료되었습니다."
    ></md-empty-state>
    <!-- <b-btn variant="primary"></b-btn> -->
  </div>
</template>

<script>
import VueMaterial from "vue-material";
import Vue from "vue";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueMaterial);
export default {};
</script>

<style scoped>
.pane {
  margin-top: 5rem;
}
</style>