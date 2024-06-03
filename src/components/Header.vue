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
  <div class="text-center my-5">
    <h1>{{ store.mainTitle }}</h1>
  </div>
</template>



<style lang="scss" scoped>

</style>