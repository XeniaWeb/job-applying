<script setup>
import {Head, Link} from '@inertiajs/vue3';
import AppLogoXeniaWebMB from "@/Components/AppLogoXeniaWebMB.vue";
import ContentBox from "@/Components/UI/ContentBox.vue";

defineProps({
  canLogin: {
    type: Boolean,
  },
  canRegister: {
    type: Boolean,
  },
  laravelVersion: {
    type: String,
    required: true,
  },
  phpVersion: {
    type: String,
    required: true,
  },
});

const items = [
  {
    'name': 'Portfolio',
    'route': '',
  },
  {
    'name': 'Contacts',
    'route': '',
  },
];

const cvs = [
  {
    'lang': 'CV on English',
    'route': 'cv.en'
  },
  {
    'lang': 'Lebenslauf auf Deutsch',
    'route': 'cv.de'
  },
  {
    'lang': 'Резюме на Русском языке',
    'route': 'cv.ru'
  },
];
</script>

<template>
  <Head title="Welcome"/>
  <div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 min-h-screen px-4">
    <header class="py-2 mb-6 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto">
      <Link :href="route('welcome')">
        <div class="h-auto w-36 flex justify-center items-center">
          <AppLogoXeniaWebMB class=""/>
        </div>
      </Link>
      <nav v-if="canLogin" class="flex flex-1 justify-end px-2">
        <Link
          v-if="$page.props.auth.user"
          :href="route('dashboard')"
          class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
        >
          Dashboard
        </Link>

        <template v-else>
          <Link
            :href="route('login')"
            class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
          >
            Log in
          </Link>

          <Link
            v-if="canRegister"
            :href="route('register')"
            class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
          >
            Register
          </Link>
        </template>
      </nav>
    </header>
    <div class=" max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <h1 class="heading-2 mb-10">
        This is Welcome Page
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-4 h-full">
        <ContentBox class="min-h-48 flex justify-around items-center col-span-2">
          <h3 class="heading-3">My Skills & CV</h3>
          <div class="">
            <Link v-for="cv in cvs" :key="cv.route"
                  :href="cv.route ? route(cv.route) : '/'">
              <h4
                class="heading-5 font-semibold hover:text-gray-700 hover:underline transition ease-in-out duration-150">
                {{ cv.lang }}
              </h4>
            </Link>
          </div>
        </ContentBox>
        <ContentBox v-for="item in items" :key="item.name"
                    class=" min-h-48 flex justify-center items-center col-span-1">
          <Link :href="item.route ? route(item.route) : '/'">
            <h3 class="heading-3">{{ item.name }}</h3>
          </Link>
        </ContentBox>
      </div>
    </div>
  </div>
</template>
