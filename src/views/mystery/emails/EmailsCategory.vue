<template>
  <div>
    <div v-if="mails.length" class="flex">
      <MailsList class="w-1/5 no-overflow" :mails="mails" :mailSelected="mailSelected" @select="displayMail($event)" />
      <MailDetails v-if="mailSelected" class="w-4/5 no-overflow" :mail="mailSelected" />
      <div v-else class="w-4/5 no-mail">Pas de mail sélectionné</div>
    </div>
    <div v-else class="no-mail">Pas de mails</div>
  </div>
</template>

<script>
import MailsList from "@/components/MailsList";
import MailDetails from "@/components/MailDetails";
export default {
  components: {
    MailDetails,
    MailsList
  },
  props: {
    mailCategory: {
      required: true,
      type: String
    }
  },
  data() {
    return { mailSelected: null };
  },
  computed: {
    mails() {
      return this.$store.state.mails[this.mailCategory];
    }
  },
  methods: {
    displayMail(mail) {
      this.mailSelected = mail;
    }
  }
};
</script>

<style scoped>
.no-overflow {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - 30px);
}
.no-mail {
  @apply text-3xl text-center mt-10 text-gray-500;
}
</style>
