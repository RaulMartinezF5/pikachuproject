<script>

export default{
    name: "MiComponente",
    data: () => ({
        title: ""
    }) 
};


</script>

<template>
    <input class="input" type="text" v-model="title" >
    <ul>
        <li><button ><img src="../assets/img/imgLogosPokemon/bug.png"  alt="buttonpng" border="0" value="bug"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/ice.png" alt="buttonpng" border="0" value="ice"/> </button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon//dark.png" alt="buttonpng" border="0" value="dark"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/fire.png" alt="buttonpng" border="0" value="fire" /></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/rock.png" alt="buttonpng" border="0" value="rock"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/fairy.png" alt="buttonpng" border="0" value="fairy"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/ghost.png" alt="buttonpng" border="0" value="ghost"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/grass.png" alt="buttonpng" border="0" value="grass"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/steel.png" alt="buttonpng" border="0" value="steel"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/water.png" alt="buttonpng" border="0" value="water"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/dragon.png" alt="buttonpng" border="0" value="dragon"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/flying.png" alt="buttonpng" border="0" value="flying"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/ground.png" alt="buttonpng" border="0" value="ground"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/normal.png" alt="buttonpng" border="0" value="normal"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/fighting.png" alt="buttonpng" border="0" value="fighting"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/psychic.png" alt="buttonpng" border="0" value="psychic"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/electric.png" alt="buttonpng" border="0" value="electric"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/poison.png" alt="buttonpng" border="0" value="poison"/></button></li>
    </ul>
</template>

<style scoped>
    .input{
        display: flex;
        text-align: center;
        margin-left: 15%;
        width: 70%;
        margin-top: 2%;
        margin-bottom: 2%;
    }
    ul{
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    
  button {
    border: none;
    cursor: pointer;
    appearance: none;
    background-color: inherit;
    transition: transform 0.7s ease-in-out;
}
  
  button:hover {
    transform: rotate(360deg);
  }
  
  img {
    width: 100%;
    height: 100%;
  }
  
  input[type='email'] {
    padding: 1vw;
    border: 1vw solid #314de4;
    outline: none;
    border-radius: 5vw;
    font-size: 2vw;
    color: #314de4;
  }
  
  .text {
    font-size: 6vw;
    color: #314de4;
    
  }

</style>