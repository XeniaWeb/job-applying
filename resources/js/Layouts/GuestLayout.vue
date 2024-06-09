<script setup>
import AppLogoXeniaWeb from "@/Components/AppLogoXeniaWeb.vue";
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-50 dark:bg-gray-900">
    <div>
      <Link href="/">
        <AppLogoXeniaWeb class="w-32 h-32 fill-current text-gray-500" />
      </Link>
    </div>

    <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
      <slot />
    </div>
  </div>
</template>
