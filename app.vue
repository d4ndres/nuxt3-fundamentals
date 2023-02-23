<script setup>
useHead({
  titleTemplate: ( titleChunk ) => {
    return titleChunk ? `${ titleChunk } - My movie site`: 'My movie site' 
  }
})
</script>
<template>
  
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  
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
