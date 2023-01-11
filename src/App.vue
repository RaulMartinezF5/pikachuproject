<script setup>
  import { usePokemonsList } from "./stores/pokemonsList";
  import { onBeforeMount, ref } from "vue";
  import HeaderVue  from "@/components/Header.vue";
  import NavVue  from "./components/Nav.vue";
  import SearchVue  from "./components/Search.vue";
  import PokemonVue  from "./components/Pokemon.vue";


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
    <HeaderVue></HeaderVue>
  <NavVue></NavVue>
  <SearchVue></SearchVue>
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
