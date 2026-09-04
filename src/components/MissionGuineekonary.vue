<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 font-sans">
     <header class="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 shadow-sm sticky top-0 z-40">
      <div class="flex flex-col md:flex-row justify-between items-center mx-auto max-w-screen-xl p-4 gap-4">
        
        <!-- Zone de gauche : Logos des institutions partenaires -->
        <div class="flex items-center gap-6">
          <a href="https://senegal.diplomatie.belgium.be/fr" target="_blank" class="transition-opacity hover:opacity-80">
            <img src="../assets/logoambassate.png" class="h-10 md:h-12 w-auto object-contain" alt="Logo Ambassade de Belgique" />
          </a>
          <!-- <div class="h-8 w-px bg-slate-200 dark:bg-slate-600 hidden sm:block"></div> -->
          <!-- <a href="https://senegal.diplomatie.belgium.be/fr" target="_blank" class="transition-opacity hover:opacity-80">
            <img src="../assets/logo-ambassade.png" class="h-10 md:h-12 w-auto object-contain" alt="Logo Ambassade de Belgique" />
          </a> -->
        </div>
        
       

      </div>
    </header>

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
          Mission Économique à <span class="text-amber-400">Conakry</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-300 max-w-2xl mt-2 font-light">
          Développement des opportunités commerciales et renforcement des synergies bilatérales belgo-guinéennes.
        </p>
        <div class="flex flex-wrap gap-4 mt-6 text-sm font-semibold">
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                 <svg class="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://w3.org">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg><span>{{ infosMission.date }}</span>
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
  <div class="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
    <div class="relative z-10 max-w-2xl mx-auto space-y-6">
      
      <!-- Titre principal conservé -->
      <h3 class="text-2xl md:text-4xl font-bold">Vous souhaitez participer ou obtenir plus d'informations ?</h3>
      
      <!-- Nouveau texte officiel en rouge demandé sur l'image -->
      <!-- AJUSTEMENT : Texte entre parenthèses avec un contraste parfait (Ambre/Orange doux) -->
      <p class="text-amber-400 font-semibold text-sm md:text-base tracking-wide bg-white/5 px-5 py-2.5 rounded-full inline-flex items-center gap-2 backdrop-blur-sm border border-white/10">
        <span class="text-red-500 font-bold animate-pulse">⚠️</span>
        <span>Inscription gratuite sujette à la validation de vos informations</span>
      </p>
      
      <!-- Zone du bouton modifiée selon la capture -->
      <div class="flex justify-center pt-2">
        <a 
          href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=ChDQhrrze0OBg7j0oIDfptzLi3s05nVCiXmDOxCK6opUOENGMzQ4Vk43WkYzWTRBTU1SRDhEUk9VNS4u&route=shorturl" 
          target="_blank"
          class="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-10 py-3.5 rounded-lg shadow-md transition-all duration-200 text-sm uppercase tracking-widest"
        >
          INSCRIPTION
        </a>
      </div>

    </div>
  </div>
</section>

    <MyFooter />
  </div>
</template>

<script setup>
import HelloWorldTow from './HelloWorldTow.vue';
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
    name: "AGENCE TENNEN PLUS -MSD VOYAGE",
    secteur: "Tourisme",
    about: "Agence de voyage proposant des services de transport et de logistique vers l'Afrique de l'Ouest.",
    website: "#",
    email: "Kalilcamus3@hotmail.com",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
   {
    name: "M2B",
    secteur: "Energie - domotique",
    about: "Actifs dans de nombreux secteurs, tels que: la domotique, les systèmes de réfrigération, la vidéo surveillance, la construction modulaire, l'énergie solaire, l'énergie hydro-électrique, l'application de résine (au sol, sur tuyaux, sur toiture, étanchéité,...), la structuration de projets entrepreneuriaux ou l'économie sociale.",
    website: "https://www.bebj.be",
     email: "",
      image: "Logo BeBj", deplie: false
  },
  {
    name: "AISSATOU BELLA DIALLO",
    secteur: "Droit & Conseil",
    about: "Droit du travail, droit de la sécurité sociale, droit fiscal et les problématiques relevant du droit OHADA.",
    website: "https://litiss.be/avocats/",
    email: "aissatoubella.diallo@avocat.be",
    image: "litis-s.be_logo-sans-tagline-small.svg",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "ASPAC TECHNICS BV",
    secteur: "Eau",
    about: "ASPAC Technics – Entrepreneur EPC + F, spécialiste de l’ingénierie, de la construction et du financement de projets hydrauliques, accompagne les ministères de l’eau, les agences publiques et les opérateurs privés en proposant des solutions innovantes et durables dans trois domaines clés :- Eau potable : de la captation au raccordement, avec des infrastructures performantes pour le traitement, le pompage, le stockage et la distribution.- Eaux usées : de la collecte au rejet, avec une approche circulaire intégrant la transformation des eaux traitées en ressources (engrais et énergie). Réduction du Volume d’Eau Non Facturé (ENF) : amélioration de la rentabilité des services d’eau par la maîtrise des pertes physiques et commerciales.",
    website: "https://aspac-technics.com",
    email: "finance@aspacintl.com",
    image: "aspac",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "AUGEAS",
    secteur: "Recyclage",
    about: "Start-up développant un système intelligent de collecte et de tri des déchets aluminums récompensant les communautés locales pour leur participation. Nous revendons les déchets alumium à des centres de recyclage. Nous avons des premières activités au Sénégal et nous nous déployons en Guinée à partir de octobre 2026.",
    website: "https://augeas.io",
    email: "greg@augeas.io",
    image: "augeas",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "AVOCAT AMAURY PIRLET",
    secteur: "Droit & Conseil",
    about: "Cabinet d'avocats belge spécialisé en droit des affaires, couvrant notamment le droit commercial et le droit des sociétés. Le cabinet est également actif en droit fiscal, droit social, propriété intellectuelle, droit immobilier, droit administratif, arbitrage international et droit OHADA. AVENS Brussels est membre de l’AVENS Alliance.",
    website: "https://avenslegal.be/equipe/amaury-pirlet/",
    email: "a.pirlet@avenslegal.be",
    image: "AVENS-logo_2afaa567",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "BEFLOWS",
    secteur: "Transport-logistique",
    about: "Entreprise de cargo et de fret basée à Anvers et à Dakar.",
    website: "https://beflows.com",
    email: "alexis@beflows.com",
    image: "logo_beflows-inverted-copy",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  // {
  //   name: "CARMEUSE",
  //   secteur: "Industrie & Matériaux",
  //   about: "Carmeuse est une société familiale belge. Elle compte parmi les leaders mondiaux dans la production de chaux, et autres minéraux, utilisés dans une large variété d'applications industrielles",
  //   website: "https://www.carmeuse.com",
  //   email: "",
  //   image: "carmeuse",
  //   deplie: false 
  // },
  {
    name: "CREDENDO",
    secteur: "Assurance",
    about: "Groupe Européen d'assurance crédit et agence Belge au Crédit à l'expert",
    website: "https://www.credendo.com",
    email: "",
    image: "credendo",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "KBC Bank NV",
    secteur: "Banque Assurance",
    about: "Le groupe KBC est un groupe de bancassurance intégré qui vise principalement une clientèle retail, private banking, PME et midcap. Formé en 1998 après la fusion de deux banques belges (Kredietbank et Banque CERA) et d'une compagnie d'assurance belge (ABB Insurance), KBC compte 13 millions de clients et 41,000 employés.",
    website: "https://www.kbc.com",
    email: "",
    image: "kbc",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
    {
    name: "BS TRANS SERVICES",
    secteur: "Transport-logistique",
    about: "Nous souhaitons développer trois axes : le transport et la logistique de marchandises, du secteur minier, ainsi que la gestion et la modernisation du transport public",
    website: "#", email: "", image: "", deplie: false
  },
  {
    name: "CCAFRIC BV - COMPTOIR DES CHARGEURS AFRICAINS",
    secteur: "Transport-logistique",
    about: "Société de commerce international, conseil stratégique et opérateur logistique spécialisé dans la facilitation des échanges entre l'Afrique et le reste du monde  - Spécialisée dans la documentation à l'export du BESC (Bordereau Electronique de Suivi des Cargaisons).",
    website: "https://ccafric.com",
    email: "contact@ccafric.com",
    image: "LOGO1",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  // {
  //   name: "CHAMBRE DE COMMERCE BELGO CAMEROUNAISE",
  //   secteur: "Réseau Économique",
  //   about: "Chambre de commerce promoteur des échanges économiques entre la Belgique et le Cameroun.",
  //   website: "#",
  //   email: "prosperyamen@ccic-chambre.com",
  //   image: "",
  //   deplie: false 
  // },
  // {
  //   name: "Conti-Lines",
  //   secteur: "Transport Maritime",
  //   about: "Nous sommes spécialisés dans le transport maritime à l'aide d'une flotte de vraquiers de petite taille à ultramax.",
  //   website: "https://contilines.be",
  //   email: "g.brion@conti-invest.be",
  //   image: "CL-RGB150",
  //   deplie: false 
  // },
  {
    name: "DE SMET ENGINEERS & CONTRACTORS",
    secteur: "Agroalimentaire",
    about: "EPC(F) & EPCM offrant les études et le développement de grands projets agro-industriels, spécialisé dans le raffinage de sucre, sucreries de cane, éthanoleries, farine et amidon manioc,",
    email: "guy.vandenbossche.ext@dsengineers.com",
    image: "desmet-engineers-logo-web",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "DEGRILLON TECHNICAL SUPPLIES",
    secteur: "Machines-outils",
    about: "Entreprise belge basée à Anvers, spécialisée dans l'exportation de fournitures techniques (câbles d'acier & cordages, pdr véhicule portuaire, pièces maritimes: pompes, compresseurs et moteurs) pour les secteurs maritime, offshore, énergétique et minier en Afrique du Nord et de l'Ouest.",
    website: "https://degrillon.com",
    email: "info@degrillon.be",
    image: "DTS_logo_300",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  // {
  //   name: "Enabel",
  //   secteur: "Développement International",
  //   about: "La mission principale d’Enabel est de réaliser les priorités politiques de la coopération gouvernementale belge et de promouvoir un développement international durable.",
  //   website: "https://enabel.be",
  //   email: "halewijn.timmerman@enabel.be",
  //   image: "enabel-logo-white",
  //   deplie: false // Indispensable pour le fonctionnement du bouton
  // },
  {
    name: "ERRATUM FASHION",
    secteur: "ICC",
    about: "Maison de mode bruxelloise spécialisée dans la création contemporaine durable inspirée des textiles africains, accompagnant les talents émergents et développant des projets culturels à la croisée de la mode, du patrimoine et de l’innovation sociale.",
    website: "https://erratum.fashion",
    email: "erratum.fashion@gmail.com",
    image: "erratum",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "FRISOMAT",
    secteur: "Construction",
    about: "Entreprise fabricante de bâtiments métalliques préfabriqués formés à froid, présents dans plus de 80 pays.",
    website: "https://frisomat.com",
    email: "joris.smets@frisomat.com",
    image: "frisomat",
    deplie: false // Indispensable pour le fonctionnement du bouton 
  },
  {
    name: "FSE INTERNATIONAL",
    secteur: "Laboratoires & Hopitaux",
    about: "Le GROUPE FSE est l’une des principales sociétés de réalisation de projets d’équipements biomédicaux et de laboratoires à l’international. Après avoir développé de solides références sur des appels d’offres financés par des bailleurs internationaux, la société s’est également engagée dans la réalisation de projets sur financement d’État et sur crédits export.",
    website: "https://fse-export.com",
    email: "Nsalissou@fse-export.com",
    image: "orange-logo",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  // {
  //   name: "GVISION SRL",
  //   secteur: "Solutions Digitales",
  //   about: "Entreprise belge spécialisée dans les solutions digitales et les services informatiques.",
  //   website: "https://gvision.be",
  //   email: "invoice@gvision.be",
  //   image: "GVISION-IT-4955-scaled",
  //   deplie: false 
  // },
  // {
  //   name: "HAWA KALOGA LAW OFFICE",
  //   secteur: "Juridique & Conseil",
  //   about: "Cabinet d'avocats belge spécialisé en droit des affaires et en conseil juridique pour entreprises.",
  //   website: "https://Avocats.be",
  //   email: "h.kaloga@avocat.be",
  //   image: "avocat",
  //   deplie: false 
  // },
  {
    name: "IMS SAFETY CONSULTING",
    secteur: "Conseil",
    about: "IMS Safety Consulting est un cabinet de référence en Santé et Sécurité au Travail (SST/HSE) basé à Bruxelles et Conakry. IMS accompagne les entreprises minières, industrielles, de construction et hospitalières dans la maîtrise de leurs risques professionnels, selon des standards européens adaptés au contexte guinéen.",
    website: "https://imssafeconsulting.com",
    email: "fatou.Ndoye@imssafeconsult.com",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "JAN DE NUL",
    secteur: "Infrastructures",
    about: "Notre expertise se décline dans cinq activités principales : l’énergie offshore, le dragage et la construction maritime, la construction civile, les activités environnementales et le développement de projets. En Guinee Jan De Nul Group a été impliqué dans les projets de Khamsar KCT et de Khamsar Bauxite.",
    website: "https://www.jandenul.com/",
    email: "",
    image: "jdn",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "DEME",
    secteur: "Infrastructures",
    about: "DEME est un leader mondial dans les domaines spécialisés du dragage, des infrastructures maritimes, des solutions pour le marché de l'énergie offshore, des travaux environnementaux et des concessions.",
    website: "https://www.deme-group.com",
    email: "",
    image: "dem-groupe",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "KEKURA DRINKS",
    secteur: "Agroalimentaire",
    about: "Entreprise belge produisant des boissons gazeuses naturelles inspirées de recettes africaines (Bissap à l'hibiscus, Ginger-Ananas, Tamarin-Menthe), 100 % naturelles, sans additifs, commercialisées en canettes en Belgique.",
    website: "https://kekuradrinks.be",
    email: "orders@kekuradrinks.be",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "KOLOMOU AUTO SERVICE",
    secteur: "Machines-outils",
    about: "Entreprise spécialisée dans l'entretien et la réparation automobile.",
    website: "#",
    email: "kolomouservice@gmail.com",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "LES DELICES DE AIDA A.S.B.L.",
    secteur: "Formation-Education",
    about: "Accompagne les producteurs et les coopératives, notamment féminines, par le partage de connaissances, l’amélioration de la qualité, de l’hygiène, du stockage et de la commercialisation des produits. Elle favorise également l’accès aux marchés locaux et internationaux.",
    website: "https://delicesdaida.com",
    email: "sarraida0000@gmail.com",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "MADYSANO",
    secteur: "Conseil",
    about: "MADYSANO Development & Investment est une entreprise axée sur le développement de projets prêts à l'investissement. Sano s'appuie sur l'expertise du marché local et ses actifs stratégiques et collabore avec des partenaires internationaux pour fournir des solutions durables à fort impact.",
    website: "https://madysano.be",
    email: "https://madysano.be",
    image: "akio_logo_w_out_bg",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "METACONNEXIONS",
    secteur: "Conseil",
    about: "MetaConnexions est un cabinet de conseil stratégique spécialisé dans le développement de partenariats économiques entre l'Europe et l'Afrique. Nos services couvrent notamment la structuration de modèles économiques, les études de faisabilité, la recherche de partenaires, la gestion de projets, l'accompagnement à l'implantation sur les marchés africains et la facilitation de collaborations entre acteurs économiques européens et africains.",
    website: "https://beacons.ai/MetaConnexions",
    email: "nc.meta@gmail.com",
    image: "beacon",
    deplie: false 
  },
  // {
  //   name: "NEO-TECH S.A.",
  //   secteur: "Formation-Education",
  //   about: "NEO-TECH est une société spécialisée dans la fourniture d'équipements didactiques, techniques et scientifiques destinés à la formation professionnelle, aux écoles techniques et secondaires, à l'enseignement supérieur, aux universités ainsi qu'aux laboratoires de recherche et de contrôle. De plus, NEO-TECH S.A. garantit la formation des utilisateurs, enseignants, formateurs et techniciens qui seront responsables de l'utilisation et de la maintenance de ces équipements.",
  //   website: "https://www.neo-tech.be/",
  //   email: "",
  //   image: "neotech",
  //   deplie: false 
  // },
  {
    name: "NINETEEN CONSULTING",
    secteur: "Conseil",
    about: "Cabinet de conseil et coaching professionnel pour particuliers et entreprises. Logiciel de gestion pour les PME en Afrique.",
    website: "https://bamiwest.com",
    email: "nineteenconsult@gmail.com",
    image: "LOGO-BW-03-e1634835391207",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "OMNIFREIGHT BV",
    secteur: "Transport-logistique",
    about: "Omnifreight BV, freight forwarder basé à Anvers, est votre partenaire stratégique pour des solutions logistiques efficaces entre l’Europe et l’Afrique. Spécialisés en fret maritime et aérien, nous combinons expertise locale et excellence opérationnelle. Grâce à une approche personnalisée et orientée client, nous facilitons les échanges commerciaux sur des corridors clés du continent africain. Fiabilité, réactivité et transparence sont au cœur de notre engagement. Rencontrons-nous pour optimiser vos importations depuis l’Europe avec un service fluide, fiable et sur mesure.",
    website: "https://www.omnifreight.eu",
    email: "Transport@omnifreight.eu",
    image: "logo-omnifreight-final",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "OVATION",
    secteur: "Conseil",
    about: "Centre d'innovation accompagnant les entreprises et les écosystèmes entrepreneuriaux en Afrique et en Europe.",
    website: "https://ovation.eco",
    email: "ovation@ovation.eco",
    image: "Logo+Ovation+-+Vert+et+noir",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
   {
    name: "PAPA SALL - CONSEIL EN AFFAIRES",
    secteur: "Conseil",
    about: "Fort d'une longue expérience comme agent financier, puis vérificateur financier au sein des Institutions Européennes, et à ma connaissance du monde des entreprises, j'apporte un conseil pointu sur les différentes facettes de la vie de l'entreprise.",
    website: "#",
    email: "", image: "", deplie: false
  },
  {
    name: "S&M FIEDA",
    secteur: "Conseil",
    about: "ASB organisant la FIEDA (Forum International de l'Entrepreneuriat de la Diaspora Africaine), événement majeur dédié à l'entrepreneuriat de la diaspora africaine autour de l'habitat durable, l'industrie et les investissements.",
    website: "https://asbl-sm.org",
    email: "anambengue5@gmail.com",
    image: "Logo-ASBL-VZW-SM-transparent-1",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "STROPCIM",
    secteur: "Conseil",
    about: "STROPCIM est un cabinet de conseil spécialisé dans les achats, la supply chain et la structuration de chaînes de valeur sur le corridor Afrique-Europe. Le cabinet accompagne entreprises et institutions dans l'optimisation de leurs approvisionnements, le développement du contenu local et l'ancrage territorial de la valeur, avec un intérêt particulier pour les secteurs miniers et extractifs, infrastructures, bancaires, telco.",
    website: "https://stropcim.com",
    email: "mohamed.barry@stropcim.com",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
 {
  name: "SINALOCA",
  secteur: "Machines-outils", // Secteur le plus adapté pour l'import/export de véhicules et engins
  about: "Notre mission est d'accompagner les acteurs du secteur minier, des travaux publics et de la construction dans l'approvisionnement de leurs équipements stratégiques. Grâce à notre expertise et à un réseau international de partenaires, nous proposons des solutions fiables, adaptées aux exigences de chaque projet. Nous fournissons une large gamme de véhicules, camions, engins miniers, machines de chantier et équipements BTP, ainsi que les pièces détachées d'origine ou équivalentes nécessaires à leur maintenance et à leur performance.",
  website: "http://gmequipments.com",
  email: "sinalocasrl@gmail.com",
  image: "gme_logo_nav",
  deplie: false
},
{
  name: "U'HOPE COMPANY",
  secteur: "ICT", // Secteur adapté pour les logiciels et le numérique
  about: "U'HOPE COMPANY est une entreprise belge à impact social et éducatif, spécialisée dans le développement de logiciels pédagogiques et l'accompagnement numérique.",
  website: "https://uhope.eu/",
  email: "info@impact-office.net",
  image: "uhope",
  deplie: false
},
  {
    name: "TBWORLD COACHING AND CONSULTANCY",
    secteur: "Formation-Education",
    about: "Entreprise  de coaching et des conseils spécialisée dans les études de marché (privé, institutionnel et public), les formations( Formation des employés et cadres privés et publics) et dans la stratégie de croissance d’entreprise( structuration, performance ou lever des fonds, outils des gestion d’entreprise)",
    website: "https://tbworld.be",
    email: "Info@tbworld.be",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "T-LEX & ASSOCIATES",
    secteur: "Droit & Conseil",
    about: "Droit international des affaires et commerce international en association avec une expertise en supply chain. Nous accompagnons les acteurs publics et privés dans leurs projets d’investissement, en offrant une solution intégrée : matériel fiable d’extraction, chaîne logistique maîtrisée, conformité juridique totale et accompagnement stratégique.",
    website: "https://t-lex.associates",
    email: "gt@t-lex.associates",
    image: "T-LEX-Logo-Blanc",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  // {
  //   name: "TERRACALCO SÉNÉGAL (CARMEUSE)",
  //   secteur: "Agriculture & Agroalimentaire",
  //   about: "La société TerraCalco Sénégal, créée en 2023, est une filiale du groupe Carmeuse, un des leaders mondiaux de la production et de la commercialisation de chaux. Nous proposons aux agriculteurs des amendements minéraux à base de chaux, de calcaire et de dolomie pour restaurer durablement la fertilité des terres agricoles. Nos solutions corrigent l'acidité des sols, apportent le calcium et le magnésium qui sont des éléments nutritifs indispensables aux plantes et en conséquence contribuent à augmenter les rendements et la rentabilité des exploitations",
  //   website: "#", 
  //   email: "", 
  //   image: "", 
  //   deplie: false 
  // },
  {
    name: "TRAFIQURAIL BV",
    secteur: "Ferroviaire",
    about: "Entreprise spécialisée dans la gestion et l'exploitation intégrales des opérations ferroviaires (transport de fret minier et agricole, conception de corridors, formation, maintenance et réhabilitation de matériel roulant) avec une expertise internationale au service des gestionnaires d'infrastructures et opérateurs publics et privés.",
    website: "https://trafiqurail.com",
    email: "ibrahima.pellel.bah@trafiqurail.com",
    image: "LOGO-clean",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
    {
    name: "BELGOTECH",
    secteur: "Energie",
    about: "Étude, fabrication et intégration de tableaux électriques en milieu industriel.",
    website: "https://www.belgotech.com",
    email: "",
    image: "Berloth",
     deplie: false
  },
  {
    name: "TSR GROUP",
    secteur: "Energie",
    about: "Entreprise belge spécialisée dans l'électricité : résidentiel, tertiaire, industriel, infrastructures et énergies renouvelables",
    website: "https://tsrgroup.be",
    email: "info@tsrgroup.be",
    image: "",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
    name: "VIXA CONSULTING SPL",
    secteur: "ICT",
    about: "Vixa Consulting est spécialisée dans le développement logiciel, la digitalisation et l'automatisation des tests et de l'assurance qualité (applications web, API, tests de performance et de charge), ainsi que dans les solutions d'intelligence artificielle. Nous accompagnons banques, assurances, télécoms et grandes entreprises dans la conception, la fiabilisation et l'optimisation de leurs applications et processus digitaux, avec des références sur de grands comptes européens et une capacité de livraison adaptée aux marchés d'Afrique de l'Ouest.",
    website: "https://vixaconsulting.be",
    email: "xavier.bovi@vixaconsulting.be",
    image: "vixa-logo-C13Xwh6I",
    deplie: false // Indispensable pour le fonctionnement du bouton
  },
  {
  name: "AUTOLINK",
  secteur: "Machines-outils",
  about: "Entreprise belge basée à Anvers, spécialisée dans l'exportation de fournitures techniques (câbles d'acier & cordages, pdr véhicule portuaire, pièces maritimes: pompes, compresseurs et moteurs) pour les secteurs maritime, offshore, énergétique et minier en Afrique du Nord et de l'Ouest.",
  website: "https://autolink-trucks-and-machinery.com",
  email: "",
  image: "logo-export-afrique",
  deplie: false
},
  {
  name: "COVERUP Belgium",
  secteur: "Machines-outils",
  about: "Protection, personnalisation et sécurisation de véhicules haut de gamme. Films spéciaux et blindage.",
  website: "https://www.coverup-belgium.be",
  email: "",
  image: "logo-export-afrique",
  deplie: false
},
{
  name: "MPCL INTERNATIONAL SOLUTIONS",
  secteur: "Conseil",
  about: "MPCL International Solutions accompagne entreprises, investisseurs et organisations publiques ou institutionnelles dans le développement de leurs activités, projets et partenariats en Afrique et à l’international. Fondée et dirigée par une ingénieure belge avec 20+ années d’expérience B2B internationale dans 75+ pays, dont 35 en Afrique, MPCL IS intervient à l’interface entre stratégie, développement des affaires, expertise technique, mise en œuvre opérationnelle et renforcement des capacités. Elle contribue à identifier et développer des opportunités, structurer des projets et mobiliser les partenaires et compétences pertinents. Son expérience couvre notamment l’agriculture et l’agro-industrie, les infrastructures, les mines, l’énergie, les solutions liées à l’eau et à l’environnement, ainsi que la logistique complexe.",
  website: "#",
  email: "",
  image: "",
  deplie: false
},
{
  name: "SOTRAD WATER",
  secteur: "Eau",
  about: "Sotrad Water conçoit et déploie des stations d’eau potable intégrées combinant pompage, traitement, stockage et distribution.Nos solutions sont conçues pour garantir fiabilité, rapidité de déploiement et performance durable dans des environnements isolés et contraints.",
  website: "https://sotradwater.be",
  email: "",
  image: "Group-1026-1",
  deplie: false
},
{
  name: "TRANSAUTOMOBILE",
  secteur: "Machines-outils",
  about: "Transautomobile est votre expert en exportation rapide de véhicules neufs, adaptés à vos besoins, partout en Afrique et dans le monde. Grand stock de véhicules 4x4 et SUV, pick-ups, bus, camions, engins spécialisés et pièces détachées disponibles immédiatement.",
  website: "https://transautomobile.com",
  email: "",
  image: "logo-footer-export-afrique",
  deplie: false
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
