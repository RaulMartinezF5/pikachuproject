
<template>   
    <h2>{{ pokemon.name}}</h2>
    <h2>{{ pokemon.url }}</h2>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" alt="">
</template>

<script setup>

const props = defineProps({
  pokemon: {
    type: Object,
    default: null
  }
})
</script> 