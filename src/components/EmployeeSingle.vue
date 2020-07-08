<template>
  <div id="employee">
    <div>
      <h2>Name: {{employee.first_name}} {{employee.last_name}}</h2>
      <p>Gender: {{ employee.gender}}</p>
      <p>Email: {{ employee.email}}</p>
      <p>Phone: {{ employee.phone}}</p>
    </div>
    <button @click="$emit('back-to-list')">Back</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Employee } from "@/models/Employee";

@Component
export default class EmployeeSingle extends Vue {
  @Prop() private employee!: Employee;
}
</script>

<style scoped lang="scss">
#employee {
  width: calc(20% - 1.5rem);
  padding: 1rem 0.5rem;
  margin: 0.25rem;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  background: #efe9e9;
  margin: 10rem auto 0;

  button {
    background: white;
    padding: 0.5rem 2rem;
    border: 0;
    cursor: pointer;
  }
}
</style>
