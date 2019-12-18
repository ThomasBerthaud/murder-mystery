<template>
  <div class="full-height mystery">
    <div class="header">Mystery OS <span class="subtitle has-text-white">v1.0</span></div>
    <div class="full-height mystery-content">
      <div class="applications has-background-grey-lighter">
        <router-link to="/mystery/emails">
          <div class="application-icon" :class="{ active: isEmailsRoute }"><i class="far fa-fw fa-envelope"></i></div>
        </router-link>
        <router-link to="/mystery/chat">
          <div class="application-icon" :class="{ active: isChatRoute }"><i class="far fa-fw fa-comment"></i></div>
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
  background-color: hsl(0, 0%, 21%);
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
}

.application-icon {
  cursor: pointer;
  color: white;
  background-color: hsl(0, 0%, 29%);
  border-radius: 100%;
  padding: 8px 10px;
  margin: 10px 0;
}
.application-icon:hover {
  background-color: hsl(0, 0%, 48%);
}
.application-icon.active {
  background-color: hsl(217, 71%, 53%);
}
.content {
  margin: 8px 15px;
  width: 100%;
}
</style>
