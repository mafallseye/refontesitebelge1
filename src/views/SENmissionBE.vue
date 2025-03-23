<template>
    <div class="about">
     
  <div class="d-flex justify-content-center spin" v-if="isLoading">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
      <!-- <HelloWorld /> -->
    <!-- <Image />  -->
    <div v-else>
  
      <BEmissionSEN1/>
    </div>
    
    </div>
  </template>
  <script >
  import Image from '@/components/Image.vue';
  import BEmissionSEN1 from '@/components/BEmissionSEN1.vue';
  // import HelloWorld from "@/components/HelloWorld.vue";
  export default {
    name: 'about',
    components: {
      Image,
      BEmissionSEN1,
      // HelloWorld
  },
  data(){
    return{
      isLoading:true
    }
  },
  mounted () {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
  
  </script>
  <style scoped>
  .spin{
  
  padding-top: 25%;
  
  
   
  }
  </style>
  