<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
    
    <!-- 1. COMPOSANTS DE NAVIGATION -->
    <HelloWorld />
    <ImageSenegal />

    <!-- 2. FIL D'ARIANE (Breadcrumb moderne) -->
    <nav class="flex max-w-screen-xl mx-auto px-6 py-5" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 text-xs md:text-sm">
        <li class="inline-flex items-center">
          <a href="/" class="inline-flex items-center font-medium text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white transition-colors gap-1.5">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            Accueil
          </a>
        </li>
        <li>
          <div class="flex items-center gap-1">
            <svg class="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span class="ms-1 font-medium text-slate-400 dark:text-slate-500">Revue de presse</span>
          </div>
        </li>
      </ol>
    </nav>

    <!-- 3. TITRE DE LA PAGE -->
    <section class="max-w-screen-xl mx-auto px-6 pt-4 pb-8">
      <div class="max-w-3xl mx-auto text-center space-y-2">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl uppercase">
          Revue de presse
        </h1>
        <p class="text-sm text-slate-500 dark:text-slate-400 font-light">
          Retrouvez les reportages et couvertures médiatiques de la mission économique belge.
        </p>
        <div class="w-16 h-1 bg-indigo-600 rounded-full mx-auto mt-4"></div>
      </div>
    </section>

    <!-- 4. CONTENU : GRILLE CHRONOLOGIQUE -->
    <main class="max-w-3xl mx-auto px-6 pb-24">
      <div class="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700/60 shadow-sm p-6 md:p-10">
        
        <!-- STRUCTURE DE LA LIGNE TEMPORELLE -->
        <div class="relative border-l-2 border-slate-100 dark:border-slate-700 pl-4 space-y-10 ml-2">
          
          <div v-for="(media, idx) in revueMedias" :key="idx" class="relative">
            <!-- Point visuel d'ancrage -->
            <div class="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-800 shadow-sm"></div>
            
            <div class="space-y-3 text-left">
              <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {{ media.source }} — {{ media.date }}
              </span>
              
              <!-- Liste des liens associés à ce média -->
              <div class="grid gap-2">
                <a 
                  v-for="(lien, lIdx) in media.liens" 
                  :key="lIdx"
                  :href="lien.url" 
                  target="_blank" 
                  class="group flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-slate-50 hover:bg-indigo-50 dark:bg-slate-900 dark:hover:bg-indigo-950/30 rounded-xl transition-all border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900/40 gap-2"
                >
                  <span class="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    {{ lien.texte }}
                  </span>
                  <span class="text-xs font-bold text-slate-400 shrink-0 group-hover:underline">
                    {{ lien.type === 'video' ? 'Regarder ⏱️' : 'Lire l\'article →' }}
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>

    <!-- 5. COMPOSANTS DE PIED DE PAGE -->
    <Organisateur />
    <MyFooter />

  </div>
</template>

<script>
// Chargement obligatoire des composants du site de la délégation
import HelloWorld from './HelloWorld.vue';
import ImageSenegal from './ImageSenegal.vue';
import Organisateur from './Organisateur.vue';
import MyFooter from './MyFooter.vue';

export default {
  name: 'RevuePresse',
  components: {
    HelloWorld,
    ImageSenegal,
    Organisateur,
    MyFooter
  },
 data() {
  return {
    searchQuery: '',
    revueMedias: [
      {
        source: "RTS 1 (Journal de 20h)",
        date: "May 22, 2023",
        liens: [
          { texte: "⏱️ [11'25] Opening ceremony of the economic mission", url: "https://rts.sn", type: "video" },
          { texte: "⏱️ [22'10] Official launch of FORAFRICC forum", url: "https://rts.sn", type: "video" },
          { texte: "⏱️ [27'00] Bilateral agreement: UCAD & G3 partnership", url: "https://rts.sn", type: "video" }
        ]
      },
      {
        source: "RTS 1 (Journal de 20h)",
        date: "May 24, 2023",
        liens: [
          { texte: "⏱️ [13'00] Institutional tour of the Diamniadio Industrial Platform", url: "https://rts.sn", type: "video" },
          { texte: "⏱️ [15'28] Innovation Fair: Showcasing entrepreneurial projects", url: "https://rts.sn", type: "video" }
        ]
      },
      {
        source: "RTS Actualités",
        date: "May 2023",
        liens: [
          { texte: "👑 Diamniadio Urban Pole: Official visit by H.R.H. Princess Astrid", url: "https://rts.sn", type: "article" },
          { texte: "⏱️ [41'20] Agro-industrial opportunities: Focus on Agropole-Centre", url: "https://rts.sn", type: "video" }
        ]
      },
      {
        source: "APS (Agence de Presse Sénégalaise)",
        date: "May 2023",
        liens: [
          { texte: "📢 May 17: A Belgian economic mission expected in Dakar from May 21 to 25", url: "https://aps.sn", type: "article" },
          { texte: "🤝 May 23: A Senegalese-Belgian entrepreneurship trade fair opens in Dakar", url: "https://aps.sn", type: "article" },
          { texte: "✍️ May 25: Belgian and Senegalese companies sign 40 partnership conventions", url: "https://aps.sn", type: "article" }
        ]
      },
      {
        source: "TFM (Télé Futurs Medias)",
        date: "May 25, 2023",
        liens: [
          { texte: "📺 Un jour une actu: Senegal rolls out the red carpet for Princess Astrid", url: "https://tfm.sn", type: "video" }
        ]
      },
      {
        source: "E-Media TV",
        date: "May 24, 2023",
        liens: [
          { texte: "🏭 Sindia: Inauguration of the Carmeuse Senegal lime plant by H.R.H. Princess Astrid", url: "https://emedia.sn", type: "video" }
        ]
      },
      {
        source: "Le Quotidien",
        date: "May 2023",
        liens: [
          { texte: "📈 May 23: Foreign investments — Belgian economic offensive in Senegal", url: "https://lequotidien.sn", type: "article" },
          { texte: "🌾 May 26: Belgian mission in Dakar — Showcasing the opportunities of Agropole-Centre", url: "https://lequotidien.sn", type: "article" }
        ]
      },
      {
        source: "Sud Quotidien",
        date: "May 2023",
        liens: [
          { texte: "🔬 May 26: IRESSEF and Belgium partnership — A joint crusade against emerging diseases", url: "https://sudonline.sn", type: "article" },
          { texte: "👥 May 25: High-level delegation of entrepreneurs, business leaders, and academic representatives", url: "https://sudonline.sn", type: "article" }
        ]
      },
      {
        source: "Dakaractu",
        date: "May 2023",
        liens: [
          { texte: "🇧🇪 May 18: The Belgian Princely Economic Mission expected with 30 bilateral agreements", url: "https://dakaractu.com", type: "article" },
          { texte: "🧪 May 24: Bilateral cooperation — H.R.H. Princess Astrid visits IRESSEF to boost research ties", url: "https://dakaractu.com", type: "article" },
          { texte: "✨ May 27: Strategic review — Princess Astrid's historical visit to IRESSEF laboratories", url: "https://dakaractu.com", type: "article" }
        ]
      },
      {
        source: "Seneweb",
        date: "May 2023",
        liens: [
          { texte: "🎓 May 25: Academic cooperation — The G3 alliance expands to UCAD in the presence of Princess Astrid", url: "https://seneweb.com", type: "article" },
          { texte: "👩‍💻 May 23: 4th Innovation Fair — Fatou Diané praises the milestones of the 'Jigeen Ñi Tamit' program", url: "https://seneweb.com", type: "article" },
          { texte: "🏢 May 25: Diamniadio Urban Pole — Belgian delegation amazed by iconic infrastructures", url: "https://seneweb.com", type: "article" },
          { texte: "💎 May 24: Sindia — H.R.H. Princess Astrid inaugurates the ultra-modern Carmeuse plant", url: "https://seneweb.com", type: "article" },
          { texte: "🔗 May 25: Princely Economic Mission — Multiple trade and economic conventions signed", url: "https://seneweb.com", type: "article" },
          { texte: "🧬 May 26: IRESSEF & Bio-sourcing — Launching a new biotherapy production unit in Senegal", url: "https://seneweb.com", type: "article" }
        ]
      },
      {
        source: "Paris Match (Clin d’œil)",
        date: "May 26, 2023",
        liens: [
          { texte: "👒 Princess Astrid of Belgium: Mastering the art of wearing the traditional Moussor in Senegal", url: "https://parismatch.com", type: "article" }
        ]
      }
    ]
  }
}

}
</script>
