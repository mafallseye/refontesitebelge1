<template>
  <!-- BANNIÈRE D'INFORMATION INITIALE (Style épuré) -->
  <div v-if="Visibilte" id="informational-banner" tabindex="-1"
    class="fixed top-0 start-0 z-50 flex flex-col justify-between w-full px-6 py-4 border-b border-slate-200 md:flex-row bg-white/95 backdrop-blur-md shadow-sm dark:bg-slate-800 dark:border-slate-700">
    <div class="mb-4 md:mb-0 md:me-4 flex flex-col gap-1">
      <h2 class="text-base font-bold text-slate-900 dark:text-white tracking-tight">REGISTER for the B2B and get your
        invitation</h2>
      <p class="text-sm font-normal text-slate-500 dark:text-slate-400 flex items-center gap-2">
        <span>📅</span> Date : Wednesday 12 November 2025 – Westlands - Nairobi
      </p>
    </div>
    <div class="flex items-center gap-4 shrink-0">
      <a href="https://forms.office.com/e/rDGVBVyyqf"
        class="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 shadow-sm transition-colors uppercase tracking-wider">
        Participate
        <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
      <button @click="showVisiblite()" type="button"
        class="shrink-0 inline-flex justify-center w-8 h-8 items-center text-slate-400 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-colors dark:hover:bg-slate-700 dark:hover:text-white">
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
        <span class="sr-only">Close banner</span>
      </button>
    </div>
  </div>

  <!-- SECTION HÉROS PRINCIPALE -->
  <div class="bg-slate-50 dark:bg-slate-900">
    <NavbarAnglais />

    <header class="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div class="grid max-w-screen-xl px-6 py-12 mx-auto lg:gap-12 lg:py-20 lg:grid-cols-12 items-center">

        <!-- Textes explicatifs -->
        <div class="mr-auto place-self-center lg:col-span-7 space-y-6">
          <h1
            class="max-w-2xl text-3xl font-extrabold tracking-tight leading-tight md:text-5xl dark:text-white text-slate-900">
            REGISTER for the B2B and get your invitation
          </h1>
          <p class="max-w-xl text-slate-500 md:text-lg dark:text-slate-400 font-light leading-relaxed">
            Date : Wednesday 12 November 2025 – Westlands - Nairobi
          </p>
          <div class="pt-2">
            <a href="https://forms.office.com/e/rDGVBVyyqf"
              class="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md transition-all hover:-translate-y-0.5 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900">
              Participate
              <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Image illustrative -->
        <div class="mt-8 lg:mt-0 lg:col-span-5 flex justify-center">
          <img src="../imgkenya/BannerKenyatest.png" alt="Mission Kenya Banner"
            class="h-auto max-w-full rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
        </div>

      </div>
    </header>
  </div>

  <!-- FIL D'ARIANE (Breadcrumb) -->
  <nav class="flex max-w-screen-xl mx-auto px-6 py-5" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-xs md:text-sm">
      <li class="inline-flex items-center">
        <a href="/"
          class="inline-flex items-center font-medium text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white transition-colors gap-1.5">
          <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 20 20">
            <path
              d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          Home
        </a>
      </li>
      <li>
        <div class="flex items-center gap-1">
          <svg class="w-3 h-3 text-slate-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
          <a href="#"
            class="ms-1 font-medium text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white transition-colors">Events</a>
        </div>
      </li>
      <li aria-current="page">
        <div class="flex items-center gap-1">
          <svg class="w-3 h-3 text-slate-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
          <span class="ms-1 font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider text-xs">Mission to
            Kenya</span>
        </div>
      </li>
    </ol>
  </nav>

  <!-- CONTENU PRINCIPAL & GRILLE DES ENTREPRISES FILTRÉES -->
  <main class="bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
    <section class="max-w-screen-xl py-12 px-6 mx-auto sm:py-16">

      <!-- ZONE DES FILTRES DE SECTEUR (Boutons modernes au lieu de radios bruts) -->
      <div
        class="flex flex-wrap justify-start items-center gap-2 mb-12 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">

        <!-- Bouton Tout Sélectionner -->
        <button @click="searchSector = ''" :class="[
          'px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-200 shadow-sm flex items-center gap-2',
          searchSector === ''
            ? 'bg-indigo-600 text-white border-indigo-600 scale-105'
            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600'
        ]">
          Select all
        </button>

        <!-- Boucle dynamique sur vos secteurs -->
        <button v-for="sect in secteurKenya" :key="sect.segment" @click="searchSector = sect.segment" :class="[
          'px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-200 shadow-sm flex items-center gap-2',
          searchSector === sect.segment
            ? 'bg-indigo-600 text-white border-indigo-600 scale-105'
            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600'
        ]">
          {{ sect.segment }}
          <span :class="[
            'inline-flex justify-center items-center w-5 h-5 text-[10px] font-bold rounded-full px-1',
            searchSector === sect.segment ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700 dark:bg-slate-600 dark:text-slate-300'
          ]">
            {{ sect.nombre }}
          </span>
        </button>
      </div>

           <!-- GRILLE DES CARTES D'ENTREPRISES -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="entreprise in setSearchSector" 
          :key="entreprise.name"
          class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
        >
          <div class="space-y-4">
            <!-- Secteur Badge -->
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                {{ entreprise.segment || 'Sector' }}
              </span>
            </div>

            <!-- CONTENEUR DU TITRE + LOGO À DROITE -->
            <div class="flex items-start justify-between gap-4">
              <!-- Titre entreprise (prend tout l'espace disponible à gauche) -->
              <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex-1">
                {{ entreprise.name }}
              </h3>
              
              <!-- LOGO DE PETITE TAILLE À DROITE (S'affiche uniquement si entreprise.image ou entreprise.logo existe) -->
              <div v-if="entreprise.imag" class="w-12 h-12 rounded-lg overflow-hidden border border-slate-100 dark:border-slate-700 bg-slate-50 flex-shrink-0 flex items-center justify-center p-1">
                <img 
                  :src= "require(`@/imgkenya/${entreprise.imag}.png`)"
                  :alt="`Logo ${entreprise.name}`" 
                  class="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            <!-- Descriptif tronqué proprement à la 4ème ligne maximum -->
            <p class="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed line-clamp-4">
              {{ entreprise.activity|| 'No description available for this participant.' }}
            </p>
          </div>

          <!-- Action / Lien -->
          <div class="pt-6 border-t border-slate-50 dark:border-slate-700/50 mt-6 flex justify-between items-center">
            <a 
              :href="entreprise.website || '#'" 
              target="_blank" 
              :class="[
                'inline-flex items-center text-xs font-bold gap-1 transition-colors uppercase tracking-wider',
                (!entreprise.website || entreprise.website === '#')
                  ? 'text-slate-300 dark:text-slate-600 cursor-not-allowed pointer-events-none'
                  : 'text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300'
              ]"
            >
              {{ (!entreprise.website || unbreakable === '#') ? 'No website' : 'Visit website' }}
              <span v-if="entreprise.website && entreprise.website !== '#'">→</span>
            </a>
          </div>
        </div>
      </div>


    </section>
  </main>




  <Organization />
  <MyFooterENg />
</template>
<script>
import NavbarAnglais from './NavbarAnglais.vue';
import ImageSenegal from './ImageSenegal.vue';

import Organization from './Organization.vue';
import MyFooterENg from './MyFooterENg.vue';
import { Alert } from 'bootstrap';

export default {
  components: {
    ImageSenegal,
    NavbarAnglais,
    Organization,
    MyFooterENg
  },
  data() {
    return {
      searchQuery: "",
      searchSector: "",
      isVisible: false,
      showMenu: false,
      isLoading: true,
      Visibilte: true,

      secteurKenya: [
        {
          segment: "ICT/Education",
          nombre: 1,
        },
        {
          segment: "ICC & events",
          nombre: 1,
        },
        {
          segment: "ICT/Agriculture",
          nombre: 1,
        },
        {
          segment: "Water & Climate",
          nombre: 3,
        },
        {
          segment: "ICT/Transport",
          nombre: 2,
        },
        {
          segment: "Agri-Food",
          nombre: 2,
        },
        {
          segment: "AgriTech",
          nombre: 2,
        },
        // {
        //   segment: "ICT - Contact Center Solutions",
        //   nombre: 1,
        // },
        {
          segment: "Energy",
          nombre: 3,
        },

        {
          segment: "IOT and télématique",
          nombre: 1,
        },
        {
          segment: "Research and Education",
          nombre: 4,
        },
        // {
        //   segment: "Trading",
        //   nombre: 1,
        // },
        {
          segment: "Insurance",
          nombre: 1,
        },
        {
          segment: "ICT",
          nombre: 4,
        },
        {
          segment: "Health / Medical / Pharmaceuticals",
          nombre: 2,
        },
        {
          segment: "Construction & Engineering",
          nombre: 3,
        },
        {
          segment: "Development / Environmental / Ecological",
          nombre: 2,
        },
        {
          segment: "Services / Consultancy",
          nombre: 1,
        },
        {
          segment: "Transport & logistics",
          nombre: 2,
        },
        // {
        //   segment: "Financial Services / Financial Technology",
        //   nombre: 1,
        // },
        {
          segment: "Chemicals & Materials",
          nombre: 1,
        },
        // {
        //   segment: "Federation and Chamber of Commerce",
        //   nombre: 1,
        // },


      ],
      listentreprise: [
        {
          name: "ASEM-Solutions",
          segment: "ICT/Education",
          activity: "Distant learning - Working, Meeting and Training remotely have become the new normal for many. Online Meetings, Virtual Classrooms and Webinars require smart video collaboration solutions, and focusing on adoption and user experience is key.We offer solutions from industry leaders, such as Zoom, Microsoft Teams, Google Meet and Barco, and our team of experts can help you along every step of the process: advising, designing, implementing, adopting, supporting and evolution.",
          website: "https://asem-solutions.com/",
          imag: "cropped-ASEM-Solutions-Logo-200x55"

        },
        {
          name: "Becoffi ",
          segment: "ICC & events",
          activity: "BeCoffi & Co is a Belgian agency specialising in digital platforms for event management, monitoring, and promotion covering every aspect from online experiences to onsite engagement. We design and deliver high-impact cultural events, enhancing audience interaction and anticipating market trends. From concept to execution, our mission is to create memorable experiences that leave a lasting impression.",
          website: "https://www.becoffi.be/",
          imag: "becoffi"

        },
        {
          name: "IKIC Impact Ventures",
          segment: "ICT/Agriculture",
          activity: "At IKIC, we specialize in smart passive cold chain solutions in the first and last mile of the supply chain for the agri-food and health sectors. Our solutions are effective for smallholder farmers and primary health centres in a remote context where access to energy is absent or unreliable. Our products include a farm-to-factory dairy cooling solution, a fresh box for storage and transport of perishable goods and a performant health carrier for transport of vaccines, drugs and bio-samples.",
          website: "https://ikic.cool/",
          imag: "IKIC-logo"

        },
        {
          name: "IRRAWADDY BV",
          segment: "Water & Climate",
          activity: "Integrated Water Resources Management (IWRM), Climate Adaptation and Resilience, Disaster Risk Management and Sustainable Development and Capacity Building.",
          website: "https://www.irrawaddy.consulting/",
          imag: "Irrawaddy"

        },
        {
          name: "Rietland",
          segment: "Water & Climate",
          activity: "Rietland BV designs and builds constructed wetlands for waste water purification and sludge dewatering.",
          website: "https://www.rietland.com/  ",
          imag: "rietland"

        },
        {
          name: "PUTMAN",
          segment: "Water & Climate",
          activity: " carries out projects in water treatment (pumping, purification and distribution) in Kenya. PUTMAN is also active in the telecoms sector via fiber optic works.",
          website: "https://www.putman.be/",
          imag: "putman"

        },
        {
          name: "Optiriver",
          segment: "ICT/Transport",
          activity: "Optiriver is a pioneering maritime technology company revolutionizing inland waterway navigation through affordable, AI-driven solutions. As the world's first to enable fast and scalable river mapping using crowdsourced depth data from existing vessel sensors, we create real-time digital twins of waterways to enhance safety, optimize cargo loads, and reduce emissions.",
          website: "https://www.optiriver.com/",
          imag: "optiriver"

        },
        // {
        //   name: "MaryaNutri",
        //   segment: "Agri-Food",
        //   activity: "At MaryaNutri, we're creating unique, innovative insect-fortified foods that are nutritious and sustainable. Our goal is not just temporary relief, but lasting change to end poverty and hunger around the world. With roots in Kenya and our eyes on the global stage, we're working to make a real difference.",
        //   website: "https://www.maryanutri.com/",
        //   imag: "logo_light"

        // },
        {
          name: "NEOTEX",
          segment: "AgriTech",
          activity: "Halisi Livestock is an AI- and biometrics-powered solution that enables farmers to authenticate their identity (KYC) and that of their animals (KYL) using just a photo, providing financial and insurance institutions with reliable verification data supporting decision making. By digitizing livestock identification, proof of ownership and credit scoring; the platform enhances traceability, streamlines lending and insurance processes, as well as unlocks capital for livestock farmers. Ultimately, Halisi safeguards herds and empowers agricultural finance with confidence and efficiency.",
          website: "https://halisi.ai/halisi-livestock",
          imag: "halisi"

        },
        {
          name: "LES BRASSERIES DE FLOBECQ",
          segment: "AgriTech",
          activity: "Bringing beer back to life in the pearl of the Pays des Collines, FlobecqA new breath of fresh air, a malted resurrection, a hoppy rebirth of three ancient, historic breweries: Loix, Voisin and Jouret.",
          website: "https://brasseriesdeflobecq.be",
          imag: "flobecq"

        },
        // {
        //   name: "NIXXIS BELGIUM SRL",
        //   segment: "ICT - Contact Center Solutions",
        //   activity: "Nixxis is one of the European leader in providing technology for Contact Center operations. We have customers like IRISnet, Worldline, Shurgard, Europ Assistance, etc... We manage all channels (voice, email, social media, SMS, etc.) and power the top 5 BPO's in the world.",
        //   website: "https://www.nixxis.com",
        //   imag: "cropped-cropped-cropped-Nixxis_Logotype_RGB-1"

        // },
        {
          name: "PRODATA PTEXCELLENCE",
          segment: "ICT/Transport",
          activity: "Prodata PTexcellence is an international manufacturer of Automatic Fare Collection systems based on the latest technologies: closed- and open loop contactless cards, compliant with several international standards, like automotive, EMV, PCI, ISO-14443, etc...The teams at Prodata PTexcellence have successfully delivered projects around the globe: Belgium, The Netherlands, Finland, USA, Tanzania, South-Africa, Ghana, Brasil, ...",
          website: "https://www.pptexcellence.com/",
          imag: "prodata"

        },
        {
          name: "TACK TECHNICS",
          segment: "Energy",
          activity: "Installation tailored energy solutions, including renewable energy.We specialize in a wide range of electrical services. Our expertise includes general electrical installations, where we carefully and efficiently supply the necessary electrical facilities. In addition, we are skilled in installing solar energy systems and grid infrastructure.",
          website: "https://tacktechnics.be/",
          imag: "ttack"

        },
        {
          name: "TARGA VIASAT",
          segment: "IOT and télématique",
          activity: "Targa Viasat Connect Belgium provides fleet tracking and IoT solutions across 17 African countries. They focus on SMEs in transport, logistics, and construction sectors. Their mission is to help clients go faster, cheaper, safer, and further through technology. They operate via certified local partners for sales, installation, and support. They plant 5 trees per device sold, supporting reforestation in Africa.",
          website: "https://targatelematics.com",
          imag: "cropped-targa-logo"

        },
        {
          name: "Vrije Universiteit Brussel",
          segment: "Research and Education",
          activity: "The Vrije Universiteit Brussel (VUB) is a dynamic and modern university nested consistently within the top 300 of the various global rankings with an international diverse student body, and an excellent position an innovative research (ranked #41 of more than 900 universities on SDG 9: innovation, Industry and Infrastructure). Represented here is the VUB Solvay Business School throught its Department of Business, specialized in sustainability, international business and complex infrastructure project management.",
          website: "https://www.vub.be/en",
          imag: "vrije"

        },
        {
          name: "Televic",
          segment: "Research and Education",
          activity: "Televic Education is a global leader in developing research-based solutions that help solve challenges in training, quality, certification, accreditation, ongoing assessment, and collaboration across a variety of industries.",
          website: "https://www.televic.com/en/education",
          imag: "televic"

        },
        {
          name: "Ghent University Association",
          segment: "Research and Education",
          activity: "The Africa Platform at Ghent University fosters academic collaboration between Ghent University and African institutions. It unites Africa-related expertise, promotes research visibility, and bridges academia with non-academic stakeholders. Through initiatives like the Afrika Focus journal and the GAP symposium, GAP advances knowledge exchange and awareness on African societal issues.",
          website: "https://www.africaplatform.ugent.be/",
          imag: "ghent"

        },
        // {
        //   name: "INFO GROUP GLOBAL",
        //   segment: "Trading",
        //   activity: "INFO GROUP GLOBAL is a corporate company that has been involved in trade. Has adopted Quality, Speed and Professionalism as its principle.",
        //   website: "https://infogroupglobal.com/",
        //   imag: "IIG-TRADING-2"

        // },
        {
          name: "Havrico Insurance",
          segment: "Insurance",
          activity: "We protect your assets & liabilities : Cargo Insurance, liability insurance, Charterers' Liability and Political Risks",
          website: "https://havrico.be/",
          imag: "havricos"

        },
        // {
        //   name: "MANAGAMENT TOOLS COMPANY (MT-C)",
        //   segment: "ICT",
        //   activity: "Software, web applications, and mobile apps for service industries.Easy-to-use solutions for mastering everything.",
        //   website: "https://mt-c.be/",
        //   imag: "cropped-LOGO_MTC-2"

        // },
        // {
        //   name: "Contipharma",
        //   segment: "Pharma",
        //   activity: "To develop and market innovative medical solutions that address unresolved public health challenges, focusing our expertise on:R&D of next-generation non-invasive diagnostics;Improving access to essential medicines that are in short supply or unaffordable.",
        //   website: "https://contipharma.com/en/",
        //   imag: "logo-defaut"

        // },
        {
          name: "Nipro Group",
          segment: "Health / Medical / Pharmaceuticals",
          activity: "Nipro Group is an international healthcare company providing products and solutions for hospitals and home care. It specializes in dialysis, disposable medical equipment, pharmaceutical devices, and training for healthcare professionals. Its goal: to improve the quality of care and patients' lives through innovation and safety.",
          website: "https://www.nipro-group.com/en",
          imag: "nipro"

        },
        {
          name: "GMANISERVICES",
          segment: "Construction & Engineering",
          activity: "Engineering in Instrumentation and Industrial Electricity : EPC and EPCM projects, particularly in the agri-food and energy sectors, delivering tailored technical solutions aligned with our customers’ requirements. '\r\n' Installation of Special Techniques in Buildings: low-voltage electrical systems, heating, ventilation, air conditioning, lightning protection, and fire safety systems for residential and commercial buildings.",
          website: "",
          imag: "GMANISERVICES"

        },
        // {
        //   name: "S.C.E.",
        //   segment: "Construction & Engineering",
        //   activity: "SCE designs square silos that take up less space than round silos and allow you to store 40% more. Thanks to the specific design, you can assemble our square silos in any production unit. Expanding your silo building afterwards will also not be a problem.",
        //   website: "https://www.sce.be",
        //   imag: "sce"

        // },
        {
          name: "Impala overseas",
          segment: "Development / Environmental / Ecological",
          activity: "At IMPALA Overseas we offer an extensive range of budget friendly environmental solutions, also known as Environomics*, to both the graphic arts’, the medical imaging, as well as several specialty industries all over Africa and the Middle East.",
          website: " https://www.eco3.com/",
          imag: "impala"

        },
        {

          name: "JAN DE NUL",
          segment: "Construction & Engineering",
          activity: "Our expertise lies in five main activities: offshore energy, dredging and maritime construction, civil construction, environmental activities and project development. From design and engineering to execution and maintenance, we unburden our clients with overall solutions that combine one, several or even all activities.",
          website: "https://www.willemen.be/en",
          imag: "jdn",

        },
        // {

        //   name: "Willemen Group",
        //   segment: "Construction & Engineering",
        //   activity: "Willemen Group is a leading Belgian family-owned construction company delivering sustainable building, infrastructure, and real estate projects from design through maintenance. With innovation, safety, and quality at its core, we bring even the most complex assignments to life.",
        //   website: "https://www.jandenul.com",
        //   imag: "willemen",

        // },
        {

          name: "Vyncke Clean Energy technology",
          segment: "Energy",
          activity: "With over 100 years of experience and craftsmanship in the field of combustion technology, we deliver tailor-made energy solutions to all industries and energy providers, globally.",
          website: "https://www.vyncke.com/",
          imag: "vyncke",

        },
        {

          name: "Ovation",
          segment: "Services / Consultancy",
          activity: "Ovation is a resource center for business incubators and accelerators that leverages the most effective methods of creativity and innovation.",
          website: "http://www.ovation.eco",
          imag: "Logo+Ovation+-+Vert+et+noir",

        },

        {

          name: "Euro-fit Milk Products",
          segment: "Agri-Food",
          activity: "Eurofit conducts prospecting on behalf of its clients in large-scale distribution, reaching out to various agri-food manufacturers until the desired product(s) is found.",
          website: "https://www.eurofit.be/en",
          imag: "eurofit",

        },
        {
          name: "MADYSANO",
          segment: "Agri-Food",
          activity: "We export machinery/equipment/miscellaneous products/food and non-food products from all over the world to our business partners in relevant Sub-Saharan African countries. We are constantly expanding and improving people's lives. We are building a global brand distribution solution, renowned for providing high-quality, innovative, healthy, environmentally friendly and appreciably manufactured products.",
          website: "http://www.madysano.be",
          imag: "MADYSANO",
        },
        {
          segment: "Transport & logistics",
          name: "Omnifreight",
          activity: "Founded in 2004, Omnifreight is a Belgian freight forwarding company, offering comprehensive logistics services for companies operating in a variety of sectors.Founded with a clear mission to simplify logistics processes for its customers, Omnifreight rapidly expanded its activities into fast-growing markets in Central, West and, more recently, East Africa.Our aim is to establish privileged relationships with Kenya importers in need of a reliable logistics partner. We are committed to providing a complete, practical and efficient supply chain service for their various imports.",
          imag: "omnifreight_logo",
          website: "http://www.omnifreight.eu/",
        },
        {
          segment: "Transport & logistics",
          name: "Piping Logistics",
          activity: "Piping Logistics delivers high-quality, certified piping components for fire sprinkler and HVAC installations. Since 2006, we combine innovation, large stock, and fast delivery to ensure safe, reliable, and efficient projects across Europe.",
          imag: "logo-profit",
          website: "https://www.pipinglogistics.eu/en/",
        },
        {
          segment: "Development / Environmental / Ecological",
          name: "BEEODIVERSITY",
          activity: "BeeOdiversity helps companies, cities, and regions create value through biodiversity. Using innovative tools such as bee biomonitoring, ecological analyses, and nature-based solutions, we measure, preserve, and enhance biodiversity. Our mission is to reduce pollution, restore ecosystems, and sustainably improve quality of life, while adding value to your projects and sites",
          imag: "beeodiversity",
          website: "https://beeodiversity.com/en/",
        },
        {
          segment: "Health / Medical / Pharmaceuticals",
          name: "Medic Clean Air",
          activity: "Medic Clean Air delivers fast, effective air purification solutions for hospitals. With mobile HEPA/ULPA units and isolation rooms, we minimize airborne infection risks in just half a day — no heavy construction, low maintenance, clinically proven worldwide.",
          imag: "mca",
          website: "https://mediccleanair.com/",
        },
        //  {
        //     segment: "Health / Medical / Pharmaceuticals",
        //     name: "Medisale",
        //     activity: "Medisale is a trusted partner in healthcare & wellness, distributing over 10,000 pharmaceutical, medical device, and cosmetic products throughout Belgium and Europe. We combine reliable logistics, strict compliance, and deep market expertise to ensure healthcare reaches those who need it most.",
        //     imag: "Medisale",
        //     website: "https://www.medisale.be/",
        //   },
        {
          segment: "Research and Education",
          name: "VITO",
          activity: "VITO is a research organization in the field of clean technologies and sustainable development.",
          imag: "VITO_new",
          website: "https://vito.be/en",
        },
        //  {
        //     segment: "Financial Services / Financial Technology",
        //     name: "Ebury",
        //     activity: "Ebury empowers businesses to trade globally by offering seamless international payments, multi-currency accounts, FX risk management, and short-term financing — all through a unified fintech platform.",
        //     imag: "ebury",
        //     website: "https://www.ebury.be/",
        //   },
        {
          segment: "Chemicals & Materials",
          name: "EP Plus",
          activity: "EP Plus distributes high-quality epoxy resins and hardeners across Europe, offering personalized technical support, fast delivery, and sustainable solutions like bio-based epoxies with reduced CO₂ footprint.",
          imag: "ep",
          website: "https://www.epplus.be/",
        },
        {
          segment: "Energy",
          name: "Infraneos",
          activity: "Infraneos delivers cutting-edge solutions in innovation management, IT, project development, and energy & infrastructure systems. We help organizations optimize performance, manage assets and energy, and execute projects sustainably with engineering & consulting excellence.",
          imag: "cropped-logo_infraneos",
          website: "https://infraneos.com/",
        },

      ],
      listent: [
        {
          segment: "Financial Services / Financial Technology",
          name: "Ebury",
          activity: "Ebury empowers businesses to trade globally by offering seamless international payments, multi-currency accounts, FX risk management, and short-term financing — all through a unified fintech platform.",
          imag: "ebury",
          website: "https://www.ebury.be/",
        },
        {
          name: "MaryaNutri",
          segment: "Agri-Food",
          activity: "At MaryaNutri, we're creating unique, innovative insect-fortified foods that are nutritious and sustainable. Our goal is not just temporary relief, but lasting change to end poverty and hunger around the world. With roots in Kenya and our eyes on the global stage, we're working to make a real difference.",
          website: "https://www.maryanutri.com/",
          imag: "logo_light"

        },
        {
          segment: "Health / Medical / Pharmaceuticals",
          name: "Medisale",
          activity: "Medisale is a trusted partner in healthcare & wellness, distributing over 10,000 pharmaceutical, medical device, and cosmetic products throughout Belgium and Europe. We combine reliable logistics, strict compliance, and deep market expertise to ensure healthcare reaches those who need it most.",
          imag: "Medisale",
          website: "https://www.medisale.be/",
        },
        {

          name: "JAN DE NUL",
          segment: "Construction & Engineering",
          activity: "Marine works, dredging, construction, infrastructure, engineering.",
          website: "https://www.willemen.be/en",
          imag: "jdn",

        },
      ]
    };
  },
  computed: {
    filteredUser() {
      const query = this.searchQuery.toLowerCase();
      if (this.searchQuery === "") {
        return this.secteurKenya;
      }
      return this.secteurKenya.filter((user) => {
        return user.toLowerCase().includes(query);
      });
    },
    setSearchSector() {
      return this.listentreprise
        .filter((sector) => !sector.segment.indexOf(this.searchSector))
        .sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          } else {
            return 1;
          }
        });
    },
    //   filterByCategory: function () {

    // }
  },
  methods: {
    showVisiblite() {
      this.Visibilte = false
    },

    showInscription() {
      this.$router.push("/inscription");
    },
    setSearchQuery(data) {
      this.searchQuery = data;
    },
    changeActive(e) {
      e.target.classList.add("checked");
    },
    changeColor(e) {
      e.target.classList.add("red");
    },
    showMission() {
      this.$router.push("/mission-economique-belge-au-senegal");
    },

  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
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

.couleur {
  background-color: #211a19;
}

.couleur:hover {
  background-color: #000000;
}




/* label.checked {
    background-color: gray;
    color: black;
  } */
</style>