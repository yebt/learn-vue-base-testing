import MessageBox from '@/components/chat/MessageBox.vue'
import { mount } from '@vue/test-utils'

describe('<MessageBox />', () => {
  test('Check snapshot', () => {
    const wrapper = mount(MessageBox)
    expect(wrapper.html()).toMatchSnapshot()

    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button svg').exists()).toBe(true)
  })

  test('Emits sendMessage event when button is clicked with message value in the input', async () => {
    const wrapper = mount(MessageBox)
    const input = wrapper.find('input[type="text"]')
    const button = wrapper.find('button')

    // Simulate user input
    const message = 'Hello, World!'
    await input.setValue(message)
    // Simulate button click
    await button.trigger('click')

    const emitedValues = wrapper.emitted('sendMessage')
    const emited = emitedValues?.[0]
    expect(emited).toBeTruthy()
    expect(emited).toEqual([message])
  })

  test('Not emit sendMessage if the text is empty', async () => {
    const wrapper = mount(MessageBox)
    const input = wrapper.find('input[type="text"]')
    const button = wrapper.find('button')

    await input.setValue('    ')
    // Simulate button click
    await button.trigger('click')

    const emitedValues = wrapper.emitted('sendMessage')

    expect(emitedValues).toBeUndefined()
  })

  test('Emit the sendMessage on press Enter key', async () => {
    const wrapper = mount(MessageBox)
    const input = wrapper.find('input[type="text"]')

    const message = 'Hello, World!'
    await input.setValue(message)
    await input.trigger('keypress.enter')

    const emitedValues = wrapper.emitted('sendMessage')

    const emited = emitedValues?.[0]
    expect(emited).toBeTruthy()
    expect(emited).toEqual([message])
  })
})
