<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, Link} from '@inertiajs/vue3';
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
        <h2 class="heading-2 my-0">Application</h2>
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
          <div class="relative min-w-max overflow-x-auto p-4 shadow-md sm:rounded-lg">
            <div class="flex flex-col px-8 py-2">
              <div class="border-b pb-4">
                <h3 class="heading-3">This Application</h3>
                <div class="mb-2 mb-4 flex w-full justify-between border-b pb-1 text-gray-700 dark:text-gray-200">
                  <span class="block">Please </span>
                </div>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <!-- Vacancy Id-->
                  <div class="">
                    <p>{{ application.vacancy_id }}</p>
                  </div>
                  <!-- Contact-->
                  <div>
                    <p>{{ application.contact }}</p>
                  </div>
                  <!-- Date Apply-->
                  <div>
                    <p>{{ application.date_apply }}</p>
                  </div>
                  <!-- Comment-->
                  <div>
                    <p>{{ application.comment }}</p>
                  </div>
                  <!-- Cover letter text-->
                  <div class="col-span-2">
                    <p>{{ application.text }}</p>
                  </div>
                  <!-- Upload File(s)-->
                  <div>
                    <p>Documents & Photos</p>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <PrimaryButton class="flex w-full justify-center md:w-auto" label="Save" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped lang="postcss" src="resources/css/select-element-custom.css"></style>
