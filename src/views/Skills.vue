<template>
  <div v-if="this.getIntro() === false" class="flex flex-col items-center justify-center w-full h-full pt-12">
    <div class="card flex flex-row self-center justify-center xl:w-1/2 sm:w-5/6 w-full mb-6">
      <div class="flex flex-col sm:w-2/3 w-full sm:mx-0 mx-6 h-full bg-white shadow-lg hover:shadow rounded-lg">
        <div class="flex flex-row justify-center text-white w-full rounded-t-lg p-6 bg-bluec">
          <h1 class="text-xl">Développement web</h1>
        </div>
        <div class="flex flex-col middle bg-white p-6 text-gray-800">
          <p class="text-lg font-semibold">Tout types de projets</p>
          <p class="mt-4 font-light">Preuve de concept (POC)</p>
          <p class="font-light">Prototype</p>
          <p class="font-light">Site vitrine</p>
          <p class="font-light">E-Commerce</p>
          <p class="font-light">Site collaboratif</p>
          <p class="font-light">Plateforme complexe</p>
          <p class="font-light">...</p>
          <p class="mt-4 text-sm">Bien évidemment, toujours responsive, et respectant les bonnes pratiques de développement !</p>
          <div class="flex flex-row flex-grow flex-wrap items-center justify-center mt-12">
            <a href="https://www.python.org/" target="_blank" class="text-center m-2">
              <p class="mb-2">Python</p>
              <i class="devicon-python-plain text-bluec text-5xl"></i>
            </a>
            <a href="https://www.djangoproject.com/" target="_blank" class="text-center m-2">
              <p class="mb-2">Django</p>
              <i class="devicon-django-line text-bluec text-5xl"></i>
            </a>
            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" class="text-center m-2">
              <p class="mb-2">Javascript</p>
              <i class="devicon-javascript-plain text-bluec text-5xl"></i>
            </a>
            <a href="https://vuejs.org/" target="_blank" class="text-center m-2">
              <p class="mb-2">Vue.js</p>
              <i class="devicon-vuejs-plain-wordmark text-bluec text-5xl"></i>
            </a>
            <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" class="text-center m-2">
              <p class="mb-2">HTML 5</p>
              <i class="devicon-html5-plain-wordmark text-bluec text-5xl"></i>
            </a>
            <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" class="text-center m-2">
              <p class="mb-2">CSS 3</p>
              <i class="devicon-css3-plain-wordmark text-bluec text-5xl"></i>
            </a>
          </div>
        </div>
        <div class="flex flex-row justify-end w-full bg-gray-100 rounded-b-lg py-6 px-10">
          <router-link to="/contact" class="font-light md:text-base text-sm">Me contacter</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'Skills',
    methods: {
      ...mapGetters([
        'getIntro',
        'getBgApp',
        'getTyped'
      ]),
      ...mapMutations([
        'finishIntro',
        'changeTyped'
      ]),

    },
  };
</script>

<style scoped>
</style>
