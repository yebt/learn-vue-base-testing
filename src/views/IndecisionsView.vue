<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue'
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import MessageBox from '@/components/chat/MessageBox.vue'

const messages = ref<ChatMessage[]>([
  { id: uuidv4(), text: 'Hola amor, ¿cómo estás?', isSentByUser: true },
  { id: uuidv4(), text: 'Nope', isSentByUser: false},
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
</script>

<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- chat messages -->
    <ChatMessages :messages="messages" />

    <!-- Message box -->
    <MessageBox @send-message="handleMessageSend" />
  </div>
</template>
