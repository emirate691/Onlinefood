<template>
  <div class="home">
    <div class="clearfix">
      <b-img
        left
        src="https://africa-public.food.jumia.com/assets/production/ng/layout/themes/capricciosa_hellofood/images/en/jumiafood-homepage-left-splash-services.jpg?v=1555584879"
        alt="Left image"
      ></b-img>
      <b-img
        right
        src="https://africa-public.food.jumia.com/assets/production/ng/layout/themes/capricciosa_hellofood/images/en/jumiafood-homepage-right-splash-services.jpg?v=1555584879"
        alt="Right image"
      ></b-img>

      <div>
        <p class="joh">Everything you need, delivered now</p>
      </div>
      <p class="side-text">Choose a service</p>
      <b-row class=""> </b-row>
      <b-container>
        <b-row>
          <b-col
            v-for="product in products"
            :key="product.id"
            sm="12"
            lg="6"
            md="2"
            variant="primary"
          >
            <a @click="gotoPage(product)">
              <b-card
                :img-src="product.partyImage"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                id="car"
              >
                <b-card-text>
                  <p class="name">{{ product.partytName }}</p>
                  <h4 class="server">{{ product.price }}</h4>
                  <h5>{{ product.partyDetail }}</h5>
                </b-card-text>
              </b-card>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div>
      <h1 class="hell">How it work</h1>
      <b-container>
        <b-row>
          <b-col sm="12" lg="4" md="3">
            <img
              src="https://food.jumia.com.ng/images/how-it-works-1.svg?v=1554737166"
            />
            <h3>Set delivery location</h3>
            <p>Select the location where you want us to deliver</p>
          </b-col>
          <b-col sm="12" lg="4" md="3">
            <img
              src="https://food.jumia.com.ng/images/how-it-works-2.svg?v=1554737166"
            />
            <h3>Choose the product</h3>
            <p>Browse shops that deliver near you</p>
          </b-col>
          <b-col sm="12" lg="4" md="3">
            <img
              src="https://food.jumia.com.ng/images/how-it-works-3.svg?v=1554737166"
            />
            <h3>Receive it at your doorstep</h3>
            <p>Your order will be delivered to you in no time</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="middle">
      <div class="content">
        <h1>20% OFF on your first order by</h1>
        <h1>subscribing to our newsletters!</h1>
        <h5>
          Don't miss out on our great offers & Receive deals from all our top
          vendors via e-mail
        </h5>
      </div>
      <div>
        <b-dropdown
          id="dropdown-1"
          text="Select your city"
          class="m-md-2"
          variant="outline-white"
        >
          <b-dropdown-item active>Select your city</b-dropdown-item>
          <b-dropdown-item>Abuja</b-dropdown-item>
          <b-dropdown-item>Lagos</b-dropdown-item>
          <b-dropdown-item>Ibadan</b-dropdown-item>
          <b-dropdown-item>Ilorin</b-dropdown-item>
        </b-dropdown>
        <input type="text" placeholder="E-mail" class="inp" />
        <b-button id="btn-1">SUBSCRIBE NEWSLETTER</b-button>
        <div>
          <b-form-checkbox>
            <p id="box">
              I have read and accepted the
              <a href="#">term and condition</a> and
              <a href="#">private policy</a>
            </p>
          </b-form-checkbox>
        </div>
      </div>
    </div>
    <b-row class=""> </b-row>
    <b-container>
      <b-row>
        <b-col
          v-for="service in services"
          :key="service.id"
          sm="12"
          lg="4"
          md="2"
          variant="primary"
        >
          <a @click="gotoPages(service)">
            <img
              :src="service.partyImage"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
              id="order"
            />
          </a>
        </b-col>
      </b-row>
    </b-container>
    <div class="forth">
      <b-container>
        <b-row>
          <b-col sm="12">
            <img
              src="https://food.jumia.com.ng/images/jumia-for-corporate.jpg"
            />
          </b-col>
          <b-col sm="12" lg="4" md="2"
            ><h1>
              Jumia Food for Corporate
            </h1>
            <h5>
              Order lunch, fuel for meetings or late-night deliveries to the
              office. Your favorite vendors coming to a desk near you.
            </h5>
            <b-button id="btn-2" @click="addBtn()">Get Started</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="middle" id="modd">
      <b-container>
        <b-row>
          <b-col sm="12" lg="6" md="2" id="middle-para">
            <h2>Order food</h2>
            <h5 id="mid">
              The Jumia Food app makes it simple for anybody to use a mobile
              device to look over the menu of the best vendors and place an
              order for home delivery.
            </h5>
          </b-col>

          <b-col> </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="fifth">
      <b-container>
        <b-row>
          <b-col sm="12" lg="3" md="2">
            <ul>
              <h3>City</h3>
              <li>Lagos</li>
              <li>Abuja</li>
              <li>Ibadan</li>
              <li>Port Harcourt</li>
              <li>Lekki Phase 1 Victoria Island</li>
              <li>Yaba Marina</li>
              <li>Wuse II</li>
              <li>Maitama Ikoyi - Dolphin Estate</li>
            </ul>
          </b-col>
          <b-col sm="12" lg="3" md="2">
            <ul>
              <h3>Cusiness</h3>
              <li>Lagos</li>
              <li>Abuja</li>
              <li>Ibadan</li>
              <li>Port Harcourt</li>
              <li>Lekki Phase 1 Victoria Island</li>
              <li>Yaba Marina</li>
              <li>Wuse II</li>
              <li>Maitama Ikoyi - Dolphin Estate</li>
            </ul>
          </b-col>
          <b-col sm="12" lg="3" md="2">
            <ul>
              <h3>Popular vendor</h3>
              <li>Lagos</li>
              <li>Abuja</li>
              <li>Ibadan</li>
              <li>Port Harcourt</li>
              <li>Lekki Phase 1 Victoria Island</li>
              <li>Yaba Marina</li>
              <li>Wuse II</li>
              <li>Maitama Ikoyi - Dolphin Estate</li>
            </ul>
          </b-col>
          <b-col sm="12" lg="3" md="2">
            <ul>
              <h3>Jumia Food</h3>
              <li>Lagos</li>
              <li>Abuja</li>
              <li>Ibadan</li>
              <li>Port Harcourt</li>
              <li>Lekki Phase 1 Victoria Island</li>
              <li>Yaba Marina</li>
              <li>Wuse II</li>
              <li>Maitama Ikoyi - Dolphin Estate</li>
              <div class="container">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-instagram-square"></i>
              </div>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    services() {
      return this.$store.state.services;
    },
  },
  methods: {
    gotoPage(product) {
      this.$store.commit("setSelectedProductValue", product);
      this.$router.push({ path: "/ServiceProvide" });
    },
    gotoPages(service) {
      this.$store.commit("setSelectedServiceValue", service);
      this.$router.push({ path: "/FoodDetail" });
    },
    addBtn() {
      this.$router.push({ path: "/Detail" });
    },
  },
};
</script>

<style>
.home {
  background-color: #fff;
  margin-top: 60px;

  height: 700px;
  background-repeat: no-repeat;
}
.joh {
  font-weight: bold;
  font-size: 30px;
}
.side-text {
  text-align: left;
  font-size: 20px;
}
.hell {
  margin-top: 50px;
  text-align: center;
}
.middle {
  background-color: #ea5b31;
  /* width: 1370px;*/
  height: 350px;
  text-align: center;
}
.content {
  padding-top: 70px;
  color: white;
  font-weight: bold;
}
.server {
  color: red;
  font-size: 20px;
}
#dropdown-1 {
  color: white;
  background-color: white;
}

.inp {
  height: 70px;
}
#btn-1 {
  width: 20%;
  height: 70px;
  margin: 10px;
}
.m-md-2 {
  height: 70px;
}
#box {
  color: white;
}
#box a {
  color: white;
}
#order {
  margin-top: 30px;
}
.forth {
  margin-top: 100px;
}
.img {
  margin: 0px;
}
#btn-2 {
  width: 40%;
}
.fifth {
  /*width: 1370px;*/
  height: 350px;
  background-color: #2a2a2a;
}
#middle-para {
  color: #ccc;
  font-size: 20px;
  text-align: justify;
}
.fifth ul li {
  list-style-type: none;
  text-align: justify;
  color: #ccc;
  font-size: 15px;
}
.fifth ul h3 {
  font-weight: bold;
  text-align: justify;
  color: #ccc;
  margin-top: 50px;
}
.container fa-facebook {
  padding: 10px;
}
.custom-container {
  max-width: 1200px;
}

.content-mt {
  margin-top: 56px;
}
</style>
