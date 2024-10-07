<template>
  <section class="bg-white dark:bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class=" max-w-screen-sm text-center lg:mb-16 mb-8">
        <h2 id="projet"
          class="mb-2  px-4 card-title flex cursive uppercase font-medium  tracking-tight text-gray-900 dark:text-white">
          Projets

        </h2>

        <div class=" px-6 bg-white rounded-full h-2.5 dark:bg-white">
          <div class="bg-red-600 h-1.5 " style="width: 15%"></div>
        </div>


      </div>

      <section class="bg-white dark:bg-gray-900  no-border">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Amélioration de la fertilité des sols en
              Afrique de l’Ouest</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">La
              sécurité alimentaire est vitale pour l’Afrique subsaharienne dans un contexte de population en expansion et
              en urbanisation rapide.

            <ul class="flex flex-col justify-between ">
              <li>Le segment agricole subsaharien fait face à des défis majeurs suite aux :
                <ul class="flex flex-col justify-between pad">
                  <li>Changements climatiques</li>
                  <li>L’acidification des sols (pluies acides)</li>
                  <li>La monoculture et le manque de diversité</li>
                </ul>
              </li>

            </ul>
            </p>
            <a @click="ShowProjet()"
              class="w-full  cursor-pointer no-underline sm:w-auto bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <!-- <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg> -->
              <div class="text-left rtl:text-right">
                <!-- <div class="mb-1 text-xs">Download on the</div> -->
                <div class="-mt-1 font-sans text-sm font-semibold uppercase ">En savoir plus</div>
              </div>
              <svg class=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 9 4-4-4-4" />
              </svg>
            </a>
            <!-- <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> -->
            <!-- <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a>  -->
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="../imgtanzania/Image1.png" alt="mockup">
          </div>
        </div>
      </section>

    </div>
  </section>
</template> 

<script >
export default {
  name: 'MissionTanzania',
  components: {

  },
  data() {
    return {}

  },
  methods: {
    ShowProjet() {
      this.$router.push("/projet")
    },
  }
}

</script>
<style scoped>
.anim {
  animation: mymove 5s infinite;
  animation-delay: 2s
}

@keyframes mymove {
  from {
    left: 0px;
  }

  to {
    left: 200px;
  }
}

.pad{
  list-style: disc;
  padding-left: 10%;

}</style>
