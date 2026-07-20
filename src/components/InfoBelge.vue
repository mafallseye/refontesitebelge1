<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
    
    <!-- 1. COMPOSANTS D'EN-TÊTE -->
    <HelloWorld />
    <ImageSenegal />

    <!-- 2. FIL D'ARIANE (Breadcrumb moderne) -->
    <nav class="flex max-w-screen-xl mx-auto px-6 py-5" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 text-xs md:text-sm">
        <li class="inline-flex items-center">
          <a href="/" class="inline-flex items-center font-medium text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white transition-colors gap-1.5">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://w3.org">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            Accueil
          </a>
        </li>
        <li>
          <div class="flex items-center gap-1">
            <svg class="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://w3.org">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span class="ms-1 font-medium text-slate-400 dark:text-slate-500">Informations pour les entreprises belges</span>
          </div>
        </li>
      </ol>
    </nav>

    <!-- 3. ZONE TITRE -->
    <div class="max-w-screen-xl mx-auto px-6 mb-8">
      <h1 class="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
        Nous sommes là pour vous accompagner tout au long de votre projet :
      </h1>
      <div class="w-20 h-1 bg-indigo-600 rounded-full mt-2"></div>
    </div>

    <!-- 4. GRILLE DE LIENS UTILES (Avec Dégradés de Couleurs Uniques) -->
    <main class="max-w-screen-xl mx-auto px-6 pb-16">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        <!-- Ouvrir une entreprise (Dégradé Bleu / Indigo Épuré) -->
        <a href="https://investinsenegal.sn" target="_blank" 
           class="group relative h-40 flex flex-col justify-between p-6 bg-gradient-to-br from-blue-700 via-indigo-700 to-indigo-900 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
          <span class="text-xl">🏢</span>
          <p class="text-base font-bold text-white tracking-wide leading-tight group-hover:underline">
            Ouvrir une entreprise au Sénégal
          </p>
        </a>

        <!-- Secteurs porteurs (Dégradé Émeraude / Teal Écologique) -->
        <a href="https://investinsenegal.sn" target="_blank" 
           class="group relative h-40 flex flex-col justify-between p-6 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-900 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
          <span class="text-xl">📈</span>
          <p class="text-base font-bold text-white tracking-wide leading-tight group-hover:underline">
            Secteurs porteurs au Sénégal
          </p>
        </a>

        <!-- Green building (Dégradé Vert Menthe / Sauge) -->
        <a href="https://lfgab.com" target="_blank" 
           class="group relative h-40 flex flex-col justify-between p-6 bg-gradient-to-br from-green-600 via-emerald-700 to-slate-900 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
          <span class="text-xl">🌱</span>
          <p class="text-base font-bold text-white tracking-wide leading-tight group-hover:underline">
            Green building in Africa
          </p>
        </a>

        <!-- Plan Sénégal Émergent (Dégradé Ambre / Orange Chaleureux) -->
        <a href="https://senegal-emergent.com" target="_blank" 
           class="group relative h-40 flex flex-col justify-between p-6 bg-gradient-to-br from-amber-500 via-orange-600 to-red-800 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
          <span class="text-xl">✨</span>
          <p class="text-base font-bold text-white tracking-wide leading-tight group-hover:underline">
            Plan Sénégal émergent
          </p>
        </a>

        <!-- Gouvernement (Dégradé Ardoise / Slate Souverain) -->
        <a href="https://sec.gouv.sn" target="_blank" 
           class="group relative h-40 flex flex-col justify-between p-6 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
          <span class="text-xl">🏛️</span>
          <p class="text-base font-bold text-white tracking-wide leading-tight group-hover:underline">
            Gouvernement du Sénégal
          </p>
        </a>

        <!-- L'entreprenariat (Dégradé Violet / Violet Royal) -->
        <a href="https://entreprendre.sn" target="_blank" 
           class="group relative h-40 flex flex-col justify-between p-6 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-950 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
          <span class="text-xl">🚀</span>
          <p class="text-base font-bold text-white tracking-wide leading-tight group-hover:underline">
            L'entrepreneuriat au Sénégal
          </p>
        </a>

        <!-- Guide des affaires (Pleine Largeur — Dégradé Indigo / Fuchsia Premium) -->
        <a href="https://businessfrance.fr" target="_blank" 
           class="group relative h-40 flex flex-col justify-between p-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden sm:col-span-2 lg:col-span-3">
          <div class="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          <span class="text-xl">📖</span>
          <p class="text-base md:text-lg font-bold text-white tracking-wide leading-tight group-hover:underline max-w-2xl">
            Guide des affaires au Sénégal par Business France
          </p>
        </a>

      </div>
    </main>

    <!-- 5. COMPOSANTS DE PIED DE PAGE -->
    <Organisateur />
    <MyFooter />
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
import ImageSenegal from './ImageSenegal.vue';
import MyFooter from './MyFooter.vue';
import Organisateur from './Organisateur.vue';

export default {
  name: 'InformationView',
  components: { 
    ImageSenegal, 
    HelloWorld, 
    Organisateur, 
    MyFooter 
  }
}
</script>

<style scoped>
/* Animation d'introduction fluide */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

a {
  animation: fadeInUp 0.4s ease-out forwards;
}
</style>
