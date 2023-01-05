<template>
  <div id="app">
    <p>원본 문장 : "{{sOriginalMessage}}"</p>
    <p>대문자로 변환된 문장 : "{{fnUpperCaseMsg}}"</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      sOriginalMessage : 'How old are you?'
    }
  },
  computed: {
    fnUpperCaseMsg () {
      return this.sOriginalMessage.toUpperCase();
    }
  }
}
</script>

<style>
</style>
