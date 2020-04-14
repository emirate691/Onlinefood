<template>
  <div class="entire">
    <b-row>
      <b-col cols="6" sm="3" md="3" v-for="food in Foods" :key="food.id">
        <h3></h3>
        <div class="image">
          <img :src="food.foodimaGE" />
        </div>
      </b-col>
    </b-row>
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
      return this.$store.state.products;
    },
  },
};
</script>

<style>
.entire {
  margin: 30px;
}
</style>
