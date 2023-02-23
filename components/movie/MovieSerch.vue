<script setup>
  const query = ref('');
  const movies = ref([]);
  async function search(){
    if ( !query.value ) return; 
    const {Search} = await $fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=53d3f03a&s=${query.value}`);
    movies.value = Search;
  }
</script>

<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" v-model="query">
      <button @click="search">Search</button>
    </form>
    <ul>
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{name: 'movies-id', params: { id: movie.imdbID}}">
          <img :src="movie.Poster" :alt="movie.title" /> 
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
}
</style>