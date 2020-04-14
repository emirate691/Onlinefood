import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ServiceProvide from "../views/ServiceProvide.vue";
import FoodDetail from "../views/FoodDetail.vue";
import Detail from "../views/Detail.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/ServiceProvide",
    name: "ServiceProvide",
    component: ServiceProvide,
  },
  {
    path: "/FoodDetail",
    name: "FoodDetail",
    component: FoodDetail,
  },

  {
    path: "/Detail",
    name: "Detail",
    component: Detail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
