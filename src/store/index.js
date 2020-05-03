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
        price: "Restaurant",
      },
    ],
    productes: [
      {
        id: 2,
        partyImage:
          "https://d2lev5xroqke9e.cloudfront.net/ng/view/ee4e8f5186?width=168&height=168",
        partyDetail: "Alcolic drinks to get your party more started",
        price: "Party",
      },
    ],
    services: [
      {
        id: 1,
        partyImage:
          "https://africa-public.food.jumia.com/marketing/production/ng/images/nl/600x_700.png?v=1555584879",
        partyDetail: "Fresh groceries and everyday essentials",
        price: "Supermarket",
      },
    ],
    serviced: [
      {
        id: 1,
        partyImage:
          "https://africa-public.food.jumia.com/marketing/production/ng/images/nl/Chicken-Capitol.png?v=1555584879",
        partyDetail: "Medication and personal care",
        price: "Pharmarcy",
      },
    ],
    serviceded: [
      {
        id: 2,
        partyImage:
          "https://africa-public.food.jumia.com/marketing/production/ng/images/nl/HP%20BANNER%202019/KFC.png?v=1555584879",
        partyDetail: "Medication and personal care",
        price: "Pharmarcy",
      },
    ],
    Foods: [
      {
        id: 1,
        foodType: "De Village Restaurrant",
        foodImage: require("@/assets/oluv.jpeg"),

        foodPrice: "",
      },
      {
        id: 2,
        foodType: "Kilimanjaro - Wuse ",
        foodImage: require("@/assets/olavece.jpeg"),

        foodPrice: "",
      },
    ],
    varieties: [
      {
        id: 1,
        foodType: "November Cubes - Zone 2",
        foodImage: require("@/assets/ofadaa.jpeg"),
        foodPrice: "",
      },
      {
        id: 2,
        foodType: "Burger Meal - Wuse",
        foodImage: require("@/assets/olasex.jpeg"),
        foodPrice: "",
      },
      {
        id: 3,
        foodType: "KFC - Asokoro",
        foodImage: require("@/assets/olaxex.jpeg"),

        foodPrice: "",
      },
    ],
    vendors: [
      {
        id: 4,
        foodType: "Chicken Capitol",
        foodImage: require("@/assets/break.jpeg"),
        foodPrice: "",
      },
      {
        id: 5,
        foodType: "Chicken Republic - Ademola Adetokunbo",
        foodImage: require("@/assets/break2.jpeg"),

        foodPrice: "",
      },

      {
        id: 6,
        foodType: "Cilantro",
        foodImage: require("@/assets/break4.jpeg"),

        foodPrice: "",
      },

      {
        id: 7,
        foodType: "Honey",
        foodImage: require("@/assets/ofada.jpeg"),

        foodPrice: "",
      },

      {
        id: 8,
        foodType: "Frost Confectionery",
        foodImage: require("@/assets/ofada2.jpeg"),

        foodPrice: "",
      },
      {
        id: 9,
        foodType: "Duo Restauarant",
        foodImage: require("@/assets/ofadas.jpeg"),
        foodPrice: "",
      },
      {
        id: 10,
        foodType: "The VUE",
        foodImage: require("@/assets/ofud.jpeg"),

        foodPrice: "",
      },
      {
        id: 11,
        foodType: "Jalsa",
        foodImage: require("@/assets/ofada5.jpeg"),

        foodPrice: "",
      },
      {
        id: 12,
        foodType: "POW Pan-Asian Restaurant",
        foodImage: require("@/assets/ofada6.jpeg"),

        foodPrice: "",
      },
      {
        id: 13,
        foodType: "Da Chimney",
        foodImage: require("@/assets/image.jpeg"),

        foodPrice: "",
      },
      {
        id: 14,
        foodType: "Down Town",
        foodImage: require("@/assets/image.jpeg"),

        foodPrice: "",
      },
      {
        id: 15,
        foodType: "The Jerk Shack",
        foodImage: require("@/assets/ofudes.jpeg"),

        foodPrice: "",
      },
      {
        id: 16,
        foodType: "Puzzo's Restaurant",
        foodImage: require("@/assets/ofude.jpeg"),

        foodPrice: "",
      },
      /*{
        id: 17,
        foodType: "",
        foodImage: require("@/assets/ofuder.jpeg"),

        foodPrice: "",
      },*/
      {
        id: 18,
        foodType: "Johnny Rockets - Wuse",
        foodImage: require("@/assets/ofeed.jpeg"),

        foodPrice: "",
      },
    ],
    selectedProduct: null,
    selectProduc: null,
    selectedservice: null,
    selectFood: null,
    selectResta: null,
    selectRested: null,
    selectVendor: null,
    selectVariety: null,
  },

  mutations: {
    setSelectedProductValue(state, product) {
      state.selectedProduct = product;
    },
    setSelectedProducValue(state, produc) {
      state.selectedProduc = produc;
    },
    setSelectedServiceValue(state, service) {
      state.selectedService = service;
    },
    setSelectedRestaValue(state, resta) {
      state.selectedResta = resta;
    },
    setSelectedRestedValue(state, rested) {
      state.selectedRested = rested;
    },
    setSelectedFoodValue(state, food) {
      state.selectedFood = food;
    },
    setSelectedVendorValue(state, vendor) {
      state.selectedVendor = vendor;
    },

    setSelectedVarietyValue(state, variety) {
      state.selectedVariety = variety;
    },
  },
  actions: {},
  modules: {},
});
