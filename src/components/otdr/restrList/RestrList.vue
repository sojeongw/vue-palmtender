<template>
  <div id="app" v-if="hasResult">
    <b-list-group>
      <div v-for="(list, key) in lists" v-bind:key="key">
        <b-list-group-item href="#" class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">restr name</h5>
            <!-- <h5 class="mb-1">List group item heading</h5> -->
            <small>category</small>
          </div>
          <p class="mb-1">info</p>
          <small class="text-muted">사용 가능 테이블</small>
        </b-list-group-item>

        <b-list-group-item href="#" class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
          </div>
          <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas
            sed diam eget risus varius blandit.
          </p>
          <small class="text-muted">Donec id elit non mi porta.</small>
        </b-list-group-item>
      </div>
    </b-list-group>

    <!-- <b-list-group>
      <div v-for="list in lists" v-bind:key="list.restr_id">
        <b-list-group-item
          :to="{name:'restr-detail', params:{restr_id: list.restr_id}}"
          class="flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{list.restrName}}</h5>
            <small>{{list.restrCategoryName}}</small>
          </div>
          <p class="mb-1">{{list.restrInfo}}</p>
          <small>사용 가능 테이블: {{list.usableTable}}</small>
        </b-list-group-item>
      </div>
    </b-list-group>-->
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      lists: [],
      restr_id: ""
    };
  }, // data()
  computed: {
    hasResult() {
      console.log("hasResult()");
      return this.lists.length > 0;
    }
  }, //computed
  created() {
    this.$eventBus.$on("searchList", this.searchList);
  },
  methods: {
    searchList(data) {
      // const baseURI = "http://219.240.99.118:4000";
      // // const baseURI = "http://localhost:4000";

      // this.$http
      //   .get(`${baseURI}/otdr?lat=` + lat + `&lng=` + lng)
      //   .then(result => {
      //     this.lists = result.data;
      //     console.log("searchList(): ", this.lists);
      //   });
      console.log("eventbus on", data);
      this.lists = data;
    }
  }
};
</script>

<style scoped>
</style>