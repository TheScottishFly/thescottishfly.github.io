<template>
  <div class="card flex flex-row self-center justify-center lg:w-1/2 sm:w-5/6 w-full my-6">
    <div class="flex flex-col sm:w-2/3 sm:mx-0 mx-6 h-full bg-white shadow-lg hover:shadow rounded-lg">
      <div class="w-full bg-blue-700 rounded-t-lg p-6">
        <h1 class="text-xl text-white">Conformitee</h1>
      </div>
      <div class="bg-white p-6 text-gray-800">
        <p class="text-lg"><span class="font-semibold">Prototype</span> - <span class="font-light text-base">Full remote</span></p>
        <p>Django - HTML - CSS</p>
        <blockquote class="flex flex-col p-4 md:mt-4 mt-0 font-light italic" cite="https://www.malt.fr/profile/gilianrosnetboutinet#profileMissions">
          <p>
            Mission en renfort pour le développement d'un prototype, avec échéances strictes. Gilian a démontré une excellente capacité à comprendre les enjeux et l'existant, intégrer les pratiques, tout en apportant expertise et conseil dès le premier jour. Une grande autonomie alliée à un reporting proactif, c'est un cocktail gagnant. Je recommande !
          </p>
          <a target="_blank" href="https://www.malt.fr/profile/gilianrosnetboutinet#profileMissions" class="self-end mt-4 text-blue-600 text-lg font-normal">Hugo - CTO</a>
        </blockquote>
      </div>
      <div class="flex flex-row justify-between w-full bg-gray-100 rounded-b-lg py-6 px-10 font-light">
        <p></p>
        <a href="#">Suivant</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",

  }
</script>

<style lang="stylus">
.card div
  transition: box-shadow 0.2s ease !important
</style>
