<template>
  <div class="p-3">
    {{ mail.title }}
    <div class="px-1">
      <span class="font-bold">De :</span>
      Boss <span class="text-sm text-gray-700">(boss@custom-country-police.com)</span>
    </div>
    <div class="px-1">
      <span class="font-bold">A :</span>
      Detective <span class="text-sm text-gray-700">(detective@custom-country-police.com)</span>
    </div>
    <div class="px-1 text-right text-sm text-gray-600">
      23/12/2019 - 18:19
    </div>
    <div class="separator"></div>
    <div class="px-1">
      <h1 class="text-2xl font-bold">Nouvelle mission</h1>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nulla officiis fuga necessitatibus et voluptate
      incidunt cupiditate neque a, quos dolor vel at corporis tempora atque aspernatur quidem perspiciatis rerum?
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
