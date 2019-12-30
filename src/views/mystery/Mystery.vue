<template>
  <div class="h-full flex flex-col">
    <div class="header">Mystery OS <span class="text-sm">v1.0</span></div>
    <div class="h-full flex">
      <div class="applications">
        <router-link to="/os/emails/received">
          <div class="application-icon" :class="{ active: isRoute('emails') }">
            <font-awesome-icon :icon="['far', 'envelope']" fixed-width />
          </div>
        </router-link>
        <router-link to="/os/chat">
          <div class="application-icon" :class="{ active: isRoute('chat') }">
            <font-awesome-icon :icon="['far', 'comment']" fixed-width />
          </div>
        </router-link>
      </div>
      <div class="w-full">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isRoute(routeName) {
      return !!this.$route.matched.find(route => route.name === routeName);
    }
  }
};
</script>

<style scoped>
.header {
  @apply pl-2;
  @apply text-xl text-white;
  @apply bg-gray-800;
}
.applications {
  @apply p-2;
  @apply flex flex-col justify-center items-center;
  @apply text-2xl;
  @apply bg-gray-400;
}

.application-icon {
  @apply cursor-pointer;
  @apply text-white;
  @apply bg-gray-600;
  @apply rounded-full;
  @apply my-2;
  padding: 8px 10px;
}
.application-icon:hover {
  @apply bg-gray-500;
}
.application-icon.active {
  @apply bg-blue-500;
}
</style>
