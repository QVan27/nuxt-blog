<template>
  <section class="section">
    <div class="section__container">
      <h1>Login</h1>
      <form>
        <label for="name">Nom</label>
        <input type="text" id="name" name="name" v-model="name" />
        <label for="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
        />
        <button type="submit" @click="login">Connexion</button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Login',
  transition: 'fade',
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

<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: min(96%, 1200px);
    margin-inline: auto;

    h1 {
      margin-inline: auto;
      font-size: 2rem;
      font-weight: 700;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      label {
        margin-bottom: 0.5rem;
      }

      input {
        margin-bottom: 1rem;
      }

      button {
        margin-top: 1rem;
      }
    }
  }
}
</style>
