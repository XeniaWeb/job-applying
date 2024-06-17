<script setup>
import {Head, Link} from '@inertiajs/vue3';
import AppLogoXeniaWeb from "@/Components/AppLogoXeniaWeb.vue";
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
    'name': 'Employers',
    'route': 'employers.list',
  },
  {
    'name': 'Portfolio',
    'route': '',
  },
  {
    'name': 'My Skills & CV',
    'route': '',
  },
  {
    'name': 'Contacts',
    'route': '',
  },
];
</script>

<template>
  <Head title="Welcome"/>
  <div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 min-h-screen px-4">
    <header class="py-4 mb-6 flex justify-between items-center max-w-6xl mx-auto">
      <div class="w-20 flex justify-center items-center">
        <AppLogoXeniaWeb class=""/>
      </div>
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
    <div class=" max-w-6xl mx-auto">
      <h1 class="heading-2 mb-10">
        This is Welcome Page
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-4">
        <ContentBox v-for="item in items" :key="item.name"
                    class=" min-h-32 flex justify-center items-center col-span-1">
          <Link :href="item.route ? route(item.route) : '/'">
            <h3 class="heading-3">{{ item.name }}</h3>
          </Link>
        </ContentBox>
      </div>
    </div>
  </div>
</template>
