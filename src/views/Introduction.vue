<template>
  <section class="bg-gray-900 h-full">
    <div class="introduction">
      <h1 class="text-6xl font-bold">Murder Mystery</h1>
      <h2 class="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
      <router-link class="btn-white mt-8" to="/os/emails/received">
        Resolve the mystery
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    localStorage.setItem("startTime", new Date());
    this.$store.dispatch("loadFromStep", "introduction");
    next();
  }
};
</script>

<style scoped>
.introduction {
  @apply flex flex-col items-center justify-center;
  @apply h-full text-white;
}
.btn-white {
  @apply font-bold text-gray-900;
  @apply py-2 px-4;
  @apply bg-white;
  @apply border rounded border-white;
}
.btn-white:hover {
  @apply bg-gray-900 text-white;
}
</style>
