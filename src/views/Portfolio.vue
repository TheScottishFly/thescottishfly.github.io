<template>
  <div v-if="this.getIntro() === false" class="flex flex-col items-center justify-center w-full h-full pt-12">
    <Card></Card>
  </div>
</template>

<script>
  import Card from '../components/portfolio/Card.vue';
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: "Portfolio",
    components: {
      Card
    },
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
  }
</script>

<style scoped>

</style>
