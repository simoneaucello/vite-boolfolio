<script>
  export default {
    name: 'Paginator',
    props:{
      data: Object
    },

    methods:{
      callApi(link){
        console.log(link);
        this.$emit('callApi', link)
      }
    }
    
  }
</script>
<template>
  <div>

    <div class="paginator">
      <button
        v-for="link in data?.links"
        :key="link.label"
        v-html="link.label"
        :disabled="link.active || (!link.url && link.label != '...')"
        @click="callApi(link.url)"
        > </button>
   
    </div>

  </div>
</template>




<style lang="scss" scoped>

.paginator{
  display: flex;
  justify-content: center;
  padding: 20px 0;
  button{
    padding:3px 5px;
    margin: 0 5px;
  }
}

</style>