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
  
      <MissionGuineekonary/>
    </div>
    
    </div>
  </template>
  <script >
//   import Image from '@/components/Image.vue';
  import MissionGuineekonary from '@/components/MissionGuineekonary.vue';
//   import GAMmissionBE from '@/components/GAMmissionBE.vue';
  // import HelloWorld from "@/components/HelloWorld.vue";
  export default {
    name: 'about',
    components: {
      Image,
    //   GAMmissionBE,
      // HelloWorld,
      MissionGuineekonary,
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
  