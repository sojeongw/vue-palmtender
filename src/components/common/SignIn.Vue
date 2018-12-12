<template>
  <div>
    <b-container fluid>
      <b-col sm="3">
        <label for="`type-text`">ID:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="`type-text`" type="text"></b-form-input>
      </b-col>
    </b-container>
    <b-container fluid>
      <b-col sm="3">
        <label for="`type-password`">Password:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="`type-password`" type="password"></b-form-input>
      </b-col>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>