<template>
  <div>
    <div v-if="!mailSelected" class="mail-list">
      <MailsList :mails="mails" @selected="displayMail($event)" />
    </div>
    <div v-else>
      <MailDetails :mail="mailSelected" @close="displayList()" />
    </div>
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
    },
    id: {
      type: String
    }
  },
  computed: {
    mails() {
      return this.$store.state.mails[this.mailCategory];
    },
    mailSelected() {
      return this.mails.find(mail => mail.id === this.id);
    }
  },
  methods: {
    displayMail(mail) {
      this.mailSelected = mail;
    },
    displayList() {
      this.mailSelected = null;
    }
  }
};
</script>

<style></style>
