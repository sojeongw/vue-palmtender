<template>
  <div>order page
    <div>최종 결제 전 리스트 조회->주문하기 누르면 주문 완료 페이지 생성</div>
    <!-- <div>{{cartItem}}</div> -->
    <div v-for="item in cartItem" :key="item.key">{{item}}</div>
    <!-- <router-link :to="{name:'order-completed'}" exact> -->
    <button @click="sendToServer">주문하기</button>
    <!-- </router-link> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItem: []
    };
  },
  created() {
    console.log("order page created()");
    // this.$eventBus.$on("sendToOrder", function(result) {
    //   // this.cartItem = result;
    //   console.log("after eventBus: ", result);
    // });
    // this.cartItem = cartItem;
    // console.log("이벤트 버스 저장: ", this.cartItem);

    // this.cartItem = [{ Size: localStorage.getItem("Size") }];
    // this.cartItem.push({ 맛: localStorage.getItem("맛") });
    // this.cartItem.push({ "면사리 추가": localStorage.getItem("면사리 추가") });
    // this.cartItem.push({ "치즈 추가": localStorage.getItem("치즈추가") });

    // console.log(this.cartItem);
    this.$eventBus.$on("getAmount", this.getAmount);
  },
  methods: {
    getAmount(value, opName, subName) {
      console.log("parent price", value, opName, subName);
      // this.price = value;
      // this.optionName = opName;
      // this.amount.push({ option: [{ optionName: opName }, { price: value }] });

      // localStorage.setItem(opName, subName + "-" + value);
    },
    // sendToOrder(result) {
    //   console.log("sendToOrder in orderPage ", result);
    //   // this.cartItem = cartItem;
    // }, // send to order
    sendToServer() {
      console.log("send to server");
      const baseURI = "http://219.240.99.118:4000";
      // const baseURI = "http://localhost:4000";
      var params = new URLSearchParams();
      // 식당 id, 테이블 번호, 메모, 메뉴 가격
      params.append("menu_id", localStorage.getItem("menu_id"));
      params.append("checkedOptions", localStorage.getItem("checkedOptions"));
      params.append("totalAmount", localStorage.getItem("totalAmount"));

      console.log("스토리지 타입: ", params);
      this.$http
        .post(`${baseURI}/order/`, params)
        .then(result => {
          console.log("로컬 데이터 전송: ", result.data);
        })
        .catch(error => {
          console.log(error);
        });
    } // send to server
  }
};
</script>

<style scoped>
</style>