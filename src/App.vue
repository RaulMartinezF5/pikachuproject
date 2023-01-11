<script setup>
  import { usePokemonsList } from "./stores/pokemonsList";
  import { onBeforeMount, ref } from "vue";
  import HeaderVue  from "@/components/Header.vue";
  // import NavVue  from "./components/Nav.vue";
  // import SearchVue  from "./components/Search.vue";
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
    <HeaderVue></HeaderVue>
  <!-- <NavVue></NavVue>
  <SearchVue></SearchVue> -->
  <main>
    <section>
      <ul>
        <PokemonVue v-for="pokemon in pokemonsStore.pokemonsList"
        :pokemon="pokemon"></PokemonVue>
      </ul>
    </section>
  </main>
</template>

<style scoped>
h2 {
  font-size: 5.3vw;
}

section {
  padding: 3vw;
}

ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2vw;
  list-style: none;
}
</style>
