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
    path: "/mystery",
    component: Mystery,
    children: [
      {
        path: "",
        name: "emails",
        component: () => import(/* webpackChunkName: "emails" */ "../views/mystery/Emails.vue")
      },
      {
        path: "emails",
        name: "emails",
        component: () => import(/* webpackChunkName: "emails" */ "../views/mystery/Emails.vue")
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
