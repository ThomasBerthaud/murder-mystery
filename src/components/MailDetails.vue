<template>
  <div class="p-3">
    <div>
      <span class="font-bold">De :</span>
      {{ mail.sender.name }} <span class="email">({{ mail.sender.email }})</span>
    </div>
    <div>
      <span class="font-bold">A :</span>
      Detective <span class="email">(eugene.lacroix@police.com)</span>
    </div>
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold">{{ mail.title }}</h1>
      <div class="time">{{ mail.time | parseDate }}</div>
    </div>
    <div class="separator"></div>
    <div class="px-1" v-html="mail.content"></div>
  </div>
</template>

<script>
export default {
  props: {
    mail: {
      required: true,
      type: Object
    }
  }
};
</script>

<style scoped>
.email {
  @apply text-sm text-gray-700;
}
.time {
  @apply px-1 text-right text-sm text-gray-600;
}
.separator {
  @apply w-full h-px border border-blue-300 mb-3;
}
</style>
