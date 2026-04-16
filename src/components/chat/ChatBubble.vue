<script setup lang="ts">
interface Props {
  text: string
  isSentByUser: boolean
  image?: string
}

defineProps<Props>()
</script>

<template>
  <div v-if="isSentByUser" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">{{ text }}</span>
    </div>
  </div>
  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">{{ text }}</span>
      <img class="w-52 h-52 cover rounded-md " v-if="image" :src="image" alt="">
    </div>
  </div>
</template>
