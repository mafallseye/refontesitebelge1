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
          <a href="mailto:Nairobi@hub.brussels?subject=Goodmorning&body=First line of message" 
             class="inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-xl transition-all duration-200 shadow-sm dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-indigo-500 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
            Nairobi@hub.brussels
          </a>
        </div>

      </div>
    </header>

    <!-- 2. SOUS-NAVAGATION DE LIENS INTERNES -->
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

    <!-- 3. ZONE BANNIÈRE PRINCIPALE (HERO HEROIC INSTITUTIONNEL) -->
    <section class="max-w-screen-xl mx-auto px-4 py-12">
      <div class="relative bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl overflow-hidden shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <!-- Fond décoratif flouté subtil -->
        <div class="absolute inset-0 opacity-10 bg-[url('https://unsplash.com')] bg-cover bg-center mix-blend-overlay"></div>
        
        <!-- Image Armoiries (Prend une vraie dimension fixe, alignée) -->
        <div class="w-32 h-32 md:w-44 md:h-44 flex-shrink-0 bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/10 flex items-center justify-center relative z-10">
          <img src="../assets/Brussels_wapenschild.png" class="max-w-full max-h-full object-contain filter drop-shadow-md" alt="Armoiries Bruxelles" />
        </div>
        
        <!-- Titres descriptifs textuels -->
        <div class="space-y-4 text-center md:text-left relative z-10 flex-1">
          <span class="bg-amber-400 text-slate-950 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
            Représentation Officielle
          </span>
          <h1 class="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Délégation Économique et Commerciale Belge
          </h1>
          <p class="text-slate-300 font-light text-sm md:text-base max-w-2xl">
            Soutien opérationnel aux entreprises bruxelloises et renforcement des partenariats stratégiques bilatéraux avec les Ambassades de Belgique à Dakar & Nairobi.
          </p>
        </div>
      </div>
    </section>

    <!-- 4. SECTION DUAL-CARDS DES JURIDICTIONS (Anciennement commentaires bruts) -->
    <section class="max-w-screen-xl mx-auto px-4 pb-16 grid gap-6 md:grid-cols-2">
      
      <!-- Carte Bureau Dakar -->
      <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm space-y-4 hover:shadow-md transition-shadow">
        <div class="flex items-center justify-between border-b border-slate-50 dark:border-slate-700 pb-3">
          <h3 class="font-bold text-lg text-slate-900 dark:text-white">Bureau Tri-Régional — Dakar</h3>
          <span class="text-xs text-indigo-500 font-semibold bg-indigo-50 dark:bg-indigo-950/40 px-2 py-0.5 rounded">FR</span>
        </div>
        <div class="space-y-2 text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
          <p class="font-bold text-slate-800 dark:text-white">Délégation Économique et Commerciale Belge</p>
          <p>Ambassade de Belgique à Dakar</p>
          <p class="flex items-start gap-1">
            <span class="font-semibold text-slate-400 shrink-0">Juridiction :</span>
            <span>Sénégal, Gambie, Guinée, Guinée-Bissau, Cabo Verde</span>
          </p>
        </div>
        <div class="pt-2">
          <a href="mailto:Dakar@hub.brussels" class="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
            Dakar@hub.brussels →
          </a>
        </div>
      </div>

      <!-- Carte Bureau Nairobi -->
      <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm space-y-4 hover:shadow-md transition-shadow">
        <div class="flex items-center justify-between border-b border-slate-50 dark:border-slate-700 pb-3">
          <h3 class="font-bold text-lg text-slate-900 dark:text-white">Tri-Regional Office — Nairobi</h3>
          <span class="text-xs text-amber-600 font-semibold bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded">EN</span>
        </div>
        <div class="space-y-2 text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
          <p class="font-bold text-slate-800 dark:text-white">Belgian Economic and Commercial Delegation</p>
          <p>Embassy of Belgium in Nairobi</p>
          <p class="flex items-start gap-1">
            <span class="font-semibold text-slate-400 shrink-0">Jurisdiction:</span>
            <span>Kenya, Tanzania, Uganda</span>
          </p>
        </div>
        <div class="pt-2">
          <a href="mailto:Nairobi@hub.brussels" class="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
            Nairobi@hub.brussels →
          </a>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: 'ImageSection',
  data() {
    return {}
  },
  methods: {
    SowMissionTanzania() {
      this.$emit('navigate', 'tanzania');
    },
    SowMissionGAM() {
      this.$emit('navigate', 'gambia');
    }
  }
}
</script>

<style scoped>
/* Cache la barre de défilement horizontale sur les menus défilants mobiles */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
a{
  text-decoration: none;
}
</style>
