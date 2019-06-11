<template>
  <div id="home" v-if="typed || me" class="flex flex-col items-center justify-center w-full h-full lg:pt-24 sm:pt-12 pt-4" style="min-height: calc(100vh - 20rem); height: calc(100vh - 20rem);">
    <transition v-if="typed" enter-active-class="animated fadeIn" leave-active-class="animated bounceOutRight">
      <vue-typed-js class="text-white sm:text-xl text-lg sm:p-0 p-4 text-center" v-if="strings.length > 0" :strings="strings" :loop="false" :contentType="'html'" :typeSpeed="35" :backSpeed="8" :startDelay="1000">
        <h2 class="typing"></h2>
      </vue-typed-js>
    </transition>
    <transition v-if="me" enter-active-class="animated fadeIn" leave-active-class="animated bounceOutRight">
      <div class="flex flex-col lg:w-2/3 sm:w-5/6 w-full h-full">
        <div class="flex flex-col items-center justify-center w-full font-light">
          <div class="flex flex-col justify-center text-justify lg:w-2/3 w-5/6 h-full p-4 mb-6">
            <p class="">Peu adapté au système scolaire classique, on m'a orienté dans le BTP et je suis devenu maçon par défaut.</p>
            <p>Quatre années sur les chantiers, j'en ai gardé ce besoin de bâtir, ce goût du travail bien fait (sans bonnes fondations, toute chose s'écroule tôt ou tard) et cet immense plaisir d'admirer, une fois terminé, ce qui a été construit.</p>
            <p class="mt-4">L'inactivité d'une période de chômage m'a fait rencontrer l'informatique par hasard, et je suis devenu développeur par passion.</p>
            <p>
              Autodidacte, j'ai vécu mes premiers contrats freelance et expériences entrepreneuriales, puis ai (re)pris le chemin de l'école, pour intégrer <a class="text-corail font-semibold" href="https://www.le-101.fr/" target="_blank">Le 101</a>, franchise lyonnaise de l'école <a class="text-gray-500 font-semibold" href="https://www.42.fr/" target="_blank">42</a>.
            </p>
            <p>Après 18 mois de formation et de stages, me revoilà sur les routes du freelancing et de l'entrepreneuriat, activités parallèles à mon statut d'étudiant.</p>
            <img src="../assets/img/avatar_cadr.png" alt="Photo de profil" class="w-64 self-center mt-12 rounded-lg shadow-lg">
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: "Home",
    data: function () {
      return {
        typed: false,
        me: false,
        strings: [
          '<span class=\'text-yellow-500\'>Hello !</span>^300',
          'Je suis <span class=\'text-corail\'>Gilian</span> :)^300',
          '<span class=\'text-blue-500\'>Freelance</span> web Fullstack^300',
          'Étudiant et <span class=\'text-orange-500\'>Entrepreneur</span>^300',
          'Basé à <span class=\'text-corail\'>Lyon</span>^200',
          'Je travaille avec Python^150, <span class=\'text-green-600\'>Django</span>^150, Javascript^150, <span class=\'text-green-400\'>Vue.js</span>^150, HTML^150 et CSS^300',
          'Particulièrement <span class="underline">efficace</span> en développement <span class=\'text-yellow-500\'>rapide</span> de prototype^300, je collabore régulièrement avec des <span class=\'text-corail\'>startups</span> et des <span class=\'text-green-500\'>porteur-se-s de projets</span> !^300',
          'J\'aime travailler <span class="border-b-2 border-t-2 border-blue-500 py-1">à distance</span>^300, mais effectuerais avec <span class="text-3xl text-red-400">plaisir</span>^150 une <span class="text-base text-gray-500">petite</span>^150 partie de ma mission dans vos locaux :)'
        ]
      };
    },
    methods: {
      ...mapMutations([
        'finishIntro'
      ]),
    },
    mounted: function () {
      if (this.$store.getters.getIntro) {
        setTimeout(() => {
          this.$data.typed = true;
          this.finishIntro();
        }, 5500);
        setTimeout(() => {
          this.$data.typed = false;
          this.$data.me = true;
          this.$data.strings = [];
        }, 42000);
      } else {
        this.$data.typed = false;
        this.$data.me = true;
        this.$data.strings = [];
      }
    }
  }
</script>

<style lang="stylus">

</style>
