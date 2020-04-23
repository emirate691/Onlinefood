<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success" fixed="top">
      <b-navbar-brand href="#">
        <img
          src="https://africa-public.food.jumia.com/assets/production/ng/layout/themes/capricciosa_hellofood/images/en/jumiafood-logo.png?v=1555584879"
        />
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="ENGLISH" right>
            <b-dropdown-item href="#">YORUBA</b-dropdown-item>
            <b-dropdown-item href="#">HAUSA</b-dropdown-item>
            <b-dropdown-item href="#">PIGIN</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>HELP</em>
            </template>

            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >

            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
