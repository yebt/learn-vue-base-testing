<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import ChatBubble from './ChatBubble.vue'

interface Props {
  messages: ChatMessage[]
}

defineProps<Props>()
</script>

<template>
  <div class="flex-1 overflow-y-auto p-4">
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
