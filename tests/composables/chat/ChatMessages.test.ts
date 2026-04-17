import ChatMessages from "@/components/chat/ChatMessages.vue"
import type { ChatMessage } from "@/interfaces/chat-message.interface"
import { mount } from "@vue/test-utils"


const mockMessages: ChatMessage[] = [
  {
    id: '1',
    text: 'Hello, how are you?',
    isSentByUser: true,
  },
  {
    id: '2',
    text: 'I am fine, thank you! How can I assist you today?',
    isSentByUser: false,
  }
]

describe('<ChatMessages />', () => {

  it('renders chats correctly', () => {
    const wrapper = mount(ChatMessages,{
      props: {
        messages:mockMessages
      }
    })

    // check if exists 2 instancs of ChatBubble
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' })
    expect(chatBubbles.length).toBe(mockMessages.length)

  })

  it('check if the scroll down to bottom after messages update', async () => {

    const wrapper = mount(ChatMessages,{
      props: {
        messages:mockMessages
      }
    })

    // Add new message to the messages prop
    const newMessage: ChatMessage = {
      id: '3',
      text: 'What is the weather like today?',
      isSentByUser: true,
    }

    // Make the SPY
    const scrollToMockSpy = vi.fn()
    const chatContainer = wrapper.vm.$refs.chatRef as HTMLDivElement
    chatContainer.scrollTo = scrollToMockSpy


    await wrapper.setProps({
      messages: [
        ...mockMessages,
        newMessage
      ]
    })

    await wrapper.vm.$nextTick()

    expect(scrollToMockSpy).toHaveBeenCalled()
    expect(scrollToMockSpy).toHaveBeenCalledWith({
      top: chatContainer.scrollHeight,
      behavior: 'smooth'
    })
    expect(scrollToMockSpy).toHaveBeenCalledTimes(1)

  })

})
