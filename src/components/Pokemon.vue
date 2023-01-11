
<template>
<li>   
  <div class="card">
      <h2>{{pokemon.name}}</h2>
      <h2>{{pokemon.type}}</h2>
      <h2>{{pokemon.id}}</h2>
      <img v-bind:src=pokemon.img alt="">
  </div>
</li>
</template>

<script setup>

const props = defineProps({
  pokemon: {
    type: Object,
    default: null
  }
})
</script>
<style scoped>

  .card{
    width: 60%;
    border-style: solid;
    border-color: #2A2A3A;
    border-width: .3vw;
    font-size: 1vw ;
    text-align: center;
  }
  .card img{
    width: 100% ;
  }
</style> 