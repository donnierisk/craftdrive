import { mount } from "@vue/test-utils"
import EmployeeList from "../EmployeeList.vue"

describe("EmployeeList.vue", () => {
    const wrapper = mount(EmployeeList, {
        propsData: {
            employees: [{
                id: 1,
                first_name: "Don",
                last_name: "Johnson",
                gender: "Male",
                email: "donnierisk@gmail.com",
                phone: "0726244915"
            }]
        }
    })
    test("Should show list view by default", () => {
        expect(wrapper.html().replace(/[\n\r]+|[\s]{2,}/g, " ")).toBe(
            `<div id="list">  <div class="employee-card">Don</div> </div>`
        )
    })
})
