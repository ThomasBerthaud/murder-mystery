<template>
  <div class="p-3">
    <div class="px-1">
      <span class="font-bold">De :</span>
      {{ mail.sender.name }} <span class="text-sm text-gray-700">({{ mail.sender.email }})</span>
    </div>
    <div class="px-1">
      <span class="font-bold">A :</span>
      Detective <span class="text-sm text-gray-700">(detective@custom-country-police.com)</span>
    </div>
    <div class="px-1 text-right text-sm text-gray-600">
      {{ mail.time | parseDate }}
    </div>
    <div class="separator"></div>
    <div class="px-1">
      <h1 class="text-2xl font-bold">{{ mail.title }}</h1>
      {{ mail.content }}
    </div>
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
.separator {
  @apply w-full h-px border border-blue-300 mb-3;
}
.btn {
  @apply font-bold py-1 px-2 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
