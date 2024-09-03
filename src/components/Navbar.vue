<template>
  <nav
    class="fixed top-0 left-0 z-20 flex items-center justify-between w-full p-4 text-gray-600 bg-white shadow-md font-redhat "
  >
    <div
      class="relative space-x-[5pc] text-2xl tracking-widest text-gray-650 font-bold ml-[26pc]"
    >
      <router-link
        class="text-lg transition duration-500 transform hover:text-gray-700"
        to="/"
        >Home</router-link
      >
      <router-link
        class="text-lg transition duration-500 transform hover:text-gray-700"
        to="/about"
        >About</router-link
      >
      <router-link
        class="text-lg transition duration-500 transform hover:text-gray-700"
        to="/project"
        >Project</router-link
      >
      <router-link
        class="text-lg transition duration-500 transform hover:text-gray-700"
        to="/movies"
        >Movies</router-link
      >
      <router-link
        class="text-lg transition duration-500 transform hover:text-gray-700"
        to="/contact"
        >Contact</router-link
      >
    </div>
  </nav>
</template>

<script setup></script>
