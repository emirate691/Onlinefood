import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { mdbScrollSpy } from "mdbvue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(mdbScrollSpy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
