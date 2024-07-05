<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({});
</script>

<template>
  <div class="pt-8 sm:pt-4">
    <Link :href="route('customer.vacancies.list')" class="link-item">Vacancies</Link>
    <Link :href="route('customer.employers.list')" class="link-item">Employers</Link>
    <Link :href="route('cv.en')" class="link-item">CV</Link>
    <Link :href="route('welcome')" class="link-item">Welcome</Link>
  </div>
</template>

<style lang="postcss" scoped>
.link-item {
  @apply focus:outline-none focus:ring-1 focus:ring-primary block text-lg text-primary hover:text-primary-active py-4 px-5 sm:px-6 lg:px-8 hover:bg-secondary-hover/10 active:text-primary-active transition ease-in-out duration-150;
}
</style>
