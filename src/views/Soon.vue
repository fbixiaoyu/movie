<template>
  <div>
    <movie-list :movie-type="movieType"></movie-list>
  </div>
</template>
<script>
import movieList from '@/components/MovieList.vue'
export default {
    data(){ 
        return{
             movieType: 'coming_soon',
        }
    },
    components:{
         'movie-list': movieList
    }
}
</script>
<style>
</style>
