<template>
  <div v-if="this.getIntro() === false" class="flex flex-col items-center justify-center w-full h-full lg:pt-24 sm:pt-12 pt-4">
    <div class="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p class="font-hairline text-xl text-bluec mt-8">WIP</p>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'Contact',
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
@keyframes bouncing-loader {
  to {
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
}
.bouncing-loader {
  display: flex;
  justify-content: center;
}
.bouncing-loader > div {
  width: 1rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  background: #FA7268;
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}
.bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}
.bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}
</style>
