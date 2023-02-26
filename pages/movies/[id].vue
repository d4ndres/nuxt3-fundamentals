<script setup>
const route = useRoute();

const {data} = await useFetch( `https://www.omdbapi.com/?apikey=53d3f03a&i=${route.params.id}`,
  {
    pick: ['Title', 'Plot', 'Poster', 'Error'],
    key: `/movie/${route.params.id}`,
  }
)

if( data.value.Error == "Incorrect IMDb ID."){
  showError({statusCode: 404, statusMessage: "Page Not Found"})
}  
useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot},
    { property: "og:description", content: data.value.Plot},
    { property: 'og:image', content: data.value.Poster},
    { name: "twitter:card", content: 'summary_large_image'}
  ]
})

</script>

<template>
  <div>
    <h1>{{data}}</h1>
  </div>
</template>

<style scoped></style>
