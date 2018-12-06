<template>
  <div class="body">
    <!-- <div>주문들어간 목록</div> -->
    <!-- {{result}} -->
    <p/>

    <div v-if="hasResult" class="pane">
      <div v-for="(res,index) in result" :key="index">
        <b-card :header="`No.`+(index+1)+` `+res.menuName" header-tag="header">
          <!-- {{res}} -->
          <strong>메뉴 가격</strong>
          {{res.menuPrice}}원
          <p/>
          <strong>옵션 가격</strong>
          <br>
          <div v-for="(op, key) in res.optionValue" :key="key">
            <!-- {{op}} -->
            {{op.opName}}: {{op.opVal.subname}}
            (+{{op.opVal.price}}원)
          </div>
          <p/>
        </b-card>
      </div>
      <div class="amount">
        <strong>총 결제 금액</strong>
        {{totalAmount}}원
      </div>
      <div class="btn-pay">
        <b-btn @click="sendToServer" variant="primary">결제하기</b-btn>
      </div>
    </div>
    <div v-else>주문 내역이 없습니다.</div>
    <!-- <div>{{cartItem}}</div> -->
    <!-- <div v-for="item in cartItem" :key="item.key">{{item}}</div> -->
    <!-- <router-link :to="{name:'order-completed'}" exact> -->
    <!-- 메뉴판으로 가기 -->
    <!-- </router-link> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cartItem: [],
      restr_id: null,
      table_id: null,
      menu_id: [],
      menuName: [],
      result: [],
      amount: 0,
      opAmount: 0,
      mAmount: null,
      totalAmount: 0
    };
  },
  computed: {
    hasResult() {
      console.log("hasResult()");
      return this.result.length > 0;
    }
  }, //computed
  created() {
    const baseURI = "http://219.240.99.118:4000";

    this.restr_id = parseInt(localStorage.getItem("restr_id"));
    this.table_id = parseInt(localStorage.getItem("table_id"));

    this.$http
      .get(
        `${baseURI}/paypage?restr_id=` +
          this.restr_id +
          `&table_id=` +
          this.table_id
      )
      .then(result => {
        if (result.data.length > 0) {
          console.log("result ", result["data"]);
          // console.log("result ", result["data"][0].orderOption);
          for (var key in result["data"]) {
            console.log("menu name", result["data"][key].menuName);

            // 메뉴이름과 옵션값
            var mName = result["data"][key].menuName;
            var oValue = result["data"][key].orderOption;
            var mPrice = result["data"][key].menuPrice;

            this.result.push({
              menuName: mName,
              menuPrice: mPrice,
              optionValue: oValue
            });
          }

          this.getAmount(this.result);
          // console.log("result!!!!!!! ", this.result[0].optionValue);
          // for(var i in this.result[0].optionValue){
          //   console.log("price"
          //   )
          // }

          // this.result.push(result["data"][0].orderOption);
          // this.result.push(result["data"][1].orderOption);
        }
        // return this.menuItems;
      }); // get

    // axios
    //   .get(baseURI + "/paypage/", {
    //     params: {
    //       restr_id: localStorage.getItem("restr_id"),
    //       // menu_id: localStorage.getItem("menu_id"),
    //       table_id: localStorage.getItem("table_id")
    //     }
    //   })
    //   .then(function(response) {
    //     // console.log("response data raw", response);
    //     // this.result = response;
    //     // console.log("result", result);

    //     console.log("response data", response["data"]);
    //     // console.log("response data type", typeof response["data"]);
    //     console.log("result", this.result);
    //     // for (var i in response["data"]) {
    //     //   console.log("response test: ", response["data"][i]);
    //     //   this.result[i] = response["data"][i];
    //     //   console.log("ordered: ", this.result[i]);
    //     // }
    //     // this.orderedItems.push(response["data"]);
    //     // console.log("this.orderedItems: ", this.orderedItems);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
  methods: {
    getAmount(data) {
      // console.log("get amount", data);
      this.opAmount = 0;
      for (var i in data) {
        // data.opVal
        // console.log("get amount", data[i].optionValue);
        // console.log("sub", data[i].optionValue[key].opVal.price);
        for (var key in data[i].optionValue)
          this.opAmount += data[i].optionValue[key].opVal.price;
        // console.log("옵션 합산", this.opAmount);
        // this.subAmount += data.menuPrice;
      }

      this.mAmount = 0;
      for (var i in data) {
        // console.log("메뉴 합산", data[i].menuPrice);
        this.mAmount += data[i].menuPrice;
        // console.log("메뉴 합산", this.mAmount);
      }
      this.totalAmount = this.opAmount + this.mAmount;
      console.log("총계: ", this.totalAmount);
    },
    sendToServer() {
      console.log("send to server");
      const baseURI = "http://219.240.99.118:4000";
      // const baseURI = "http://localhost:4000";

      axios({
        method: "post",
        url: baseURI + "/pay",
        data: {
          restr_id: this.restr_id,
          table_id: this.table_id,
          pay: this.totalAmount
        }
      })
        .then(function(response) {
          console.log("axios 성공" + response);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.$router.push("/pay-completed");
    } // send to server
  }
};
</script>

<style scoped>
.body {
  padding: 1rem;
}
.pane {
  padding: 0.5rem;
}
.btn-pay {
  padding-top: 1rem;
}
.amount {
  padding-top: 1rem;
}
</style>