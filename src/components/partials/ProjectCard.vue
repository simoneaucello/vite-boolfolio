<script>
  export default {
    props: {
      projectObj: Object
    }
    
  }
</script>
<template>

<div class="card mt-3 p-3" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ projectObj.title }}</h5>
    <p class="card-text">{{ projectObj.description }}</p>
    <div class="card-text">
          <span class="badge text-bg-warning">
            {{ projectObj.type.name }}
          </span>
        </div>
 <div class="card-text">

   <span
     v-for="technology in projectObj.technologies"
     :key="technology.id"
     class="badge text-bg-success me-2"
   >
     {{ technology.name }}
   </span>

 </div>
        <!-- <div>
          <a href="#" class="btn btn-dark text-white mt-3">Dettagli</a>
        </div> -->
    
  </div>
</div>



</template>


<style lang="scss" scoped>

.sa_card{
 

}
</style>