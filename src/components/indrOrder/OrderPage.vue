<template>
    <div>order page
        <div>최종 결제 전 리스트 조회</div>
        <router-link :to="{name:'pay'}" exact>
            <button>결제하기</button>
        </router-link>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>