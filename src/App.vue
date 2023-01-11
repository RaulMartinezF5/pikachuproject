<script setup>
  
  import PokemonVue  from "./components/Pokemon.vue";
  import { usePokemonsList } from "./stores/pokemonsList";
  import { onBeforeMount, ref } from "vue";

  const pokemonsStore = usePokemonsList()
  
  onBeforeMount(() => {
    getPokemons()
  })

  const loading = ref(true)

  const getPokemons = async () => {
    await pokemonsStore.fetchPokemons()
    loading.value = false
  }

</script>

<template>
   <main>
    <h2>POKEDEX</h2>
    <section v-for="pokemon in pokemonsStore.pokemonsList">
      <ul>
        <PokemonVue 
        :pokemon="pokemon"/>
      </ul>
    </section>
  </main>
</template>

<style scoped>

</style>
