<script>
import axios from 'axios';
import { store } from '../../data/store'
import Loader from '../partials/Loader.vue';

  export default {
    name: 'ProjectDetails',

    components:{
      Loader
    },

    data(){
      return{
        project: {},
        loading: true
      }
    },

    methods:{
      getApi(){
        
        const slug = this.$route.params.slug
        axios.get(store.apiUrl + 'project-by-slug/' + slug)
        .then(result => {
          this.loading = false;
          console.log(result.data);
          this.project = result.data.project;
        })
        .catch(error => {
          this.loading = false;
          console.log(error.message);
        })
      }
    },

    computed:{
      type(){
        if(!this.project.type){
          return 'nessuna tipologia'
        }else{
          return this.project.type.name;
        }
      },
      technologies(){
        if(!this.project.technologies.length === 0){
          return 'nessuna tecnologia';
        }
        
        return this.project.technologies.map(technology => technology.name).join(' - ');
      },

      formattedDate(){
        const d = new Date(this.project.updated_at);

        let options = {
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric', 
        }

        console.log(new Intl.DateTimeFormat(navigator.language).format(d));

        console.log(navigator.language);


       // return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
       return new Intl.DateTimeFormat(navigator.language, options).format(d);
      }
  },

    mounted(){
     this.getApi();
    }
  }
    
  
</script>

<template>
  <div class="container my-5">
    <div v-if="!loading" class="project">
    <h1>  {{ project.title }} </h1>

    <img :src="project.image">
    <p class="caption"> {{ project.image_original_name }} </p>
     <p>Tipologia: <br> <span  class="badge text-bg-success me-2"> {{ type }}</span></p>
    <p>Tecnologie: <br> <span  class="badge text-bg-warning me-2"> {{ technologies }}</span></p>
    <p class="d-block">{{ formattedDate }}</p>
    
    

    <h5>Descrizione:</h5>
    <p>{{ project.description }}</p>
  </div>
  <Loader v-else />
  </div>
</template>


<style lang="scss" scoped>

.project{
  img{
    max-width:100%;
  }
  .caption{
    font-size: .8rem;
  }
}

</style>