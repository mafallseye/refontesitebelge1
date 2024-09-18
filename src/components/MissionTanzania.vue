<template>
    <div class="card text-center  bg-white">
  <div class="card-header  border-white bg-white">
    <NavbarAnglais />
  </div>

  <section class="bg-white dark:bg-gray-900  no-border">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Economic Mission to Tanzania</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Do you work in the agri-food, ICT, construction, energy or water sectors? hub.brussels and FIT are organising a trade mission for these sectors to Tanzania from 24 to 29 November 2024, with a stopover in Zanzibar. Join us to seize the opportunities offered by East Africa’s largest country.</p>
            <!-- <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> -->
            <!-- <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a>  -->
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="../imgtanzania/Mission-To-Tanzania.png" alt="mockup">
        </div>                
    </div>
</section>

  <div class="card-body bg-teal-300"> 

 
   <!-- ===================================================================dfdgfd============================== -->
<nav class="flex mb-4 " aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Events</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">mission to tanzania</span>
      </div>
    </li>
  </ol>
</nav>
<h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Mission to Tanzania - Belgian participants</h2>

  </div>

  <!-- ===========================ddddd====================== -->
   
  <div class="row p-6 row-cols-1 row-cols-md-3 g-4">
 
  <div class="col " v-for="entreprise in setSearchSector" :key="entreprise.nom">
    <div class="card  cadre bg-white border cadre border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
     <span v-if="entreprise.image != ''">
      <img class="mb-4 www" :src="require(`@/imgtanzania/${entreprise.image}.png`)" :alt="entreprise.image" />
    </span>
      <div class="card-body">
        <h5 class="card-title ">{{  entreprise.nom }}</h5>
        <p class="card-text text-left">{{ entreprise.profil }}</p>
      
        <div class="card-footer  bg-white">
      <small class="text-body-primary">
        <a :href="`${entreprise.site}`"
                class=" flex sm:w-auto bg-teal-400 hover:bg-gray-700 focus:ring-4   focus:outline-none focus:ring-gray-300 text-white rounded-full inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <!-- <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg> -->
                <div class="text-left ">
                  <!-- <div class="mb-1 text-xs">Download on the</div> -->
                  <div class="-mt-1 font-sans text-sm font-semibold flex ">
                    Consulter le site web
                    <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z">
                      </path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z">
                      </path>
                    </svg>
                  </div>
                </div>
              </a>
      </small>
    </div></div>
    </div>
  </div>
</div>
</div>
<MyFooterENg />
 


</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import NavbarAnglais from "./NavbarAnglais.vue";
import MyFooter from "./MyFooter.vue";
import MyFooterENg from "./MyFooterENg.vue";
export default {
  name: 'MissionTanzania',
  components: {
    HelloWorld,
    NavbarAnglais,
    MyFooter,
    MyFooterENg
},
  data() {
    return {
        searchQuery: "",
        searchSector: "",
        listentreprise: [
        {
          secteur: "Metal industry",
          nom: "A.P.T. INTERNATIONAL",
          profil:
            "Our job is buy, revision and selling of second hand metalworking machinery. We have more than 3000 machines in stock and selling all over the world. We are not only a trader but also a machine builder, we're doing retrofit of machinery and implementing new functions on existing machinery. We advise the customer wich machinery he needs to produce the product as fast and good as possible.We are a company in Belgium who exist already 35 years.",
          offer:"APT International is specialised in buying and selling used metalworking machinery. Our secondhand machines are used machines for the metal working industry. Discover our 30.000m² stock online. Hydraulic press brakes, lathe, milling machines, overhead cranes etc.",
            image: "apt-logo",
          site: "https://www.aptint.com",
        },
        {
          secteur: "Water related institutions",
          nom: "ASPAC Technics",
          profil:
            "Aspac Technics specializes in delivering cutting-edge water solutions for municipalities, industries, and communities across Africa, backed by competitive financing options. As an EPC (Engineering, Procurement, and Construction) contractor, we design, source, and build top-tier water systems. Aspac Technics also offers tailored financial solutions, including competitive ECA-covered export credits, to help clients invest confidently in their future. With successful projects in South Sudan, Kenya, Cameroon, Ghana, Cote d'Ivoire, The Gambia, and Sierra Leone, Aspac Technics is a proven leader in water engineering across the Continent.",
          offer:"At Aspac Technics, our teams of expert engineers and technicians design and build advanced, smart water systems tailored to meet the unique needs of municipalities, industries, and communities. Our capabilities include the construction of pumping stations, water and wastewater treatment plants, process systems for industries, pipelines, and efficient storage systems, ensuring reliable water management from source to end-user. We’ve also developed a specialized expertise in tackling Non-Revenue Water (NRW) issues for water utilities. Our innovative solutions address complex leakage and metering challenges, significantly boosting both technical and financial performance for utilities, ensuring efficient water usage and reduced losses.",
            image: "aspac",
          site: "https://aspac-engineering.com/",
        }
        ,
        {
          secteur: "Mining, BTP & Truck maintenance companies",
          nom: "ATECH",
          profil:
            "Atech NV is the official distributor of Allison and ZF in Belgium and specialized in maintenance and repair of automatic transmissions, rear-axles and gears. Other brands: VOITH, Clark, Chelsea, Dana, Granziano, Hydrocar and many more. ",
          offer:"We focus on knowledge and quick delivery and hold a large warehouse with spare parts to perform most repairs very fast and efficiently. For older types of transmissions we hold large numbers of second hand parts.",
            image: "atech",
          site: "https://www.atechnv.be",
        }
        ,
        {
          secteur: "Urban planners - BTP Companies",
          nom: "ATELIER ESPACE ARCHITECTURAL SOMERS ESMAIL & PARTNERS",
          profil:
            "Architect - Urbanist - Engineering  ",
          offer:"Building & construction services",
            image: "",
          site: "https://www.somersespace.wixsite.com",
        }
        ,
        {
          secteur: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          nom: "BOVIGEN - BOVECO",
          profil:
            "Since 1996 working as an independent Agricultural consultant with a specialization on Dairy production. Our passion for breeding a good cow which can withstand the conditions to be economical, profitable, trouble-free and survive in any climate are a day to day challenge. Livestock needs to be fed, housed, managed, monitored to fulfill the set targets without scarifying in labor, health, mortality, cow wellbeing, heatstress, pregnancy rates, etc…... It is all easier said than done but with our worldwide network we can help in the basic elements to be profitable. ",
          offer:"Semen, Embryos and livestock, Cow-Comfort, Greenfield Operations, Water Supply,Design of a modern Dairy (layout),Milk-Supply and Processing,Ventilation, Rations/Nutrition, Milking Equipment, Management support (repro, protocols,..),Milk Cooling, Training and education on-/off-site.",
            image: "kinrooi",
          site: "https://www.agropolis-kinrooi.be/en/",
        }
        ,
        {
          secteur: "Educational projects",
          nom: "Close the Gap",
          profil:
            "Close the Gap is an international social enterprise that aims to bridge the digital divide by providing high-quality, pre-owned IT devices donated by European companies to educational, medical and social projects in developing and emerging countries at affordable rates.  ",
          offer:"xxxxx",
            image: "close",
          site: "https://www.close-the-gap.org/",
        }
        ,
        {
          secteur: "xxxxxxxx",
          nom: "DoxBe",
          profil:
            "With over 30 years in the shipping and logistics industry, we deliver unparalleled service with efficiency and cost-effectiveness at the forefront.  ",
          offer:"xxxxx",
            image: "doxbe",
          site: "https://www.dox-be.com/home",
        }
        ,
        {
          secteur: "Port, Ministry of infrastructure, WB, AFDB, big projects",
          nom: "DREDGING INTERNATIONAL",
          profil:
            "Dredging International is an operating company of the DEME Group. DEME is a world leader in highly specialised dredging, hydraulic engineering and environmental remediation. The Group can build on more than 140 years of experience and has fostered a pioneering approach throughout its history, as a leader in innovation and new technologies. DEME’s activities encompasses dredging, land reclamation, hydraulic engineering services for the offshore oil & gas and renewable energy industries and environmental works.",
          offer:"Through DEME’s subsidiary DIMCO (DEME Infra Marine Contractors), the Group is also involved in marine infrastructure and civil works such as quay walls, jetties, immersed tunnels, piling, bored tunnels and locks. DEME’s vision is to work towards a sustainable future by offering solutions for global, worldwide challenges: rising sea levels, climate change, the transition towards renewable energy, polluted rivers and soils, a growing population and the scarcity of natural resources.",
            image: "deme",
          site: "https://www.deme-group.com",
        }
        ,
        {
          secteur: "Ministry of health",
          nom: "Ecosteryl",
          profil:
            "We imagine, develop, manufacture and provide innovative environmental solutions for the treatment of medical waste.",
          offer:"xxxxx.",
            image: "ecosteril",
          site: "https://www.ecosteryl.com/en/",
        }
        ,
        {
          secteur: "xxxxxxxxx",
          nom: "EMEXON INTERNATIONAL",
          profil:
            "Emexon International is a Belgian GMP+ certified manufacturing company. We are proud to be among the global leaders in the medicated feed additives business. As such, we have dedicated our expertise to the continued availability of these important products for the prevention and treatment of disease in food-producing animals.",
          offer:"Our knowledge and resources ensure that we uphold the highest standards of quality, safety, efficacy and trace-ability. In addition, we offer our customers excellent sales and technical support.",
            image: "emexon",
          site: "https://www.emexon-inter.com/",
        }
    ]
    }
},
computed:{
    filteredUser() {
      const query = this.searchQuery.toLowerCase();
      if (this.searchQuery === "") {
        return this.secteur;
      }
      return this.secteur.filter((user) => {
        return user.toLowerCase().includes(query);
      });
    },
    setSearchSector() {
      return this.listentreprise
        .filter((sector) => !sector.secteur.indexOf(this.searchSector))
        .sort((a, b) => {
          if (a.nom < b.nom) {
            return -1;
          } else {
            return 1;
          }
        });
    }
},

methods:{
    setSearchQuery(data) {
      this.searchQuery = data;
    },
    
}

}

</script>
<style scoped>
.bdc {
  margin-top: 10%;
}

.cadre {
 
  border-radius: 0px 20px 0 20px;
  animation: appear 0.5s ease-in-out forwards;
}

.carde input[type="radio"] {
  /* Hide radio buttonns */
  opacity: 0;

  -webkit-appearance: none;
  appearance: none;
  position: absolute;

  margin: 10px;
  cursor: pointer;
}

a {
  text-decoration: none;
}
.www{
  height: 100px;
  width: 150px;
}

/* label.checked {
  background-color: gray;
  color: black;
} */</style>
