<template>
  <div class="flex h-full">
    <div class="w-1/4 bg-gray-100 p-2 flex flex-col">
      <router-link :to="{ name: 'received' }" class="category-title" :class="{ active: isRoute('received') }">
        Messages Reçus
      </router-link>
      <router-link :to="{ name: 'sent' }" class="category-title" :class="{ active: isRoute('sent') }">
        Messages Envoyés
      </router-link>
      <router-link :to="{ name: 'spam' }" class="category-title" :class="{ active: isRoute('spam') }">
        Indésirables
      </router-link>
      <router-link :to="{ name: 'trash' }" class="category-title" :class="{ active: isRoute('trash') }">
        Corbeille
      </router-link>
    </div>
    <div class="w-3/4 p-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isRoute(routeName) {
      return this.$route.name === routeName;
    }
  }
};
</script>

<style scoped>
.category-title {
  @apply font-bold text-gray-800;
  @apply px-2 py-1 my-2 mx-1 cursor-pointer rounded;
  @apply whitespace-no-wrap overflow-hidden;
  text-overflow: ellipsis;
}
.category-title:hover {
  @apply bg-gray-400;
}
.category-title.active {
  @apply text-white;
  @apply bg-blue-500;
}
</style>
