<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import ChatBubble from './ChatBubble.vue'
import { nextTick, useTemplateRef, watch } from 'vue'

interface Props {
  messages: ChatMessage[]
}

const { messages } = defineProps<Props>()

// const chatRef = ref<HTMLDivElement | null>(null)

const chatRef = useTemplateRef<HTMLDivElement>('chatRef')

watch(
  () => messages,
  () => {
    nextTick(() => {
      if (!chatRef.value) return
      chatRef.value.scrollTo({
        top: chatRef.value.scrollHeight,
        behavior: 'smooth',
      })
    })
  },
  { deep: true },
)
</script>

<template>
  <div class="flex-1 overflow-y-auto p-4" ref="chatRef">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->

      <ChatBubble v-for="mssg in messages" :key="mssg.id" v-bind="mssg" />

      <!-- <ChatBubble -->
      <!--   v-for="mssg in messages" -->
      <!--   :key="mssg.id" -->
      <!---->
      <!--   :isSentByUser="mssg.isSentByUser" -->
      <!--   :message="mssg.text" -->
      <!--   :img="mssg.image" -->
      <!-- /> -->
    </div>
  </div>
</template>
