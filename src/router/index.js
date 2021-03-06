import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Introduction from "../views/introduction/Introduction.vue";
import Mystery from "../views/mystery/Mystery.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "introduction",
    component: Introduction,
    beforeEnter: (from, to, next) => {
      store.commit("clear");
      next();
    }
  },
  {
    path: "/os",
    component: Mystery,
    children: [
      {
        path: "emails",
        name: "emails",
        component: () => import(/* webpackChunkName: "emails" */ "../views/mystery/emails/Emails.vue"),
        children: [
          {
            path: ":mailCategory",
            component: () =>
              import(/* webpackChunkName: "category" */ "../views/mystery/emails/emails-category/EmailsCategory.vue"),
            props: true
          }
        ]
      },
      {
        path: "chat",
        name: "chat",
        component: () => import(/* webpackChunkName: "chat" */ "../views/mystery/chat/Chat.vue")
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
