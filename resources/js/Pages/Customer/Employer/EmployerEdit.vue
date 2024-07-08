<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import InputError from '@/Components/UI/InputError.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import TextInput from '@/Components/UI/TextInput.vue';

const props = defineProps({
  employer: {
    type: Object,
    required: true,
  },
});

const updatedEmployer = useForm({
  id: props.employer.data.id,
  name: props.employer.data.name,
  description: props.employer.data.description,
  email: props.employer.data.email,
  web_site: props.employer.data.webSite,
  city: props.employer.data.city,
  address: props.employer.data.address,
  contact: props.employer.data.contact,
  comment: props.employer.data.comment,
});

const submit = () => {
  updatedEmployer.put(route('customer.employers.update', props.employer.data.id));
};
</script>

<template>
  <Head title="New Employer" />

  <AuthenticatedLayout>
    <template #header>
      <div class="block md:flex justify-between items-center">
        <h2 class="heading-2 mt-0 mb-2 md:mb-0">New Employer</h2>
        <div class="md:flex items-center md:space-x-2 justify-between">
          <Link class="inline-block btn btn-secondary btn-outlined btn-small" :href="route('customer.employers.index')">
            <font-awesome-icon icon="arrow-left-long" enctype="multipart/form-data" />
            Back to List
          </Link>
        </div>
      </div>
    </template>
    <div class="">
      <div class="mx-auto mt-4 max-w-7xl pb-4 sm:px-6 lg:px-8">
        <div class="bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
          <div class="relative p-4 shadow-md sm:rounded-lg">
            <div class="flex flex-col px-8 py-2">
              <form @submit.prevent="submit" class="min-h-screen">
                <fieldset class="border-b pb-4">
                  <legend class="heading-3">Add new Employer</legend>
                  <div class="mb-2 mb-4 flex w-full justify-between border-b pb-1 text-gray-700 dark:text-gray-200">
                    <span class="block">Please enter info</span>
                    <span class="block">Step 1 of 1</span>
                  </div>
                  <div class="md:grid md:gap-x-4 md:grid-cols-2">
                    <!-- Company name-->
                    <div class="mb-4">
                      <InputLabel for="name" value="Company name" />
                      <TextInput
                        id="name"
                        type="text"
                        class="block w-full"
                        v-model="updatedEmployer.name"
                        autocomplete="on"
                        placeholder="Enter company name..."
                      />
                      <InputError class="mt-2" :message="updatedEmployer.errors.name" />
                    </div>

                    <!-- Description-->
                    <div class="mb-4">
                      <InputLabel for="description" value="Description" />
                      <TextInput
                        id="description"
                        type="text"
                        class="block w-full"
                        v-model="updatedEmployer.description"
                        autocomplete="on"
                        placeholder="Enter description..."
                      />
                      <InputError class="mt-2" :message="updatedEmployer.errors.description" />
                    </div>

                    <!-- Email-->
                    <div class="mb-4">
                      <InputLabel for="email" value="Email" />
                      <TextInput
                        id="email"
                        type="email"
                        class="block w-full"
                        v-model="updatedEmployer.email"
                        autocomplete="on"
                        placeholder="example@example.com ..."
                      />
                      <InputError class="mt-2" :message="updatedEmployer.errors.email" />
                    </div>

                    <!-- Web site-->
                    <div class="mb-4">
                      <InputLabel for="web_site" value="Website" />
                      <TextInput
                        id="web_site"
                        type="text"
                        class="block w-full"
                        v-model="updatedEmployer.web_site"
                        autocomplete="on"
                        placeholder="https://example.com ..."
                      />
                      <InputError class="mt-2" :message="updatedEmployer.errors.web_site" />
                    </div>

                    <!-- City-->
                    <div class="mb-4">
                      <InputLabel for="city" value="City" />
                      <TextInput
                        id="city"
                        type="text"
                        class="block w-full"
                        v-model="updatedEmployer.city"
                        autocomplete="on"
                        placeholder="Enter city..."
                      />
                      <InputError class="mt-2" :message="updatedEmployer.errors.city" />
                    </div>

                    <!-- Address-->
                    <div class="mb-4">
                      <InputLabel for="address" value="Address" />
                      <TextInput
                        id="address"
                        type="text"
                        class="block w-full"
                        v-model="updatedEmployer.address"
                        autocomplete="on"
                        placeholder="Enter address..."
                      />
                      <InputError class="mt-2" :message="updatedEmployer.errors.address" />
                    </div>
                    <!-- Contact-->
                    <div class="mb-4">
                      <InputLabel for="contact" value="Contact" />
                      <TextInput
                        id="contact"
                        type="text"
                        class="block w-full"
                        v-model="updatedEmployer.contact"
                        autocomplete="on"
                        placeholder="Enter conntact..."
                      />
                      <InputError class="mt-2" :message="updatedEmployer.errors.contact" />
                    </div>

                    <!-- Comment-->
                    <div class="mb-4">
                      <InputLabel for="comment" value="Comment" />
                      <TextInput
                        id="comment"
                        type="text"
                        class="block w-full"
                        v-model="updatedEmployer.comment"
                        autocomplete="on"
                        placeholder="Enter your comment text..."
                      />
                      <InputError class="mt-2" :message="updatedEmployer.errors.comment" />
                    </div>
                  </div>
                </fieldset>

                <div class="mt-4">
                  <PrimaryButton
                    class="flex w-full justify-center md:w-auto"
                    :class="{ 'opacity-25': updatedEmployer.processing }"
                    :disabled="updatedEmployer.processing"
                    label="Save"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped></style>
