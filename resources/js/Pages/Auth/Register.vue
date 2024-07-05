<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import AppGuestLayout from '@/Layouts/AppGuestLayout.vue';
import InputError from '@/Components/UI/InputError.vue';
import InputLabel from '@/Components/UI/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/UI/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  agree: false,
});

const submit = () => {
  form.post(route('register'), {
    onFinish: () => form.reset('password', 'password_confirmation'),
  });
};
</script>

<template>
  <AppGuestLayout>
    <Head title="Register" />

    <div class="flex items-center bg-gray-50 p-6 dark:bg-gray-900">
      <div class="mx-auto h-full max-w-4xl flex-1 overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-800">
        <div class="flex flex-col overflow-y-auto md:flex-row">
          <div class="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              class="h-full w-full object-cover dark:hidden"
              src="/images/auth-img/create-account-office.jpeg"
              alt="Office"
            />
            <img
              aria-hidden="true"
              class="hidden h-full w-full object-cover dark:block"
              src="/images/auth-img/create-account-office-dark.jpeg"
              alt="Office"
            />
          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div class="w-full">
              <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Create account</h1>

              <form @submit.prevent="submit">
                <div>
                  <InputLabel for="name" value="Name" />

                  <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                  />

                  <InputError class="mt-2" :message="form.errors.name" />
                </div>

                <div class="mt-4">
                  <InputLabel for="email" value="Email" />

                  <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autocomplete="username"
                  />

                  <InputError class="mt-2" :message="form.errors.email" />
                </div>

                <div class="mt-4">
                  <InputLabel for="password" value="Password" />

                  <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="new-password"
                  />

                  <InputError class="mt-2" :message="form.errors.password" />
                </div>

                <div class="mt-4">
                  <InputLabel for="password_confirmation" value="Confirm Password" />

                  <TextInput
                    id="password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                  />

                  <InputError class="mt-2" :message="form.errors.password_confirmation" />
                </div>
                <div class="mt-4 block">
                  <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.agree" />
                    <span
                      class="ms-2 rounded-sm text-sm text-primary hover:text-lime-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-lime-500"
                    >
                      I agree to the
                      <span class="cursor-pointer underline">privacy policy</span>
                    </span>
                  </label>
                </div>

                <div class="mt-4">
                  <PrimaryButton
                    class="flex w-full justify-center"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                  >
                    Create account
                  </PrimaryButton>
                </div>
                <hr class="mt-8" />

                <p class="mt-4">
                  <Link
                    :href="route('login')"
                    class="rounded-sm text-base text-primary hover:text-lime-700 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-lime-500"
                  >
                    Already have an account? LogIn
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppGuestLayout>
</template>
