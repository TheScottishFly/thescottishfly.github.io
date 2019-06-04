<template>
  <div class="flex flex-col items-center justify-center w-full min-h-screen h-full xl:pt-40 pt-48">
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
