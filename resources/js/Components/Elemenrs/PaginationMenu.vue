<script setup>
import {Link} from "@inertiajs/vue3";

defineProps({
  meta: {
    type: Object
  }
});

</script>

<template>
  <nav v-if="meta.links.length > 3" aria-label="Page navigation example">
    <div class="flex  justify-end items-center space-x-0.5 h-8 text-sm mt-2">
      <Link v-for="(link, index) in meta.links"
            :href="link.url"
            :key="index"
            :disabled="link.url === null"
            class=" rounded-lg flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border bg-white border-gray-300 hover:bg-gray-200 hover:text-primary hover:border-primary-hover dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
            :class="{'!bg-primary hover:bg-primary-hover text-white hover:!text-gray-200': link.active, 'bg-gray-50 hover:!bg-gray-50 text-gray-300 hover:text-gray-300 cursor-not-allowed': link.url === null}"
            v-html="link.label"
      />
    </div>
  </nav>
</template>

<style scoped>

</style>
