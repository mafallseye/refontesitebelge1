<template>
    <div class="d-flex justify-content-center spin" v-if="isLoading">
   <div class="spinner-border" role="status">
     <span class="visually-hidden">Loading...</span>
   </div>
 </div>
 <div v-else>
 <HelloWorld />
<Projetbody />
<MyFooter />
 </div>
 </template>
 <script>
 import Projetbody from '@/components/Projetbody.vue';
 import HelloWorld from '@/components/HelloWorld.vue';
 import MyFooter from '@/components/MyFooter.vue';
 
 export default{
     components:{ 
      Projetbody,
      HelloWorld,
      MyFooter

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