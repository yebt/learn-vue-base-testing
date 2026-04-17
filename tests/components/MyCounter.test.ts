import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
// import MyCounter from "../../src/components/MyCounter.vue";
import MyCounter from '@/components/MyCounter.vue'

describe('<MyCounter />', () => {
  it('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Render counter values correctly', () => {
    const value = 5

    const wrapper = mount(MyCounter, {
      props: {
        value,
      },
    })

    const firsth3 = wrapper.find('h3')

    expect(firsth3.text()).toContain(`Counter: ${value}`)
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${value * value}`,
    )
  })

  it('Increase behaviour', async () => {
    const value = 5
    const wrapper = mount(MyCounter, {
      props: {
        value,
      },
    })

    const [counterL, squareL] = wrapper.findAll('h3')

    const btnInc = wrapper.find('button')
    await btnInc.trigger('click')

    const increasedValue = value + 1

    expect(counterL?.text()).toContain(`Counter: ${increasedValue}`)
    expect(squareL?.text()).toContain(`Square: ${increasedValue * increasedValue}`)
  })

  it('Decrease behaviour', async () => {
    const value = 5
    const wrapper = mount(MyCounter, {
      props: {
        value,
      },
    })

    const [counterL, squareL] = wrapper.findAll('h3')

    const [, btnDec] = wrapper.findAll('button')
    await btnDec?.trigger('click')
    await btnDec?.trigger('click')

    const decreaseValue = value - 2

    expect(counterL?.text()).toContain(`Counter: ${decreaseValue}`)
    expect(squareL?.text()).toContain(`Square: ${decreaseValue * decreaseValue}`)
  })
})
