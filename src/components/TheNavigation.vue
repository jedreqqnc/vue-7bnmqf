<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/posts">Posts</router-link>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
