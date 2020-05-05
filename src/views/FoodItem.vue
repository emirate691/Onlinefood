<template>
  <div class="food">
    <div class="picture"></div>
    <div id="nav">
      <router-link to="/">Home</router-link> >
      <router-link to="/vendor">Vendor</router-link> > DE Village Restaurant
      <h5>DE village Restaurant</h5>
      <i class="far  fa star"></i>.
    </div>

    <section>
      <mdb-navbar color="grey" class="lighten-4">
        <mdb-navbar-nav
          nav
          left
          class="nav-pills"
          v-mdb-scroll-spy="{
            container: 'navbar-container',
            visible: 0.4,
            callback: 'setActiveNavlink',
          }"
        >
          <mdb-nav-item href="#nav-example-1" :active="nav === 0"
            >BREAK FAST</mdb-nav-item
          >
          <mdb-nav-item href="#nav-example-2" :active="nav === 1"
            >LUNCH</mdb-nav-item
          >
          <mdb-nav-item href="#nav-example-2" :active="nav === 2"
            >SWALLOWS</mdb-nav-item
          >
          <mdb-nav-item href="#nav-example-2" :active="nav === 3"
            >SIDE ORDER</mdb-nav-item
          >
          <mdb-nav-item href="#nav-example-2" :active="nav === 4"
            >PROTEIN</mdb-nav-item
          >
          <mdb-nav-item href="#nav-example-2" :active="nav === 5"
            >DRINKS</mdb-nav-item
          >
        </mdb-navbar-nav>
      </mdb-navbar>

      <div
        style="overflow-y: scroll; max-height: 900px;"
        class="p-4"
        id="navbar-container"
      >
        <h4 id="nav-example-1">BREAK FAST</h4>
        <p>
          Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
          enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
          rights whatever. Anim keffiyeh carles cardigan. Velit seitan
          mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
          shorts, williamsburg hoodie minim qui you probably haven't heard of
          them et cardigan trust fund culpa biodiesel wes anderson aesthetic.
          Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan
          ullamco consequat.
        </p>
        <h4 id="nav-example-2">LUNCH</h4>
        <p>
          Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
          enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
          rights whatever. Anim keffiyeh carles cardigan. Velit seitan
          mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
          shorts, williamsburg hoodie minim qui you probably haven't heard of
          them et cardigan trust fund culpa biodiesel wes anderson aesthetic.
          Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan
          ullamco consequat.
        </p>
        <h4 id="nav-example-2">SWALLOWS</h4>
        <p>
          Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
          enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
          rights whatever. Anim keffiyeh carles cardigan. Velit seitan
          mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
          shorts, williamsburg hoodie minim qui you probably haven't heard of
          them et cardigan trust fund culpa biodiesel wes anderson aesthetic.
          Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan
          ullamco consequat.
        </p>
        <h4 id="nav-example-2">SIDE ORDER</h4>
        <p>
          Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
          enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
          rights whatever. Anim keffiyeh carles cardigan. Velit seitan
          mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
          shorts, williamsburg hoodie minim qui you probably haven't heard of
          them et cardigan trust fund culpa biodiesel wes anderson aesthetic.
          Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan
          ullamco consequat.
        </p>
        <h4 id="nav-example-2">PROTEIN</h4>
        <p>
          Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
          enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
          rights whatever. Anim keffiyeh carles cardigan. Velit seitan
          mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
          shorts, williamsburg hoodie minim qui you probably haven't heard of
          them et cardigan trust fund culpa biodiesel wes anderson aesthetic.
          Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan
          ullamco consequat.
        </p>
        <h4 id="nav-example-2">DRINKS</h4>
        <p>
          Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
          enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
          rights whatever. Anim keffiyeh carles cardigan. Velit seitan
          mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
          shorts, williamsburg hoodie minim qui you probably haven't heard of
          them et cardigan trust fund culpa biodiesel wes anderson aesthetic.
          Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan
          ullamco consequat.
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import {
  mdbNavbar,
  mdbNavbarNav,
  mdbNavItem,
  // mdbDropdown,
  // mdbDropdownToggle,
  // mdbDropdownMenu,
  // mdbDropdownItem,
  mdbScrollSpy,
} from "mdbvue";

export default {
  name: "ScrollSpyPage",
  components: {
    mdbNavbar,
    mdbNavbarNav,
    mdbNavItem,
    //mdbDropdown,
    // mdbDropdownToggle,
    // mdbDropdownMenu,
    // mdbDropdownItem,
  },
  data() {
    return {
      nav: 0,
    };
  },
  methods: {
    setActiveNavlink(i) {
      this.nav = i;
    },
  },
  directives: { mdbScrollSpy },
};
</script>

<style>
.picture {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcJDgtGt8S2Ffkgyq-mLneosMpGK6traXSN_sESBG43GrcIfzZ&usqp=CAU");
  margin-top: 50px;
  height: 120px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
body {
  position: relative;
}
#nav a {
  text-decoration: none;
  color: #ccc;
}
#nav a:hover {
  color: red;
}
section {
  border-top: 5px solid lightgrey;
}
</style>
