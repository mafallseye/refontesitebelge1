<template>
  <div class="bg-slate-50 dark:bg-slate-900 font-sans min-h-screen">
    
    <!-- 1. BARRE DE NAVIGATION PRINCIPALE (HEADER LOGOS & EMAILS) -->
    <header class="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 shadow-sm sticky top-0 z-40">
      <div class="flex flex-col md:flex-row justify-between items-center mx-auto max-w-screen-xl p-4 gap-4">
        
        <!-- Zone de gauche : Logos des institutions partenaires -->
        <div class="flex items-center gap-6">
          <a href="https://hub.brussels/fr/" target="_blank" class="transition-opacity hover:opacity-80">
            <img src="../assets/logo-brusselbis.png" class="h-10 md:h-12 w-auto object-contain" alt="Logo Hub Brussels" />
          </a>
          <div class="h-8 w-px bg-slate-200 dark:bg-slate-600 hidden sm:block"></div>
          <a href="https://senegal.diplomatie.belgium.be/fr" target="_blank" class="transition-opacity hover:opacity-80">
            <img src="../assets/logo-ambassade.png" class="h-10 md:h-12 w-auto object-contain" alt="Logo Ambassade de Belgique" />
          </a>
        </div>
        
        <!-- Zone de droite : Actions d'envoi d'e-mails directs -->
        <div class="flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:Dakar@hub.brussels?subject=Bonjour&body=La premiere ligne du message" 
             class="inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-xl transition-all duration-200 shadow-sm dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-indigo-500 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
            Dakar@hub.brussels
          </a>
        </div>

      </div>
    </header>

    <!-- 2. SOUS-NAVIGATION DE LIENS INTERNES -->
    <nav class="bg-slate-100 dark:bg-slate-700 border-slate-200/60 dark:border-slate-600">
      <div class="max-w-screen-xl px-4 py-3 mx-auto overflow-x-auto whitespace-nowrap scrollbar-none">
        <ul class="flex flex-row font-semibold space-x-8 text-sm">
          <li>
            <a href="/" class="text-indigo-600 dark:text-indigo-400 hover:underline">Accueil</a>
          </li>
          <li>
            <a href="#organisateurs" class="text-slate-600 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Partenaires</a>
          </li>
          <li>
            <a href="#service" class="text-slate-600 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Services</a>
          </li>
          <li>
            <a href="#evens" class="text-slate-600 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Événements</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- 3. ZONE BANNIÈRE PRINCIPALE (HERO CADRE BLEU) -->
    <section class="max-w-screen-xl mx-auto px-4 pt-8 pb-0 mb-0">
      <div class="relative bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 text-white rounded-3xl overflow-hidden shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 justify-start">
        
        <!-- Image Armoiries -->
        <div class="w-32 h-32 md:w-40 md:h-44 flex-shrink-0 bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/10 flex items-center justify-center relative z-10">
          <img src="../assets/Brussels_wapenschild.png" class="max-w-full max-h-full object-contain filter drop-shadow-md" alt="Armoiries Bruxelles" />
        </div>
        
        <!-- Alignement de toutes les écritures à gauche -->
        <div class="space-y-4 text-left relative z-10 flex-1 w-full flex flex-col items-start justify-start">
          <span class="bg-amber-400 text-slate-950 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
            Représentation Officielle
          </span>
          
          <h1 class="text-2xl md:text-4xl font-extrabold tracking-tight leading-none text-left">
            Délégation Économique Commerciale Belge
          </h1>
          
          <p class="text-slate-200 font-medium text-sm md:text-base max-w-2xl leading-relaxed text-left">
            La Délégation Economique Commerciale Belge apporte un soutien au développement international de toutes les entreprises du territoire Belge.
          </p>

          <!-- Coordonnées du Bureau -->
          <div class="pt-6 border-t border-white/10 text-xs md:text-sm text-slate-300 space-y-1 font-light w-full text-left">
            <p class="font-bold text-white tracking-wide uppercase text-xs">Bureau tri-régional</p>
            <p class="mt-1">Ambassade de Belgique à Dakar</p>
            <p class="text-slate-400"><span class="font-medium">Juridiction :</span> Sénégal, Gambie, Guinée, Guinée-Bissau, Cabo Verde</p>
          </div>
        </div>

      </div>
    </section>

    <!-- 4. FIX DÉFINITIF WINDOWS : INTÉGRATION DE LA SECTION DES ÉVÉNEMENTS DANS LE TEMPLATE -->
    <section class="max-w-screen-xl mx-auto px-4 pt-6 pb-12">
      
      <!-- En-tête sans marge haute parasite -->
      <div class="max-w-screen-sm mb-6 space-y-2 mt-0 pt-0 text-left">
        <h2 id="evens" class="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
          <svg class="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span>Prochains événements / Upcoming events</span>
        </h2>
        <div class="w-24 h-1.5 bg-indigo-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
          <div class="bg-indigo-600 w-1/3 h-full"></div>
          <div class="bg-amber-500 w-2/3 h-full"></div>
        </div>
      </div>

    <div class="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-2xl shadow-sm overflow-hidden p-2 md:p-4">
        <div class="flow-root">
          <ul role="list" class="divide-y divide-slate-100 dark:divide-slate-700/50">
            
            <!-- Boucle dynamique sur les événements -->
            <li 
              v-for="(evenement, index) in listeEvenements" 
              :key="index" 
              class="py-5 sm:py-6 first:pt-2 last:pb-2 group hover:bg-slate-50/50 dark:hover:bg-slate-700/20 px-4 rounded-xl transition-colors duration-200"
            >
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                
                <!-- Date de l'événement -->
                <div class="flex-shrink-0 min-w-[150px] text-left">
                  <p class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Date
                  </p>
                  <p class="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    {{ evenement.date }}
                  </p>
                </div>
                
                <!-- Contenu de la mission (Bordure colorée épurée) -->
                <div class="flex-1 min-w-0 text-left">
                  <div class="border-l-4 border-indigo-500 dark:border-indigo-400 pl-4 py-1">
                    <h4 class="text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {{ evenement.titre }}
                    </h4>
                    <p class="text-sm text-slate-500 dark:text-slate-400 font-light mt-0.5">
                      Destination : <span class="font-medium text-slate-700 dark:text-slate-300">{{ evenement.destination }}</span>
                    </p>
                  </div>
                </div>
                
                <!-- Bouton d'action interactif -->
                <div class="flex items-center justify-end">
                  <button 
                    @click="evenement.action()" 
                    type="button" 
                    class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:bg-slate-700 dark:text-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-950 transition-all duration-200 active:scale-95"
                    :title="`See mission to ${evenement.destination}`"
                  >
                    <svg class="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    <span class="sr-only">View Mission Details</span>
                  </button>
                </div>
                
              </div>
            </li>

          </ul>
        </div>
      </div>



    </section>

  </div>
</template>

<script>
export default {
  name: 'MissionGuinee',
  data() {
    return {
      listeEvenements: [
        {
          date: "13 Octobre 2026",
          titre: "Mission économique belge",
          destination: "Guinée (Conakry)",
          action: () => this.MissionGuinnee()
        }
      ]
    }
  },
  methods: {
    MissionGuinnee() {
      // FIX : Remplacement par le vrai chemin de route déployé pour éviter le bug d'affichage
      this.$router.push("/mission-economique-conakry");
    }
  }
}
</script>
