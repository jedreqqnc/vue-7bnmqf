<template>
  <div>
    <h1 class="text-4xl mb-[30px] font-semibold">List of test items</h1>
    <section class="flex flex-col gap-2 items-center">
      <TheLoader v-if="isLoading" :loader-text="loaderText" />
      <SinglePostView
        v-else
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @click="showDetails(post.id)"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import TheLoader from "../components/TheLoader.vue";
import SinglePostView from "../components/SinglePostView.vue";

export interface Post {
  id: number;
  title: string;
}

const router = useRouter();
const loaderText = ref(`Posts loading...`);
const posts = ref<Post[]>([]);
const isLoading = ref(false);

const showDetails = (postId: number) => {
  router.push(`/posts/${postId}`);
};

onBeforeMount(() => {
  isLoading.value = true;
  fetch("https://my-json-server.typicode.com/typicode/demo/posts", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      isLoading.value = false;
      posts.value = data;
    })
    .catch(() => {
      console.warn("Unexpected error");
    })
    .finally(() => {
      isLoading.value = false;
    });
});
</script>

<style scoped></style>
