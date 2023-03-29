<template>
  <section class="section">
    <h1>Login</h1>
    <form>
      <label for="name">Nom</label>
      <input type="text" id="name" name="name" v-model="name" />
      <label for="password">Mot de passe</label>
      <input type="password" id="password" name="password" v-model="password" />
      <button type="submit" @click="login">Connexion</button>
    </form>
  </section>
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
      if (this.name === 'quentin' && this.password === 'admin') {
        localStorage.setItem('role', 'admin')
        this.$router.push('/')
      } else if (this.name === 'natty' && this.password === 'user') {
        localStorage.setItem('role', 'user')
        this.$router.push('/')
      } else {
        alert('Wrong name or password')
      }
    },
  },
})
</script>

<style lang="scss">

</style>
