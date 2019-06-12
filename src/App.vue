<template>
  <div id="app" class="flex flex-col w-full min-h-screen h-full overflow-x-hidden" :class="[this.getBgApp() === 'white' ? 'bg-white-app' : 'bg-blue-app', classApp ? 'items-center justify-center' : '']">
    <transition v-if="logoCenter" enter-active-class="animated zoomIn" leave-active-class="animated zoomOutDown">
      <img alt="Freelance Django/Vue.js Lyon - Logo" src="./assets/img/logo.png" class="h-64 animated zoomIn bg-transparent" style="animation-duration: 1s; animation-delay: 0.2s;">
    </transition>
    <Navbar></Navbar>
    <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
    Navbar
  },
  data: function () {
    return {
      logoCenter: this.$store.getters.getIntro,
      classApp: true,
      step: 'home',
    };
  },

  mounted: function () {
    if (this.$store.getters.getIntro && window.location.pathname === '/') {
      setTimeout(() => {
        this.$data.logoCenter = false;
      }, 2000);
      setTimeout(() => {
        this.changeBgApp('blue');
      }, 2800);
      setTimeout(() => {
        this.$data.classApp = false;
      }, 3200);
      setTimeout(() => {
        this.$store.commit('finishIntro');
      }, 5500);
      setTimeout(() => {
        this.changeBgApp('white');
      }, 42750);
    } else if (this.$store.getters.getIntro) {
      setTimeout(() => {
        this.$data.logoCenter = false;
      }, 2000);
      setTimeout(() => {
        this.$data.classApp = false;
      }, 3200);
      setTimeout(() => {
        this.$store.commit('finishIntro');
      }, 5500);
    } else {
      this.$data.logoCenter = false;
      this.changeBgApp('white');
      this.$data.classApp = false;
    }
  },
  methods: {
    ...mapGetters([
      'getBgApp'
    ]),
    ...mapMutations([
      'changeBgApp'
    ]),
  }
};
</script>

<style lang="stylus">
#app
  transition: background-color 1s ease
.bg-white-app
  background-color: #ffffff
.bg-blue-app
  background-color: #232f3e
</style>
