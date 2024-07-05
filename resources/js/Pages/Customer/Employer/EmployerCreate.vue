<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
  name: '',
  contact: '',
  comment: '',
});
</script>

<template>
  <Head title="New Employer" />

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h2 class="heading-2 my-0">New Employer</h2>
        <div class="flex items-center space-x-2 justify-between">
          <Link class="block btn btn-secondary btn-outlined" :href="route('customer.employers.index')">
            <font-awesome-icon icon="arrow-left-long" enctype="multipart/form-data" />
            Back to List
          </Link>
        </div>
      </div>
    </template>
    <div class="flex flex-col px-8 py-2">
      <form @submit.prevent="form.post(route('customer.employers.store'))">
        <h1 class="heading-2">New Employer Form</h1>
        <!-- Form here-->
      </form>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped></style>
