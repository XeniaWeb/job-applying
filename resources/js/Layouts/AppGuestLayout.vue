<script setup>
import { Link } from '@inertiajs/vue3';
import AppLogoXeniaWebMB from '@/Components/AppLogoXeniaWebMB.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-50 dark:bg-gray-900">
    <div>
      <Link href="/">
        <AppLogoXeniaWebMB class="w-56 h-auto" />
      </Link>
    </div>

    <div class="w-full">
      <slot />
    </div>
  </div>
</template>
