<template>
  <div id="app">
    <home />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "./views/Home.vue";

@Component({
  components: {
    Home
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  color: #2c3e50;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
