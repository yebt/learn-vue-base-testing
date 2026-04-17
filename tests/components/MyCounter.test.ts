import { describe,expect,it } from "vitest";
import { mount } from "@vue/test-utils";
// import MyCounter from "../../src/components/MyCounter.vue";
import MyCounter from "@/components/MyCounter.vue";

describe("<MyCounter />", () => {
  it("should match snapshot", () => {

    const wrapper = mount(MyCounter,{
      props: {
        value: 5
      }
    })

    expect(wrapper.html()).toMatchSnapshot()

  })

  // it("should render", () => {
  // }
})
