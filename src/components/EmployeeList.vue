<template>
  <div id="list">
    <div
      class="employee-card"
      @click="employeeClick(employee.id)"
      v-for="(employee, i) of employees"
      :key="i"
    >{{employee.first_name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Employee } from "@/models/Employee";

@Component
export default class EmployeeList extends Vue {
  @Prop() private employees!: Employee[];

  private employeeClick(employeeId: number) {
    this.$emit("employee-click", employeeId);
  }
}
</script>

<style scoped lang="scss">
#list {
  width: 80vw;
  margin: 0 10vw;
  display: flex;
  flex-wrap: wrap;

  .employee-card {
    width: calc(20% - 1.5rem);
    padding: 1rem 0.5rem;
    margin: 0.25rem;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease;
    background: #efe9e9;

    &:hover {
      box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.25);
      transform: scale(1.05);
      cursor: pointer;
      background: #f1efef;
    }
  }
}
</style>
