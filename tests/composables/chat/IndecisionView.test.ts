import ChatMessages from "@/components/chat/ChatMessages.vue";
import MessageBox from "@/components/chat/MessageBox.vue";
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import IndecisionsView from "@/views/IndecisionsView.vue"

import { mount } from "@vue/test-utils"

const mockChatMessages = {
  template: '<div data-testid="mock-message">Moch Messagge</div>',
}

describe('<IndecisionView />', () => {

  it('renders the component correctly', () => {
    const wrapper = mount(IndecisionsView);

    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true)
    expect(wrapper.findComponent(MessageBox).exists()).toBe(true)
  })

  it('calls onMessage when sending a message', async () => {

    const wrapper = mount(IndecisionsView,{
      global: {
        stubs: {
          // NOTE:
          // Cause the original chatmmesage component cause a error with the scrollTo method, we
          // need to mock it to not load the original component and avoid the error
          // In this case i just need evaluate the event of the wrapper component
          ChatMessages: mockChatMessages,
        }
      }
    });
    const messageBoxComponent = wrapper.findComponent(MessageBox)

    //
    const testMessage = 'Test message'
    messageBoxComponent.vm.$emit('sendMessage', testMessage)
    // Check if the message is added to the messages array
    const wrapperVm =  wrapper.vm as typeof wrapper.vm & {
      messages: ChatMessage[]
    }

    expect(wrapperVm.messages).toContainEqual({
      id: expect.any(String),
      text: testMessage,
      isSentByUser: true,
    })

  })
})
