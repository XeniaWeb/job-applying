<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';

defineProps({
  vacancies: {
    type: Object,
  },
});
</script>

<template>
  <Head title="Vacancies" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h2 class="heading-2 my-0">Vacancies</h2>
        <div class="flex items-center space-x-2 justify-between">
          <Link class="block btn btn-secondary btn-outlined btn-small" :href="route('customer.employers.create')">
            <font-awesome-icon icon="plus" />
            Add Employer
          </Link>
          <Link class="inline-block btn btn-primary btn-small" :href="route('customer.vacancies.create')">
            <font-awesome-icon icon="plus" />
            Add Vacancy
          </Link>
        </div>
      </div>
    </template>

    <div class="">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
        <div class="bg-white dark:bg-gray-800 overflow-x-auto shadow-sm sm:rounded-lg">
          <div class="relative overflow-x-auto min-w-max shadow-md sm:rounded-lg p-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption
                class="px-2 py-2 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800 mb-2"
              >
                <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Vacancies</h2>
                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Browse a list of Vacancies for which you applied, stay organized, get answers, and keep in touch.
                </p>
              </caption>
              <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-1 py-2">Title</th>
                  <th scope="col" class="px-1 py-2">City</th>
                  <th scope="col" class="px-1 py-2">Company</th>
                  <th scope="col" class="px-1 py-2">Date published</th>
                  <th scope="col" class="px-1 py-2">Contact</th>
                  <th scope="col" class="px-2 py-2">
                    <span class="sr-only">Edit</span>
                  </th>
                  <th scope="col" class="px-2 py-2">
                    <span class="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="vacancies.data.length === 0">
                  <th scope="row" class="bg-white dark:bg-gray-800 dark:border-gray-700 p-2 text-lg">
                    <p>No Vacancies yet...</p>
                  </th>
                </tr>
                <tr
                  v-else
                  v-for="item in vacancies.data"
                  :key="item.vacancyId"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th scope="row" class="px-2 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.title }}
                  </th>
                  <td class="px-1 py-1">
                    {{ item.city }}
                  </td>
                  <td class="px-1 py-1">
                    {{ item.employerName }}
                  </td>

                  <td class="px-1 py-1">
                    {{ item.publishedDate }}
                  </td>

                  <td class="px-1 py-1 text-wrap">
                    {{ item.employerContact }}
                  </td>

                  <td class="px-1 py-1 text-right">
                    <a href="#" class="btn btn-small btn-outlined btn-primary">Edit</a>
                  </td>
                  <td class="px-1 py-1 text-right">
                    <a href="#" class="btn btn-small btn-danger">Del</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped></style>
