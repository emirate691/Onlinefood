<template>
  <div class="entire">
    <b-container>
      <div>
        <b-container>
          <h3>Big Chops, Small Money</h3>
          <b-row>
            <b-col sm="12" md="3" v-for="food in Foods" :key="food.id">
              <b-img :src="food.foodImage" fluid alt="Fluid image"></b-img>

              <h5 class="my-3">{{ food.foodType }}</h5>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div>
        <b-container>
          <h3>Delivers in under 35 minutes</h3>
          <b-row>
            <b-col
              sm="12"
              md="3"
              v-for="variety in varieties"
              :key="variety.id"
            >
              <b-img :src="variety.foodImage" fluid alt="Fluid image"></b-img>

              <h5 class="my-3">{{ variety.foodType }}</h5>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div>
        <b-container>
          <h3>More Vendors</h3>
          <b-row>
            <b-col sm="12" md="3" v-for="vendor in vendors" :key="vendor.id">
              <b-img :src="vendor.foodImage" fluid alt="Fluid image"></b-img>

              <h5 class="my-3">{{ vendor.foodType }}</h5>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "ServiceProvide",
  data() {
    return {};
  },
  computed: {
    Foods() {
      return this.$store.state.Foods;
    },
    varieties() {
      return this.$store.state.varieties;
    },
    vendors() {
      return this.$store.state.vendors;
    },
  },
};
</script>

<style>
.entire {
  margin-top: 50px;
}
</style>
