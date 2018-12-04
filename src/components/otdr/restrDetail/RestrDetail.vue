<template>
  <div class="restr-pane">
    <div class="restr-info" v-for="item in items" v-bind:key="item.restr_id">
      <!-- <b-card
        overlay
        img-src="https://cbmpress.com/toronto/wp-content/uploads/sites/3/2017/12/10-2.jpg"
        img-alt="Card Image"
        text-variant="white"
        :title="item.restrName"
      >-->
      <img src="https://cbmpress.com/toronto/wp-content/uploads/sites/3/2017/12/10-2.jpg">
      <!-- <p class="card-text"></p> -->
      <div>{{item.restrName}}</div>
      <div>운영시간: {{item.restrHour}}</div>
      <div>
        {{item.restrAddr}}
        <br>
        {{item.restrTel}}
      </div>

      <div>{{item.restrInfo}}</div>
      <!-- </b-card> -->
    </div>

    <!-- <div class="restr-pane">
      <img src="https://cbmpress.com/toronto/wp-content/uploads/sites/3/2017/12/10-2.jpg">
      
        <div class="restr-name">
          <h1>{{item.restrName}}</h1>
          <div class="restr-info">{{item.restrInfo}}</div>
        </div>
        <div class="restr-body">restr body</div>
     
    </div>-->
    <!-- <div>{{item.restrCategoryName}}</div>
    <h5 class="mt-0">{{item.restrName}}</h5>
    <div>운영시간: {{item.restrHour}}</div>
    <div>{{item.restrAddr}}</div>
    <div>{{item.restrTel}}</div>
    <p></p>
    <div>{{item.restrInfo}}</div>
    <p/>
    <div>잔여좌석: {{item.restrSeatNum}}석</div>
    <div>주차공간: {{item.restrParking}}대</div>-->
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
.restr-pane {
  padding: 1rem;
}
.restr-info {
  width: 800px;
  display: flex;
  flex: 1;
}
img {
  width: 200px;
  height: 150px;
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