<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
    
    <!-- 1. EN-TÊTE NAVBAR -->
    <header class="bg-white dark:bg-slate-900 shadow-sm">
      <NavbarAnglais />
    </header>

    <!-- 2. SECTION HÉROS PRINCIPALE -->
    <section class="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div class="grid max-w-screen-xl px-6 py-12 mx-auto lg:gap-12 lg:py-20 lg:grid-cols-12 items-center">
        
        <!-- Contenu textuel -->
        <div class="mr-auto place-self-center lg:col-span-7 space-y-6 text-left">
          <h1 class="max-w-2xl text-3xl font-extrabold tracking-tight leading-tight md:text-5xl dark:text-white text-slate-900">
            Economic Mission to Tanzania
          </h1>
          <p class="max-w-xl text-slate-500 md:text-lg dark:text-slate-400 font-light leading-relaxed text-justify">
            Do you work in the agri-food, ICT, construction, energy or water sectors? hub.brussels and FIT are organising a trade
            mission for these sectors to Tanzania from 24 to 29 November 2024, with a stopover in Zanzibar. Join us to
            seize the opportunities offered by East Africa’s largest country.
          </p>
        </div>
        
        <!-- Image illustrative -->
        <div class="mt-8 lg:mt-0 lg:col-span-5 flex justify-center">
          <img src="../imgtanzania/Mission-To-Tanzania.png" alt="Mission Tanzania Banner" class="h-auto max-w-full rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800" />
        </div>

      </div>
    </section>

    <!-- 3. ZONE BANDEAU TITRE & FIL D'ARIANE -->
    <div class="bg-gradient-to-r from-indigo-900 to-slate-900 text-white py-8 px-6 shadow-md">
      <div class="max-w-screen-xl mx-auto space-y-4">
        
        <!-- Fil d'Ariane (Breadcrumb) -->
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 text-xs md:text-sm">
            <li class="inline-flex items-center">
              <a href="/" class="inline-flex items-center font-medium text-slate-300 hover:text-amber-400 transition-colors gap-1.5">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div class="flex items-center gap-1">
                <svg class="w-3 h-3 text-slate-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <a href="#" class="ms-1 font-medium text-slate-300 hover:text-amber-400 transition-colors">Events</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center gap-1">
                <svg class="w-3 h-3 text-slate-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="ms-1 font-medium text-amber-400 uppercase tracking-wider text-xs">Mission to Tanzania</span>
              </div>
            </li>
          </ol>
        </nav>

        <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight">
          Mission to Tanzania — Belgian Participants
        </h2>
      </div>
    </div>

    <!-- 4. FILTRES DE SECTEURS ET RECHERCHE -->
    <main class="max-w-screen-xl mx-auto px-6 py-12">
      
      <!-- Barre d'outils (Filtres + Recherche) -->
      <div class="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-10 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
        
        <!-- Boutons de Secteurs Dynamiques -->
        <div class="flex flex-wrap gap-2 items-center">
          <button 
            @click="searchSector = ''"
            :class="[
              'px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-200 shadow-sm',
              searchSector === '' 
                ? 'bg-indigo-600 text-white border-indigo-600 scale-105' 
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600'
            ]"
          >
            All sectors
          </button>

          <button 
            v-for="sect in secteur" 
            :key="sect.nom"
            @click="searchSector = sect.nom"
            :class="[
              'px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-200 shadow-sm',
              searchSector === sect.nom 
                ? 'bg-indigo-600 text-white border-indigo-600 scale-105' 
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600'
            ]"
          >
            {{ sect.nom }}
          </button>
        </div>

       
      </div>

      <!-- Indicateur de secteur sélectionné actif -->
      <div v-if="searchSector !== ''" class="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <span>Active Sector:</span>
        <span class="font-bold text-indigo-600 dark:text-indigo-400 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg">
          {{ searchSector }}
        </span>
      </div>

      <!-- 5. GRILLE DES CARTES D'ENTREPRISES (TANZANIE) -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="entreprise in setSearchSector" 
          :key="entreprise.nom"
          class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <!-- Zone Logo en haut à droite si présent -->
            <div class="flex items-start justify-between gap-4 mb-4">
              <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 dark:bg-slate-900 dark:text-slate-400 border border-slate-100 dark:border-slate-700/50">
                Participant
              </span>
              
              <div v-if="entreprise.image && entreprise.image !== ''" class="w-12 h-12 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 bg-white flex-shrink-0 flex items-center justify-center p-1 shadow-inner">
                <img :src="require(`@/imgtanzania/${entreprise.image}.png`)" :alt="entreprise.image" class="max-w-full max-h-full object-contain" />
              </div>
            </div>

            <!-- Titre et descriptif (Hauteur uniforme avec line-clamp-4) -->
            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {{ entreprise.nom }}
            </h4>
            <p class="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed line-clamp-4 mb-6">
              {{ entreprise.profil || 'No description profile available.' }}
            </p>
          </div>
          
          <!-- Pied de carte : Bouton de site web stylisé -->
          <div class="pt-4 border-t border-slate-50 dark:border-slate-700/50">
            <a 
              :href="entreprise.site" 
              target="_blank"
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-all active:scale-95"
            >
              <span>Visit the website</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Sécurité tableau vide -->
      <div v-if="setSearchSector.length === 0" class="text-center text-slate-400 py-16 font-light">
        No companies found matching your criteria.
      </div>

    </main>

    <!-- 6. COMPOSANTS EN BAS DE PAGE -->
    <Organization />
    <MyFooter />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import NavbarAnglais from "./NavbarAnglais.vue";
import MyFooter from "./MyFooter.vue";
import MyFooterENg from "./MyFooterENg.vue";
import Organisateur from "./Organisateur.vue";
import Organization from "./Organization.vue";
export default {
  name: 'MissionTanzania',
  components: {
    HelloWorld,
    NavbarAnglais,
    MyFooter,
    MyFooterENg,
    Organisateur,
    Organization
  },
  data() {
    return {
      searchQuery: "",
      searchSector: "",
      secteur: [
        {
          nom: "The following companies are interested in mission contacts Tanzania"
        },
        {
          nom: "The following companies will come later and are interested in contacts in Tanzania"
        }


      ],
      listentreprise: [
        {

          secteur: "The following companies will come later and are interested in contacts in Tanzania",
          nom: "A.P.T. INTERNATIONAL",
          profil:
            "Our job is buy, revision and selling of second hand metalworking machinery. We have more than 3000 machines in stock and selling all over the world. We are not only a trader but also a machine builder, we're doing retrofit of machinery and implementing new functions on existing machinery. We advise the customer wich machinery he needs to produce the product as fast and good as possible.We are a company in Belgium who exist already 35 years.",
          offer: "APT International is specialised in buying and selling used metalworking machinery. Our secondhand machines are used machines for the metal working industry. Discover our 30.000m² stock online. Hydraulic press brakes, lathe, milling machines, overhead cranes etc.",
          image: "apt-logo",
          site: "https://www.aptint.com",
        },
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "ASPAC Technics",
          profil:
            "Aspac Technics specializes in delivering cutting-edge water solutions for municipalities, industries, and communities across Africa, backed by competitive financing options. As an EPC (Engineering, Procurement, and Construction) contractor, we design, source, and build top-tier water systems. Aspac Technics also offers tailored financial solutions, including competitive ECA-covered export credits, to help clients invest confidently in their future. With successful projects in South Sudan, Kenya, Cameroon, Ghana, Cote d'Ivoire, The Gambia, and Sierra Leone, Aspac Technics is a proven leader in water engineering across the Continent.",
          offer: "At Aspac Technics, our teams of expert engineers and technicians design and build advanced, smart water systems tailored to meet the unique needs of municipalities, industries, and communities. Our capabilities include the construction of pumping stations, water and wastewater treatment plants, process systems for industries, pipelines, and efficient storage systems, ensuring reliable water management from source to end-user. We’ve also developed a specialized expertise in tackling Non-Revenue Water (NRW) issues for water utilities. Our innovative solutions address complex leakage and metering challenges, significantly boosting both technical and financial performance for utilities, ensuring efficient water usage and reduced losses.",
          image: "aspac",
          site: "https://aspac-engineering.com/",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "ATECH",
          profil:
            "Atech NV is the official distributor of Allison and ZF in Belgium and specialized in maintenance and repair of automatic transmissions, rear-axles and gears. Other brands: VOITH, Clark, Chelsea, Dana, Granziano, Hydrocar and many more. ",
          offer: "We focus on knowledge and quick delivery and hold a large warehouse with spare parts to perform most repairs very fast and efficiently. For older types of transmissions we hold large numbers of second hand parts.",
          image: "atech",
          site: "https://atechnv.be",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "ATELIER ESPACE ARCHITECTURAL SOMERS ESMAIL & PARTNERS",
          profil:
            "Architect - Urbanist - Engineering  ",
          offer: "Building & construction services",
          image: "",
          site: "https://www.somersespace.wixsite.com",
        }
        ,
        {
          secteur: "The following companies will come later and are interested in contacts in Tanzania",
          nom: "BOVIGEN - BOVECO",
          profil:
            "Since 1996 working as an independent Agricultural consultant with a specialization on Dairy production. Our passion for breeding a good cow which can withstand the conditions to be economical, profitable, trouble-free and survive in any climate are a day to day challenge. Livestock needs to be fed, housed, managed, monitored to fulfill the set targets without scarifying in labor, health, mortality, cow wellbeing, heatstress, pregnancy rates, etc…... It is all easier said than done but with our worldwide network we can help in the basic elements to be profitable. ",
          offer: "Semen, Embryos and livestock, Cow-Comfort, Greenfield Operations, Water Supply,Design of a modern Dairy (layout),Milk-Supply and Processing,Ventilation, Rations/Nutrition, Milking Equipment, Management support (repro, protocols,..),Milk Cooling, Training and education on-/off-site.",
          image: "kinrooi",
          site: "https://www.agropolis-kinrooi.be/en/",
        }
        ,
        {
          secteur: "The following companies will come later and are interested in contacts in Tanzania",
          nom: "Close the Gap",
          profil:
            "Close the Gap is an international social enterprise that aims to bridge the digital divide by providing high-quality, pre-owned IT devices donated by European companies to educational, medical and social projects in developing and emerging countries at affordable rates.  ",
          offer: "xxxxx",
          image: "close",
          site: "https://www.close-the-gap.org/",
        }
        ,
        {
          secteur: "The following companies will come later and are interested in contacts in Tanzania",
          nom: "Bim e-Solutions / DoxBe",
          profil:
            "With over 30 years in the shipping and logistics industry, we deliver unparalleled service with efficiency and cost-effectiveness at the forefront.  ",
          offer: "xxxxx",
          image: "doxbe",
          site: "https://www.dox-be.com/home",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "DREDGING INTERNATIONAL",
          profil:
            "Dredging International is an operating company of the DEME Group. DEME is a world leader in highly specialised dredging, hydraulic engineering and environmental remediation. The Group can build on more than 140 years of experience and has fostered a pioneering approach throughout its history, as a leader in innovation and new technologies. DEME’s activities encompasses dredging, land reclamation, hydraulic engineering services for the offshore oil & gas and renewable energy industries and environmental works.",
          offer: "Through DEME’s subsidiary DIMCO (DEME Infra Marine Contractors), the Group is also involved in marine infrastructure and civil works such as quay walls, jetties, immersed tunnels, piling, bored tunnels and locks. DEME’s vision is to work towards a sustainable future by offering solutions for global, worldwide challenges: rising sea levels, climate change, the transition towards renewable energy, polluted rivers and soils, a growing population and the scarcity of natural resources.",
          image: "deme",
          site: "https://www.deme-group.com",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "Ecosteryl",
          profil:
            "We imagine, develop, manufacture and provide innovative environmental solutions for the treatment of medical waste.",
          offer: "xxxxx.",
          image: "ecosteril",
          site: "https://www.ecosteryl.com/en/",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "EMEXON INTERNATIONAL",
          profil:
            "Emexon International is a Belgian GMP+ certified manufacturing company. We are proud to be among the global leaders in the medicated feed additives business. As such, we have dedicated our expertise to the continued availability of these important products for the prevention and treatment of disease in food-producing animals.",
          offer: "Our knowledge and resources ensure that we uphold the highest standards of quality, safety, efficacy and trace-ability. In addition, we offer our customers excellent sales and technical support.",
          image: "emexon",
          site: "https://www.emexon-inter.com/",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "EXCHANGE",
          profil:
            "As a center of expertise on private entrepreneurship in Africa, we are the ideal matchmaker between African and Belgian companies! As a facilitator, we build partnerships that drive both African and Belgian companies to a higher level.",
          offer: "Through our extensive network of professional experts, we provide expertise to African companies during their scale-up phase. Belgian companies are invaluable in our operations because they can bring real sustainability to our African partner companies.",
          image: "logo_exchange_RGB_72-1",
          site: "https://exchangevzw.be/en/",
        }
        ,
        {

          secteur: "The following companies will come later and are interested in contacts in Tanzania",
          nom: "Fit-For-Purpose Technologies",
          profil:
            "We help organizations of all sizes transform their business through AI-Driven Innovation.",
          offer: "Trusted by the world’s best organizations, It has been delivering smiles to a lot of IT advisors, developers, users, and business owners.",
          image: "FFP-logo-stabd-alone-colors",
          site: "https://fitforpurpose.tech/about/",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "FRISOMAT",
          profil:
            " We support companies worldwide by offering a unique and durable building construction system. Our buildings reduce the overall project cost and have a positive impact on the Total Cost of Ownership. +37.000 projects realized in +100 countries worldwide.  +1.600 projects realized in +40 African countries. Frisomat is a Belgian family-owned company operating since 1978.",
          offer: "Designing and producing industrial prefabricated steel buildings, like warehouses, plants, work-shop, aircraft hangars, … We cover the entire value chain, from R&D, design, manufacturing to transport, assembly & after sales service. We have complete control. So do you.",
          image: "frisomat",
          site: "https://www.frisomat.com",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "Future Resources sa",
          profil:
            "FUTURE RESOURCES is a railway technological spin off proficient in the design, development and implementation of smart management systems by and for railway operators.",
          offer: "Our products open the way to new management approaches. They are affordable and benefit from short development cycles and a customized approach to match operator needs. We provide specific training of railway staff on site and in our headquarters overseas.Combined with dynamic after-sales support, hot-line and maintenance of our systems, our customer-oriented approach confers a competitive advantage over large industry players. ",
          image: "future",
          site: "https://www.futureresources.eu/",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "GmNK Technologies",
          profil:
            "Engineering activities and related technical consultancy.We are an engineering office specialist in Electricity and instrumentation.Electricity : Low voltage (Main Low-voltage board, UPS, distribution, lighting,…) & LLV (Fire detection, Access control, CCTV, Network DATA, interlocking,…) Instrumentation :  ATEX area – Start up",
          offer: "  ",
          image: "GmNK",
          site: "https://gmnk.co.mz/",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "N3XT",
          profil:
            "N3 XT is de dicate d to acce le rating bus ine s s growth and digital trans formation, with a s trong focus on fos te ring innovation across Africa.",
          offer: "  ",
          image: "n3ext",
          site: "",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "Jan De Nul",
          profil:
            "Jan De Nul Group is a vibrant, modern company that solves complex challenges of today’s society. Our expertise lies in five main activities: offshore energy, dredging and maritime construction, civil construction, environmental activities and project development. From design and engineering to the execution and maintenance, we unburden our clients with overall solutions that combine one, several or even all activities.",
          offer: "Offshore, marine, civil, environment and project development. Thanks to the fruitful interaction within our company, we can offer overall solutions that combine one, several or even all these activities.Offshore specialized services for the installation of subsea structures for oil, gas and renewable energy industries",
          image: "djn",
          site: "https://www.jandenul.com",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "KBC Bank",
          profil:
            "KBC offers a broad range of banking and insurance products to private individuals, SMEs, corporates and public authorities, including ECA covered loans supporting the export of Belgian capital goods and related services. ",
          offer: "Banking and insurance products ",
          image: "kbc",
          site: "https://www.kbc.be",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "MACQ",
          profil:
            "Macq provides integral solutions for smart cities and road operators to address mobility challenges such as traffic congestion and road safety. Our comprehensive approach includes tools for both monitoring and managing mobility, empowering smarter, safer, smoother and sustainable environments.",
          offer: "Macq supports cities and road (construction) managers to foster safer, smoother, and more sustainable environments through our advanced range of smart cameras, software applications, and data solutions.",
          image: "Macq Mobility",
          site: "https://mobility.macq.eu/transit-improve-traffic-flow",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "Omnifreight",
          profil:
            "Founded in 2004, Omnifreight is a Belgian freight forwarding company, offering comprehensive logistics services for companies operating in a variety of sectors.Founded with a clear mission to simplify logistics processes for its customers, Omnifreight rapidly expanded its activities into fast-growing markets in Central, West and, more recently, East Africa.Our aim is to establish privileged relationships with Tanzanian importers in need of a reliable logistics partner. We are committed to providing a complete, practical and efficient supply chain service for their various imports.",
          offer: "",
          image: "omnifreight_logo",
          site: "https://www.omnifreight.eu/",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "PRODATA PTEXCELLENCE",
          profil:
            "Prodata PTexcellence is an international manufacturer of Automatic Fare Collection systems based on the latest technologies: closed- and open loop contactless cards, compliant with several international standards, like automotive, EMV, PCI, ISO-14443, etc...The teams at Prodata PTexcellence have successfully delivered projects around the globe: Belgium, The Netherlands, Finland, USA, Tanzania, South-Africa, Ghana, Brasil, ...",
          offer: "Automatic fare collection systems for all modes of public transport with solutions tailored for the African market. Guarantee correct revenue collection and generation of usage data that allows to optimise the public transport services. The system allows for passengers to pay with mobile money. Lowest cost of ownership through use of state-of-the-art technology: Account-based ticketing with existing contactless cards and dynamic barcode on mobile phones.Our system allows easy interoperability between multiple independent operators and increases the convenience of the passengers as only 1 single purse is needed for all different operators.",
          image: "protada",
          site: "https://www.pptexcellence.com/",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "PROTEX HEALTHCARE",
          profil:
            "Protex Healthcare is specialised in the development, manufacturing, sales and marketing of medical devices to heal complex wounds such as Diabetic Foot Ulcers, Venous Leg Ulcers, Pressure Sores, oncological and tropical ulcers and hard-to-heal surgical and trauma-wounds. Protex does not only develop and sell products, but also develops education for wound specialists in order to improve the primary healthcare of this kind of wounds in both developed as developing countries.",
          offer: "VACUTEX is a rapid capillary action dressing that works autologous as Negative Pressure Wound Therapy. The existing product range has been completed with a product for rapid and ease-of-use wound cleansing and debridement, with a wound healing accelerator and with unique wound diagnostics based on non-invasive hyper spectral imaging. The present pipe-line of development will bring a limited amount of focussed and unique products to heal oncological wounds faster as well as focus on edema management in complex wounds in a way the products are accessible for both developed and developing countries.",
          image: "protext",
          site: "https://www.protexhealthcare.com",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "REMED PHARMA",
          profil:
            "Remed Pharma SA is a belgian company specialized in the production of male and female confoms. Our products are available since 1996 in more than 40 countries under the brands LOVE CONDOM and PREVENTOR.",
          offer: " We provide all kind of male and female condoms under our brands Preventor / Love Condom - Male condom (tutti frutti, classic, dotted, ribbed, Xtra Strong, Xtra Large, ...) / Female condom / Lubricant. Our product are CE certified and produced in the best facilities in the world with a convenient and affordable price ",
          image: "remed",
          site: "https://www.remedpharma.com",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "SARENS",
          profil:
            "Sarens is the global leader and reference in crane rental services, heavy lifting, and engineered transport.",
          offer: "With state of the art equipment, value engineering, one of the world’s largest inventories of cranes, transporters, and specialty rigging equipment, Sarens offers creative and intelligent solutions to today's heavy lifting and engineered transport challenges. With more than 100 entities in 65 countries operating without borders, Sarens is ideal partner for small-scale to mega scale projects. Sarens currently employs 5000 highly skilled professionals who are prepared to support clients’ requirements around the globe and across every market sector.",
          image: "sarens",
          site: "https://www.sarens.com",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "Trafiqurail SRL",
          profil:
            "Trafiqurail manages railway operations globally, covering all areas of railway activity from the transport of mining and agricultural products, commercial freight and passenger transport. ",
          offer: "Railway products & services",
          image: "logo-website1-300x125",
          site: "https://www.trafiqurail.com/homepage",
        }
        ,
        {

          secteur: "The following companies will come later and are interested in contacts in Tanzania",
          nom: "U'HOPE COMPANY",
          profil:
            "Innovator and developer of software solutions.We are unique because we develop simple, efficient and useful digital solutions.",
          offer: "Teaching,Training, conferencing at a distance and in hybrid ( remotly and face-to-face at the same time), Optimized enterprise communications",
          image: "uhcpe",
          site: "https://uhope.eu/",
        }
        ,
        {

          secteur: "The following companies will come later and are interested in contacts in Tanzania",
          nom: "VAL'U Kipeps",
          profil:
            "Kipep's (Val'U Group) is the distributor specializing in delicatessen from Africa and the Caribbean",
          offer: "",
          image: "cropped-Vert-fond_jaune_4x-100-removebg-preview",
          site: "https://shop.kipeps.com/",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "Viasat Connect",
          profil:
            "Viasat Connect S.A. is specialising in telematics, workforce management, and SVR. Viasat Connect markets its solutions through an efficient network of resellers in Europe and Africa. These solutions are aimed at small and medium-sized businesses in transport and logistics, construction, technical services, local government, cleaning, and other sectors with the aim of optimising operations, reducing costs, and improving overall efficiency.",
          offer: "Tracking devices and software management ",
          image: "logo-VIASAT-targa-1024x397",
          site: "https://www.viasatconnect.be/",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "Vrije Universiteit Brussel",
          profil:
            "The Vrije Universiteit Brussel (VUB) is a dynamic and modern university nested consistently within the top 300 of the various global rankings with an international diverse student body, and an excellent position an innovative research (ranked #41 of more than 900 universities on SDG 9: innovation, Industry and Infrastructure).  Represented here is the VUB Solvay Business School throught its Department of Business, specialized in sustainability, international business and complex infrastructure project management.",
          offer: "During March/April 2025, Professor Dooms will lead a 3-week multisectoral trade mission to Tanzania consisting of master students performing market research for Belgian companies and support by Flanders Investment and Trade, hub.brussels and AWEX. Prof. Dooms is also a global authority on port economics, development and management, as the Secretary of the International Association of Maritime Economists (IAME), expert involvement in various port associations and advisory services to port authorities, port users, and governments.",
          image: "vub",
          site: "https://www.vub.be",
        }
        ,
        {

          secteur: "The following companies will come later and are interested in contacts in Tanzania",
          nom: "WBTS",
          profil:
            "Wireless Blocking Technologies and Solutions is specialized in blocking wireless communication. (Blocking cell phone communication)",
          offer: "In contrast with most suppliers, WBTS provides tailor-made solutions and mainly focuses its activities on prison facilities. WBTS is currently involved in various government assignments in several countries, European and non-European.",
          image: "wrts",
          site: "http://www.wbts.be/",
        }
        ,
        {
          secteur: "The following companies will come later and are interested in contacts in Tanzania",
          nom: "ART2 TRAVEL",
          profil:
            "Travel agent specialised in african destinations",
          offer: "",
          image: "art2",
          site: "https://art2-travel.com/",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "ZINGAMETALL",
          profil:
            " ZINGA has proven to provide active, long lasting, and sustainable galvanic protection to steel structures in more than 120 countries. ZINGA contains 96% of atomised zinc in its dry layer, it is environmental friendly, non-toxic and has an unlimited shelf life. ZINGAMETALL offers anti corrosion solutions to industries in construction, steel, mining, energy, water, oil & gas, public works, grid, railway, transport, cement, pulp & paper, ports & harbours, ...             ",
          offer: " The purity of the zinc used is so high that dry ZINGA does not contain any toxic elements (99.995% pure atomized zinc powder). The zinc in ZINGA (anode) sacrifices itself to protect the steel in a comparable way as hot-dip galvanizing (HDG). Upon impact, the electron flow resulting from a potential difference between the ZINGA and the steel will prevent the steel from corroding. As the ZINGA oxidizes, a layer of zinc salts slowly builds up on the ZINGA surface, closing the film and enhancing the barrier effect.In simpler terms: the ZINGA corrodes so the steel structure will not ! The use of ZINGA for the protection of steel structures will avoid a lot of maintenance, transport and save shut-down time and costs.",
          image: "zinga_100h",
          site: "https://www.zinga.be",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "PORT OF ANTWERP-BRUGES INTERNATIONAL (POABI)",
          profil: "POABI combines its experience in one of the largest ports in the world, to support you in your design, extension or renewal of your project.",
          offer: "",
          image: "PAI_Logo_pos_rgb",
          site: "https://www.portofantwerpinternational.com",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "Samagro",
          profil: " Samagro offers a wide range of organic fertilizers.Click on the icons and find out which fertilizers suit your soil or cultivation. ",
          offer: "",
          image: "samagro",
          site: "https://www.samagro.com/en/",
        }
        ,
        {
          secteur: "The following companies are interested in mission contacts Tanzania",
          nom: "POLYTRA",
          profil: " At POLYTRA, we are committed to supporting your global logistic needs. As an international logistics service provider with offices in Europe and Africa and with strong global partners, POLYTRA delivers custom-made, client-focused and solution-driven logistics services. Our activities started back in 1974, but our heritage reaches back as far as 1816... ",
          offer: "",
          image: "polytra",
          site: "https://polytra.be/",
        }
      ]
    }
  },
  computed: {
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

  methods: {
    setSearchQuery(data) {
      this.searchQuery = data;
    },

  },


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

.www {
  height: 100px;
  width: 150px;
}


/* label.checked {
  background-color: gray;
  color: black;
} */</style>
