<template>
  <div id="app" class="flex flex-col w-full min-h-screen h-full" :class="[bgApp === 'white' ? 'bg-white-app' : 'bg-blue-app', classApp ? 'items-center justify-center' : '']">
    <transition v-if="logoCenter" enter-active-class="animated zoomIn" leave-active-class="animated zoomOutDown">
      <img alt="Freelance Django/Vue.js Lyon - Logo" src="./assets/img/logo.png" class="h-64 animated zoomIn bg-transparent" style="animation-duration: 1s; animation-delay: 0.2s;">
    </transition>
    <Navbar></Navbar>
    <router-view></router-view>
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
      logoCenter: true,
      classApp: true,
      bgApp: 'white',
      step: 'home',
    };
  },
  beforeCreate: function () {
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
