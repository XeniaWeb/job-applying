<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {Link, Head} from "@inertiajs/vue3";
import UiLayout from "@/Layouts/UiLayout.vue";

defineProps({
  employers: {
    type: Object
  }
})
</script>

<template>
  <Head title="Dashboard"/>

  <UiLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Employers</h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 overflow-x-auto shadow-sm sm:rounded-lg">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Our products
                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
              </caption>
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-2 py-2 ">
                  Company name
                </th>
                <th scope="col" class="px-2 py-2">
                  Email
                </th>
                <th scope="col" class="px-1 py-2 text-center">
                  webSite
                </th>
                <th scope="col" class="px-1 py-2 text-center">
                  City, address
                </th>
                <th scope="col" class="px-1 py-2 text-center">
                  Contact
                </th>
                <th scope="col" class="px-1 py-2 text-center">
                  Comment
                </th>
                <th scope="col" class="px-1 py-2 text-center">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in employers" :key="item.id"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-2 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ item.name }}
                </th>
                <td class="px-2 py-1">
                  {{ item.email }}
                </td>
                <td class="px-1 py-1">
                  <a href="{{ item.web_site }}" target="_blank" class="underline text-blue-300">
                    Site
                  </a>
                </td>
                <td class="px-1 py-1">
                  {{ item.city }}, {{ item.address }}
                </td>
                <td class="px-1 py-1">
                  {{ item.contact }}
                </td>
                <td class="px-1 py-1">
                  {{ item.comment }}
                </td>
                <td class="px-1 py-1 text-right">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>




  </UiLayout>
</template>

<style scoped>

</style>
