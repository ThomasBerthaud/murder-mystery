<template>
  <div class="full-height mystery">
    <div class="header">Mystery OS <span class="subtitle has-text-white">v1.0</span></div>
    <div class="full-height mystery-content">
      <div class="applications">
        <router-link to="/mystery/emails">
          <div class="application-icon" :class="{ active: isEmailsRoute }">
            <font-awesome-icon :icon="['far', 'envelope']" fixed-width />
          </div>
        </router-link>
        <router-link to="/mystery/chat">
          <div class="application-icon" :class="{ active: isChatRoute }">
            <font-awesome-icon :icon="['far', 'comment']" fixed-width />
          </div>
        </router-link>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isEmailsRoute() {
      return this.$route.name === "emails";
    },
    isChatRoute() {
      return this.$route.name === "chat";
    }
  }
};
</script>

<style scoped>
.full-height {
  height: 100%;
}
.mystery {
  display: flex;
  flex-direction: column;
}
.mystery-content {
  display: flex;
}
.header {
  padding-left: 10px;
  font-size: 1.3rem;
  @apply bg-gray-800;
  color: white;
}
.applications {
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  @apply bg-gray-400;
}

.application-icon {
  cursor: pointer;
  color: white;
  @apply bg-gray-600;
  border-radius: 100%;
  padding: 8px 10px;
  margin: 10px 0;
}
.application-icon:hover {
  @apply bg-gray-500;
}
.application-icon.active {
  @apply bg-blue-500;
}
.content {
  margin: 8px 15px;
  width: 100%;
}
</style>
