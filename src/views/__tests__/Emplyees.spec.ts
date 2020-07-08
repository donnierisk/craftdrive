import { mount } from "@vue/test-utils"
import Employees from "../Employees.vue"

describe("Employees.vue", () => {
    const wrapper = mount(Employees)
    test("Should show list view by default", () => {
        expect(wrapper.find("#list-view").exists()).toBe(true)
    })
    test("Single view should not show", () => {
        expect(wrapper.find("#single-view").exists()).toBe(false)
    })
})
