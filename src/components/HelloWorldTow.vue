<template>
  <nav class="bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 sticky top-0 z-50 px-4 py-3">
    <div class="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
      
      <!-- LOGO HUb.BRUSSELS -->
      <router-link to="/" class="flex items-center">
        <img src="../assets/logoambassate.png" class="h-15 md:h-12 w-auto object-contain" alt="hub.brussels Logo" />
      </router-link>

      <!-- BOUTON BURGER POUR MOBILE (Sans dépendance Bootstrap) -->
      <!-- <button 
        @click="isMenuOpen = !isMenuOpen" 
        type="button" 
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-xl lg:hidden hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 dark:focus:ring-slate-700 transition-colors"
      >
        <span class="sr-only">Ouvrir le menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://w3.org" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button> -->

      <!-- LIENS DE NAVIGATION -->
      <div :class="[isMenuOpen ? 'block' : 'hidden', 'w-full lg:block lg:w-auto transition-all']">
        <ul class="flex flex-col p-4 lg:p-0 mt-4  border-slate-100 rounded-2xl bg-slate-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-slate-800 lg:dark:bg-slate-900 dark:border-slate-700">
          
          <!-- Accueil -->
          <!-- <li>
            <router-link to="/" class="nav-item-link">
              Accueil
            </router-link>
          </li> -->
          
          <!-- Entreprises & Secteurs (Correction de la faute de frappe sur 'economique') -->
          <!-- <li>
            <router-link to="/mission-economique-belge-au-senegal" class="nav-item-link">
              Entreprises belges & secteurs
            </router-link>
          </li> -->
          
          <!-- Informations -->
          <!-- <li>
            <router-link to="/information" class="nav-item-link">
              Infos entreprises belges
            </router-link>
          </li> -->
          
          <!-- Entreprises Sénégal -->
          <!-- <li>
            <router-link to="/entreprise-au-senegal" class="nav-item-link">
              Entreprises du Sénégal
            </router-link>
          </li> -->
          
          <!-- Revue de presse -->
          <!-- <li>
            <router-link to="/revue-presse" class="nav-item-link">
              Revue de presse
            </router-link>
          </li> -->

        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false // Gère l'ouverture du menu mobile nativement
    }
  },
  watch: {
    // Ferme automatiquement le menu mobile dès que l'utilisateur change de page
    $route() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<style scoped>
/* Classe de base pour les liens */
.nav-item-link {
  @apply block py-2 px-3 text-sm font-semibold text-slate-600 rounded-xl hover:bg-slate-100 hover:text-indigo-600 lg:hover:bg-transparent lg:p-0 dark:text-slate-300 dark:hover:bg-slate-700 lg:dark:hover:bg-transparent lg:dark:hover:text-indigo-400 transition-colors border-b-2 border-transparent;
}

/* Style magique de Vue Router : s'applique automatiquement sur le lien de la page active */
.router-link-active.nav-item-link {
  @apply text-indigo-600 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-none lg:pb-1;
}
.nav-item-link{
  text-decoration: none;
  
}
</style>
