<script lang="ts" setup></script>

<template>
  <div>
    I'm on team <strong>{{ $route.params.teamSlug}}</strong>

    and my user id is {{ $route.params.userId }}
  </div>
</template>

<style scoped></style>
