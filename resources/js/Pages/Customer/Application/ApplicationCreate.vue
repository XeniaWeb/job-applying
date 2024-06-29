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
});

const newApplication = useForm({
  vacancy_id: null,
  contact: '',
  text: '',
  letter_file: '',
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
      <div class="flex items-center justify-between">
        <h2 class="heading-2 my-0">New Application</h2>
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
              <form @submit.prevent="submit" class="min-h-screen">
                <fieldset class="border-b pb-4">
                  <legend class="heading-3">Add new Application</legend>
                  <div class="mb-2 mb-4 flex w-full justify-between border-b pb-1 text-gray-700 dark:text-gray-200">
                    <span class="block">Please enter info</span>
                    <span class="block">Step 1 of 1</span>
                  </div>
                  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <!-- Vacancy Id-->
                    <div class="">
                      <InputLabel for="vacancy_id" value="Vacancies" />
                      <VueSelect id="vacancy_id" v-model="newApplication.vacancy_id" :options="vacancies.data" />
                      <InputError class="mt-2" :message="newApplication.errors.vacancy_id" />
                    </div>
                    <!-- Contact-->
                    <div>
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
                    <!-- Date Apply-->
                    <div>
                      <InputLabel for="date_apply" value="Date of applying" />
                      <TextInput id="date_apply" type="date" class="block w-full" v-model="newApplication.date_apply" />
                      <InputError class="mt-2" :message="newApplication.errors.date_apply" />
                    </div>
                    <!-- Comment-->
                    <div>
                      <InputLabel for="comment" value="Comment" />
                      <TextInput
                        id="comment"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="newApplication.comment"
                        autocomplete="on"
                        placeholder="Enter your comment text..."
                      />
                      <InputError class="mt-2" :message="newApplication.errors.comment" />
                    </div>
                    <!-- Cover letter text-->
                    <div class="col-span-2">
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
                    <div>
                      <InputLabel for="letter_file" value="Letter files" />
                      <input
                        id="letter_file"
                        type="file"
                        class="mt-1 block w-full"
                        name="letter_file"
                        @input="newApplication.letter_file = $event.target.files[0]"
                      />
                      <progress v-if="newApplication.progress" :value="newApplication.progress.percentage" max="100">
                        {{ newApplication.progress.percentage }}%
                      </progress>
                      <InputError class="mt-2" :message="newApplication.errors.letter_file" />
                    </div>
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
