<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="light">
      <!-- <b-navbar-brand href="#">DressTeK</b-navbar-brand> -->
      <router-link class="navbar-brand" to="/">DTK</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'Home' }" active-class="active" exact
            >Home</b-nav-item
          >
          <b-nav-item :to="{ name: 'About' }" active-class="active" exact
            >About</b-nav-item
          >
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
          
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item to="/dashboard">Dashboard</b-dropdown-item>
            <b-dropdown-item href="#" @click.prevent="$store.dispatch('logout')">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",

};
</script>

<style lang="scss"></style>
