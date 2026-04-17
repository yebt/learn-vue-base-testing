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

  it("Render counter values correctly", () => {
    const value = 5

    const wrapper = mount(MyCounter,{
      props: {
        value,
      }
    })

    // console.log(wrapper.html());

    const firsth3 = wrapper.find("h3")

    expect(firsth3.text()).toContain(`Counter: ${value}`)
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(`Square: ${value * value}`)

  })
})
