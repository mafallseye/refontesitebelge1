<template>

    
    
    <section class="bg-white dark:bg-white">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class=" max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 id=""
                    class="mb-2  px-4 card-title flex cursive uppercase font-medium  tracking-tight text-gray-900 dark:text-white">
                   Projets

                </h2>

                <div class=" px-6 bg-white rounded-full h-2.5 dark:bg-white">
  <div class="bg-red-600 h-1.5 " style="width: 15%"></div>
</div>


            </div>
            <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
     
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Amélioration de la fertilité des sols en Afrique de l’Ouest</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">La sécurité alimentaire est vitale pour l’Afrique subsaharienne dans un contexte de population en expansion et en urbanisation rapide.</p>
     
        <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span class="font-semibold text-gray-400 uppercase">Le segment agricole subsaharien fait face à des défis majeurs suite aux :</span>
            <div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
               
                <a href="#" class="no-underline text-gray-800 mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                   1. Changements climatiques                    
                </a>
                <a href="#" class="no-underline mr-5 mb-5 lg:mb-0 text-gray-800 hover:text-gray-800 dark:hover:text-gray-400">
                   2. L’acidification des sols (pluies acides)                      
                </a>
                <a href="#" class=" no-underline text-gray-800 mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                   3. La monoculture et le manque de diversité                                                  
                </a>         
            </div>
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" @click=" ShowProjet()"  class="bg-teal-300 no-underline  inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
        <span class="text-sm  font-medium uppercase ">En savoir plus</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a> 
        </div>
        </div> 
    </div>
</section>

  </div>
</section>
    
</template> 

<script >
export default {
  name: 'MissionTanzania',
  components:{

  },
  data(){
    return{}

  },
methods:{
    ShowProjet(){
    this.$router.push("/projet")
  }, 
}}

</script>
<style scoped>
.anim{
    animation: mymove 5s infinite;
  animation-delay: 2s
}
@keyframes mymove {
  from {left: 0px;}
  to {left: 200px;}
}
</style>
