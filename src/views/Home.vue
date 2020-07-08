<template>
  <div id="home">
    <employees />
    <!-- <dialogue-option text:="text" :options="options" /> -->
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

import { Component, Vue } from "vue-property-decorator";
import Employees from "@/views/Employees.vue";

@Component({
  components: {
    Employees
  }
})
export default class Home extends Vue {}
</script>
