import type { ChatMessage } from '@/interfaces/chat-message.interface'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export const useChat = () => {
  const messages = ref<ChatMessage[]>([
    // { id: uuidv4(), text: 'Hola amor, ¿cómo estás?', isSentByUser: true },
    // { id: uuidv4(), text: 'Nope', isSentByUser: false },
  ])

  const handleMessageSend = (messageText: string) => {
    if (messageText.trim() === '') return
    const newMessageToSave: ChatMessage = {
      id: uuidv4(),
      text: messageText,
      isSentByUser: true,
    }
    messages.value.push(newMessageToSave)
  }

  return {
    //props
    messages,

    // methods
    handleMessageSend
  }
}
