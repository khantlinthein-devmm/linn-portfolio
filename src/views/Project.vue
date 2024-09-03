<script setup>
import { ref } from "vue";

const movies = ref([
  {
    id: 1,
    name: "Black",
    description: "This is my mini series.",
    runtime: "119 min",
    poster: "/photo/1.2.jpg",
  },
  {
    id: 2,
    name: "Black",
    description: "This is my mini series.",
    runtime: "119 min",
    poster: "/photo/1.3.jpg",
  },
  {
    id: 3,
    name: "Black",
    description: "This is my mini series.",
    runtime: "119 min",
    poster: "/photo/1.5.jpg",
  },
  {
    id: 4,
    name: "Black",
    description: "This is my mini series.",
    runtime: "119 min",
    poster: "/photo/1.7.jpg",
  },
  {
    id: 5,
    name: "Black",
    description: "This is my mini series.",
    runtime: "119 min",
    poster: "/photo/1.8.jpg",
  },
  {
    id: 6,
    name: "Black",
    description: "This is my mini series.",
    runtime: "119 min",
    poster: "/photo/black-2.jpg",
  },
]);
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4 p-4 my-20 ">
    <div
      v-for="movie in movies"
      :key="movie.id"
      class="w-full max-w-sm overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md"
    >
      <img
        :src="movie.poster"
        :alt="movie.name"
        class="object-cover w-full h-[25pc]"
      />
      <div class="p-4">
        <h3 class="text-lg text-gray-900 font-redhat">{{ movie.name }}</h3>
        <p class="mt-2 text-gray-700">{{ movie.runtime }}</p>
        <p class="mt-2 text-xl font-bold text-gray-900">
          {{ movie.description }}
        </p>
      </div>
    </div>
  </div>
</template>