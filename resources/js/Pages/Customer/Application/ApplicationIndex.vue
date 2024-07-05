<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import PaginationMenu from '@/Components/Elemenrs/PaginationMenu.vue';
import DangerButton from '@/Components/DangerButton.vue';

const props = defineProps({
  applications: {
    type: Object,
  },
  locale: {
    type: String,
  },
});

const destroy = (id) => {
  if (confirm('Are you sure you want to delete this application?')) {
    router.delete(route('customer.applications.destroy', id));
  }
};

const showApp = (id) => {
  router.get(route('customer.applications.show', id));
};

const formatLocale = (date) => {
  if (date === 'Not applied') {
    return null;
  }
  return new Intl.DateTimeFormat(props.locale).format(new Date(date));
};
</script>

<template>
  <Head title="Applications" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h2 class="heading-2 my-0">Applications</h2>
        <div class="flex items-center space-x-2 justify-between">
          <Link class="block btn btn-secondary btn-outlined btn-small" :href="route('customer.employers.create')">
            <font-awesome-icon icon="plus" />
            Add Employer
          </Link>
          <Link
            class="inline-block btn btn-secondary btn-outlined btn-small"
            :href="route('customer.vacancies.create')"
          >
            <font-awesome-icon icon="plus" />
            Add Vacancy
          </Link>
          <Link class="inline-block btn btn-primary btn-small" :href="route('customer.applications.create')">
            <font-awesome-icon icon="plus" />
            Add Application
          </Link>
        </div>
      </div>
    </template>

    <div class="">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4 pb-4">
        <div class="bg-white dark:bg-gray-800 overflow-x-auto shadow-sm sm:rounded-lg">
          <div class="relative overflow-x-auto min-w-max shadow-md sm:rounded-lg p-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption class="px-2 py-2 heading-3 my-0 text-left bg-white dark:text-white dark:bg-gray-800 mb-2">
                <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Applications List</h2>
                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Browse a list of Applications you made, stay organized, get answers, and keep in touch.
                </p>
              </caption>
              <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-1 py-2">Title</th>
                  <th scope="col" class="px-1 py-2">Company</th>
                  <th scope="col" class="px-1 py-2">Status</th>
                  <th scope="col" class="px-1 py-2">Date apply</th>
                  <th scope="col" class="px-1 py-2">City</th>
                  <th scope="col" class="px-1 py-2">Contact</th>
                  <th scope="col" class="px-1 py-2">Comment</th>
                  <th scope="col" class="px-2 py-2">
                    <span class="sr-only">Edit</span>
                  </th>
                  <th scope="col" class="px-2 py-2">
                    <span class="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in props.applications.data"
                  :key="item.id"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    @click="showApp(item.id)"
                    class="cursor-pointer hover:text-primary-focus px-2 py-1 max-w-[11rem] text-wrap font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {{ item.vacancyTitle }}
                  </th>
                  <td class="px-1 py-1 max-w-[10rem] text-wrap">
                    {{ item.employerName }}
                  </td>
                  <td class="px-1 py-1">
                    {{ item.statusValueShort }}
                  </td>
                  <td class="px-1 py-1" :class="{ 'text-warning/40 font-thin': !formatLocale(item.dateApply) }">
                    {{ formatLocale(item.dateApply) ?? 'Not applied' }}
                  </td>
                  <td class="px-1 py-1">
                    {{ item.vacancyCity }}
                  </td>
                  <td class="px-1 py-1 max-w-[12rem] text-wrap">
                    <p v-if="item.contact">
                      {{ item.contact }}
                    </p>
                    <p v-if="item.employerContact">
                      {{ item.employerContact }}
                    </p>
                  </td>
                  <td class="px-1 py-1 max-w-[10rem] text-wrap">
                    {{ item.comment }}
                  </td>
                  <td class="px-1 py-1 text-right">
                    <Link
                      :href="route('customer.applications.edit', item.id)"
                      class="btn btn-small btn-outlined btn-primary"
                      >Edit</Link
                    >
                  </td>
                  <td class="px-1 py-1 text-right">
                    <DangerButton @click="destroy(item.id)" type="submit" class="btn-small">Del </DangerButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <PaginationMenu :meta="applications.meta" />
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped></style>
