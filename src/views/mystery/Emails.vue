<template>
  <div class="flex h-full">
    <div class="w-1/4 bg-gray-100 p-2">
      <div class="received-mails">
        <div class="text-lg font-bold text-gray-800">Messages Reçus</div>
        <ul class="px-2 text-md">
          <li class="active email-title" title="Nouvelle mission">Nouvelle mission</li>
          <li class="email-title" title="Petit déjeuner d'entreprise">Petit déjeuner d'entreprise</li>
        </ul>
      </div>
    </div>
    <div class="w-3/4 p-3">
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nulla officiis fuga necessitatibus et
        voluptate incidunt cupiditate neque a, quos dolor vel at corporis tempora atque aspernatur quidem perspiciatis
        rerum?
      </div>
    </div>
  </div>
</template>

<style scoped>
.email-title {
  @apply px-2 my-1 cursor-pointer rounded;
  @apply whitespace-no-wrap overflow-hidden;
  text-overflow: ellipsis;
}
.email-title:hover {
  @apply bg-gray-400;
}
.email-title.active {
  @apply text-white;
  @apply bg-blue-500;
}
.separator {
  @apply w-full h-px border border-blue-300 mb-3;
}
</style>
