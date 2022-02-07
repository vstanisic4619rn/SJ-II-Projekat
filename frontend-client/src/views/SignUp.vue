<template>
  <div id="app">
    <Header subtitle="Create account"/>

    <b-form @submit="onSubmit">

      <b-form-group label="Userame:" label-for="username">
        <b-form-input id="username" v-model="form.username" placeholder="Enter username" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>


      <!-- <b-form-checkbox id="admin" v-model="form.admin" :value="true" :unchecked-value="false">Admin</b-form-checkbox>
      <b-form-checkbox id="moderator" v-model="form.moderator" :value="true" :unchecked-value="false">Moderator</b-form-checkbox>
      <b-form-checkbox id="student" v-model="form.student" :value="true" :unchecked-value="false">Student</b-form-checkbox>
       -->
      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

  </div>
</template>

<script>

  import { mapActions } from 'vuex';

  export default {
    name: 'SignUp',
    
    components: {
    },

    data() {
      return {
        form: {
          username: '',
          password: '',
          admin: 1,
        }
      }
    },

    methods: {
      ...mapActions([
        'register'
      ]),

      onSubmit(e) {
        e.preventDefault();

        this.register(this.form);
         this.$router.push({ name: 'Home' }); 
      }
    }
  }
</script>

<style scoped>

</style>
