<template>
  <div id="app" v-if="hasResult">
    <!-- <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="cyan" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-toolbar-title>Inbox</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list two-line>
            <template v-for="(list,index) in lists">
              <v-subheader v-if="list.header" :key="list.header">{{ item.header }}</v-subheader>
              <v-divider v-else-if="list.divider" :inset="list.inset" :key="index"></v-divider>

              <v-list-tile v-else :key="index" avatar>
                <v-list-tile-avatar>
                <img :src="item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="list.restrName"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="list.restrInfo"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>-->
    <b-card header="식당 리스트" header-tag="header">
      <b-list-group>
        <div v-for="(list,index) in lists" v-bind:key="index">
          <b-list-group-item
            :to="{name:'restr-detail', params:{restr_id: list.restr_id}}"
            class="flex-column align-items-start"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{index+1}}. {{list.restrName}}</h5>
              <small>{{list.restrCategoryName}}</small>
            </div>
            <p class="mb-1">{{list.restrInfo}}</p>
            <small class="text-muted">사용 가능 테이블: {{list.usableTable}}</small>
          </b-list-group-item>
        </div>
      </b-list-group>
    </b-card>
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
img {
  display: block;
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;
  /* height: 200px; */
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>