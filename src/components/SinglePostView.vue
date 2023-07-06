<template>
  <div
    class="w-2/5 p-2 max-w-40 border hover:cursor-pointer bg-white hover:text-slate-50 hover:bg-vue-green"
  >
    <p>{{ post.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Post } from "../views/PostsPage.vue.vue";

defineProps<{ post: Post }>();
</script>

<style scoped></style>
