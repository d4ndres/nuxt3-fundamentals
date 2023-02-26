
<script setup>

const isLoggedIn = useIsLoggedIn()

</script>

<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="https://vueschool.io">Vue school</NuxtLink>
      <NuxtLink v-if="!isLoggedIn" to="/login">Login</NuxtLink>
      <a href="#" v-else @click.prevent="isLoggedIn = false">Logout</a>
    </nav>
    <div>
      <slot></slot>
    </div>

  </div>

</template>

<style scoped>
  nav {
    display: flex;
    gap: 1rem;
  }
  a {
    color: hotpink;
    text-decoration: none;
    transition: .4s;
    
  }
  a:hover {
    color: cyan
  }
</style>
