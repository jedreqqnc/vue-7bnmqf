<template>
  <div class="h-20 flex flex-col items-center mx-5">
    <TheLoader
      v-if="isLoading"
      :loader-text="`Post with id ${postId} loading...`"
    />
    <template v-else>
      <h1 class="text-4xl mb-[30px] font-semibold">
        {{ postData.title }}
      </h1>
      <div class="md:max-w-xl">
        <p class="text-left">
          {{ postData.body }}
        </p>
      </div>
      <button
        @click="router.go(-1)"
        class="mt-5 w-2/5 p-2 max-w-40 border hover:cursor-pointer bg-white hover:text-slate-50 hover:bg-vue-green"
      >
        <span class="line-clamp-1"> Go back to post list </span>
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import TheLoader from "../components/TheLoader.vue";

interface PostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const router = useRouter();
const postData = ref<PostData>();
const postId = ref(router.currentRoute.value.params.postId);
const isLoading = ref(false);

onBeforeMount(() => {
  isLoading.value = true;
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      postData.value = data;
    })
    .catch(() => {
      console.warn("Unexpected error.");
    })
    .finally(() => {
      isLoading.value = false;
    });
});
</script>

<style scoped></style>
