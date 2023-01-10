<script setup>

</script>
<template>
    <form class="pokemon-form" v-on:submit={handleSubmit}>
      <input
        class="pokemon-input"
        type="text"
        name="pokemon"
        v-model="pokemonName"
        placeholder="Pokemon Search"
        autocomplete="off"/>
      <input
        type="submit"
        class="pokemon-btn"
        value=""
      />
    </form>
  </template>
  
  <script>
  export default {
    name: 'PokedexForm',
  
    data () {
      return {
        pokemonName: ''
      }
    },
  
    methods: {
      handleSubmit (e) {
        e.preventDefault() // Evitamos que el formulario mande una query por la url
      }
    }
  }
  </script>

<style scoped>

</style>