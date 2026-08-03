<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 font-sans">
    <HelloWorld />

    <!-- 1. HERO SECTION -->
    <header class="relative bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
      <div class="absolute inset-0 opacity-20 bg-[url('https://unsplash.com')] bg-cover bg-center mix-blend-overlay">
      </div>
      <div class="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 flex flex-col items-start gap-4">
        <span
          class="bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
          Événement Économique
        </span>
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
          Mission Économique Guinée <span class="text-amber-400">Conakry</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-300 max-w-2xl mt-2 font-light">
          Développement des opportunités commerciales et renforcement des synergies bilatérales belgo-guinéennes.
        </p>
        <div class="flex flex-wrap gap-4 mt-6 text-sm font-semibold">
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
            <span class="text-amber-400">📅</span>{{ infosMission.date }}
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
            <span class="text-amber-400">📍</span> Conakry, Guinée
          </div>
        </div>
      </div>
    </header>

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
              class="ms-1 font-medium text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white transition-colors">Événement</a>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center gap-1">
            <svg class="w-3 h-3 text-slate-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 9 4-4-4-4" />
            </svg>
            <span class="ms-1 font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider text-xs">Mission
              en
              Guinée conakry</span>
          </div>
        </li>
      </ol>
    </nav>

    <!-- 2. PRÉSENTATION & OBJECTIFS -->
    <section class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 items-start">
      <div class="md:col-span-2 space-y-6">
        <h2 class="text-3xl font-bold text-slate-900 border-b-4 border-amber-500 pb-2 inline-block">
          À propos de la Mission
        </h2>
        <p class="text-slate-600 leading-relaxed text-lg">
          Dans le cadre du déploiement des activités économiques de la Délégation Belge, cette mission exclusive à
          Conakry vise à connecter les acteurs majeurs de l'industrie, de l'ingénierie et des services. Un carrefour
          stratégique pour catalyser la croissance régionale.
        </p>
        <!-- Exemple d'insertion dynamique de texte -->
        <div class="bg-white border-l-4 border-indigo-600 p-6 rounded-r-xl shadow-sm">
          <p class="italic text-slate-700">"{{ infosMission.description }}"</p>
        </div>
      </div>

      <!-- Chiffres Clés / Rappels -->
      <div class="bg-indigo-900 text-white p-8 rounded-2xl shadow-xl space-y-6">
        <h3 class="text-xl font-bold tracking-wide">Indicateurs Clés</h3>
        <div class="space-y-4 divide-y divide-indigo-800">
          <div class="pt-4 first:pt-0">
            <div class="text-3xl font-extrabold text-amber-400">13.10.2026</div>
            <div class="text-sm text-indigo-200">Date officielle de la rencontre à Conakry</div>
          </div>
          <div class="pt-4">
            <div class="text-3xl font-extrabold text-amber-400">B2B</div>
            <div class="text-sm text-indigo-200">Sessions de réseautage personnalisé</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. PARTENAIRES & ENTREPRISES (Grille de cartes moderne) -->
    <!-- <section class="bg-slate-100 py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-3xl font-bold text-slate-900">Entreprises & Secteurs Participants</h2>
          <p class="text-slate-500 mt-2">Découvrez les pôles d'expertises représentés lors de ce forum économique.</p>
        </div>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(entreprise, index) in entreprisesExemple" :key="index" 
               class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-50 text-indigo-700">
                  {{ entreprise.secteur }}
                </span>
              </div>
              <h4 class="text-lg font-bold text-slate-900 mb-2">{{ entreprise.name }}</h4>
              <p class="text-sm text-slate-600 line-clamp-3 mb-4">{{ entreprise.about }}</p>
            </div>
            <a :href="entreprise.website" target="_blank" class="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 gap-1 mt-2">
              Visiter le site <span class="text-xs">→</span>
            </a>
          </div>
        </div>
      </div>
    </section> -->
    <section class="bg-slate-100 py-16">
      <div class="max-w-7xl mx-auto px-6">

        <!-- En-tête de section -->
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2 class="text-3xl font-bold text-slate-900">Entreprises & Secteurs Participants</h2>
          <p class="text-slate-500 mt-2">Découvrez les pôles d'expertises représentés lors de ce forum économique.</p>
        </div>

        <!-- BARRE DE FILTRES DYNAMIQUE -->
        <div class="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto">
          <button v-for="secteur in listeSecteurs" :key="secteur" @click="secteurSelectionne = secteur" :class="[
            'px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 border shadow-sm',
            secteurSelectionne === secteur
              ? 'bg-indigo-600 text-white border-indigo-600 scale-105'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-indigo-600'
          ]">
            {{ secteur }}
          </button>
        </div>

        <!-- GRILLE DES ENTREPRISES FILTRÉES ET TRIÉES -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(entreprise, index) in entreprisesFiltreesEtTriees" :key="index"
            class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 flex flex-col justify-between">
            <div>
              <!-- EN-TÊTE DE LA CARTE : BADGE À GAUCHE & LOGO À DROITE -->
              <div class="flex items-center justify-between gap-4 mb-4">
                <!-- Cliquer sur le badge du secteur filtre aussi la page directement -->
                <button @click="secteurSelectionne = entreprise.secteur"
                  class="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors">
                  {{ entreprise.secteur }}
                </button>

                <!-- PETIT LOGO À DROITE (S'affiche uniquement s'il y a une image) -->
                <div v-if="entreprise.image"
                  class="w-10 h-10 rounded-lg overflow-hidden border border-slate-100 bg-slate-50 flex-shrink-0 flex items-center justify-center p-1">
                  <img :src="require(`@/imgguinneeconakry/${entreprise.image}.png`)" :alt="`Logo ${entreprise.name}`"
                    class="max-w-full max-h-full object-contain" />
                </div>
              </div>

             <!-- TITRE ET DESCRIPTION AVEC DÉPLOIEMENT INTERACTIF -->
<h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
  {{ entreprise.name }}
</h4>

<div>
  <!-- Le texte bascule entre tronqué (line-clamp-3) et entier (line-clamp-none) -->
  <p 
    :class="[
      'text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed transition-all duration-300',
      entreprise.deplie ? 'line-clamp-none mb-2' : 'line-clamp-3 mb-1'
    ]"
  >
    {{ entreprise.about || 'Aucune description disponible.' }}
  </p>

  <!-- Petit bouton discret "Lire plus / Lire moins" si le texte est long -->
  <button 
    v-if="entreprise.about && entreprise.about.length > 120"
    @click.stop="entreprise.deplie = !entreprise.deplie"
    type="button"
    class="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors mb-4 focus:outline-none"
  >
    {{ entreprise.deplie ? 'Réduire ▲' : 'Lire la suite ▼' }}
  </button>
</div>


            </div>

            <!-- PIED DE LA CARTE : ACTIONS SITE WEB & CONTACT EMAIL -->
            <div
              class="pt-4 border-t border-slate-50 dark:border-slate-700/50 mt-2 flex items-center justify-between gap-2">

              <!-- LIEN SITE INTERNET -->
              <a :href="entreprise.website || '#'" target="_blank" :class="[
                'inline-flex items-center text-xs font-bold gap-1 transition-colors',
                (!entreprise.website || entreprise.website === '#')
                  ? 'text-slate-300 dark:text-slate-600 cursor-not-allowed pointer-events-none'
                  : 'text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300'
              ]">
                {{ (!entreprise.website || entreprise.website === '#') ? 'Aucun site' : 'Site web' }}
                <span v-if="entreprise.website && entreprise.website !== '#'" class="text-xs">→</span>
              </a>

              <!-- ACTION CONTACT MAIL (S'ouvre dans le logiciel de messagerie de l'utilisateur) -->
              <a v-if="entreprise.email" :href="`mailto:${entreprise.email}?subject=Contact B2B - Mission Belge`"
                class="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
                :title="`Contacter ${entreprise.name} par e-mail`">
                <svg xmlns="http://w3.org" width="14" height="14" fill="currentColor" class="bi bi-envelope"
                  viewBox="0 0 16 16">
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                Contact
              </a>
            </div>
          </div>
        </div>

        <!-- Message si aucun résultat (sécurité de code) -->
        <div v-if="entreprisesFiltreesEtTriees.length === 0" class="text-center text-slate-500 py-12">
          Aucune entreprise ne correspond à ce secteur.
        </div>


      </div>
    </section>

    <!-- 4. PROGRAMME / TIMELINE -->
    <section class="max-w-4xl mx-auto px-6 py-16">
      <h2 class="text-3xl font-bold text-slate-900 text-center mb-12">Programme de la Journée</h2>

      <div class="relative border-l-2 border-indigo-200 ml-4 md:ml-32 space-y-8">
        <div v-for="(agenda, i) in programme" :key="i" class="relative pl-6">
          <!-- Heure sur le côté gauche en format Desktop -->
          <div class="hidden md:block absolute -left-36 top-0 w-28 text-right font-bold text-indigo-600">
            {{ agenda.heure }}
          </div>
          <!-- Point sur la ligne -->
          <div class="absolute -left-1.5 top-1.5 w-3 h-3 bg-amber-500 rounded-full border-2 border-white"></div>

          <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <span class="inline-block md:hidden text-xs font-bold text-indigo-600 mb-1">{{ agenda.heure }}</span>
            <h4 class="font-bold text-slate-900 text-base">{{ agenda.titre }}</h4>
            <p class="text-sm text-slate-500 mt-1">{{ agenda.details }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. CALL TO ACTION (CTA) -->
    <section class="max-w-7xl mx-auto px-6 pb-16">
      <div
        class="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
        <div class="relative z-10 max-w-2xl mx-auto space-y-6">
          <h3 class="text-2xl md:text-4xl font-bold">Vous souhaitez participer ou obtenir plus d'informations ?</h3>
          <p class="text-indigo-200 text-sm md:text-base font-light">
            Prenez directement contact avec les services de la délégation ou inscrivez-vous au forum d'affaires.
          </p>
          <div class="flex flex-wrap justify-center gap-4 pt-2">
            <a href="mailto:ivan@belemb.eu"
              class="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg shadow-md transition-colors duration-200 text-sm">
              Contacter la Délégation
            </a>
          </div>
        </div>
      </div>
    </section>
    <MyFooter />
  </div>
</template>

<script setup>
import HelloWorld from './HelloWorld.vue';
import MyFooter from './MyFooter.vue'
import { ref, computed } from 'vue'

// Données réactives pour gérer dynamiquement le projet de Mr Korsak
const infosMission = ref({
  titre: "Mission Guinée",
  date: "13 Octobre 2026",
  lieu: "Conakry",
  description: "Séance d'ouverture officielle des opportunités d'affaires multilatérales en Afrique de l'Ouest sous la supervision du conseiller économique."
})

// Intégration propre de quelques profils de votre document (Exemples)
const entreprisesExemple = ref([
  {
    name: "AGENCE TENNEN PLUS - MSD VOYAGE",
    secteur: "Transport & Logistique",
    about: "Agence de voyage proposant des services de transport et de logistique vers l'Afrique de l'Ouest.",
    website: "#",
    email: "Kalilcamus3@hotmail.com",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "AISSATOU BELLA DIALLO",
    secteur: "Juridique & Conseil",
    about: "Avocate belge spécialisée en droit commercial et en conseil juridique.",
    website: "https://litiss.be/avocats/",
    email: "aissatoubella.diallo@avocat.be",
    image: "litis-s.be_logo-sans-tagline-small.svg",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "ASPAC TECHNICS BV",
    secteur: "Ingénierie & Hydraulique",
    about: "ASPAC Technics – Entrepreneur EPC + F, spécialiste de l’ingénierie, de la construction et du financement de projets hydrauliques, accompagne les ministères de l’eau, les agences publiques et les opérateurs privés en proposant des solutions innovantes et durables dans trois domaines clés :- Eau potable : de la captation au raccordement, avec des infrastructures performantes pour le traitement, le pompage, le stockage et la distribution.- Eaux usées : de la collecte au rejet, avec une approche circulaire intégrant la transformation des eaux traitées en ressources (engrais et énergie). Réduction du Volume d’Eau Non Facturé (ENF) : amélioration de la rentabilité des services d’eau par la maîtrise des pertes physiques et commerciales.",
    website: "https://aspac-technics.com",
    email: "finance@aspacintl.com",
    image: "aspac",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "AUGEAS",
    secteur: "Environnement & Recyclage",
    about: "Start-up belge développant un système intelligent de collecte et de tri des déchets aluminums récompensant les communautés locales pour leur participation. Nous revendons les déchets alumium à des centres de recyclage. Nous avons des premières activités au Sénégal et nous nous déployons en Guinée à part de octobre 2026.",
    website: "https://augeas.io",
    email: "greg@augeas.io",
    image: "augeas",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "AVOCAT AMAURY PIRLET",
    secteur: "Juridique & Conseil",
    about: "Cabinet d'avocats belge spécialisé en droit des affaires, couvrant notamment le droit commercial et des sociétés.",
    website: "https://avenslegal.be/equipe/amaury-pirlet/",
    email: "a.pirlet@avenslegal.be",
    image: "AVENS-logo_2afaa567",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "BEFLOWS",
    secteur: "Logistique & Fret",
    about: "Entreprise de cargo et de fret basée à Anvers et à Dakar.",
    website: "https://beflows.com",
    email: "alexis@beflows.com",
    image: "logo_beflows-inverted-copy",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "CARMEUSE",
    secteur: "Industrie & Matériaux",
    about: "Carmeuse est une société familiale belge. Elle compte parmi les leaders mondiaux dans la production de chaux, et autres minéraux, utilisés dans une large variété d'applications industrielles",
    website: "https://www.carmeuse.com",
    email: "",
    image: "carmeuse",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "CCAFRIC BV - COMPTOIR DES CHARGEURS AFRICAINS",
    secteur: "Commerce International",
    about: "Société de commerce international, conseil stratégique et opérateur logistique spécialisé dans la facilitation des échanges entre l'Afrique et le reste du monde  - Spécialisée dans la documentation à l'export du BESC (Bordereau Electronique de Suivi des Cargaisons)",
    website: "https://ccafric.com",
    email: "contact@ccafric.com",
    image: "LOGO1",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "CHAMBRE DE COMMERCE BELGO CAMEROUNAISE",
    secteur: "Réseau Économique",
    about: "Chambre de commerce promoteur des échanges économiques entre la Belgique et le Cameroun.",
    website: "#",
    email: "prosperyamen@ccic-chambre.com",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "Conti-Lines",
    secteur: "Transport Maritime",
    about: "Nous sommes spécialisés dans le transport maritime à l'aide d'une flotte de vraquiers de petite taille à ultramax.",
    website: "https://contilines.be",
    email: "g.brion@conti-invest.be",
    image: "CL-RGB150",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "DE SMET ENGINEERS & CONTRACTORS",
    secteur: "Ingénierie & Agro-industrie",
    about: "EPC(F) & EPCM offrant les études et le développement de grands projets agro-industriels, spécialisé dans le raffinage de sucre, sucreries de cane, éthanoleries, farine et amidon manioc, maïs.",
    website: "https://dsengineers.com",
    email: "guy.vandenbossche.ext@dsengineers.com",
    image: "desmet-engineers-logo-web",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "DEGRILLON TECHNICAL SUPPLIES",
    secteur: "Fournitures Techniques",
    about: "Entreprise belge basée à Anvers, spécialisée dans l'exportation de fournitures techniques (câbles d'acier & cordages, pdr véhicule portuaire, pièces maritimes: pompes, compresseurs et moteurs) pour les secteurs maritime, offshore, énergétique et minier en Afrique du Nord et de l'Ouest.",
    website: "https://degrillon.com",
    email: "info@degrillon.be",
    image: "DTS_logo_300",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "Enabel",
    secteur: "Développement International",
    about: "La mission principale d’Enabel est de réaliser les priorités politiques de la coopération gouvernementale belge et de promouvoir un développement international durable.",
    website: "https://enabel.be",
    email: "halewijn.timmerman@enabel.be",
    image: "enabel-logo-white",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "ERRATUM FASHION",
    secteur: "Mode & Design",
    about: "Maison de mode bruxelloise spécialisée dans la création contemporaine durable inspirée des textiles africains, accompagnant les talents émergents et développant des projets culturels à la croisée de la mode, du patrimoine et de l’innovation sociale.",
    website: "https://erratum.fashion",
    email: "erratum.fashion@gmail.com",
    image: "erratum",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "FRISOMAT",
    secteur: "Construction Métallique",
    about: "Entreprise belge fabricante de bâtiments métalliques préfabriqués formés à froid, présents dans plus de 80 pays.",
    website: "https://frisomat.com",
    email: "joris.smets@frisomat.com",
    image: "frisomat",
    deplie: false // Indispensable pour le fonctionnement du bouton 
  },
  {
    name: "FSE INTERNATIONAL",
    secteur: "Gestion de Projets & Export",
    about: "Le GROUPE FSE est l’une des principales sociétés de réalisation de projets d’équipements biomédicaux et de laboratoires à l’international. Après avoir développé de solides références sur des appels d’offres financés par des bailleurs internationaux, la société s’est également engagée dans la réalisation de projets sur financement d’État et sur crédits export.",
    website: "https://fse-export.com",
    email: "Nsalissou@fse-export.com",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "GVISION SRL",
    secteur: "Solutions Digitales",
    about: "Entreprise belge spécialisée dans les solutions digitales et les services informatiques.",
    website: "https://gvision.be",
    email: "invoice@gvision.be",
    image: "GVISION-IT-4955-scaled",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "HAWA KALOGA LAW OFFICE",
    secteur: "Juridique & Conseil",
    about: "Cabinet d'avocats belge spécialisé en droit des affaires et en conseil juridique pour entreprises.",
    website: "https://Avocats.be",
    email: "h.kaloga@avocat.be",
    image: "avocat",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "IMS SAFETY CONSULTING",
    secteur: "Sécurité au Travail",
    about: "Société de conseil en prévention et sécurité au travail.",
    website: "https://imssafeconsulting.com",
    email: "fatou.Ndoye@imssafeconsult.com",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "JAN DE NUL",
    secteur: "Infrastructures & Maritime",
    about: "Notre expertise se décline dans cinq activités principales : l’énergie offshore, le dragage et la construction maritime, la construction civile, les activités environnementales et le développement de projets.",
    website: "#",
    email: "",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "KEKURA DRINKS",
    secteur: "Agroalimentaire & Boissons",
    about: "Entreprise belge produisant des boissons gazeuses naturelles inspirées de recettes africaines (Bissap à l'hibiscus, Ginger-Ananas, Tamarin-Menthe), 100 % naturelles, sans additifs, commercialisées en canettes en Belgique.",
    website: "https://kekuradrinks.be",
    email: "orders@kekuradrinks.be",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "KOLOMOU AUTO SERVICE",
    secteur: "Automobile",
    about: "Entreprise spécialisée dans l'entretien et la réparation automobile.",
    website: "#",
    email: "kolomouservice@gmail.com",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "LES DELICES DE AIDA A.S.B.L.",
    secteur: "Agroalimentaire & Artisanat",
    about: "Association belge spécialisée dans la boulangerie-pâtisserie artisanale de qualité.",
    website: "https://delicesdaida.com",
    email: "sarraida0000@gmail.com",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "MADYSANO",
    secteur: "Export & Distribution",
    about: "Nous exportons des machines/équipements/produits divers/aliments et non alimentaires du monde entier vers nos partenaires commerciaux dans les pays d'Afrique subsaharienne concernés.Nous ne cessons de nous développer et d'améliorer la vie des gens. Nous construisons une solution de distribution de marque mondiale, réputée pour fournir des produits de haute qualité, innovants, sains, respectueux de l'environnement et fabriqués de manière appréciable.",
    website: "https://madysano.be",
    email: "ms@madysano.be",
    image: "akio_logo_w_out_bg",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "METACONNEXIONS",
    secteur: "Marketing & Communication",
    about: "MetaConnexions est un cabinet de conseil stratégique basé en Belgique, spécialisé dans le développement de partenariats économiques entre l'Europe et l'Afrique. Nous accompagnons les entreprises, investisseurs et porteurs de projets dans la conception, la structuration et le développement de projets à fort potentiel, avec une expertise particulière en Afrique centrale et une volonté d'étendre progressivement notre réseau de partenaires vers d'autres régions du continent. Nos services couvrent notamment la structuration de modèles économiques, les études de faisabilité, la recherche de partenaires, la gestion de projets, l'accompagnement à l'implantation sur les marchés africains et la facilitation de collaborations entre acteurs économiques européens et africains. Grâce à une double compréhension des réalités européennes et africaines, MetaConnexions agit comme un facilitateur de collaborations durables fondées sur la confiance, la création de valeur et le transfert de compétences. Notre ambition est de contribuer au développement d'un secteur privé africain dynamique tout en créant de nouvelles opportunités d'affaires pour les entreprises européennes.",
    website: "https://beacons.ai/MetaConnexions",
    email: "nc.meta@gmail.com",
    image: "beacon",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "NEO TECH",
    secteur: "Technologies & Conseil",
    about: "NEO-TECH est une société spécialisée dans la fourniture d'équipements didactiques, techniques et scientifiques destinés à la formation professionnelle, aux écoles techniques et secondaires, à l'enseignement supérieur, aux universités ainsi qu'aux laboratoires de recherche et de contrôle. De plus, NEO-TECH S.A. garantit la formation des utilisateurs, enseignants, formateurs et techniciens qui seront responsables de l'utilisation et de la maintenance de ces équipements.",
    website: "https://www.neo-tech.be/",
    email: "",
    image: "neotech",
    deplie: false // Indispensable pour le fonctionnement du bouton 
  },
  {
    name: "NINETEEN CONSULTING",
    secteur: "Conseil en Gestion",
    about: "Cabinet de conseil et coaching professionnel pour particuliers et entreprises. Logiciel de gestion pour les PME en Afrique.",
    website: "https://bamiwest.com",
    email: "nineteenconsult@gmail.com",
    image: "LOGO-BW-03-e1634835391207",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "OMNIFREIGHT BV",
    secteur: "Logistique & Fret",
    about: "Omnifreight BV, freight forwarder basé à Anvers, est votre partenaire stratégique pour des solutions logistiques efficaces entre l’Europe et l’Afrique. Spécialisés en fret maritime et aérien, nous combinons expertise locale et excellence opérationnelle. Grâce à une approche personnalisée et orientée client, nous facilitons les échanges commerciaux sur des corridors clés du continent africain. Fiabilité, réactivité et transparence sont au cœur de notre engagement. Rencontrons-nous pour optimiser vos importations depuis l’Europe avec un service fluide, fiable et sur mesure.",
    website: "https://www.omnifreight.eu",
    email: "Transport@omnifreight.eu",
    image: "logo-omnifreight-final",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "OVATION",
    secteur: "Innovation & Entrepreneuriat",
    about: "Ovation accompagne les grandes entreprises industrielles dans leur démarche d'innovation et dans le développement de la sous-traitance locale. Pour ce faire, nous identifions avec elles leurs besoins et leurs obstacles concrets, puis nous soutenons des équipes locales dans l'accélération de projets répondant aux défis identifiés, en associant intrapreneurs, entrepreneurs, investisseurs et incubateurs locaux, en Europe, en Afrique et au Moyen-Orient.",
    website: "https://ovation.eco",
    email: "ovation@ovation.eco",
    image: "Logo+Ovation+-+Vert+et+noir",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "S&M FIEDA",
    secteur: "Investissement & Événementiel",
    about: "ASBL belge organisant la FIEDA (Forum International de l'Entrepreneuriat de la Diaspora Africaine), événement majeur dédié à l'entrepreneuriat de la diaspora africaine autour de l'habitat durable, l'industrie et les investissements.",
    website: "https://asbl-sm.org",
    email: "anambengue5@gmail.com",
    image: "Logo-ASBL-VZW-SM-transparent-1",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "STROPCIM",
    secteur: "Construction Métallique",
    about: "STROPCIM est un cabinet de conseil basé à Bruxelles, crée en 2018 et spécialisé dans les achats, la supply chain et la structuration de chaînes de valeur sur le corridor Afrique-Europe. Le cabinet accompagne entreprises et institutions dans l'optimisation de leurs approvisionnements, le développement du contenu local et l'ancrage territorial de la valeur, avec un intérêt particulier pour les secteurs miniers et extractifs, infrastructures, bancaires, telco.",
    website: "https://stropcim.com",
    email: "mohamed.barry@stropcim.com",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
 {
  name: "SINALOCA",
  secteur: "Transport & Logistique", // Secteur le plus adapté pour l'import/export de véhicules et engins
  about: "Spécialiste import/export de véhicules légers 4x4, véhicules poids lourds, engins de travaux publics et miniers. Ainsi que pièces de rechange toutes marques pour toutes destinations dans le monde.",
  website: "http://gmequipments.com",
  email: "sinalocasrl@gmail.com",
  image: "gme_logo_nav",
  deplie: false
},
{
  name: "U'HOPE COMPANY",
  secteur: "Technologies & Conseil", // Secteur adapté pour les logiciels et le numérique
  about: "U'HOPE COMPANY est une entreprise belge à impact social et éducatif, spécialisée dans le développement de logiciels pédagogiques et l'accompagnement numérique.",
  website: "https://uhope.eu/",
  email: "info@impact-office.net",
  image: "uhope",
  deplie: false
},
  {
    name: "TBWORLD COACHING AND CONSULTANCY",
    secteur: "Coaching & Consulting",
    about: "Entreprise belge de coaching et des conseils spécialisée dans les études de marché (privé, institutionnel et public), les formations( Formation des employés et cadres privés et publics) et dans la stratégie de croissance d’entreprise( structuration, performance ou lever des fonds, outils des gestion d’entreprise)",
    website: "https://tbworld.be",
    email: "Info@tbworld.be",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "T-LEX & ASSOCIATES",
    secteur: "Juridique & IT",
    about: "Cabinet juridique belge spécialisé en droit des technologies de l'information, vie privée et propriété intellectuelle.",
    website: "https://t-lex.associates",
    email: "gt@t-lex.associates",
    image: "T-LEX-Logo-Blanc",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "TERRACALCO SÉNÉGAL (CARMEUSE)",
    secteur: "Agriculture & Agroalimentaire",
    about: "La société TerraCalco Sénégal, créée en 2023, est une filiale du groupe Carmeuse, un des leaders mondiaux de la production et de la commercialisation de chaux. Nous proposons aux agriculteurs des amendements minéraux à base de chaux, de calcaire et de dolomie pour restaurer durablement la fertilité des terres agricoles. Nos solutions corrigent l'acidité des sols, apportent le calcium et le magnésium qui sont des éléments nutritifs indispensables aux plantes et en conséquence contribuent à augmenter les rendements et la rentabilité des exploitations",
    website: "#", // Carmeuse n'a pas de site dédié mentionné pour le Sénégal, vous pouvez laisser "#"
    email: "", // Note : l'e-mail de contact Carmeuse/Stropcim extrait de votre document
    image: "", // Laissez vide si vous n'avez pas encore leur logo carré
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "TRAFIQURAIL BV",
    secteur: "Transport Ferroviaire",
    about: "Entreprise belge spécialisée dans la gestion et l'exploitation intégrales des opérations ferroviaires (transport de fret minier et agricole, conception de corridors, formation, maintenance et réhabilitation de matériel roulant) avec une expertise internationale au service des gestionnaires d'infrastructures et opérateurs publics et privés.",
    website: "https://trafiqurail.com",
    email: "ibrahima.pellel.bah@trafiqurail.com",
    image: "LOGO-clean",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "TSR GROUP",
    secteur: "Conseil en Gestion",
    about: "Groupe spécialisé dans les services de conseil et d'accompagnement en gestion d'entreprise.",
    website: "https://tsrgroup.be",
    email: "info@tsrgroup.be",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "VIXA CONSULTING SPL",
    secteur: "Conseil en Gestion",
    about: "Vixa Consulting est une société belge spécialisée dans le développement logiciel, la digitalisation et l'automatisation des tests et de l'assurance qualité (applications web, API, tests de performance et de charge), ainsi que dans les solutions d'intelligence artificielle. Nous accompagnons banques, assurances, télécoms et grandes entreprises dans la conception, la fiabilisation et l'optimisation de leurs applications et processus digitaux, avec des références sur de grands comptes européens et une capacité de livraison adaptée aux marchés d'Afrique de l'Ouest.",
    website: "https://vixaconsulting.be",
    email: "xavier.bovi@vixaconsulting.be",
    image: "vixa-logo-C13Xwh6I",
    deplie: false // Indispensable pour le fonctionnement du bouton
  }
])


const programme = ref([
  {
    heure: "10:00",
    titre: "Sessions B2B — Non-stop (Sur invitation uniquement)",
    details: "Rencontres d'affaires individuelles et ciblées entre les entreprises belges et guinéennes de 10h00 à 15h00."
  },
  {
    heure: "15:00",
    titre: "Clôture des rencontres d'affaires",
    details: "Fin des sessions de maillage commercial et de réseautage de l'après-midi."
  },
  {
    heure: "18:30",
    titre: "Soirée de clôture (Sur invitation uniquement)",
    details: "Cocktail officiel de clôture et opportunités d'échanges de haut niveau."
  }
])


// 2. État du secteur actuellement sélectionné ("Tous" par défaut)
const secteurSelectionne = ref('Tous')

// 3. Extraction automatique de la liste des secteurs uniques pour les boutons
const listeSecteurs = computed(() => {
  const secteurs = entreprisesExemple.value.map(e => e.secteur)
  // Set élimine les doublons, puis on trie les secteurs par ordre alphabétique
  return ['Tous', ...new Set(secteurs)].sort((a, b) => a.localeCompare(b))
})

// 4. Tri alphabétique + Filtrage dynamique
const entreprisesFiltreesEtTriees = computed(() => {
  // On copie le tableau pour ne pas modifier l'original, puis on trie par nom (A-Z)
  let resultat = [...entreprisesExemple.value].sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  // Si un secteur spécifique est cliqué, on filtre la liste triée
  if (secteurSelectionne.value !== 'Tous') {
    resultat = resultat.filter(e => e.secteur === secteurSelectionne.value)
  }

  return resultat
})
</script>
