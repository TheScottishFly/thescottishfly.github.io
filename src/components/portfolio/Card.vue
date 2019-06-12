<template>
  <div class="flex flex-col w-full h-full">
    <transition v-if="step === 1" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="card flex flex-row self-center justify-center xl:w-1/2 sm:w-5/6 w-full mb-6">
        <div class="flex flex-col sm:w-2/3 sm:mx-0 mx-6 h-full bg-white shadow-lg hover:shadow rounded-lg">
          <div class="flex flex-row justify-between text-white w-full rounded-t-lg p-6" style="background-color: #8a4f52;">
            <button class="font-light md:text-xl text-base cursor-default" style="color: #8a4f52;">&#8592;</button>
            <h1 class="text-lg">gilianrosnet.fr</h1>
            <button class="font-light md:text-xl text-base" @click="step++">&#8594;</button>
          </div>
          <div class="middle bg-white p-6 text-gray-800">
            <p class="text-lg"><span class="font-semibold">Site professionel</span></p>
            <p>Vue.js - Javascript - HTML/CSS</p>
            <p class="text-sm font-light">Déploiement sur Github-pages - SEO</p>
            <blockquote class="flex flex-col p-4 md:mt-4 mt-0 font-light">
              <p>
                Développement d'un site serverless avec Vue.js (framework Front-end Javascript) et Github-pages, solution d'hébergement de site statique.
              </p>
              <p class="mt-4">Définition et mise en place d'une stratégie SEO.</p>
            </blockquote>
          </div>
          <div class="flex flex-row justify-end w-full bg-gray-100 rounded-b-lg py-6 px-10">
            <button class="font-light md:text-base text-sm" @click="step++">Suivant<span class="ml-2 text-lg">&#8594;</span></button>
          </div>
        </div>
      </div>
    </transition>
    <transition v-if="step === 2" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="card flex flex-row self-center justify-center xl:w-1/2 sm:w-5/6 w-full mb-6">
        <div class="flex flex-col sm:w-2/3 sm:mx-0 mx-6 h-full bg-white shadow-lg hover:shadow rounded-lg">
          <div class="flex flex-row justify-between text-white w-full bg-blue-700 rounded-t-lg p-6">
            <button class="font-light md:text-xl text-base" @click="step--">&#8592;</button>
            <h1 class="text-lg">Conformitee</h1>
            <button class="font-light md:text-xl text-base" @click="step++">&#8594;</button>
          </div>
          <div class="middle bg-white p-6 text-gray-800">
            <p class="text-lg"><span class="font-semibold">Prototype</span> - <span class="font-light text-base">Freelance remote</span></p>
            <p>Django - Python - HTML/CSS</p>
            <blockquote class="flex flex-col p-4 md:mt-4 mt-0 font-light italic" cite="https://www.malt.fr/profile/gilianrosnetboutinet#profileMissions">
              <p>
                &#8221; Mission en renfort pour le développement d'un prototype, avec échéances strictes. Gilian a démontré une excellente capacité à comprendre les enjeux et l'existant, intégrer les pratiques, tout en apportant expertise et conseil dès le premier jour. Une grande autonomie alliée à un reporting proactif, c'est un cocktail gagnant. Je recommande ! &#8221;
              </p>
              <a target="_blank" href="https://www.malt.fr/profile/gilianrosnetboutinet#profileMissions" class="self-end mt-4 text-blue-600 font-normal">Hugo - CTO</a>
            </blockquote>
          </div>
          <div class="flex flex-row justify-between w-full bg-gray-100 rounded-b-lg py-6 px-10">
            <button class="font-light md:text-base text-sm" @click="step--"><span class="mr-2 text-lg">&#8592;</span>Précédent</button>
            <button class="font-light md:text-base text-sm" @click="step++">Suivant<span class="ml-2 text-lg">&#8594;</span></button>
          </div>
        </div>
      </div>
    </transition>
    <transition v-if="step === 3" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="card flex flex-row self-center justify-center xl:w-1/2 sm:w-5/6 w-full mb-6">
        <div class="flex flex-col sm:w-2/3 sm:mx-0 mx-6 h-full bg-white shadow-lg hover:shadow rounded-lg">
          <div class="flex flex-row justify-between text-white w-full bg-black rounded-t-lg p-6">
            <button class="font-light md:text-xl text-base" @click="step--">&#8592;</button>
            <h1 class="text-lg text-center">N/A (en cours de constitution)</h1>
            <button class="font-light md:text-xl text-base" @click="step++">&#8594;</button>
          </div>
          <div class="middle bg-white p-6 text-gray-800">
            <p class="text-lg"><span class="font-semibold">Prototype</span> - <span class="font-light text-base">Projet entrepreneurial</span></p>
            <p>Django - Python - Node.js - BigData - DevOps</p>
            <blockquote class="flex flex-col p-4 md:mt-4 mt-0 font-light">
              <p>
                Deux objectifs : Mettre le Big Data au service de nos partenaires des secteurs immobilier et construction - Assurer la mise en avant de certains de leurs services et biens à travers une plateforme web.
              </p>
              <p class="mt-4">L'entreprise développe des algorithmes qui analysent plusieurs centaines de milliers de données, ainsi que la plateforme web, dont nous assurons également la gestion.</p>
            </blockquote>
          </div>
          <div class="flex flex-row justify-between w-full bg-gray-100 rounded-b-lg py-6 px-10">
            <button class="font-light md:text-base text-sm" @click="step--"><span class="mr-2 text-lg">&#8592;</span>Précédent</button>
            <button class="font-light md:text-base text-sm" @click="step++">Suivant<span class="ml-2 text-lg">&#8594;</span></button>
          </div>
        </div>
      </div>
    </transition>
    <transition v-if="step === 4" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="card flex flex-row self-center justify-center xl:w-1/2 sm:w-5/6 w-full mb-6">
        <div class="flex flex-col sm:w-2/3 sm:mx-0 mx-6 h-full bg-white shadow-lg hover:shadow rounded-lg">
          <div class="flex flex-row justify-between text-white w-full bg-corail rounded-t-lg p-6">
            <button class="font-light md:text-xl text-base" @click="step--">&#8592;</button>
            <h1 class="text-lg">Hopes</h1>
            <button class="font-light md:text-xl text-base" @click="step++">&#8594;</button>
          </div>
          <div class="middle bg-white p-6 text-gray-800">
            <p class="text-lg"><span class="font-semibold">Association & Plateforme</span> - <span class="font-light text-base">Co-Founder</span></p>
            <p>Django - Python - Vue.js - Javascript - DevOps</p>
            <blockquote class="flex flex-col p-4 md:mt-4 mt-0 font-light">
              <p>
                Hopes est un collectif de freelances que j'ai initié au sein de mon école, <a class="text-corail font-semibold" href="https://www.le-101.fr/" target="_blank">Le 101</a>.
              </p>
              <p class="mt-4">
                Nous offrons, à ceux qui le souhaitent, un accompagnement dans le lancement et le développement de leurs activités d'indépendants, en les faisant profiter de notre expérience, de notre réseau (Malt, LesBonsTech, ...) et de notre plateforme de mise en relation avec des entreprises (en développement).
              </p>
            </blockquote>
          </div>
          <div class="flex flex-row justify-between w-full bg-gray-100 rounded-b-lg py-6 px-10">
            <button class="font-light md:text-base text-sm" @click="step--"><span class="mr-2 text-lg">&#8592;</span>Précédent</button>
            <button class="font-light md:text-base text-sm" @click="step++">Suivant<span class="ml-2 text-lg">&#8594;</span></button>
          </div>
        </div>
      </div>
    </transition>
    <transition v-if="step === 5" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="card flex flex-row self-center justify-center xl:w-1/2 sm:w-5/6 w-full mb-6">
        <div class="flex flex-col sm:w-2/3 sm:mx-0 mx-6 h-full bg-white shadow-lg hover:shadow rounded-lg">
          <div class="flex flex-row justify-between text-white w-full bg-purple-600 rounded-t-lg p-6">
            <button class="font-light md:text-xl text-base" @click="step--">&#8592;</button>
            <h1 class="text-lg">Lali Wildfire</h1>
            <button class="font-light md:text-xl text-base" @click="step++">&#8594;</button>
          </div>
          <div class="middle bg-white p-6 text-gray-800">
            <p class="text-lg"><span class="font-semibold">Prototype</span> - <span class="font-light text-base">CTO</span></p>
            <p>Python - Node.js - Sigfox (IOT) - MapBox - DevOps</p>
            <blockquote class="flex flex-col p-4 md:mt-4 mt-0 font-light">
              <p>
                Fin 2018, <a class="text-purple-600 font-semibold" href="https://developer.ibm.com/blogs/when-the-forest-talks-monitoring-wildfires-with-iot/" target="_blank">Nassim BETTACH emmène le projet Lali à la 3ème place du Call for Code Challenge, organisé par IBM dans la Silicon Valley</a>. A son retour en France, je le rejoins en tant que CTO.
              </p>
              <p class="mt-4">
                Hardware, IOT, Géolocalisation, Web, de nombreuses compétences se rejoignent dans ce projet, que je quitte quelques temps plus tard lorsque celui-ci pivote pour se concentrer sur la partie Maker (électronique).
              </p>
            </blockquote>
          </div>
          <div class="flex flex-row justify-between w-full bg-gray-100 rounded-b-lg py-6 px-10">
            <button class="font-light md:text-base text-sm" @click="step--"><span class="mr-2 text-lg">&#8592;</span>Précédent</button>
            <button class="font-light md:text-base text-sm" @click="step++">Suivant<span class="ml-2 text-lg">&#8594;</span></button>
          </div>
        </div>
      </div>
    </transition>
    <transition v-if="step === 6" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="card flex flex-row self-center justify-center xl:w-1/2 sm:w-5/6 w-full mb-6">
        <div class="flex flex-col sm:w-2/3 sm:mx-0 mx-6 h-full bg-white shadow-lg hover:shadow rounded-lg">
          <div class="flex flex-row justify-between text-white w-full bg-yellow-600 rounded-t-lg p-6">
            <button class="font-light md:text-xl text-base" @click="step--">&#8592;</button>
            <h1 class="text-lg">CryptoSell</h1>
            <button class="font-light text-yellow-600 md:text-xl text-base cursor-default">&#8594;</button>
          </div>
          <div class="middle bg-white p-6 text-gray-800">
            <p class="text-lg"><span class="font-semibold">Plateforme B2B2C</span> - <span class="font-light text-base">CEO & CTO</span></p>
            <p>Django - Python - HTML/CSS - Bitcoin/Litecoin - DevOps</p>
            <blockquote class="flex flex-col p-4 md:mt-4 mt-0 font-light">
              <p>
                A une époque où les cryptomonnaies n'étaient pas aussi généralisées qu'aujourd'hui, CryptoSell se positionnait comme une plateforme US permettant à des professionnels de vendre leurs produits et services contre des cryptomonnaies, dans un cadre sécurisé et sans nécessiter de compétences techniques.
              </p>
            </blockquote>
          </div>
          <div class="flex flex-row justify-between w-full bg-gray-100 rounded-b-lg py-6 px-10">
            <button class="font-light md:text-base text-sm" @click="step--"><span class="mr-2 text-lg">&#8592;</span>Précédent</button>
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
.card
  div
    transition: box-shadow 0.2s ease !important
  .middle
    min-height: 25rem
    min-width: 100%
</style>
