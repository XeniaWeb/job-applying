<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import PrimaryButton from '@/Components/PrimaryButton.vue';

defineProps({
  application: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <Head title="Application" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="heading-2 my-0">Application #{{ application.data.id }}</h2>
        <div class="flex items-center justify-between space-x-2">
          <Link class="btn btn-secondary btn-outlined block" :href="route('customer.applications.index')">
            <font-awesome-icon icon="arrow-left-long" enctype="multipart/form-data" />
            Back to List
          </Link>
        </div>
      </div>
    </template>

    <div class="">
      <div class="mx-auto mt-4 max-w-7xl pb-4 sm:px-6 lg:px-8">
        <div class="overflow-x-auto bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
          <div class="relative overflow-x-auto p-4 shadow-md sm:rounded-lg">
            <div class="flex flex-col px-8 py-2">
              <div class="border-b pb-4">
                <h3 class="heading-3">This Application</h3>
                <div class="mb-2 mb-4 border-b pb-1 text-gray-700 dark:text-gray-200">
                  <span class="block"
                    >Company: <span class="accent">{{ application.data.employerName }}</span>
                  </span>
                  <span class="block"
                    >City: <span class="accent">{{ application.data.vacancyCity }}</span></span
                  >
                </div>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <!-- Vacancy Id-->
                  <div class="">
                    <p>
                      <span class="heading-6">Vacancy: </span>

                      #{{ application.data.vacancyId }} {{ application.data.vacancyTitle }}
                    </p>
                  </div>
                  <!-- Contact-->
                  <div class="">
                    <p><span class="heading-6">Contact: </span> {{ application.data.contact }}</p>
                  </div>
                  <!-- Date Apply-->
                  <div class="">
                    <p>
                      <span class="heading-6">Date Apply: </span>

                      {{ application.data.dateApply }}
                    </p>
                  </div>
                  <!-- Status -->
                  <div class="">
                    <p>
                      <span class="heading-6">Status: </span>
                      {{ application.data.statusValue }}
                    </p>
                  </div>
                  <!-- Comment-->
                  <div class="">
                    <p>
                      <span class="heading-6">Comment: </span>
                      {{ application.data.comment }}
                    </p>
                  </div>
                  <!-- Cover letter text-->
                  <div class="col-span-2">
                    <div class="heading-6">Cover letter text:</div>
                    <p>{{ application.data.text }}</p>
                  </div>
                  <!-- Upload File(s)-->
                  <div>
                    <p>Documents & Photos</p>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <Link :href="route('customer.applications.edit', application.data.id)">
                  <PrimaryButton class="flex w-full justify-center md:w-auto" label="Edit" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped lang="postcss">
.accent {
  @apply font-bold text-primary-focus;
}
</style>
