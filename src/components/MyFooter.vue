<template>
  <!-- PIED DE PAGE MODERNE -->
  <footer class="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/60 mt-12">
    <div class="mx-auto w-full max-w-screen-xl px-6 py-8">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        <!-- Droits d'auteur dynamiques -->
        <span class="text-sm text-slate-500 dark:text-slate-400">
  © 2023 - {{ annee.getFullYear() }}, 
  <a href="https://hub.brussels" target="_blank" class="font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline transition-colors">
    hub.brussels
  </a>. Tous droits réservés.
</span>


        <!-- Zone Réseaux Sociaux -->
        <div class="flex items-center gap-4">
          <span class="text-sm font-semibold text-slate-700 dark:text-slate-300">Suivez-nous</span>
          
          <!-- Lien LinkedIn officiel de M. Korsak -->
          <a 
            href="https://www.linkedin.com/in/ivan-korsak-koulagenko-3244b6210/" 
            target="_blank"
            class="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 bg-slate-50 hover:bg-indigo-50 dark:bg-slate-900 dark:hover:bg-indigo-950/40 rounded-xl transition-all duration-200 shadow-sm"
            title="Suivre Ivan Korsak Koulagenko sur LinkedIn"
          >
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
              <path d="M3 5.012H0V15h3V5.012Z"/>
            </svg>
            <span class="sr-only">LinkedIn Account</span>
          </a>
        </div>

      </div>
    </div>
  </footer>

  <!-- BOUTON RETOUR EN HAUT (Transition d'opacité fluide) -->
  <button 
    type="button" 
    @click="toTop" 
    :class="[
      'fixed right-6 bottom-6 z-50 p-3 rounded-full border shadow-md flex items-center justify-center transition-all duration-300 active:scale-90',
      scY > 300 
        ? 'opacity-100 translate-y-0 scale-100 bg-white text-indigo-600 border-slate-200 hover:bg-indigo-600 hover:text-white dark:bg-slate-800 dark:text-indigo-400 dark:border-slate-700 dark:hover:bg-indigo-500 dark:hover:text-white' 
        : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
    ]"
    title="Retour en haut de la page"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
    <span class="sr-only">Back to top</span>
  </button>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      annee: new Date(), // Génère automatiquement l'année en cours (ex: 2026)
      scTimer: 0,
      scY: 0,
    }
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    // TRÈS IMPORTANT : Nettoyer l'écouteur d'événement pour éviter les fuites de mémoire
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
