import Vue from "vue";
import VueRouter from "vue-router";
import Introduction from "../views/Introduction.vue";
import Mystery from "../views/mystery/Mystery.vue";

Vue.use(VueRouter);

const MAIL_CATEGORIES = ["received", "sent", "spam", "trash"];

const routes = [
  {
    path: "/",
    name: "introduction",
    component: Introduction
  },
  {
    path: "/mystery",
    component: Mystery,
    children: [
      {
        path: "",
        redirect: "emails"
      },
      {
        path: "emails",
        name: "emails",
        component: () => import(/* webpackChunkName: "emails" */ "../views/mystery/emails/Emails.vue"),
        children: [
          {
            path: "",
            redirect: MAIL_CATEGORIES[0]
          },
          ...MAIL_CATEGORIES.map(mailCategory => ({
            path: mailCategory,
            name: mailCategory,
            component: () => import(/* webpackChunkName: "category" */ "../views/mystery/emails/EmailsCategory.vue"),
            props: { mailCategory }
          }))
        ]
      },
      {
        path: "chat",
        name: "chat",
        component: () => import(/* webpackChunkName: "chat" */ "../views/mystery/Chat.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
