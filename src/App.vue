<template>
  <div id="app" class="flex flex-col w-full min-h-screen h-full" :class="[bgApp === 'white' ? 'bg-white-app' : 'bg-blue-app', classApp ? 'items-center justify-center' : '']">
    <transition v-if="logoCenter" enter-active-class="animated zoomIn" leave-active-class="animated zoomOutDown">
      <img alt="Freelance Django/Vue.js Lyon - Logo" src="./assets/img/logo.png" class="h-64 animated zoomIn bg-transparent" style="animation-duration: 1s; animation-delay: 0.2s;">
    </transition>
    <Navbar></Navbar>
    <transition name="fade" :duration="{ enter: 1500, leave: 250 }">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  components: {
    Navbar
  },
  data: function () {
    return {
      logoCenter: this.$store.getters.getIntro && window.location.pathname === '/',
      classApp: true,
      bgApp: 'white',
      step: 'home',
    };
  },
  mounted: function () {
    if (this.$store.getters.getIntro && window.location.pathname === '/') {
      setTimeout(() => {
        this.$data.logoCenter = false;
      }, 2000);
      setTimeout(() => {
        this.$data.bgApp = 'blue';
      }, 2800);
      setTimeout(() => {
        this.$data.classApp = false;
      }, 3200);
      setTimeout(() => {
        this.$data.bgApp = 'white';
      }, 42750);
    } else {
      this.$data.logoCenter = false;
      this.$data.bgApp = 'white';
      this.$data.classApp = false;
    }
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
