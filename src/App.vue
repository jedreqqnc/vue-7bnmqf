<template>
  <div class="max-w-[1440px] m-auto min-h-screen bg-slate-100">
    <TheNavigation />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import TheNavigation from "./components/TheNavigation.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
