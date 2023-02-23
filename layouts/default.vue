<script lang="ts" setup></script>

<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="https://vueschool.io">Vue school</NuxtLink>
      <div>home ron</div>
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
