<script>
import axios from 'axios';
import { store } from '../../data/store'
import ProjectCard from '../partials/ProjectCard.vue';
import Paginator from '../partials/Paginator.vue'
import Loader from '../partials/Loader.vue'
  export default {
    name: 'TypeProjects',

    components:{
    ProjectCard,
    Paginator,
    Loader
 },

    data(){
      return{
        store,
        typeName: '',
        projects: [],
        loading: true

      }
    },


    methods:{
      getApi(slug){
        axios.get(store.apiUrl + 'projects-by-type/' + slug)
        .then(result => {
          console.log(result.data);
          this.typeName = result.data.name;
          this.projects = result.data.projects;
        })
        .catch(error => {
          console.log(error.message);
        })

      }

    },

    mounted(){
      this.getApi(this.$route.params.slug)
    }
    
  }
</script>

<template>
  <div>
    <h1>Elenco per la tipologia {{ typeName }}</h1>
    <div class="d-flex" v-if="!loading">
      <ProjectCard 
    v-for="project in projects"
    :key="project.id"
    :projectObj="project"
    />



    </div>
    <Loader v-else />
  </div>
</template>


<style lang="scss" scoped>

</style>