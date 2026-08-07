<template>
  <div>
    
    <!-- 1. SECTION PARTENAIRES (LOGOS RESTRUCTURÉS) -->
    <section class="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/50 py-12 px-6 sm:py-16">
      <div class="max-w-screen-xl mx-auto">
        
        <!-- En-tête Partenaires -->
        <div class="max-w-screen-sm mb-12 space-y-2">
          <h2 id="organisateurs" class="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            Nos partenaires 
          </h2>
          <div class="w-16 h-1 bg-indigo-600 rounded-full"></div>
        </div>

        <!-- Grille des Logos (Parfaitement centrés et proportionnels) -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          
          <!-- Bruxelles-Capitale -->
          <a href="https://be.brussels/fr/propos-de-la-region" target="_blank" 
             class="flex justify-center items-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/60 hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-950 transition-all duration-200 h-28 md:h-32 group">
            <img class="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300" src="../assets/brxcap.png" alt="Région de Bruxelles-Capitale" />
          </a>

          <!-- Hub Brussels -->
          <a href="https://hub.brussels/fr/" target="_blank" 
             class="flex justify-center items-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/60 hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-950 transition-all duration-200 h-28 md:h-32 group">
            <img class="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300" src="../assets/logo-brussel.png" alt="hub.brussels" />
          </a>

          <!-- AWEX (Wallonie) -->
          <a href="https://www.awex.be/" target="_blank" 
             class="flex justify-center items-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/60 hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-950 transition-all duration-200 h-28 md:h-32 group">
            <img class="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300" src="../assets/logo-wallonie.png" alt="AWEX Wallonie" />
          </a>

          <!-- FIT (Flanders) -->
          <a href="https://welcome.flandersinvestmentandtrade.com/en" target="_blank" 
             class="flex justify-center items-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/60 hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-950 transition-all duration-200 h-28 md:h-32 group">
            <img class="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300" src="../assets/logo-flanders.png" alt="Flanders Investment & Trade" />
          </a>

        </div>
      </div>
    </section>

    <!-- 2. SECTION NOS SERVICES & PAROLE DU CONSEILLER -->
    <section class="bg-slate-50 dark:bg-slate-900 py-12 px-6 sm:py-16">
      <div class="max-w-screen-xl mx-auto">
        
        <!-- En-tête Services -->
        <div class="max-w-screen-sm mb-12 space-y-2 mx-auto text-center flex flex-col items-center">
          <h2 id="service" class="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
           À propos
          </h2>
          <div class="w-16 h-1 bg-indigo-600 rounded-full"></div>
        </div> 

        <!-- Bloc de Citation stylisé (Style Éditorial) -->
      <div class="max-w-screen-md mx-auto relative bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-3xl p-6 md:p-10 shadow-sm">
  <!-- Icône Guillemet Flottante arrière-plan -->
  <span class="absolute top-4 left-6 text-slate-100 dark:text-slate-700 text-7xl font-serif select-none pointer-events-none leading-none">“</span>
  
  <figure class="relative z-10 space-y-6">
    <blockquote class="text-slate-600 dark:text-slate-300 font-light leading-relaxed text-sm md:text-base text-justify">
      <!-- 1. TEXTE PRINCIPAL ÉPURÉ ET CORRIGÉ (Sans le "et", arrêt après AWEX) -->
      <p>
        La Délégation Économique Commerciale Belge à Dakar est un service extérieur des gouvernements de Bruxelles-Capitale, de Flandre et de Wallonie. Il représente les trois agences régionales du commerce extérieur (Hub.Brussels, FIT et AWEX).
      </p>
      
      <!-- 2. NOUVEL AVERTISSEMENT STRATÉGIQUE DES VISAS (Texte rouge exact de la capture avec lien) -->
      <div class="mt-6 flex items-start gap-3 text-red-600 dark:text-red-400 font-bold bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 p-4 rounded-xl text-xs md:text-sm shadow-inner">
        <span class="text-base shrink-0">⚠️</span> 
        <p class="leading-relaxed">
          La Délégation Economique Commerciale ne s'occupe pas des questions de visas de voyage. Cette matière est du ressort exclusif de 
          <a 
            href="https://senegal.diplomatie.belgium.be/fr/venir-en-belgique/visa-pour-la-belgique" 
            target="_blank" 
            class="underline hover:text-red-800 dark:hover:text-red-300 break-all"
          >
             l'Ambassade de Belgique au Sénégal
          </a>
        </p>
      </div>
    </blockquote>

    <!-- Bloc Identité de l'Auteur (Inchangé) -->
    <figcaption class="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-700/50">
      <img class="w-12 h-12 rounded-full border-2 border-white dark:border-slate-700 shadow-md object-cover" src="../assets/1686131597283.jpeg" alt="Ivan Korsak Koulagenko - Portrait" />
      <div class="text-center sm:text-left space-y-0.5">
        <p class="font-bold text-slate-900 dark:text-white text-base">Ivan Korsak Koulagenko</p>
        <p class="text-xs text-slate-400 dark:text-slate-500 font-medium leading-tight max-w-md">
          Trade Commissioner — Embassy of Belgium (West Africa & East Africa)
        </p>
      </div>
    </figcaption>
  </figure>
</div>


      </div>
    </section>

  </div>
</template>
