<script setup>
    import ButtonVue  from "./Button.vue";
    
console.log("Button");
</script>

<template>
    <ul>
        
        <li> <button ><img src="../assets/img/imgLogosPokemon/bug.png"  alt="buttonpng" border="0" value="bug"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/ice.png" alt="buttonpng" border="0" value="ice"/> </button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon//dark.png" alt="buttonpng" border="0" value="dark"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/fire.png" alt="buttonpng" border="0" value="fire" /></button></li>
        <li> <button ><img src="../assets/img/imgLogosPokemon/rock.png" alt="buttonpng" border="0" value="rock"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/fairy.png" alt="buttonpng" border="0" value="fairy"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/ghost.png" alt="buttonpng" border="0" value="ghost"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/grass.png" alt="buttonpng" border="0" value="grass"/></button></li>
        <li> <button ><img src="../assets/img/imgLogosPokemon/steel.png" alt="buttonpng" border="0" value="steel"/></button></li>
        <li> <button ><img src="../assets/img/imgLogosPokemon/water.png" alt="buttonpng" border="0" value="water"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/dragon.png" alt="buttonpng" border="0" value="dragon"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/flying.png" alt="buttonpng" border="0" value="flying"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/ground.png" alt="buttonpng" border="0" value="ground"/></button></li>
        <li> <button ><img src="../assets/img/imgLogosPokemon/normal.png" alt="buttonpng" border="0" value="normal"/></button></li>
        <li> <button ><img src="../assets/img/imgLogosPokemon/fighting.png" alt="buttonpng" border="0" value="fighting"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/psychic.png" alt="buttonpng" border="0" value="psychic"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/electric.png" alt="buttonpng" border="0" value="electric"/></button></li>
        <li><button ><img src="../assets/img/imgLogosPokemon/poison.png" alt="buttonpng" border="0" value="poison"/></button></li>
       

       
    </ul>
</template>

<style scoped>
    ul{
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    

li {
  float: left;
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
    width: 70px;
    height: 70px;
  }
  
  input[type='email'] {
    padding: 10px;
    border: 2px solid #314de4;
    outline: none;
    border-radius: 5px;
    font-size: 24px;
    color: #314de4;
  }
  
  .text {
    font-size: 60px;
    color: #314de4;
    
  }

</style>