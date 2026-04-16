<script setup lang="ts">
import ChatBubble from './ChatBubble.vue'
</script>

<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble :isSentByUser="true" message="Hola" />
      <ChatBubble
        :isSentByUser="false"
        message="yessss"
        img="https://yesno.wtf/assets/yes/15-3d723ea13af91839a671d4791fc53dcc.gif"
      />
    </div>
  </div>
</template>
