<template>
  <div id="home">
    <employees />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Employees from "@/views/Employees.vue";

@Component({
  components: {
    Employees
  }
})
export default class Home extends Vue {}
</script>
