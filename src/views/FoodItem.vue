<template>
  <div class="food">
    <div class="picture"></div>
    <div id="nav">
      <router-link to="/">Home</router-link> >
      <router-link to="/vendor">Vendor</router-link> > DE Village Restaurant
      <h5>DE village Restaurant</h5>
      <i class="far  fa star"></i>.
    </div>

    <router-view />
    <nav id="navbar-example2" class="navbar navbar-light bg-light">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="breakfast">BREAKFAST</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#lunch">LUNCH</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#swallows">SWALLOWS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#sideorder">SIDE ORDER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#protein">PROTEIN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#drink">DRINK</a>
        </li>
      </ul>
    </nav>
    <div class="sider">
      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
        <h4 id="fat">Breakfast</h4>
        <p>...</p>
        <h4 id="mdo">Lunch</h4>
        <p>...</p>
        <h4 id="one">Swallows</h4>
        <p>...</p>
        <h4 id="two">Order Side</h4>
        <p>...</p>
        <h4 id="three">Protein</h4>
        <p>...</p>
        <h4 id="three">Drinks</h4>
        <p>...</p>
      </div>
    </div>
  </div>
</template>
<script></script>

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
a :hover {
  color: red;
}
.sider {
  margin-left: 30px;
}
</style>
