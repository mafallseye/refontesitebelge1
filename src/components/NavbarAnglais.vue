<template>
  <nav class="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50 px-4 py-3">
    <div class="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
      
      <!-- HUB.BRUSSELS LOGO -->
      <router-link to="/" class="flex items-center">
        <img src="../assets/hub-logo-couleur-01.png" class="h-10 md:h-12 w-auto object-contain" alt="hub.brussels Logo" />
      </router-link>

      <!-- MOBILE BURGER BUTTON (Native Tailwind / Vue) -->
      <button 
        @click="isMenuOpen = !isMenuOpen" 
        type="button" 
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-xl lg:hidden hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 dark:focus:ring-slate-700 transition-colors"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://w3.org" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <!-- NAVIGATION LINKS -->
      <div :class="[isMenuOpen ? 'block' : 'hidden', 'w-full lg:block lg:w-auto transition-all']">
        <ul class="flex flex-col p-4 lg:p-0 mt-4  border-slate-100 rounded-2xl bg-slate-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-slate-800 lg:dark:bg-slate-900 dark:border-slate-700">
          
          <!-- Home -->
          <li>
            <router-link to="/" class="nav-item-link">
              Home
            </router-link>
          </li>
          
          <!-- Belgian companies & sectors (Faute d'orthographe corrigée ici aussi) -->
          <li>
            <router-link to="/mission-economique-belge-au-senegal" class="nav-item-link">
              Belgian companies & sectors
            </router-link>
          </li>
          
          <!-- Information -->
          <li>
            <router-link to="/information" class="nav-item-link">
              Information for Belgian companies
            </router-link>
          </li>
          
          <!-- Senegal company -->
          <li>
            <router-link to="/entreprise-au-senegal" class="nav-item-link">
              Senegal company
            </router-link>
          </li>
          
          <!-- Press review -->
          <li>
            <router-link to="/revue-presse" class="nav-item-link">
              Press review
            </router-link>
          </li>

        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarAnglais',
  data() {
    return {
      isMenuOpen: false // Gère l'ouverture et fermeture du burger mobile de manière autonome
    }
  },
  watch: {
    // Ferme le volet mobile automatiquement dès que l'utilisateur clique sur un lien et change de page
    $route() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<style scoped>
/* Classe globale appliquée à vos liens de navigation en anglais */
.nav-item-link {
  @apply block py-2 px-3 text-sm font-semibold text-slate-600 rounded-xl hover:bg-slate-100 hover:text-indigo-600 lg:hover:bg-transparent lg:p-0 dark:text-slate-300 dark:hover:bg-slate-700 lg:dark:hover:bg-transparent lg:dark:hover:text-indigo-400 transition-colors border-b-2 border-transparent;
}

/* Gestion de l'état actif (Soulignement automatique géré par Vue-Router) */
.router-link-active.nav-item-link {
  @apply text-indigo-600 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-none lg:pb-1;
}
.nav-item-link{
  text-decoration: none;
}
</style>
