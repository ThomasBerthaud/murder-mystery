<template>
  <div class="flex h-full">
    <div class="chat-list">
      <h1>Chaines</h1>
      <div></div>
      <h1>Messages privés</h1>
    </div>
    <div class="w-4/5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "chat"
};
</script>

<style scoped>
.chat-list {
  @apply w-1/5 bg-gray-100 p-2 flex flex-col;
}
</style>
