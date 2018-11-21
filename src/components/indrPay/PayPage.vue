<template>
    <div>

<div id="header">
사진 - 메뉴명 - 수량 - 가격
<div id ="pay-list"></div>
<div id="amount">총액</div>
<div id="remainder">남은 금액</div>

</div>
----------------------
<div id="will-pay">
    <label>결제할 금액</label>
<input type="text" placeholder="결제할 금액">
</div>
<div id="split-bill">
    <label>1/n 금액</label>
<input type="text" placeholder="n명">
</div>
----------------------
<div>현재 남은 금액</div>
<div>결제 후 남는 금액</div>
<button>결제하기</button>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>