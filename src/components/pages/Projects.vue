<script>
import axios from 'axios';
import { store } from '../../data/store';
import ProjectCard from '../partials/ProjectCard.vue';
export default {
 name: 'Projects',
 components:{
  ProjectCard
 },


 data(){
   return{
    store,
    projects:[]
 
   }
 },

 methods:{
  getApi(){
    axios.get(store.apiUrl)
    .then(result => {
      this.projects = result.data.data
      console.log(this.projects);
    })
    .catch(error => {
      console.log(error.message);
    })
  }
 },

 mounted(){
  this.getApi();
 }
}

</script>

<template>
  <div class="container my-5">
    <h1>I miei progetti</h1>

    <div class="d-flex">
      <ProjectCard 
    v-for="project in projects"
    :key="project.id"
    :projectObj="project"
    />

    </div>
   


  </div>
</template>


<style lang="scss" scoped>

</style>