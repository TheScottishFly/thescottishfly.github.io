<template>
  <div class="flex flex-col items-center justify-center w-full h-full lg:pt-24 sm:pt-12 pt-4">
    <Card></Card>
  </div>
</template>

<script>
  import Card from '../components/portfolio/Card.vue';

  export default {
    name: "Portfolio",
    components: {
      Card
    }
  }
</script>

<style scoped>

</style>
