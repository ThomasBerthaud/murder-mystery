<template>
  <div class="">
    <div v-for="mail of mails" class="" :key="mail.id">
      <div @click="selectMail(mail)" class="mail-line" :class="{ active: isSelected(mail) }">
        <span class="font-bold">{{ mail.from || "Inconnu" }}</span> -
        <span class="time">{{ mail.time | parseTime }}</span>
        <div class="pl-3">{{ mail.title }}</div>
      </div>
      <div class="separator"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mails: {
      required: true,
      type: Array
    },
    mailSelected: {
      type: Object
    }
  },
  filters: {
    parseTime(value) {
      return new Date(new Date() - (value || 0)).toDateString();
    }
  },
  methods: {
    selectMail(mail) {
      this.$emit("select", mail);
    },
    isSelected(mail) {
      return this.mailSelected && mail.id === this.mailSelected.id;
    }
  }
};
</script>

<style scoped>
.separator {
  @apply w-full h-px border border-gray-300;
}
.mail-line {
  @apply px-2 cursor-pointer;
}
.mail-line:hover {
  @apply bg-gray-200 shadow-lg;
}
.time {
  @apply text-gray-700 text-xs;
}
.mail-line.active {
  @apply bg-blue-500 text-white shadow-lg;
}
.mail-line.active .time {
  @apply text-gray-100;
}
</style>
