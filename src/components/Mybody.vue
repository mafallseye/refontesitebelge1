<template>
   <form class="mx-auto px-4 mb-8">   

    <div class="relative ">
        
        <input type="text" id="floating_filled" v-model="searchQuery" class="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-700 border-t-0  border-r-0  border-l-0 border-b-1 border-gray-900 dark:text-white dark:border-gray-900 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" Recherche plus rapide" autocomplete="off" />
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </button>
    </div>
</form>
  <div class="row row-cols-1 row-cols-md-4 g-4 mx-auto p-10 bg-base-100">
  <div class="col  " v-for="list in filteredUser.slice(14,15)" :key="list">
    <a @click=" SowMission()" style="text-decoration: none;">
    <div class="card h-100 card2   ">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body cursor-pointer">
        <!-- <h5 class="card-title text-center"></h5> -->
        <span class="text-md font-medium text-gray-900 dark:text-white">{{ list }} </span>
        <!-- <p class="card-text  text-center">Entreprises belges intéressées par l'Afrique de  l'Ouest</p> -->

      </div>
      <button type="button" class="text-white  text-sm p-3.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
</button>
    </div>
    </a>
  </div>
  <div class="col  " v-for="list in filteredUser.slice(0,1)" :key="list">
    <a @click=" SowMissionTanzania()" style="text-decoration: none;">
    <div class="card h-100 card1   ">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body cursor-pointer">
        <!-- <h5 class="card-title text-center"></h5> -->
        <span class="text-md font-medium text-gray-900 dark:text-white">{{ list }} </span>
        <!-- <p class="card-text  text-center">Entreprises belges intéressées par l'Afrique de  l'Ouest</p> -->

      </div>
      <button type="button" class="text-white  text-sm p-3.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
</button>
    </div>
    </a>
  </div>
  <div class="col"  v-for="list in filteredUser.slice(1,2)" :key="list">
    <a @click="ShowInfo()" style="text-decoration: none;">
      <div class="card h-100 card2 ">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body cursor-pointer ">
        <span class="text-md font-medium text-gray-900 dark:text-white">{{ list }} </span>
        <!-- <p class="card-text text-center ">Informations utiles pour  les entreprises belges.</p> -->
  
      </div>
      <button type="button" class="text-white  text-sm p-3.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
</button>
    </div>
    </a>
    
  </div>
  <div class="col"  v-for="list in filteredUser.slice(2,3)" :key="list">
    <a href="/film-bruxel-en-wolof.mp4"
             style="text-decoration: none;">
    <div class="card h-100 card3">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <span class="text-md font-medium text-gray-900 dark:text-white">{{ list }} </span>
        <!-- <p class="card-text text-center "> le  film Brussels est traduit en Wolof</p> -->
   
      </div>
      <button type="button" class="text-white  text-sm p-3.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
</button>
    </div>
    </a>
  </div>
  <div class="col"  v-for="list in filteredUser.slice(3,4)" :key="list">
    <a href="https://credorse.com/news/mission-economique-belge-au-senegal"  rel="noopener noreferrer" style="text-decoration: none;">

      <div class="card h-100 card4">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <span class="text-md font-medium text-gray-900 dark:text-white">{{ list }} </span>
          <!-- <p class="card-text text-center">
            Une  interview pour la mission économique belge au Sénégal du 21 au 25 mai 2023
          </p> -->
  
        </div>
        <button type="button" class="text-white  text-sm p-3.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
</button>
      </div>
    </a>
  </div>
  <div class="col"  v-for="list in filteredUser.slice(4,5)" :key="list">
    <a href="/Foires et Salons au Sénégal.xlsx" style="text-decoration: none;">

      <div class="card h-100 card5">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <span class="text-md font-medium text-gray-900 dark:text-white">{{ list }} </span>
          <!-- <p class="card-text text-center">Agence Belge du Commerce extérieur</p> -->

          
          
        </div>
        <button type="button" class="text-white  text-sm p-3.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
</button>
      </div>
    </a>
  </div>
  <div class="col"  v-for="list in filteredUser.slice(5,6)" :key="list">
    <a href="https://live.eventtia.com/fr/inscription_forafricc" style="text-decoration: none;">
    <div class="card h-100 card6">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <span class="text-md font-medium text-gray-900 dark:text-white">{{ list }} </span>
        <!-- <p class="card-text text-center">Forum Africain des Industries Culturelles et créatives</p> -->
   
      </div>
      <button type="button" class="text-white  text-sm p-3.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
</button>
    </div>
    </a>
  </div>
  <div class="col"  v-for="list in filteredUser.slice(6,7)" :key="list">
    <a href="/Finexpo-Brochure-FR-2023-Aide%20non%20liée-2023.pdf" style="text-decoration: none;">
    <div class="card h-100 card7">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <span class="text-md font-medium text-gray-900 dark:text-white">{{ list }} </span>
        <!-- <p class="card-text text-center">Finexpo a pour
objectif de soutenir l’exportation de
biens d’équipement belges et de
services afférents.</p> -->

      </div>
      <button type="button" class="text-white  text-sm p-3.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
</button>
    </div>
    </a>
  </div>
  <div class="col"  v-for="list in filteredUser.slice(7,8)" :key="list">
    <a href="https://www.enabel.be/fr/country/senegal/" style="text-decoration: none;">

      <div class="card h-100 card8">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <span class="text-md font-medium text-gray-900 dark:text-white">{{ list }} </span>
          <!-- <p class="card-text text-center">Enabel est l’agence de développement du gouvernement fédéral belge</p> -->
   
        </div>
        <button type="button" class="text-white  text-sm p-3.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
</button>
      </div>
    </a>
  </div>
  <div class="col"  v-for="list in filteredUser.slice(8,9)" :key="list">
    <a href="https://www.fifb.be/" style="text-decoration: none;">

      <div class="card h-100 card6">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body ">
          <span class="text-md font-medium text-gray-900 dark:text-white">{{ list }} </span>
          <!-- <p class="card-text text-center">FIFB - Du 14 au 18 Novembre 2023 </p> -->
   
        </div>
        <button type="button" class="text-white  text-sm p-3.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
</button>
      </div>
    </a>
  </div>
  <div class="col"  v-for="list in filteredUser.slice(9,10)" :key="list">
    <a href="https://senegal.diplomatie.belgium.be/fr" style="text-decoration: none;">

        <div class="card h-100 card10">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body ">
            <span class="text-md font-medium text-gray-900 dark:text-white">{{ list }} </span>
            <!-- <p class="card-text text-center">Toutes les informations pratiques sur notre Ambassade à Dakar.</p> -->
    
          </div>
          <button type="button" class="text-white  text-sm p-3.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
</button>
        </div>
    </a>
  </div>
  <div class="col"  v-for="list in filteredUser.slice(10,11)" :key="list">
    <a @click="ShowListEntrepriseSenegal()" style="text-decoration: none;">
      <div class="card h-100 card2 ">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body cursor-pointer ">
        <span class="text-md font-medium text-gray-900 dark:text-white">{{ list }} </span>
        <!-- <p class="card-text text-center ">Informations utiles pour  les entreprises belges.</p> -->
  
      </div>
      <button type="button" class="text-white  text-sm p-3.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
</button>
    </div>
    </a>
    
  </div>
  <div class="col"  v-for="list in filteredUser.slice(11,12)" :key="list">
    <a href="http://www.tradexplorer.be/" style="text-decoration: none;">
      <div class="card h-100 card3 ">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body cursor-pointer ">
        <span class="text-md font-medium text-gray-900 dark:text-white">{{ list }} </span>
        <!-- <p class="card-text text-center ">Informations utiles pour  les entreprises belges.</p> -->
  
      </div>
      <button type="button" class="text-white  text-sm p-3.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
</button>
    </div>
    </a>
    
  </div>
  <div class="col"  v-for="list in filteredUser.slice(12,13)" :key="list">
    <a @click="ShowProjet()" style="text-decoration: none;">
      <div class="card h-100 card3 ">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body cursor-pointer ">
        <span class="text-md font-medium text-gray-900 dark:text-white">{{ list }} </span>
        <!-- <p class="card-text text-center ">Informations utiles pour  les entreprises belges.</p> -->
  
      </div>
      <button type="button" class="text-white  text-sm p-3.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
</button>
    </div>
    </a>
    
  </div>
  <div class="col"  v-for="list in filteredUser.slice(13,14)" :key="list">
    <a href="H2CCM.pdf"  title="Pdf" style="text-decoration: none;">
      <div class="card h-100 card2 ">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body cursor-pointer ">
        <span class="text-md font-medium text-gray-900 dark:text-white">{{ list }} </span>
        <!-- <p class="card-text text-center ">Informations utiles pour  les entreprises belges.</p> -->
  
      </div>
      <button type="button" class="text-white  text-sm p-3.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
</button>
    </div>
    </a>
    
  </div>
</div>
<!-- -------------------------------modal---------------------------------------------- -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Informations pour  les entreprises belges</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row row-cols-1 row-cols-md-5 g-4 mx-auto p-10">
  <div class="col">
    <div class="card h-100">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <!-- <h5 class="card-title">Card title</h5> -->
        <p class="card-text  text-center">Ouvrir une entreprise au Sénégal</p>
      </div>
    </div>
  </div>
  <div class="col">
    
    <div class="card h-100  "  data-bs-toggle="modal" data-bs-target="#exampleModal">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body ">
        <!-- <h5 class="card-title">Card title</h5> -->
        <p class="card-text text-center">Secteurs porteurs au Sénégal</p>
      </div>
    </div>
  </div>
 
  <div class="col">
    <a href="https://lfgab.com/" style="text-decoration: none;">
    <div class="card h-100 ">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body sen1">
        <!-- <h5 class="card-title">Card title</h5> -->
        <p class="card-text text-center hid1">Green building in africa</p>
      </div>
    </div>
    </a>
  </div>
  <div class="col ">
    <a href="https://www.senegal-emergent.com/" style="text-decoration: none;">
    <div class="card h-100 ">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body sen">
        <!-- <h5 class="card-title">Card title</h5> -->
        <p class="card-text text-center hid ">Plan Sénégal émergent</p>
      </div>
    </div>
    </a>
  </div>
  <div class="col">
    <a href="https://www.sec.gouv.sn/" style="text-decoration: none;">
    <div class="card h-100">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body sen2">
        <!-- <h5 class="card-title">Card title</h5> -->
        <p class="card-text text-center hid2">Gouvernement du Sénégal</p>
      </div>
    </div>
    </a>
  </div>
  <div class="col">
    <a href="/Finexpo-Brochure-FR-2023-Aide%20non%20liée-2023.pdf" style="text-decoration: none;">
    <div class="card h-100">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <!-- <h5 class="card-title">Card title</h5> -->
        <p class="card-text text-center">Finexpo-Brochure FR </p>
      </div>
    </div>
    </a>
  </div>
  <div class="col">
    <a href="https://entreprendre.sn/senegal/" style="text-decoration: none;">
    <div class="card h-100">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <!-- <h5 class="card-title">Card title</h5> -->
        <p class="card-text text-center">L'entreprenariat au Sénégal</p>
      </div>
    </div>
    </a>
  </div>
  <div class="col">
    <a href="https://www.businessfrance.fr/guide-des-affaires-senegal-2022" style="text-decoration: none;">
    <div class="card h-100">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <!-- <h5 class="card-title">Card title</h5> -->
        <p class="card-text text-center">Guide des affaires au Sénégal par Business France</p>
      </div>
    </div>
    </a>
  </div>
  <div class="col">
    <a href="https://senegal.diplomatie.belgium.be/fr" style="text-decoration: none;">

        <div class="card h-100">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body">
            <!-- <h5 class="card-title">Card title</h5> -->
            <p class="card-text text-center">Ambassade de Belgique au sénégal</p>
          </div>
        </div>
    </a>
  </div>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default{
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
<style scoped>
.card{
  border-radius: 0px 20px 0 20px;
  animation: appear 0.5s ease-in-out forwards;

}
.card1{
 background-image: url("../assets/fond1.png");
 background-size: cover;

}
.card2{
 background-image: url("../assets/fond2.png");
 background-size: cover;

}
.card3{
 background-image: url("../assets/fond3.png");
 background-size: cover;

}
.card4{
 background-image: url("../assets/fond4.png");
 background-size: cover;

}
.card5{
 background-image: url("../assets/fond3.png");
 background-size: cover;

}
.card6{
 background-image: url("../assets/fond6.png");
 background-size: cover;

}
.card7{
 background-image: url("../assets/fond1.png");
 background-size: cover;

}
.card8{
 background-image: url("../assets/fond8.png");
 background-size: cover;

}
.card9{
 background-image: url("../assets/Fond9.png");
 background-size: cover;

}
.card10{
 background-image: url("../assets/fond1.png");
 background-size: cover;

}


</style>