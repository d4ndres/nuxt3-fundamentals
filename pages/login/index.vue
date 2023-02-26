<script setup>
const isLoggedIn = useIsLoggedIn()

definePageMeta({
  layout: "plain"
})

function login(){
  isLoggedIn.value = true
  useRouter().push('/')
}
</script>
<template>
  <form @submit.prevent="login">
    <h1>login</h1>
    <label for="login">Username</label>
    <input type="text" id="login">
    <label for="password">Pasword</label>
    <input type="text" id="password">
    <input type="submit">
  </form>
</template>

<style scoped></style>
