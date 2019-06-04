<template>
  <div v-if="!logoCenter" class="flex flex-row w-full items-center justify-center h-40 text-lg font-light" :class="[bgApp === 'white' ? 'text-bluec' : 'text-gray-300', tempAbsolute ? 'absolute top-0' : '']">
    <div class="flex flex-row mr-16">
      <router-link to="/" v-if="!logoCenter" class="text-center animated bounceIn mx-3" style="animation-delay: 2.25s;"><span data-hover="Qui je suis">Qui je suis</span></router-link>
      <router-link to="/" v-if="!logoCenter" class="text-center animated bounceIn mx-3" style="animation-delay: 2.5s;"><span data-hover="Ce que je sais faire">Ce que je sais faire</span></router-link>
    </div>
    <img v-if="!logoCenter" id="logo-top" alt="Freelance Django/Vue.js Lyon - Logo" src="../assets/img/logo.png" class="h-32 animated fadeInDown" style="animation-duration: 1s; animation-delay: 1s;">
    <div class="flex flex-row ml-16">
      <router-link to="/" v-if="!logoCenter" class="text-center animated bounceIn mx-3" style="animation-delay: 2.75s;"><span data-hover="Ce que j'ai fais">Ce que j'ai fais</span></router-link>
      <router-link to="/" v-if="!logoCenter" class="text-center animated bounceIn mx-3" style="animation-delay: 3s;"><span data-hover="Me contacter">Me contacter</span></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data: function () {
      return {
        logoCenter: true,
        tempAbsolute: true,
        bgApp: 'blue'
      };
    },
    beforeCreate: function () {
      setTimeout(() => {
        this.$data.logoCenter = false;
      }, 2000);
      setTimeout(() => {
        this.$data.tempAbsolute = false;
      }, 3500);
      setTimeout(() => {
        this.$data.bgApp = 'white';
      }, 42750);
    }
  };
</script>

<style scoped>
a {
  overflow-y: hidden;
}

a span {
  position: relative;
  display: inline-block;
  -webkit-transition: -webkit-transform 0.3s;
  -moz-transition: -moz-transform 0.3s;
  transition: transform 0.3s;
}

a span::before {
  position: absolute;
  top: 100%;
  content: attr(data-hover);
  color: #FA7268;
  -webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

a:hover span,
a:focus span {
  -webkit-transform: translateY(-100%);
  -moz-transform: translateY(-100%);
  transform: translateY(-100%);
}
</style>
