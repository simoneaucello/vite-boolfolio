<script>
import axios from 'axios';
import { store } from '../../data/store'
import Loader from '../partials/Loader.vue';
  export default {
    name: 'Contacts',

    components:{
      Loader
    },

    data(){
      return{
        name: 'Simone',
        email: 'info@auce.com',
        message: 'Ciao!',
        sending: false,  
        sent: false,
        errors: {
            name: [],
            email: [],
            message: [],
          }
      }
    },

    methods: {
      sendEmail(){
        this.sending = true;
        const data = {
          name: this.name,
          email: this.email,
          message: this.message,
         
        }

        axios.post(store.apiUrl + 'send-email', data)
        .then(result => {
        this.sending = false;
        this.sent = result.data.success;
        if(!result.data.success){
          this.errors = result.data.errors
        }else{
          this.errors = {
            name: [],
            email: [],
            message: [],
          }
        }

          console.log(result.data);
        })
        .catch(error => {
        this.sending = false;

          console.log(error.message);
        })

        console.log(data);
      }
    }
    
  }
</script>

<template>

  <div v-if="!sending" class="container my-5 bg-dark rounded-3 p-5 text-white">

  
    
  
<form v-if="!sent" @submit.prevent="sendEmail">
  <div class="mb-3">
    <label for="name" class="form-label">Nome</label>
    <input v-model="name" name="name" type="text" class="form-control" id="name" aria-describedby="emailHelp">   
    <p class="error"> {{ errors.name?.toString() }} </p>
     <!-- ALTERNATIVA  -->
    <!-- <p class="error" v-for="error in errors.name"> {{ error}} </p> -->
     <!-- ALTERNATIVA  -->


  </div>

  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input v-model="email" name="email" type="text" class="form-control" id="email" aria-describedby="emailHelp">   
    <p class="error"> {{ errors.email?.toString() }} </p>
  </div>

  <div class="mb-3">
    <label for="message" class="form-label">Messaggio</label>
    <textarea v-model="message" name="message" type="text" class="form-control" id="message" aria-describedby="emailHelp"></textarea> 
    <p class="error"> {{ errors.message?.toString() }} </p>
  </div>
 
  
  <button type="submit" class="btn btn-danger">Invia</button>
</form>
<h3 v-else>Email inviata</h3>
</div>
<Loader v-else />
</template>


<style lang="scss" scoped>

</style>