<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store
      }
    }
    
  }
</script>


<template>
  <header>
    <nav>
      <ul>
        <li><router-link :to="{name: 'home'}">Home</router-link></li>
        <li><router-link :to="{name: 'projects'}">Progetti</router-link></li>
        <li><router-link :to="{name: 'contacts'}">Contatti</router-link></li>
      
      </ul>
    </nav>
  </header>
 
</template>



<style lang="scss" scoped>

header{
  background-color: #3d3d3d;
  padding: 20px;
  
  ul{
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   li{
     list-style: none;
     a{
       color: rgb(245, 245, 245);
       text-decoration: none;
       padding: 0 20px;
       text-transform: uppercase;
       &:hover{
         text-decoration: underline;;
     }
     &.active{
       color:rgb(255, 78, 8);
 
     }
   }
  }
 }
 }

</style>