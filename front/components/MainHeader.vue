<template>
  <header>
    <div>
      <nav>
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/articles">Articles</NuxtLink>
      </nav>
    </div>
  </header>
</template>

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
    a {
      color: #fff;
      margin-left: 1rem;
      text-decoration: none;
      transition: color 0.5s ease-out;

      &:hover {
        color: #00DC82;
      }

      &.nuxt-link-exact-active.nuxt-link-active {
        color: #00DC82;
      }
    }

  }
}
</style>
