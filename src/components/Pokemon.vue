
<template>
    <h2>{{ pokemon.name}}</h2>
    <h2>{{ img }}</h2>
    </template>

<script setup>

const props = defineProps({
  pokemon: {
    type: Object,
    default: null
  },
  img: {
    type: String,
    default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
  }
})
</script>

<style scoped>
    
    img{
        width: 200px;
    }
</style>