import ChatBubble from '@/components/chat/ChatBubble.vue'
import { mount } from '@vue/test-utils'

describe('<ChatBubble />', () => {
  it('render own message correctly', () => {
    const message = 'Hope world'
    const wrapper = mount(ChatBubble, {
      props: {
        text: message,
        isSentByUser: true,
      },
    })

    const messageBubbl = wrapper.find('.bg-blue-200')
    const opositeMessageBubble = wrapper.find('.bg-gray-300')

    expect(messageBubbl.exists()).toBe(true)
    expect(messageBubbl.exists()).toBeTruthy()
    expect(messageBubbl.text()).toContain(message)

    expect(opositeMessageBubble.exists()).toBeFalsy()
  })

  test('renders received message correctly', () => {
    //
    const message = 'Response'
    const wrapper = mount(ChatBubble, {
      props: {
        text: message,
        isSentByUser: false,
      },
    })

    const messageBubbl = wrapper.find('.bg-gray-300')
    const opositeMessageBubble = wrapper.find('.bg-blue-200')
    const img = wrapper.find('img')
    //
    expect(messageBubbl.exists()).toBe(true)
    expect(messageBubbl.exists()).toBeTruthy()
    expect(messageBubbl.text()).toContain(message)

    expect(opositeMessageBubble.exists()).toBeFalsy()
    expect(img.exists()).toBeFalsy()
  })

  test('renders received message correctly with image', () => {
    //
    const message = 'Response'
    const imageUrl = 'https://example.com/image.jpg'
    const wrapper = mount(ChatBubble, {
      props: {
        text: message,
        isSentByUser: false,
        image: imageUrl,
      },
    })

    const messageBubbl = wrapper.find('.bg-gray-300')
    const opositeMessageBubble = wrapper.find('.bg-blue-200')
    const img = wrapper.find('img')
    //
    expect(messageBubbl.exists()).toBe(true)
    expect(messageBubbl.exists()).toBeTruthy()
    expect(messageBubbl.text()).toContain(message)

    expect(opositeMessageBubble.exists()).toBeFalsy()
    expect(img.exists()).toBeTruthy()
    expect(img.attributes('src')).toBe(imageUrl)
  })
})
