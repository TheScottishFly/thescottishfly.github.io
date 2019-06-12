<template>
  <div v-if="!logoCenter" class="flex flex-row w-full" :class="[this.getBgApp() === 'white' ? 'text-bluec' : 'text-gray-300', tempAbsolute ? 'absolute top-0' : '']">
    <div class="md:flex hidden flex-row w-full items-center justify-center h-40 text-lg font-light">
      <div class="flex flex-row mr-16">
        <router-link to="/" @click.native="bgAppAfterClick('/')" v-if="!logoCenter" :class="[$store.getters.getIntro ? 'animated bounceIn': '', windowLocation === '/' && this.getTyped() === false ? 'text-corail' : '']" class="text-center mx-3" style="animation-delay: 2.25s;"><span data-hover="Qui je suis">Qui je suis</span></router-link>
        <router-link to="/skills" @click.native="bgAppAfterClick('skills')" v-if="!logoCenter" :class="[$store.getters.getIntro ? 'animated bounceIn': '', windowLocation === 'skills' ? 'text-corail' : '']" class="text-center mx-3" style="animation-delay: 2.5s;"><span data-hover="Ce que je sais faire">Ce que je sais faire</span></router-link>
      </div>
      <img v-if="!logoCenter" id="logo-top" alt="Freelance Django/Vue.js Lyon - Logo" src="../assets/img/logo.png" :class="[$store.getters.getIntro ? 'animated fadeInDown': '']" class="h-32" style="animation-duration: 1s; animation-delay: 1s;">
      <div class="flex flex-row ml-16">
        <router-link to="/portfolio" @click.native="bgAppAfterClick('portfolio')" v-if="!logoCenter" :class="[$store.getters.getIntro ? 'animated bounceIn': '', windowLocation === 'portfolio' ? 'text-corail' : '']" class="text-center mx-3" style="animation-delay: 2.75s;"><span data-hover="Ce que j'ai fais">Ce que j'ai fais</span></router-link>
        <router-link to="/contact" @click.native="bgAppAfterClick('contact')" v-if="!logoCenter" :class="[$store.getters.getIntro ? 'animated bounceIn': '', windowLocation === 'contact' ? 'text-corail' : '']" class="text-center mx-3" style="animation-delay: 3s;"><span data-hover="Me contacter">Me contacter</span></router-link>
      </div>
    </div>
    <div class="md:hidden flex flex-row w-full items-center justify-between h-32 px-4 text-lg font-light">
      <img v-if="!logoCenter" id="logo-top" alt="Freelance Django/Vue.js Lyon - Logo" src="../assets/img/logo.png" :class="[$store.getters.getIntro ? 'animated fadeInDown': '']" class="z-50 h-24" style="animation-duration: 1s; animation-delay: 1s;">
      <div class="flex flex-row">
        <p @click="hamburgerMenu = !hamburgerMenu" v-if="!tempAbsolute" :class="[this.getBgApp() === 'white' ? 'text-bluec' : 'text-corail']" class="z-50 animated fadeInRight cursor-pointer text-3xl">&#9776;</p>
      </div>
    </div>
    <transition v-if="hamburgerMenu" enter-active-class="animated fadeIn" leave-active-class="animated zoomOut">
      <div class="flex flex-col bg-white text-bluec items-center justify-center text-xl w-full min-h-screen absolute top-0 right-0 bottom-0 z-40 bg-white animated fadeInRight">
        <router-link to="/" @click.native="bgAppAfterClick" v-if="!logoCenter" class="text-center m-2"><span data-hover="Qui je suis">Qui je suis</span></router-link>
        <router-link to="/skills" @click.native="bgAppAfterClick" v-if="!logoCenter" class="text-center m-2"><span data-hover="Ce que je sais faire">Ce que je sais faire</span></router-link>
        <router-link to="/portfolio" @click.native="bgAppAfterClick" v-if="!logoCenter" class="text-center m-2"><span data-hover="Ce que j'ai fais">Ce que j'ai fais</span></router-link>
        <router-link to="/contact" @click.native="bgAppAfterClick" v-if="!logoCenter" class="text-center m-2"><span data-hover="Me contacter">Me contacter</span></router-link>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'Navbar',
    data: function () {
      return {
        logoCenter: true,
        tempAbsolute: true,
        hamburgerMenu: false,
        windowLocation: window.location.pathname
      };
    },
    mounted: function () {
      if (this.$store.getters.getIntro) {
        setTimeout(() => {
          this.$data.logoCenter = false;
        }, 2000);
        setTimeout(() => {
          this.$data.tempAbsolute = false;
        }, 3500);
      } else {
        this.$data.logoCenter = false;
        this.$data.tempAbsolute = false;
        this.changeBgApp('white');
      }
    },
    methods: {
      ...mapGetters([
        'getBgApp',
        'getTyped'
      ]),
      ...mapMutations([
        'changeBgApp',
        'changeTyped'
      ]),
      bgAppAfterClick(location) {
        this.changeTyped();
        this.$data.hamburgerMenu = false;
        this.$data.windowLocation = location;
        this.changeBgApp('white');
      },
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
