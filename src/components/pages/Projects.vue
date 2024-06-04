<script>
import axios from 'axios';
import { store } from '../../data/store';
import ProjectCard from '../partials/ProjectCard.vue';
import Paginator from '../partials/Paginator.vue'
import Loader from '../partials/Loader.vue'
export default {
 name: 'Projects',
 components:{
  ProjectCard,
  Paginator,
  Loader
 },


 data(){
   return{
    store,
    projects:[],
    types:[],
    technologies: [],
    paginatorData: {},
    loading: true
 
   }
 },

 methods:{
      callApi(apiUrl){
        console.log(apiUrl);
      },
      
      getApi(apiUrl, variant = ''){
        this.loading = true;
        axios.get(apiUrl + variant)
        .then(result => {
          
          this.loading = false;

          switch (variant) {
            case 'types':
            this.types = result.data              
              break;
            case 'technologies':
            this.technologies = result.data              
            
              break;
            default:
            this.projects = result.data.data
            this.paginatorData.first_page_url = result.data.first_page_url;
            this.paginatorData.links = result.data.links;
            this.paginatorData.total = result.data.total;
              break;
          }
          console.log(this.technologies);

        })
        .catch( error => {
          this.loading = false;
          console.log(error.message);
        })
      }

    },

 mounted(){
  
  this.getApi(store.apiUrl, 'projects');
  this.getApi(store.apiUrl, 'types');
  this.getApi(store.apiUrl, 'technologies');
 }
}

</script>

<template>
  <div class="container my-5">
    <h1>I miei progetti</h1>

    <div class="d-flex" v-if="!loading">
      <ProjectCard 
    v-for="project in projects"
    :key="project.id"
    :projectObj="project"
    />



    </div>
    <Loader v-else />
    <div>
    
    <div class="box mt-5">
      <h4>Tecnologie:</h4>
      <div class="inner">
  
        <span v-for="technology in technologies" :key="`c-${technology.id}`" class="badge bg-success text-white m-2"> {{ technology.name }} </span>
    </div>
    
  </div>

    <div class="box mt-5">
      <h4>Tipologie:</h4>
      <div class="inner">
  
        <span v-for="typee in types" :key="`c-${typee.id}`" class="badge bg-warning text-dark m-2"> {{ typee.name }} </span>
    </div>
    
  </div>


  <Paginator  :data="paginatorData" @callApi="getApi" />
  </div>
  </div>
</template>


<style lang="scss" scoped>


</style>