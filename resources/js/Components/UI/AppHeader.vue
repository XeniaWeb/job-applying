<script setup>
import {Link} from "@inertiajs/vue3";
</script>

<template>
  <header class="bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 shadow-gray-300 fixed top-0 left-0 w-full z-10">
    <div class="flex justify-between mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <Link :href="route('welcome')" class="heading-4 my-2">XeniaWeb</Link>
      <Link :href="route('dashboard')" class="m-2">Dashboard</Link>
    </div>
  </header>
</template>

<style scoped>

</style>
