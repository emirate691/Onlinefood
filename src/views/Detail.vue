<template>
  <div class="tempo">
    <b-container>
      <b-row>
        <b-col sm="12" id="naved">
          <nav id="navbar-example3" class="navbar navbar-light bg-light">
            <div
              data-spy="fixed"
              data-target="#navbar-example3"
              data-offset="0"
            >
              <h2 class="heading">Food for your</h2>
              <span><marquee direction="rotate">Lunch meeting </marquee></span>
              <h4 class="heading-2">Catering to all office needs.</h4>
              <button class="btn btn-success" type="submit">Login form</button>
              <button class="btn btn-outline-success" type="submit" id="bnt">
                Sign up, it's free
              </button>
              <div class="buttom">
                <div>
                  <i class="fal fa-envelope"></i
                  ><a class="link" href="#">corporate.food@jumial.com.ng</a>
                </div>
                <div>
                  <i class="fas fa-mobile-alt"></i>
                  <a class="link" href="#">063 000 987 / 0907 980 7654</a>
                </div>
                <a class="link" href="#">Terms & Condition Privacy FAQ </a>
              </div>
            </div>
          </nav>
        </b-col>
        <b-col id="side-1">
          <a @click="addButton()">
            <h4 class="subhed">LUNCH & OT PLAN</h4>
          </a>
        </b-col>
        <b-col id="side-2">
          <a @click="addButton()"> <h4 class="subhed">OFFICE MEETINGS</h4></a>
        </b-col>
        <b-col id="side-3">
          <a @click="addButton()">
            <h4 class="subhed">CATEERING</h4>
          </a>
        </b-col>
        <b-col id="side-4"
          ><a @click="addButton()"><h4 class="subhed">WHY US</h4></a></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Detail",
  data() {
    return {};
  },
  methods: {
    addButton() {
      this.$router.push({ path: "/Details" });
    },
  },
};
</script>
<style>
.btn {
  width: 100%;
  font-size: 20px;
  font-weight: bold;
}
.backgrd {
  background-color: green;
  width: 70%;
  margin-top: 0px;
}

#bnt {
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
}
.heading {
  margin-top: 100px;
}
.heading-2 {
  margin-top: 30px;
}
.buttom {
  text-align: justify;
  margin-top: 70px;
}
.buttom a {
  text-decoration: none;
  color: #30a55e;
}
.link {
  margin: 10px;
}
#side-1 {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://us.123rf.com/450wm/belchonock/belchonock1803/belchonock180307806/97520393-young-man-eating-instant-noodles-while-working-with-laptop-in-office.jpg?ver=6");
}
#side-2 {
  background-image: require(".@/assets/lunch.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

#side-3 {
  /* background-image: url("");*/
  background-repeat: no-repeat;
  background-size: cover;
}

#side-4 {
  background-image: url("https://techcabal.com/wp-content/uploads/tc/2020/02/gokada-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.subhed {
  margin-top: 200px;
  color: #cfcfcf;
  font-weight: bold;
}
.subhed h4 a {
  text-decoration: none;
}

.lnk {
  text-decoration: none;
}

#naved {
  margin-left: 0px;
}
</style>
