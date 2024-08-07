<script setup>
import TextInput from '@/Components/UI/TextInput.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router, useForm } from '@inertiajs/vue3';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import InputError from '@/Components/UI/InputError.vue';
import VueSelect from 'vue3-select-component';

const props = defineProps({
  application: {
    type: Object,
    required: true,
  },
  statuses: {
    type: Array,
  },
  locale: {
    type: String,
  },
});

const apply = useForm({
  id: props.application.data.id,
  contact: props.application.data.contact,
  text: props.application.data.text,
  comment: props.application.data.comment,
  status: props.application.data.status,
  date_apply: props.application.data.dateApply === 'Not applied' ? null : props.application.data.dateApply,
  created_at: props.application.data.createdAt,
  vacancyTitle: props.application.data.vacancyTitle,
  vacancy_id: props.application.data.vacancyId,
  vacancyCity: props.application.data.vacancyCity,
  employerName: props.application.data.employerName,
});

const format = (date) => {
  if (date === 'Not applied') {
    return 'Not applied';
  }
  return new Intl.DateTimeFormat(props.locale).format(new Date(date));
};

const submit = () => {
  router.put(route('customer.applications.update', apply.id), apply);
};
</script>

<template>
  <Head title="Edit Application" />

  <AuthenticatedLayout>
    <template #header>
      <div class="block md:flex justify-between items-center">
        <h2 class="heading-2 mt-0 mb-2 md:mb-0">Edit Application #{{ apply.id }}</h2>
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
                  <legend class="heading-3 text-primary-focus">Application for {{ apply.vacancyTitle }}</legend>
                  <div class="mb-2 mb-4 flex w-full justify-between border-b pb-1 text-gray-700 dark:text-gray-200">
                    <span class="block"
                      >Company: <span class="accent">{{ apply.employerName }}</span
                      >, City: <span class="accent">{{ apply.vacancyCity }}</span></span
                    >
                    <span class="block"></span>
                  </div>
                  <div class="md:grid md:gap-x-4 md:grid-cols-2">
                    <!-- Contact-->
                    <div>
                      <InputLabel for="contact" value="Contact" />
                      <TextInput
                        id="contact"
                        type="text"
                        class="block w-full"
                        v-model="apply.contact"
                        autocomplete="on"
                      />
                      <InputError class="mt-2" :message="apply.errors.contact" />
                    </div>
                    <!-- Date Apply-->
                    <div>
                      <InputLabel for="date_apply"
                        >Date of applying:
                        <span v-if="apply.date_apply === null" class="accent ml-2"> Not applied </span></InputLabel
                      >
                      <VueDatePicker v-model="apply.date_apply" :format="format"></VueDatePicker>

                      <InputError class="mt-2" :message="apply.errors.date_apply" />
                    </div>
                    <!-- Comment-->
                    <div>
                      <InputLabel for="comment" value="Comment" />
                      <TextInput
                        id="comment"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="apply.comment"
                        autocomplete="on"
                        placeholder="Enter your comment text..."
                      />
                      <InputError class="mt-2" :message="apply.errors.comment" />
                    </div>
                    <!-- Status -->
                    <div class="">
                      <InputLabel for="status" value="Status" />
                      <VueSelect id="status" v-model="apply.status" :options="statuses" />
                      <InputError class="mt-2" :message="apply.errors.status" />
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
                        v-model="apply.text"
                        autocomplete="on"
                        placeholder="Enter your cover letter text..."
                      ></textarea>
                      <InputError class="mt-2" :message="apply.errors.text" />
                    </div>
                    <!-- Upload File(s)-->
                  </div>
                </fieldset>

                <div class="mt-4">
                  <PrimaryButton
                    class="flex w-full justify-center md:w-auto"
                    :class="{ 'opacity-25': apply.processing }"
                    :disabled="apply.processing"
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
<style scoped lang="postcss">
.accent {
  @apply font-bold text-primary-focus;
}
</style>
