<template>
  <div v-if="typed" id="home" class="flex flex-col items-center justify-center w-full h-full pt-20" style="min-height: calc(100vh - 20rem); height: calc(100vh - 20rem);">
    <transition v-if="typed" enter-active-class="animated fadeIn" leave-active-class="animated bounceOutRight">
      <vue-typed-js class="text-white text-xl sm:p-0 p-4 text-center" v-if="strings.length > 0" :strings="strings" :loop="false" :contentType="'html'" :typeSpeed="35" :backSpeed="10" :startDelay="1000">
        <h2 class="typing"></h2>
      </vue-typed-js>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data: function () {
      return {
        typed: false,
        strings: [
          '<span class=\'text-yellow-500\'>Hello !</span>^300',
          'Je suis <span class=\'text-corail\'>Gilian</span>^300',
          '<span class=\'text-blue-500\'>Freelance</span> web Fullstack^300',
          'Étudiant et <span class=\'text-orange-500\'>Entrepreneur</span>^300',
          'Basé à <span class=\'text-corail\'>Lyon</span>^200',
          'Je travaille avec Python^150, <span class=\'text-green-600\'>Django</span>^150, Javascript^150, <span class=\'text-green-400\'>Vue.js</span>^150, HTML^150 et CSS^300',
          'Particulièrement <span class="underline">efficace</span> en développement <span class=\'text-yellow-500\'>rapide</span> de prototype^300, je collabore régulièrement avec des <span class=\'text-corail\'>startups</span> et des <span class=\'text-green-500\'>porteur-se-s de projets</span> !^300',
          'J\'aime travailler <span class="border-b-2 border-t-2 border-blue-500 py-1">à distance</span>^300, mais effectuerais avec <span class="text-3xl text-red-400">plaisir</span>^150 une <span class="text-base text-gray-500">petite</span>^150 partie de ma mission dans vos locaux :)'
        ]
      };
    },
    mounted: function () {
      setTimeout(() => {
        this.$data.typed = true;
      }, 5500);
      setTimeout(() => {
        this.$data.typed = false;
        this.$data.strings = [];
        }, 42000);
    }
  }
</script>
