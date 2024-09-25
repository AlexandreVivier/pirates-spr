<template>
  <HomeBoard />
</template>

<script>
import HomeBoard from './components/HomeBoard.vue'

export default {
  name: 'App',
  components: {
    HomeBoard
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@font-face {
    font-family: 'bastarda';
    src: url('~@/assets/fonts/JacquardaBastarda9-Regular.ttf');
}
</style>
