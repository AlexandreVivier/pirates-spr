<template>
  <FightScreen />
   <!-- <SelectionScreen /> -->
</template>

<script>
import FightScreen from './components/FightScreen.vue'
// import SelectionScreen from './components/SelectionScreen.vue';
export default {
  name: 'App',
  components: {
    FightScreen,
    // SelectionScreen
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
