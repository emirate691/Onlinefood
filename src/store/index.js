import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        partyImage:
          "https://d2lev5xroqke9e.cloudfront.net/ng/view/1308686329?width=168&height=168",
        partyDetail: "Food you love from Restaurant near you",
        price: "Restaurant"
      },

      {
        id: 2,
        partyImage:
          "https://d2lev5xroqke9e.cloudfront.net/ng/view/ee4e8f5186?width=168&height=168",
        partyDetail: "Alcolic drinks to get your party more started",
        price: "Party"
      }
    ],
    services: [
      {
        id: 1,
        partyImage:
          "https://africa-public.food.jumia.com/marketing/production/ng/images/nl/600x_700.png?v=1555584879",
        partyDetail: "Fresh groceries and everyday essentials",
        price: "Supermarket"
      },
      {
        id: 2,
        partyImage:
          "https://africa-public.food.jumia.com/marketing/production/ng/images/nl/Chicken-Capitol.png?v=1555584879",
        partyDetail: "Medication and personal care",
        price: "Pharmarcy"
      },
      {
        id: 3,
        partyImage:
          "https://africa-public.food.jumia.com/marketing/production/ng/images/nl/HP%20BANNER%202019/KFC.png?v=1555584879",
        partyDetail: "Medication and personal care",
        price: "Pharmarcy"
      }
    ],
    Foods: [
      {
        id: 1,
        foodType: "",
        foodImage: "",
        foodPrice: ""
      },
      {
        id: 2,
        foodType: "",
        foodImage: "",
        foodPrice: ""
      },
      {
        id: 3,
        foodType: "",
        foodImage: "",
        foodPrice: ""
      },
      {
        id: 4,
        foodType: "",
        foodImage: "",
        foodPrice: ""
      },
      {
        id: 5,
        foodType: "",
        foodImage: "",
        foodPrice: ""
      },
      {
        id: 6,
        foodType: "",
        foodImage: "",
        foodPrice: ""
      }
    ],
    selectedProduct: null,
    selectedservice: null
  },

  mutations: {
    setSelectedProductValue(state, product) {
      state.selectedProduct = product;
    },
    setSelectedServiceValue(state, service) {
      state.selectedService = service;
    }
  },
  actions: {},
  modules: {}
});
