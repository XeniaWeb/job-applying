<script setup>
import TextInput from '@/Components/UI/TextInput.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import InputError from '@/Components/UI/InputError.vue';
import VueSelect from 'vue3-select-component';

defineProps({
  vacancies: {
    type: Object,
    required: true,
  },
  locale: {
    type: String,
  },
});

const newApplication = useForm({
  vacancy_id: null,
  contact: '',
  text: '',
  comment: '',
  status: 'draft',
  date_apply: '',
});

const submit = () => {
  newApplication.post(route('customer.applications.store'));
};
</script>

<template>
  <Head title="New Application" />

  <AuthenticatedLayout>
    <template #header>
      <div class="block md:flex justify-between items-center">
        <h2 class="heading-2 mt-0 mb-2 md:mb-0">New Application</h2>
        <div class="md:flex items-center md:space-x-2 justify-between">
          <Link
            class="btn btn-secondary btn-outlined inline-block btn-small"
            :href="route('customer.applications.index')"
          >
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
                  <legend class="heading-3">Add new Application</legend>
                  <div class="mb-2 mb-4 flex w-full justify-between border-b pb-1 text-gray-700 dark:text-gray-200">
                    <span class="block">Please enter info</span>
                    <span class="block">Step 1 of 1</span>
                  </div>
                  <div class="md:grid md:gap-x-4 md:grid-cols-2">
                    <!-- Vacancy Id-->
                    <div class="mb-4">
                      <InputLabel for="vacancy_id" value="Vacancies" />
                      <VueSelect
                        id="vacancy_id"
                        v-model="newApplication.vacancy_id"
                        :options="vacancies.data"
                        placeholder="Select a vacancy..."
                        class=""
                      />
                      <InputError class="mt-2" :message="newApplication.errors.vacancy_id" />
                    </div>
                    <!-- Date Apply-->
                    <div class="mb-4">
                      <InputLabel for="date_apply" value="Date of applying" />
                      <VueDatePicker v-model="newApplication.date_apply"></VueDatePicker>

                      <!--  <TextInput id="date_apply" type="date" class="block w-full" v-model="newApplication.date_apply" />-->
                      <InputError class="mt-2" :message="newApplication.errors.date_apply" />
                    </div>
                    <!-- Contact-->
                    <div class="mb-4">
                      <InputLabel for="contact" value="Contact" />
                      <TextInput
                        id="contact"
                        type="text"
                        class="block w-full"
                        v-model="newApplication.contact"
                        autocomplete="on"
                      />
                      <InputError class="mt-2" :message="newApplication.errors.contact" />
                    </div>

                    <!-- Comment-->
                    <div class="mb-4">
                      <InputLabel for="comment" value="Comment" />
                      <TextInput
                        id="comment"
                        type="text"
                        class="block w-full"
                        v-model="newApplication.comment"
                        autocomplete="on"
                        placeholder="Enter your comment text..."
                      />
                      <InputError class="mt-2" :message="newApplication.errors.comment" />
                    </div>
                    <!-- Cover letter text-->
                    <div class="col-span-2 mb-4">
                      <InputLabel for="apply-text" value="Text of cover letter" />
                      <!-- todo make textarea component -->
                      <textarea
                        rows="5"
                        id="apply-text"
                        type="text"
                        class="block w-full rounded-md border-gray-300 placeholder-gray-300 shadow-sm transition duration-150 ease-in-out hover:border-gray-400 focus:border-primary focus:ring-primary dark:border-gray-800 dark:bg-gray-500 dark:text-gray-100 dark:placeholder-gray-400 dark:hover:border-gray-200"
                        v-model="newApplication.text"
                        autocomplete="on"
                        placeholder="Enter your cover letter text..."
                      ></textarea>
                      <InputError class="mt-2" :message="newApplication.errors.text" />
                    </div>
                    <!-- Upload File(s)-->
                  </div>
                </fieldset>

                <div class="mt-4">
                  <PrimaryButton
                    class="flex w-full justify-center md:w-auto"
                    :class="{ 'opacity-25': newApplication.processing }"
                    :disabled="newApplication.processing"
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

<style scoped lang="postcss" src="resources/css/select-element-custom.css"></style>
