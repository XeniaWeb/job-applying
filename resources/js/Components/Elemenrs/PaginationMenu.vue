<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
  meta: {
    type: Object,
  },
});
</script>

<template>
  <nav v-if="meta.links.length > 3" aria-label="Page navigation example">
    <div class="mt-2 flex h-8 items-center justify-end space-x-0.5 text-sm">
      <Link
        v-for="(link, index) in meta.links"
        :href="link.url"
        :key="index"
        :disabled="link.url === null"
        class="flex h-8 items-center justify-center rounded-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:border-primary-hover hover:bg-gray-200 hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        :class="{
          '!bg-primary text-white hover:bg-primary-hover hover:!text-gray-200': link.active,
          'cursor-not-allowed bg-gray-50 text-gray-300 hover:!bg-gray-50 hover:text-gray-300': link.url === null,
        }"
        v-html="link.label"
      />
    </div>
  </nav>
</template>

<style scoped></style>
