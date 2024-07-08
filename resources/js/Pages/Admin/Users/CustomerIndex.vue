<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';

defineProps({
  customers: {
    type: Object,
  },
});
</script>

<template>
  <Head title="Customers" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h2 class="heading-2 my-0">Customers</h2>
        <div class="flex items-center space-x-2 justify-between">
          <Link class="inline-block btn btn-primary btn-small" :href="route('admin.customers.create')">
            <font-awesome-icon icon="plus" />
            Add New Customer
          </Link>
        </div>
      </div>
    </template>

    <div class="">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4 pb-4">
        <div class="bg-white dark:bg-gray-800 overflow-x-auto shadow-sm sm:rounded-lg">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
            <h1>Тута юзеры которые кастомеры у админа</h1>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped></style>
