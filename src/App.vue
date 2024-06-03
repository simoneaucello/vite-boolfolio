<script>
import axios from 'axios';
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
  export default {
    components:{
      Header,
      Main,    
      Footer
    },

    data(){
      return{
        store
      }
    }, 

  }

</script>

<template>
  <div>

  <Header />
  <Main />
  <Footer />

  </div>
</template>


<style lang="scss">
@use './assets/scss/main.scss';

</style>