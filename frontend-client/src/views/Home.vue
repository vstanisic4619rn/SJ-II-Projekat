<template>
  <div>
    <Navbar />
    <br />

    <b-jumbotron>
      <template #header>Welcome to McDonalds</template>

      <template #lead>
        Browse for the latest McDonalds products and read reviews on them, to
        decide whether the product is right for you!
      </template>

      <hr class="my-4" />
      <div v-if="this.$store.getters.isLoggedIn">
        <h3>Welcome {{ this.$store.getters.getUser.username }}</h3>
        <b-button type="button" variant="primary" @click="logout"
          >Logout</b-button
        >
      </div>

      <div v-else>
        <router-link to="/login" class="btn btn-primary">Login</router-link>
        <router-link to="/sign-up" class="btn btn-primary">Sign up</router-link>
                 <!-- <b-button v-on:click=" test()">DUGMEE </b-button> -->
                     

      </div>
    </b-jumbotron>

    <router-link to="/products" class="btn btn-primary btn-lg">Browse Products</router-link>
        <!-- <router-link to="/review" class="btn btn-primary btn-lg">Browse reviews</router-link> -->

  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex';
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },
  methods: {
    ...mapActions([
        'fetchProduct'
    ]),
          test(){
        console.log("aaaaaaaaaaaaaaaaa")
      this.fetchProduct();
      },
   
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
  mounted: function() {
      this.$store.dispatch("products/load_products")
  }
};
</script>
