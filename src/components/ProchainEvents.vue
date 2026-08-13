<template>
  <section class="bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 -mt-4 pt-0 pb-6 px-6">
    <div class="max-w-screen-xl mx-auto">
      
      <!-- En-tête de section -->
      <div class="max-w-screen-sm mb-6 space-y-2 mt-0 pt-0">
        <h2 id="evens" class="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
          <span>📅</span> Prochains événements / Upcoming events
        </h2>
        <!-- Barre esthétique bicolore (Remplacement de la jauge brute) -->
        <div class="w-24 h-1.5 bg-indigo-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
          <div class="bg-indigo-600 w-1/3 h-full"></div>
          <div class="bg-amber-500 w-2/3 h-full"></div>
        </div>
      </div>

      <!-- Conteneur de liste moderne (Effet de carte épurée) -->
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
                <div class="flex-shrink-0 min-w-[150px]">
                  <p class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Date
                  </p>
                  <p class="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    {{ evenement.date }}
                  </p>
                </div>
                
                <!-- Contenu de la mission (Bordure colorée épurée) -->
                <div class="flex-1 min-w-0">
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
                    <svg class="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
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

    </div>
  </section>
</template>

<script>
export default {
  name: 'MissionGuinee',
  data() {
    return {
      // Regroupement propre de vos données d'événements
      listeEvenements: [
        // {
        //   date: "10-15 November 2025",
        //   titre: "Belgian Economic Mission",
        //   destination: "Kenya",
        //   action: () => this.SowMissionKenya()
        // },
        {
          date: "13 Octobre 2026",
          titre: " Mission économique belge",
          destination: "Guinée (Conakry)",
          action: () => this.MissionGuinnee()
        }
      ]
    }
  },
  methods: {
    SowMissionKenya() {
      // Votre logique ou redirection pour le Kenya
      console.log('/mission-economique-conakry');
    },
    MissionGuinnee() {
      // Votre logique ou redirection pour la Guinée
      this.$router.push("/mission-economique-conakry")
      console.log('/mission-economique-conakry');
    },
    SowMissionSEN() {
      // Prêt si vous réactivez le Sénégal plus tard
      console.log('Navigating to Senegal Mission');
    }
  }
}
</script>
