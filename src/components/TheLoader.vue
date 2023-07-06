<template>
  <p>{{ loaderText }}</p>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ loaderText: string }>();
</script>

<style scoped></style>
