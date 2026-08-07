<template>
  <div class="max-w-screen-xl mx-auto px-4 py-8">
    
    <!-- BARRE DE RECHERCHE OPTIMISÉE -->
    <form @submit.prevent class="mb-10 max-w-2xl mx-auto">   
      <div class="relative group">
        <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
          <svg class="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input 
          type="text" 
          v-model="searchQuery" 
          class="block w-full ps-11 pe-4 py-3.5 text-sm text-slate-900 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-950/50 focus:border-indigo-500 dark:focus:border-indigo-400 dark:text-white transition-all" 
          placeholder="Recherche plus rapide..." 
          autocomplete="off" 
        />
      </div>
    </form>

     <!-- GRILLE REFACTORISÉE (Utilise maintenant 'missionsVisibles') -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div 
        v-for="(mission, index) in missionsVisibles" 
        :key="index"
        @click="executerAction(mission)" 
        class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
      >
        <div class="space-y-3">
          <!-- <div class="flex items-center justify-between">
            <span class="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
              Dossier PDF
            </span>
          </div> -->

          <h5 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors underline decoration-slate-200 dark:decoration-slate-700 group-hover:decoration-indigo-500">
            {{ mission.titre }}
          </h5>

          <p class="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed line-clamp-4">
            {{ mission.description }}
          </p>
        </div>

        <div class="pt-6 border-t border-slate-50 dark:border-slate-700/50 mt-6 flex items-center justify-between">
          <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
            Voir plus
            <svg class="rtl:rotate-180 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </span>
        </div>
      </div>
    </div>

    <!-- Message de repli si aucun résultat -->
    <div v-if="missionsFiltrees.length === 0" class="text-center text-slate-400 py-16 font-light">
      Aucune mission ne correspond à votre recherche.
    </div>

    <!-- BOUTON AFFICHER PLUS / AFFICHER MOINS (S'affiche uniquement s'il y a plus de 8 éléments) -->
    <div v-if="missionsFiltrees.length > 8" class="mt-12 flex justify-center">
      <button 
        @click="limiteCartes === 8 ? limiteCartes = missionsFiltrees.length : limiteCartes = 8"
        type="button"
        class="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 dark:bg-slate-800 dark:text-indigo-400 dark:hover:bg-slate-700 rounded-xl transition-all active:scale-95 shadow-sm"
      >
        <span>{{ limiteCartes === 8 ? 'Afficher plus' : 'Réduire la liste'  }}</span>
        <!-- Icône de flèche qui pivote dynamiquement vers le bas ou le haut -->
        <svg 
          :class="['w-4 h-4 transition-transform duration-300', limiteCartes > 8 ? 'rotate-180' : '']" 
          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MissionsGrid',
  data() {
    return {
       limiteCartes: 8,
      searchQuery: '',
      
      // Votre liste brute de titres bien rangée
      listBody: [
        "Mission to tanzania 2024", // Index 0
        "Informations utiles pour les entreprises belges", // Index 1
        "Découvrir le film Brussels en Wolof", // Index 2
        "Mission Economique Belge-interview", // Index 3
        "Foires et « Salons au Sénégal »", // Index 4
        "Forum Africain des Industries Culturelles et créatives", // Index 5
        "Finexpo-Brochure FR", // Index 6
        "Enabel", // Index 7
        "Festival international du film de Bruxelles à Dakar", // Index 8
        "Ambassade de Belgique au Sénégal", // Index 9
        "Entreprises du senegal", // Index 10
        "Belgian Trade Explorer", // Index 11
        "Amélioration de la fertilité des sols en Afrique de l’Ouest", // Index 12
        "Dépolluez vos moteurs et récupérez vos rendements avec un expert Belge au Sénégal - H2CCM", // Index 13
        "Mission Senegal 2023", // Index 14
        "Mission Senegal 2025", // Index 15 -> Lié à votre texte Sénégal
        "Mission to Gambia 2025", // Index 16 -> Lié à votre texte Gambie
        "Mission to Kenya 2025" // Index 17 -> Lié à votre texte Gambie
      ],

      // Configuration de vos blocs de contenu
      missionsDonnees: [
        {
          titreIndex: 17, //Mission économique en kenya"
          description: "Mission to Kenya - Belgian participants. Liste officielle et profils des entreprises participantes.",
          action: () => this.ShowMissionKenya()
        },
        {
          titreIndex: 15, // Va chercher "Mission Senegal 2025"
          description: "Une rencontre B2B avec une délégation d’entreprises belges le lundi 12 mai, de 9h à 14h.",
          action: () => this.ShowMissionSEN1()
        },
        {
          titreIndex: 16, // Va chercher "Mission to Gambia 2025"
          description: "Belgian Economic and Trade Mission to The Gambia. Découvrez l'ensemble des opportunités commerciales régionales.",
          action: () => this.ShowMissionGAM1()
        },
        {
          titreIndex: 0, // Va chercher "Mission to tanzania 2024"
          description: "Mission to Tanzania - Belgian participants. Liste officielle et profils des entreprises participantes.",
          action: () => this.SowMissionTanzania()
        },
        {
          titreIndex: 1, // Va chercher "Mission to tanzania 2024"
          description: "Informations utiles pour les entreprises belges",
          action: () => this.ShowInfo()
        },
        {
          titreIndex: 14, // Va chercher "Mission Senegal 2023"
          description: "Mission Économique Belge - Rencontres d'affaires et opportunités de croissance sur le marché ouest-africain.",
          action: () => this.SowMission()
        },
        {
          titreIndex: 2, //Découvrir le film Brussels en Wolof"
          description: "Un film en anglais décrit en wolof(langue  local au Senegal)",
          action:"/film-bruxel-en-wolof.mp4"
        },
        {
          titreIndex: 3, //Découvrir le film Brussels en Wolof"
          description: "M. Ivan KORSAK - Conseiller Economique et Commercial de l’Ambassade de Belgique au Sénégal",
          action: "https://credorse.com/news/mission-economique-belge-au-senegal"
        }
        ,
        {
          titreIndex: 4, //Découvrir le film Brussels en Wolof"
          description: "FORAFRICC...",
          action: "https://live.eventtia.com/fr/inscription_forafricc"
        }
        ,
        {
          titreIndex: 5, //Découvrir le film Brussels en Wolof"
          description: "FORAFRICC...",
          action: "https://live.eventtia.com/fr/inscription_forafricc"
        }
        ,
        {
          titreIndex: 6, //>Finexpo - Belgian export financing partner"
          description: "Finexpo - Belgian export financing partner",
          action: "Finexpo-Brochure-FR-2023-Aide%20non%20liée-2023.pdf"
        }
        ,
        {
          titreIndex: 7, //>Enabel est l’agence de développement du gouvernement fédéral belge
          description: ">>Enabel est l’agence de développement du gouvernement fédéral belge",
          action: "https://www.enabel.be/fr/country/senegal/"
        }
        ,
        {
          titreIndex: 8, // Une sélection exceptionnelle de films...</
          description: "Une sélection exceptionnelle de films...",
          action: "https://www.fifb.be/"
        }
        ,
        {
          titreIndex: 9, // Toutes les informations pratiques sur notre Ambassade à Dakar
          description: "Toutes les informations pratiques sur notre Ambassade à Dakar",
          action: "https://senegal.diplomatie.belgium.be/fr" 
        }
        ,
        {
          titreIndex: 10, // Toutes les informations pratiques sur notre Ambassade à Dakar
          description: "Entreprises & secteurs au sénégal",
          action:() => this.ShowListEntrepriseSenegal()
        }
        ,
        {
          titreIndex: 11, // Welcome on Tradexplorer...
          description: " Welcome on Tradexplorer...",
          action:"http://www.tradexplorer.be"
        }
        ,
        {
          titreIndex: 12, //Le segment agricole subsaharien fait face à des défis majeurs ...
          description: "Le segment agricole subsaharien fait face à des défis majeurs ...",
          action:()=>this.ShowProjet()
        }
        ,
        {
          titreIndex: 13, // H2CCM :  HYDROGEN CARBON CLEAN MOTOR
          description: " H2CCM :  HYDROGEN CARBON CLEAN MOTOR",
          action:"H2CCM.pdf"
        }
      ]
    }
  },
  computed: {
    // Lie automatiquement les titres de listBody et filtre en temps réel
    missionsFiltrees() {
      const listeCartes = this.missionsDonnees.map(m => {
        return {
          titre: this.listBody[m.titreIndex] || `Mission Spécifique`,
          description: m.description,
          action: m.action
        }
      });

      // Si la recherche est vide, on renvoie les 4 cartes principales
      if (!this.searchQuery.trim()) {
        return listeCartes;
      }
      
      // Filtrage intelligent (si le texte tapé est dans le titre OU la description)
      const query = this.searchQuery.toLowerCase().trim();
      return listeCartes.filter(m => 
        m.titre.toLowerCase().includes(query) || 
        m.description.toLowerCase().includes(query)
      );
    },
      // NOUVELLE PROPRIÉTÉ : Découpe le tableau filtré pour n'afficher que la limite
  missionsVisibles() {
    // Si l'utilisateur fait une recherche textuelle, on court-circuite la limite
    // pour lui montrer immédiatement tous les résultats correspondants
    if (this.searchQuery.trim() !== '') {
      return this.missionsFiltrees;
    }
    // Sinon on découpe de 0 à 8 (ou jusqu'au bout si on a cliqué sur afficher plus)
    return this.missionsFiltrees.slice(0, this.limiteCartes);
  }
  },
  methods: {
     // AJOUTER CETTE MÉTHODE INTELIGENTE
  executerAction(mission) {
    if (typeof mission.action === 'string') {
      // Si c'est un lien texte (URL), on l'ouvre dans un nouvel onglet
      window.open(mission.action, '_blank');
    } else if (typeof mission.action === 'function') {
      // Si c'est une fonction classique, on l'exécute normalement
      mission.action();
    }
  },
    ShowMissionSEN1() { console.log("Navigation : Sénégal 2025"); 
                        this.$router.push("/prochain-mission-au-senegal") },
    ShowMissionGAM1() { console.log("Navigation : Gambie 2025"); 
                        this.$router.push("/mission-to-gambia")
    },
    SowMissionTanzania() { console.log("Navigation : Tanzanie 2024"); 
                           this.$router.push("/mission-to-tanzania")
    },
    SowMission() { console.log("Navigation : Sénégal 2023");
                  this.$router.push("/mission-economique-belge-au-senegal")
     },
     ShowInfo(){
          this.$router.push("/information")
     },
     SowFilm(){
       this.$router.push("/film-bruxel-en-wolof.mp4")
     },
     ShowListEntrepriseSenegal(){
    this.$router.push("/entreprise-au-senegal")
     },
     ShowProjet(){
      this.$router.push("/projet")
     },
     ShowMissionKenya(){
       this.$router.push("/mission-to-kenya")
     }
    
  }
}

</script>
