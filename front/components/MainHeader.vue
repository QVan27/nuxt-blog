<template>
  <header>
    <div>
      <nav>
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/articles">Articles</NuxtLink>
        <NuxtLink v-if="!role" to="/login">Connexion</NuxtLink>
        <a class="logout" v-else @click="logout">Déconnexion</a>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainHeader',
  data() {
    return {
      role: '',
    }
  },
  mounted() {
    this.checkRole()
  },
  methods: {
    checkRole() {
      if (localStorage.getItem('role')) {
        localStorage.getItem('role') === 'admin'
          ? (this.role = 'admin')
          : (this.role = 'user')
      }
    },
    logout() {
      localStorage.removeItem('role')
      this.role = ''
      this.$router.push('/')
    },
  },
})
</script>

<style lang="scss">
header {
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;
  right: 0;
  background-color: #333;
  color: #fff;
  padding: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(96%, 1200px);
    margin-inline: auto;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.5s ease-out;

      &:hover {
        color: #00dc82;
      }

      &.nuxt-link-exact-active.nuxt-link-active {
        color: #00dc82;
      }

      &.logout {
        cursor: pointer;
      }
    }
  }
}
</style>
