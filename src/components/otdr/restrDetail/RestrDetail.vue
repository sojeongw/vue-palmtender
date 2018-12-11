<template>
  <div class="restr-pane">
    <div class="split restr-info" v-for="item in items" v-bind:key="item.restr_id">
      <img :src="item.restrRegistPicture" class="restr-img">

      <div class="info-pane">
        <div>{{item.restrCategoryName}}</div>
        <h5 class="mt-0 mb-1">{{item.restrName}}</h5>
        <div>
          {{item.restrAddr}}
          <br>
          <a :href="'tel:'+item.restrTel">
            <img src="/src/assets/image/phone.png" class="img-phone">
            {{item.restrTel}}
          </a>
        </div>
        <p/>
        <div>{{item.restrInfo}}</div>
        <p/>
        <div>
          영업시간 {{item.restrHour}}
          <br>
          좌석수 {{item.restrSeatNum}}석
          <br>
          주차공간 {{item.restrParking}}대
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
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
    const baseURI = "http://219.240.99.118:4000";
    // const baseURI = "http://localhost:4000";
    this.$http
      .get(`${baseURI}/detail?restr_id=` + this.$route.params.restr_id)
      .then(result => {
        console.log("restrDetail: created()");
        console.log(result.data);
        this.items = result.data;
      });
  } // created
};
</script>

<style scoped>
a:link {
  text-decoration: none;
  color: black;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  color: dodgerblue;
}
.img-phone {
  width: 20px;
}
.restr-pane {
  padding: 1rem;
  display: flex;
}
.info-pane {
  padding: 1rem;
  padding-left: 2rem;
  /* margin-top: 1rem; */
  display: flex;
  flex: 1;
  flex-direction: column;
}
.restr-img {
  float: left;
  width: 300px;
  height: 300px;
  /* max-width: 300px;
  max-height: 300px; */
  object-fit: cover;
}
.mb-1 {
  padding-top: 0.5rem;
}
/* .restr-pane {
  background: lightblue;
  height: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.restr-name {
  margin-top: -5rem;
  width: 500px;
  padding: 1rem;
  color: white;
  position: relative;
}
.restr-info {
  margin-top: 1rem;
  font-size: 1.25rem;
}
.restr-body {
  padding: 2rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  background: white;
  transform: translateY(10rem);
  margin: 0 auto;
  min-height: 20rem;
  box-shadow: 10px 5px 5px gray;
} */
</style>