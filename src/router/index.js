import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ServiceProvide from "../views/ServiceProvide.vue";
import FoodDetail from "../views/FoodDetail.vue";
import Detail from "../views/Detail.vue";
import Details from "../views/Details.vue";
import Party from "../views/Party.vue";
import Restaurant from "../views/Restaurant.vue";
import Restaurants from "../views/Restaurants.vue";
import Food from "../views/Food.vue";
import Vendor from "../views/Vendor.vue";
import Variety from "../views/Variety.vue";

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
  {
    path: "/Details",
    name: "Details",
    component: Details,
  },

  {
    path: "/Party",
    name: "Party",
    component: Party,
  },
  {
    path: "/Restaurant",
    name: "Restaurant",
    component: Restaurant,
  },
  {
    path: "/Restaurants",
    name: "Restaurants",
    component: Restaurants,
  },
  {
    path: "/Food",
    name: "Food",
    component: Food,
  },
  {
    path: "/Vendor",
    name: "Vendor",
    component: Vendor,
  },
  {
    path: "/Variety",
    name: "Variety",
    component: Variety,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
