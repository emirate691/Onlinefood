<template>
  <div id="app">
    <Header />
    <div class="custom-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
//import Head from "./components/Head";

export default {
  name: "App",

  components: {
    Header,
    //Head,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
s #nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
