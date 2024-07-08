<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import PaginationMenu from '@/Components/Elemenrs/PaginationMenu.vue';
import DangerButton from '@/Components/DangerButton.vue';

const props = defineProps({
  employers: {
    type: Object,
  },
});

const destroy = (id) => {
  if (confirm('Are you sure you want to delete this Employer?')) {
    router.delete(route('customer.employers.destroy', id));
  }
};

const showEmployer = (id) => {
  router.get(route('customer.employers.show', id));
};
</script>

<template>
  <Head title="Employers" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h2 class="heading-2 my-0">Employers</h2>
        <div class="flex items-center space-x-2 justify-between">
          <Link class="block btn btn-primary btn-small" :href="route('customer.employers.create')">
            <font-awesome-icon icon="plus" />
            Add Employer
          </Link>
        </div>
      </div>
    </template>

    <div class="">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
        <div class="bg-white dark:bg-gray-800 overflow-x-auto shadow-sm sm:rounded-lg">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption
                class="px-2 py-2 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800 mb-2"
              >
                <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Employers</h2>
                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Browse a list of Employers for whose vacancies you applied, stay organized, get answers, and keep in
                  touch.
                </p>
              </caption>
              <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-2 py-2">Company name</th>
                  <th scope="col" class="px-2 py-2">Email</th>
                  <th scope="col" class="px-1 py-2 text-center">webSite</th>
                  <th scope="col" class="px-1 py-2 text-center">City, address</th>
                  <th scope="col" class="px-1 py-2 text-center">Contact</th>
                  <th scope="col" class="px-1 py-2 text-center">Comment</th>
                  <th scope="col" class="px-1 py-2 text-center">
                    <span class="sr-only">Edit</span>
                  </th>
                  <th scope="col" class="px-1 py-2 text-center">
                    <span class="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="employers.data.length === 0">
                  <th scope="row" class="bg-white dark:bg-gray-800 dark:border-gray-700 p-2 text-lg">
                    <p>No Employers yet...</p>
                  </th>
                </tr>
                <tr
                  v-else
                  v-for="item in employers.data"
                  :key="item.id"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    @click="showEmployer(item.id)"
                    class="px-2 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {{ item.name }}
                  </th>
                  <td class="px-2 py-1">
                    {{ item.email }}
                  </td>
                  <td class="px-1 py-1">
                    <a href="{{ item.webSite }}" target="_blank" class="underline text-blue-300"> Site </a>
                  </td>
                  <td class="px-1 py-1 max-w-[12rem]">
                    <span class="font-bold block">{{ item.city }}</span>
                    <span class="text-[0.7rem]">{{ item.address }}</span>
                  </td>
                  <td class="px-1 py-1">
                    {{ item.contact }}
                  </td>
                  <td class="px-1 py-1">
                    {{ item.comment }}
                  </td>
                  <td class="px-1 py-1 text-right">
                    <Link
                      :href="route('customer.employers.edit', item.id)"
                      class="btn btn-small btn-outlined btn-primary"
                      >Edit
                    </Link>
                  </td>
                  <td class="px-1 py-1 text-right">
                    <DangerButton @click="destroy(item.id)" type="submit" class="btn-small">Del</DangerButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <PaginationMenu :meta="employers.meta" />
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped></style>
