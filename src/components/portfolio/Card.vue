<template>
  <div class="flex flex-col w-full h-full">
    <transition v-if="step === 1" enter-active-class="animated fadeIn" leave-active-class="animated bounceOutRight">
      <div class="card flex flex-row self-center justify-center xl:w-1/2 sm:w-5/6 w-full my-6">
        <div class="flex flex-col sm:w-2/3 sm:mx-0 mx-6 h-full bg-white shadow-lg hover:shadow rounded-lg">
          <div class="w-full rounded-t-lg p-6" style="background-color: #8a4f52;">
            <h1 class="text-lg text-white">gilianrosnet.fr</h1>
          </div>
          <div class="bg-white p-6 text-gray-800">
            <p class="text-lg"><span class="font-semibold">Site professionel</span></p>
            <p>Vue.js - Javascript - HTML - CSS</p>
            <p class="text-sm font-light">Déploiement sur Github-pages - SEO</p>
            <blockquote class="flex flex-col p-4 md:mt-4 mt-0 font-light">
              <p>
                Développement d'un site serverless au moyen de Vue.js (framework Front-end Javascript) et de Github-pages, solution d'hébergement de site statique.
              </p>
              <p>Définition et mise en place d'une stratégie SEO.</p>
            </blockquote>
          </div>
          <div class="flex flex-row justify-end w-full bg-gray-100 rounded-b-lg py-6 px-10">
            <button class="font-light text-sm" @click="step++">Suivant<span class="ml-2 text-lg">&#8594;</span></button>
          </div>
        </div>
      </div>
    </transition>
    <transition v-if="step === 2" enter-active-class="animated fadeIn" leave-active-class="animated bounceOutRight">
      <div class="card flex flex-row self-center justify-center xl:w-1/2 sm:w-5/6 w-full my-6">
        <div class="flex flex-col sm:w-2/3 sm:mx-0 mx-6 h-full bg-white shadow-lg hover:shadow rounded-lg">
          <div class="w-full bg-blue-700 rounded-t-lg p-6">
            <h1 class="text-lg text-white">Conformitee</h1>
          </div>
          <div class="bg-white p-6 text-gray-800">
            <p class="text-lg"><span class="font-semibold">Prototype</span> - <span class="font-light text-base">Full remote</span></p>
            <p>Django - Python - HTML - CSS</p>
            <blockquote class="flex flex-col p-4 md:mt-4 mt-0 font-light italic" cite="https://www.malt.fr/profile/gilianrosnetboutinet#profileMissions">
              <p>
                &#8221; Mission en renfort pour le développement d'un prototype, avec échéances strictes. Gilian a démontré une excellente capacité à comprendre les enjeux et l'existant, intégrer les pratiques, tout en apportant expertise et conseil dès le premier jour. Une grande autonomie alliée à un reporting proactif, c'est un cocktail gagnant. Je recommande ! &#8221;
              </p>
              <a target="_blank" href="https://www.malt.fr/profile/gilianrosnetboutinet#profileMissions" class="self-end mt-4 text-blue-600 font-normal">Hugo - CTO</a>
            </blockquote>
          </div>
          <div class="flex flex-row justify-between w-full bg-gray-100 rounded-b-lg py-6 px-10">
            <button class="font-light text-sm" @click="step--"><span class="mr-2 text-lg">&#8592;</span>Précédent</button>
            <button class="font-light text-sm" @click="step++">Suivant<span class="ml-2 text-lg">&#8594;</span></button>
          </div>
        </div>
      </div>
    </transition>
    <transition v-if="step === 3" enter-active-class="animated fadeIn" leave-active-class="animated bounceOutRight">
      <div class="card flex flex-row self-center justify-center xl:w-1/2 sm:w-5/6 w-full my-6">
        <div class="flex flex-col sm:w-2/3 sm:mx-0 mx-6 h-full bg-white shadow-lg hover:shadow rounded-lg">
          <div class="w-full bg-black rounded-t-lg p-6">
            <h1 class="text-lg text-white">ImmoService</h1>
          </div>
          <div class="bg-white p-6 text-gray-800">
            <p class="text-lg"><span class="font-semibold">Prototype</span> - <span class="font-light text-base">Projet entrepreneurial</span></p>
            <p>Django - Python - Node.js - OpenLayer - Open Data</p>
            <blockquote class="flex flex-col p-4 md:mt-4 mt-0 font-light italic" cite="https://www.malt.fr/profile/gilianrosnetboutinet#profileMissions">
              <p>
                Mission en renfort pour le développement d'un prototype, avec échéances strictes. Gilian a démontré une excellente capacité à comprendre les enjeux et l'existant, intégrer les pratiques, tout en apportant expertise et conseil dès le premier jour. Une grande autonomie alliée à un reporting proactif, c'est un cocktail gagnant. Je recommande !
              </p>
            </blockquote>
          </div>
          <div class="flex flex-row justify-between w-full bg-gray-100 rounded-b-lg py-6 px-10">
            <button class="font-light text-sm" @click="step--"><span class="mr-2 text-lg">&#8592;</span>Précédent</button>
            <button class="font-light text-sm" @click="step++">Suivant<span class="ml-2 text-lg">&#8594;</span></button>
          </div>
        </div>
      </div>
    </transition>
    <transition v-if="step === 4" enter-active-class="animated fadeIn" leave-active-class="animated bounceOutRight">
      <div class="card flex flex-row self-center justify-center xl:w-1/2 sm:w-5/6 w-full my-6">
        <div class="flex flex-col sm:w-2/3 sm:mx-0 mx-6 h-full bg-white shadow-lg hover:shadow rounded-lg">
          <div class="w-full bg-corail rounded-t-lg p-6">
            <h1 class="text-lg text-white">Hopes</h1>
          </div>
          <div class="bg-white p-6 text-gray-800">
            <p class="text-lg"><span class="font-semibold">Prototype</span> - <span class="font-light text-base">Projet entrepreneurial</span></p>
            <p>Django - Python - Vue.js - Javascript</p>
            <blockquote class="flex flex-col p-4 md:mt-4 mt-0 font-light italic" cite="https://www.malt.fr/profile/gilianrosnetboutinet#profileMissions">
              <p>
                Mission en renfort pour le développement d'un prototype, avec échéances strictes. Gilian a démontré une excellente capacité à comprendre les enjeux et l'existant, intégrer les pratiques, tout en apportant expertise et conseil dès le premier jour. Une grande autonomie alliée à un reporting proactif, c'est un cocktail gagnant. Je recommande !
              </p>
            </blockquote>
          </div>
          <div class="flex flex-row justify-between w-full bg-gray-100 rounded-b-lg py-6 px-10">
            <button class="font-light text-sm" @click="step--"><span class="mr-2 text-lg">&#8592;</span>Précédent</button>
            <button class="font-light text-sm" @click="step++">Suivant<span class="ml-2 text-lg">&#8594;</span></button>
          </div>
        </div>
      </div>
    </transition>
    <transition v-if="step === 5" enter-active-class="animated fadeIn" leave-active-class="animated bounceOutRight">
      <div class="card flex flex-row self-center justify-center xl:w-1/2 sm:w-5/6 w-full my-6">
        <div class="flex flex-col sm:w-2/3 sm:mx-0 mx-6 h-full bg-white shadow-lg hover:shadow rounded-lg">
          <div class="w-full bg-purple-600 rounded-t-lg p-6">
            <h1 class="text-lg text-white">Lali Wildfire</h1>
          </div>
          <div class="bg-white p-6 text-gray-800">
            <p class="text-lg"><span class="font-semibold">Prototype</span> - <span class="font-light text-base">Full remote</span></p>
            <p>Python - Node.js - Sigfox (IOT) - MapBox</p>
            <blockquote class="flex flex-col p-4 md:mt-4 mt-0 font-light italic" cite="https://www.malt.fr/profile/gilianrosnetboutinet#profileMissions">
              <p>
                Mission en renfort pour le développement d'un prototype, avec échéances strictes. Gilian a démontré une excellente capacité à comprendre les enjeux et l'existant, intégrer les pratiques, tout en apportant expertise et conseil dès le premier jour. Une grande autonomie alliée à un reporting proactif, c'est un cocktail gagnant. Je recommande !
              </p>
            </blockquote>
          </div>
          <div class="flex flex-row justify-between w-full bg-gray-100 rounded-b-lg py-6 px-10">
            <button class="font-light text-sm" @click="step--"><span class="mr-2 text-lg">&#8592;</span>Précédent</button>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  export default {
    name: "Card",
    data: function () {
      return {
        step: 1
      };
    }
  }
</script>

<style lang="stylus">
.card div
  transition: box-shadow 0.2s ease !important
</style>
