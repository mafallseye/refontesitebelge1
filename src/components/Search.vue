<template>
    

    <form class="mx-auto px-4 mb-8">   
    <!-- <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> -->
    <div class="relative ">
        
        <input type="text" id="floating_filled" v-model="searchQuery" class="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-700 border-t-0  border-r-0  border-l-0 border-b-1 border-gray-900 dark:text-white dark:border-gray-900 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" Recherche plus rapide" autocomplete="off" />
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </button>
    </div>
</form>

</template>
<script>
import Mybody from './Mybody.vue';
export default{
    components: {
        Mybody
    },
  data(){
    
return{
  listBody:[

    "Mission to tanzania 2024",
    "Informations utiles pour  les entreprises belges",
    "Découvrir le  film Brussels en Wolof",
    "Mission Economique Belge-interview",
    "Foires et « Salons au Sénégal »",
    " Forum Africain des Industries Culturelles et créatives",
    "Finexpo-Brochure FR",
    "Enabel",
    "Festival international du film de Bruxelles à Dakar",
    "Ambassade de Belgique au sénégal ",
    "Entreprises du senegal",
    "Belgian Trade Explorer",
    "Amélioration de la fertilité des sols en Afrique de l’Ouest",
    "Dépolluez vos moteurs et récupérez vos rendements avec un expert Belge au Sénégal - H2CCM",
    "Mission Senegal 2023",
    
    
  ],
  searchQuery: "",
     
     
      filter: '',
}
  },
  computed:{
    filteredUser() {
      const query = this.searchQuery.toLowerCase();
      if (this.searchQuery === "") {
        return this.listBody;
      }
      return this.listBody.filter((list) => {
        return list.toLowerCase().includes(query);
      });
    }
  },
  methods:{
  SowMission(){
    this.$router.push("/mission-economigque-belge-au-senegal")
  },
  ShowListEntrepriseSenegal(){
    this.$router.push("/entreprise-au-senegal")
  },
  ShowInfo(){
    this.$router.push("/information")
  },
  ShowRevue(){
    this.$router.push("/revue-presse") 
  },
  SowMissionTanzania(){
    this.$router.push("/mission-to-tanzania")
  },
  ShowProjet() {
      this.$router.push("/projet")
    },
}
}
</script>