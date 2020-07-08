<template>
  <div>
    <div v-if="isListView">
      <employee-list :employees="employees" @employee-click="handleEmployeeClick" />
    </div>
    <div v-else>
      <employee-single :employee="selectedEmployee" @back-to-list="isListView = true" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EmployeeSingle from "@/components/EmployeeSingle.vue";
import EmployeeList from "@/components/EmployeeList.vue";
import EmployeeService from "@/services/EmployeeService";
import { Employee } from "../models/Employee";

@Component({
  components: {
    EmployeeSingle,
    EmployeeList
  }
})
export default class Employees extends Vue {
  private isListView = true;
  private employees: Employee[] = [];
  private selectedEmployee: Employee | undefined = {};

  private created() {
    EmployeeService.getEmployees().then(employees => {
      this.employees = employees;
    });
  }

  private handleEmployeeClick(employeeId: number) {
    // @ts-ignore
    this.selectedEmployee = this.employees.find(empl => empl.id === employeeId);
    this.isListView = false;
  }
}
</script>
