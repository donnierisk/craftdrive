import axios from "axios";
import { Employee } from "@/models/Employee";

export default class EmployeeService {

    public static headings: string[] = []

    public static getEmployees(): Promise<any> {

        return axios.get("/users.csv")
            .then((response) => {
                const csvString = response.data.split("\n")
                this.headings = csvString[0].split(",")
                const employeesAsText = csvString.slice(1)
                const employees = employeesAsText.map((employee: string) => {
                    return this.createEmployeeObj(employee)
                })
                return employees;
            });
    }

    private static createEmployeeObj(employee: string): Employee {
        const fields = employee.split(",")
        const employeeObj = new Employee()
        for (let i = 0; i < this.headings.length; i++) {
            employeeObj[this.headings[i]] = fields[i];
        }
        return employeeObj
    }
}
