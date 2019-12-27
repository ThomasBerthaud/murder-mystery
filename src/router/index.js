import Vue from "vue";
import VueRouter from "vue-router";
import Introduction from "../views/Introduction.vue";
import Mystery from "../views/mystery/Mystery.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "introduction",
    component: Introduction
  },
  {
    path: "/os",
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
            redirect: "received"
          },
          {
            path: ":mailCategory",
            component: () => import(/* webpackChunkName: "category" */ "../views/mystery/emails/EmailsCategory.vue"),
            props: true
          }
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
