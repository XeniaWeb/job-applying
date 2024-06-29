<script setup>
import TextInput from "@/Components/UI/TextInput.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {Head, Link, useForm} from "@inertiajs/vue3";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputLabel from "@/Components/UI/InputLabel.vue";
import InputError from "@/Components/UI/InputError.vue";
import VueSelect from "vue3-select-component";

defineProps({
  vacancies: {
    type: Object,
    required: true,
  },
})

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
}
</script>

<template>
  <Head title="New Application"/>

  <AuthenticatedLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <h2 class="heading-2 my-0">New Application</h2>
        <div class="flex items-center space-x-2 justify-between">
          <Link class="block btn btn-secondary btn-outlined"
                :href="route('customer.applications.index')"
          >
            <font-awesome-icon icon="arrow-left-long" enctype="multipart/form-data"/>
            Back to List
          </Link>
        </div>
      </div>
    </template>

    <div class="">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4 pb-4">
        <div class="bg-white dark:bg-gray-800 overflow-x-auto shadow-sm sm:rounded-lg">
          <div class="relative overflow-x-auto min-w-max shadow-md sm:rounded-lg  p-4">
            <div class="flex flex-col px-8 py-2">
              <form @submit.prevent="submit" class="min-h-screen">
                <fieldset class="">
                  <legend class="heading-3">
                    Add new Application
                  </legend>
                  <div class="border-b pb-1 mb-4 w-full mb-2 flex justify-between text-gray-700 dark:text-gray-200">
                    <span class="block">Please enter info</span>
                    <span class="block">Step 1 of 1</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="">
                      <InputLabel for="vacancy_id" value="Vacancies"/>
                      <VueSelect
                        id="vacancy_id"
                        v-model="newApplication.vacancy_id"
                        :options="vacancies.data"/>
                      <InputError class="mt-2" :message="newApplication.errors.vacancy_id"/>
                    </div>
                    <div>
                      <InputLabel for="date_apply" value="Date of applying"/>
                      <TextInput
                        id="date_apply"
                        type="date"
                        class="block w-full"
                        v-model="newApplication.date_apply"
                      />
                      <InputError class="mt-2" :message="newApplication.errors.date_apply"/>
                    </div>
                    <div>
                      <InputLabel for="contact" value="Contact"/>
                      <TextInput
                        id="contact"
                        type="text"
                        class="block w-full"
                        v-model="newApplication.contact"
                        autocomplete="on"
                      />
                      <InputError class="mt-2" :message="newApplication.errors.contact"/>
                    </div>
                    <div>
                      <InputLabel for="apply-text" value="Text of cover letter"/>
                      <!-- todo make textarea component -->
                      <textarea
                        id="apply-text"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="newApplication.text"
                        autocomplete="on"
                        placeholder="Enter your cover letter text..."></textarea>
                      <InputError class="mt-2" :message="newApplication.errors.text"/></div>
                    <div>
                      <InputLabel for="comment" value="Comment"/>
                      <TextInput
                        id="comment"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="newApplication.comment"
                        autocomplete="on"
                        placeholder="Enter your comment text..."
                      />
                      <InputError class="mt-2" :message="newApplication.errors.comment"/>
                    </div>
                    <div>
                      <InputLabel for="letter_file" value="Letter files"/>
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
                      <InputError class="mt-2" :message="newApplication.errors.letter_file"/>
                    </div>
                  </div>
                </fieldset>

                <div class="mt-4 ">
                  <PrimaryButton
                    class="flex justify-center w-full md:w-auto"
                    :class="{ 'opacity-25': newApplication.processing }"
                    :disabled="newApplication.processing"
                    label="Save"
                  />
                </div>
                <hr class="my-8"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped lang="postcss" src="resources/css/select-element-custom.css"></style>
