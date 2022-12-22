import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import IntroView from "../pages/IntroView.vue";
import ArticleView from "../pages/ArticleView.vue";
import BlockchainView from "../pages/BlockchainView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/intro",
    name: "intro",
    component: IntroView,
  },
  {
    path: "/article",
    name: "article",
    component: ArticleView,
  },
  {
    path: "/blockchain",
    name: "blockchain",
    component: BlockchainView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
