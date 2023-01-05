<template>
  <div id="app">
    <h1>Mission05</h1>
    <div class="simple-counter">
      <SimpleIncCounter startnumber="1"></SimpleIncCounter>
      <SimpleIncCounter startnumber="10"></SimpleIncCounter>
      <SimpleIncCounter startnumber="100"></SimpleIncCounter>
    </div>
    <br>
    <div class="simple-counter">
      <SimpleDecCounter startnumber="1"></SimpleDecCounter>
      <SimpleDecCounter startnumber="10"></SimpleDecCounter>
      <SimpleDecCounter startnumber="100"></SimpleDecCounter>
    </div>
  </div>
</template>

<script>

import SimpleIncCounter from "@/components/SimpleIncCounter.vue";
import SimpleDecCounter from "@/components/SimpleDecCounter.vue";

export default {
  name: 'App',
  components: {
    SimpleDecCounter,
    SimpleIncCounter: SimpleIncCounter
  }
}
</script>

<style>
  .simple-counter {
    display: flex;
    justify-items: start;
  }
</style>
