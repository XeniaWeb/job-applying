<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {Head} from "@inertiajs/vue3";

defineProps({
  applications: {
    type: Object
  },
})

</script>

<template>
  <Head title="Applications"/>

  <AuthenticatedLayout>
    <div class="">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
        <div class="bg-white dark:bg-gray-800 overflow-x-auto shadow-sm sm:rounded-lg">
          <div class="relative overflow-x-auto min-w-max shadow-md sm:rounded-lg  p-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption
                class="px-2 py-2 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800 mb-2">
                <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Applications</h2>
                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Applications you
                  made, stay organized, get answers, and keep in touch.</p>
              </caption>
              <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-1 py-2 ">
                  Title
                </th>
                <th scope="col" class="px-1 py-2">
                  Company
                </th>
                <th scope="col" class="px-1 py-2">
                  Status
                </th>
                <th scope="col" class="px-1 py-2">
                  Date apply
                </th>
                <th scope="col" class="px-1 py-2">
                  City
                </th>
                <th scope="col" class="px-1 py-2">
                  Contact
                </th>
                <th scope="col" class="px-1 py-2">
                  Comment
                </th>
                <th scope="col" class="px-2 py-2">
                  <span class="sr-only">Edit</span>
                </th>
                <th scope="col" class="px-2 py-2">
                  <span class="sr-only">Delete</span>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in applications.data" :key="item.applyId"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-2 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ item.vacancyTitle }}
                </th>
                <td class="px-1 py-1">
                  {{ item.employerName }}
                </td>
                <td class="px-1 py-1">
                  {{ item.statusValueShort }}
                </td>
                <td class="px-1 py-1">
                  {{ item.dateApply }}
                </td>
                <td class="px-1 py-1">
                  {{ item.vacancyCity }}
                </td>
                <td class="px-1 py-1 text-wrap">
                  <p v-if="item.contact">
                    {{ item.contact }} </p>
                  <p v-if="item.employerContact">
                    {{ item.employerContact }}
                  </p>
                </td>
                <td class="px-1 py-1">
                  {{ item.comment }}
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

<style scoped>

</style>

