<template>
  <div class="flex h-full">
    <div class="w-1/5 bg-gray-100 p-2 flex flex-col">
      <router-link to="/os/emails/received" class="category-title" :class="{ active: isRoute('received') }">
        <font-awesome-icon :icon="['fas', 'inbox']" fixed-width /> Messages Reçus
      </router-link>
      <router-link to="/os/emails/sent" class="category-title" :class="{ active: isRoute('sent') }">
        <font-awesome-icon :icon="['fas', 'paper-plane']" fixed-width /> Messages Envoyés
      </router-link>
      <router-link to="/os/emails/spam" class="category-title" :class="{ active: isRoute('spam') }">
        <font-awesome-icon :icon="['fas', 'exclamation-circle']" fixed-width /> Indésirables
      </router-link>
      <router-link to="/os/emails/trash" class="category-title" :class="{ active: isRoute('trash') }">
        <font-awesome-icon :icon="['fas', 'trash']" fixed-width /> Corbeille
      </router-link>
    </div>
    <div class="w-4/5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isRoute(mailCategory) {
      return this.$route.params.mailCategory === mailCategory;
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
