<template>
  <div id="app">
    <div id="nav">
      <Head />
    </div>
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Head from "@/components/Head.vue";
export default {
  name: "Home",
  components: {
    Header,
    Head,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
