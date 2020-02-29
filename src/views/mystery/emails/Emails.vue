<template>
  <div class="flex h-full">
    <div class="emails-list">
      <router-link to="/os/emails/received" class="category-title with-badge" :class="{ active: isRoute('received') }">
        <font-awesome-icon :icon="['fas', 'inbox']" fixed-width />
        <span title="Messages Reçus">Messages Reçus</span>
        <span v-if="nbUnread > 0" class="badge">{{ nbUnread }}</span>
      </router-link>
      <router-link to="/os/emails/sent" class="category-title" :class="{ active: isRoute('sent') }">
        <font-awesome-icon :icon="['fas', 'paper-plane']" fixed-width />
        <span title="Messages envoyés">Messages Envoyés</span>
      </router-link>
      <router-link to="/os/emails/spam" class="category-title" :class="{ active: isRoute('spam') }">
        <font-awesome-icon :icon="['fas', 'exclamation-circle']" fixed-width />
        <span title="Indésirables">Indésirables</span>
      </router-link>
      <router-link to="/os/emails/trash" class="category-title" :class="{ active: isRoute('trash') }">
        <font-awesome-icon :icon="['fas', 'trash']" fixed-width />
        <span title="Corbeille">Corbeille</span>
      </router-link>
    </div>
    <div class="w-4/5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    nbUnread() {
      return this.$store.getters.nbUnreadMails;
    }
  },
  methods: {
    isRoute(mailCategory) {
      return this.$route.params.mailCategory === mailCategory;
    }
  }
};
</script>

<style scoped>
.emails-list {
  @apply w-1/5 bg-gray-100 p-2 flex flex-col;
}
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
.with-badge {
  @apply relative pr-4;
}
.badge {
  @apply absolute top-0 right-0;
  @apply bg-red-500;
  @apply text-white rounded p-1;
}
</style>
