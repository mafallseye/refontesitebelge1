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


  <!-- ===============================eevfgg========================= -->
   
  <div class="row p-6 row-cols-1 row-cols-md-3 g-4">
 
  <div class="col " v-for="entreprise in setSearchSector" :key="entreprise.nom">
    <div class="card  cadre bg-white border cadre border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
     <span v-if="entreprise.image != ''">
      <img class="mb-4 www" :src="require(`@/imgtanzania/${entreprise.image}.png`)" :alt="entreprise.image" />
    </span>
      <div class="card-body">
        <h5 class="card-title ">{{  entreprise.nom }}</h5>
        <p class="card-text text-left">{{ entreprise.profil }}</p>
        <span  v-if="entreprise.site != ''">
        <div class="card-footer  bg-white">
      <small class="text-body-primary">
       
        <a :href="`${entreprise.site}`"
                class=" flex sm:w-auto bg-teal-400 hover:bg-gray-700 focus:ring-4   focus:outline-none focus:ring-gray-300 text-white rounded-full inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <!-- <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg> -->
                <div class="text-left ">
                  <!-- <div class="mb-1 text-xs">Download on the</div> -->
                  <div class="-mt-1 font-sans text-sm font-semibold flex ">
                    
Visit the website
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
    </div>
  </span>
  </div>
    </div>
  </div>
</div>
<Organization/>
<MyFooterENg />
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
          site: "https://atechnv.be",
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
          nom: "Bim e-Solutions / DoxBe",
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
        ,
        {
          secteur: "xxxxxxxxx",
          nom: "EXCHANGE",
          profil:
            "As a center of expertise on private entrepreneurship in Africa, we are the ideal matchmaker between African and Belgian companies! As a facilitator, we build partnerships that drive both African and Belgian companies to a higher level.",
          offer:"Through our extensive network of professional experts, we provide expertise to African companies during their scale-up phase. Belgian companies are invaluable in our operations because they can bring real sustainability to our African partner companies.",
            image: "logo_exchange_RGB_72-1",
          site: "https://exchangevzw.be/en/",
        }
        ,
        {
          secteur: "xxxxxxxxx",
          nom: "Fit-For-Purpose Technologies",
          profil:
            "We help organizations of all sizes transform their business through AI-Driven Innovation.",
          offer:"Trusted by the world’s best organizations, It has been delivering smiles to a lot of IT advisors, developers, users, and business owners.",
            image: "FFP-logo-stabd-alone-colors",
          site: "https://fitforpurpose.tech/about/",
        }
        ,
        {
          secteur: "BTP - Contractors - EPZ",
          nom: "FRISOMAT",
          profil:
            " We support companies worldwide by offering a unique and durable building construction system. Our buildings reduce the overall project cost and have a positive impact on the Total Cost of Ownership. +37.000 projects realized in +100 countries worldwide.  +1.600 projects realized in +40 African countries. Frisomat is a Belgian family-owned company operating since 1978.",
          offer:"Designing and producing industrial prefabricated steel buildings, like warehouses, plants, work-shop, aircraft hangars, … We cover the entire value chain, from R&D, design, manufacturing to transport, assembly & after sales service. We have complete control. So do you.",
            image: "frisomat",
          site: "https://www.frisomat.com",
        }
        ,
        {
          secteur: "",
          nom: "Future Resources sa",
          profil:
            "FUTURE RESOURCES is a railway technological spin off proficient in the design, development and implementation of smart management systems by and for railway operators.",
          offer:"Our products open the way to new management approaches. They are affordable and benefit from short development cycles and a customized approach to match operator needs. We provide specific training of railway staff on site and in our headquarters overseas.Combined with dynamic after-sales support, hot-line and maintenance of our systems, our customer-oriented approach confers a competitive advantage over large industry players. ",
            image: "future",
          site: "https://www.futureresources.eu/",
        }
        ,
        {
          secteur: "",
          nom: "GmNK Technologies",
          profil:
            "Engineering activities and related technical consultancy.We are an engineering office specialist in Electricity and instrumentation.Electricity : Low voltage (Main Low-voltage board, UPS, distribution, lighting,…) & LLV (Fire detection, Access control, CCTV, Network DATA, interlocking,…) Instrumentation :  ATEX area – Start up",
          offer:"  ",
            image: "GmNK",
          site: "https://gmnk.co.mz/",
        }
        ,
        {
          secteur: "",
          nom: "Jan De Nul",
          profil:
            "Jan De Nul Group is a vibrant, modern company that solves complex challenges of today’s society. Our expertise lies in five main activities: offshore energy, dredging and maritime construction, civil construction, environmental activities and project development. From design and engineering to the execution and maintenance, we unburden our clients with overall solutions that combine one, several or even all activities.",
          offer:"Offshore, marine, civil, environment and project development. Thanks to the fruitful interaction within our company, we can offer overall solutions that combine one, several or even all these activities.Offshore specialized services for the installation of subsea structures for oil, gas and renewable energy industries",
            image: "djn",
          site: "https://www.jandenul.com",
        }
        ,
        {
          secteur: "",
          nom: "KBC Bank",
          profil:
            "KBC offers a broad range of banking and insurance products to private individuals, SMEs, corporates and public authorities, including ECA covered loans supporting the export of Belgian capital goods and related services. ",
          offer:"Banking and insurance products ",
            image: "kbc",
          site: "https://www.kbc.be",
        }
        ,
        {
          secteur: "Road administrations",
          nom: "MACQ",
          profil:
            "Macq provides integral solutions for smart cities and road operators to address mobility challenges such as traffic congestion and road safety. Our comprehensive approach includes tools for both monitoring and managing mobility, empowering smarter, safer, smoother and sustainable environments.",
          offer:"Macq supports cities and road (construction) managers to foster safer, smoother, and more sustainable environments through our advanced range of smart cameras, software applications, and data solutions.",
            image: "Macq Mobility",
          site: "https://mobility.macq.eu/transit-improve-traffic-flow",
        }
        ,
        {
          secteur: "Transport & logistics",
          nom: "Omnifreight",
          profil:
            "We ship your containerized goods, rolling stock (trucks, road building equipment...) and your conventional cargo (steel, bags, cases...)",
          offer:"",
            image: "omnifreight_logo",
          site: "https://www.omnifreight.eu/",
        }
        ,
        {
          secteur: "",
          nom: "PRODATA PTEXCELLENCE",
          profil:
            "Prodata PTexcellence is an international manufacturer of Automatic Fare Collection systems based on the latest technologies: closed- and open loop contactless cards, compliant with several international standards, like automotive, EMV, PCI, ISO-14443, etc...The teams at Prodata PTexcellence have successfully delivered projects around the globe: Belgium, The Netherlands, Finland, USA, Tanzania, South-Africa, Ghana, Brasil, ...",
          offer:"Automatic fare collection systems for all modes of public transport with solutions tailored for the African market. Guarantee correct revenue collection and generation of usage data that allows to optimise the public transport services. The system allows for passengers to pay with mobile money. Lowest cost of ownership through use of state-of-the-art technology: Account-based ticketing with existing contactless cards and dynamic barcode on mobile phones.Our system allows easy interoperability between multiple independent operators and increases the convenience of the passengers as only 1 single purse is needed for all different operators.",
            image: "protada",
          site: "https://www.pptexcellence.com/",
        }
        ,
        {
          secteur: "Hospitals",
          nom: "PROTEX HEALTHCARE",
          profil:
            "Protex Healthcare is specialised in the development, manufacturing, sales and marketing of medical devices to heal complex wounds such as Diabetic Foot Ulcers, Venous Leg Ulcers, Pressure Sores, oncological and tropical ulcers and hard-to-heal surgical and trauma-wounds. Protex does not only develop and sell products, but also develops education for wound specialists in order to improve the primary healthcare of this kind of wounds in both developed as developing countries.",
          offer:"VACUTEX is a rapid capillary action dressing that works autologous as Negative Pressure Wound Therapy. The existing product range has been completed with a product for rapid and ease-of-use wound cleansing and debridement, with a wound healing accelerator and with unique wound diagnostics based on non-invasive hyper spectral imaging. The present pipe-line of development will bring a limited amount of focussed and unique products to heal oncological wounds faster as well as focus on edema management in complex wounds in a way the products are accessible for both developed and developing countries.",
            image: "protext",
          site: "https://www.protexhealthcare.com",
        }
        ,
        {
          secteur: "Distributors, pharmacy networks, gas station shops",
          nom: "REMED PHARMA",
          profil:
            "Remed Pharma SA is a belgian company specialized in the production of male and female confoms. Our products are available since 1996 in more than 40 countries under the brands LOVE CONDOM and PREVENTOR.",
          offer:" We provide all kind of male and female condoms under our brands Preventor / Love Condom - Male condom (tutti frutti, classic, dotted, ribbed, Xtra Strong, Xtra Large, ...) / Female condom / Lubricant. Our product are CE certified and produced in the best facilities in the world with a convenient and affordable price ",
            image: "remed",
          site: "https://www.remedpharma.com",
        }
        ,
        {
          secteur: "BTP, Port",
          nom: "SARENS",
          profil:
            "Sarens is the global leader and reference in crane rental services, heavy lifting, and engineered transport.",
          offer:"With state of the art equipment, value engineering, one of the world’s largest inventories of cranes, transporters, and specialty rigging equipment, Sarens offers creative and intelligent solutions to today's heavy lifting and engineered transport challenges. With more than 100 entities in 65 countries operating without borders, Sarens is ideal partner for small-scale to mega scale projects. Sarens currently employs 5000 highly skilled professionals who are prepared to support clients’ requirements around the globe and across every market sector.",
            image: "sarens",
          site: "https://www.sarens.com",
        }
        ,
        {
          secteur: "Tazara - TRC/SGR",
          nom: "Trafiqurail SRL",
          profil:
            "Trafiqurail manages railway operations globally, covering all areas of railway activity from the transport of mining and agricultural products, commercial freight and passenger transport. ",
          offer:"Railway products & services",
            image: "logo-website1-300x125",
          site: "https://www.trafiqurail.com/homepage",
        }
        ,
        {
          secteur: "",
          nom: "U'HOPE COMPANY",
          profil:
            "Innovator and developer of software solutions.We are unique because we develop simple, efficient and useful digital solutions.",
          offer:"Teaching,Training, conferencing at a distance and in hybrid ( remotly and face-to-face at the same time), Optimized enterprise communications",
            image: "uhcpe",
          site: "https://uhope.eu/",
        }
        ,
        {
          secteur: "",
          nom: "VAL'U Kipeps",
          profil:
            "Kipep's (Val'U Group) is the distributor specializing in delicatessen from Africa and the Caribbean",
          offer:"",
            image: "cropped-Vert-fond_jaune_4x-100-removebg-preview",
          site: "https://shop.kipeps.com/",
        }
        ,
        {
          secteur: "Fleet managers - logistic companies",
          nom: "Viasat Connect",
          profil:
            "Viasat Connect S.A. is specialising in telematics, workforce management, and SVR. Viasat Connect markets its solutions through an efficient network of resellers in Europe and Africa. These solutions are aimed at small and medium-sized businesses in transport and logistics, construction, technical services, local government, cleaning, and other sectors with the aim of optimising operations, reducing costs, and improving overall efficiency.",
          offer:"Tracking devices and software management ",
            image: "logo-VIASAT-targa-1024x397",
          site: "https://www.viasatconnect.be/",
        }
        ,
        {
          secteur: "",
          nom: "Vrije Universiteit Brussel",
          profil:
            "The Vrije Universiteit Brussel (VUB) is a dynamic and modern university nested consistently within the top 300 of the various global rankings with an international diverse student body, and an excellent position an innovative research (ranked #41 of more than 900 universities on SDG 9: innovation, Industry and Infrastructure).  Represented here is the VUB Solvay Business School throught its Department of Business, specialized in sustainability, international business and complex infrastructure project management.",
          offer:"During March/April 2025, Professor Dooms will lead a 3-week multisectoral trade mission to Tanzania consisting of master students performing market research for Belgian companies and support by Flanders Investment and Trade, hub.brussels and AWEX. Prof. Dooms is also a global authority on port economics, development and management, as the Secretary of the International Association of Maritime Economists (IAME), expert involvement in various port associations and advisory services to port authorities, port users, and governments.",
            image: "vub",
          site: "https://www.vub.be",
        }
        ,
        {
          secteur: "Prison administrations, Ministry of interior",
          nom: "WBTS",
          profil:
            "Wireless Blocking Technologies and Solutions is specialized in blocking wireless communication. (Blocking cell phone communication)",
          offer:"In contrast with most suppliers, WBTS provides tailor-made solutions and mainly focuses its activities on prison facilities. WBTS is currently involved in various government assignments in several countries, European and non-European.",
            image: "wrts",
          site: "http://www.wbts.be/",
        }
        ,
        {
          secteur: "",
          nom: "ART2 TRAVEL",
          profil:
            "Travel agent specialised on african tours",
          offer:"",
            image: "art2",
          site: "https://art2-travel.com/",
        }
        ,
        {
          secteur: "",
          nom: "ZINGAMETALL",
          profil:
            " ZINGA has proven to provide active, long lasting, and sustainable galvanic protection to steel structures in more than 120 countries. ZINGA contains 96% of atomised zinc in its dry layer, it is environmental friendly, non-toxic and has an unlimited shelf life. ZINGAMETALL offers anti corrosion solutions to industries in construction, steel, mining, energy, water, oil & gas, public works, grid, railway, transport, cement, pulp & paper, ports & harbours, ...             ",
          offer:" The purity of the zinc used is so high that dry ZINGA does not contain any toxic elements (99.995% pure atomized zinc powder). The zinc in ZINGA (anode) sacrifices itself to protect the steel in a comparable way as hot-dip galvanizing (HDG). Upon impact, the electron flow resulting from a potential difference between the ZINGA and the steel will prevent the steel from corroding. As the ZINGA oxidizes, a layer of zinc salts slowly builds up on the ZINGA surface, closing the film and enhancing the barrier effect.In simpler terms: the ZINGA corrodes so the steel structure will not ! The use of ZINGA for the protection of steel structures will avoid a lot of maintenance, transport and save shut-down time and costs.",
            image: "zinga_100h",
          site: "https://www.zinga.be",
        }
        ,
        {
          secteur: "",
          nom: "Samagro",
          profil: " Samagro offers a wide range of organic fertilizers.Click on the icons and find out which fertilizers suit your soil or cultivation. ",
          offer:"",
            image: "samagro",
          site: "https://www.samagro.com/en/",
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
