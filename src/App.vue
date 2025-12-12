<template>
  <div id="app" class="w-screen h-fit">
    <router-view></router-view>
  </div>
</template>

<script setup>
// Aucun script nécessaire ici dans cet exemple minimal
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
    src: url('@/assets/fonts/JacquardaBastarda9-Regular.ttf');
}
@font-face {
    font-family: 'jacquard12';
    src: url('@/assets/fonts/Jacquard12-Regular.ttf');
}

@font-face {
    font-family: 'pixelify-sans';
    src: url('@/assets/fonts/Pixelify_Sans/static/PixelifySans-Regular.ttf');
}
</style>
