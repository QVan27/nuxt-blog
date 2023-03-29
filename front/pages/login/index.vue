<!-- create a login page check for name and password, once you are connect stock role in local -->
<template>
  <div>
    <h1>Login</h1>
    <form>
      <label for="name">Nom</label>
      <input type="text" id="name" name="name" v-model="name" />
      <label for="password">Mot de passe</label>
      <input type="password" id="password" name="password" v-model="password" />
      <button type="submit" @click="login">Connexion</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Login',
  data() {
    return {
      name: '',
      password: '',
    }
  },
  methods: {
    login() {
      
    },
  },
})
</script>

<style lang="scss">

</style>
