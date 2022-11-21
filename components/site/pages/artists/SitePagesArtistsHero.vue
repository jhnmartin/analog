<template>
  <div class="relative overflow-hidden bg-white">
    <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <main class="lg:relative">
        <div
          class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left"
        >
          <div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1
              class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            >
              <span class="block xl:inline">Seamless Collaboration</span>
              {{ ' ' }}
              <span class="block text-teal-900 xl:inline"
                >from studio to stage</span
              >
            </h1>
            <p
              class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
            >
              Keep your team on track across all your projects. Artists trust
              analog for everything from daysheets to merch sales. Get started
              with a free account and learn the power of true collabs
            </p>
            <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-full shadow">
                <NuxtLink
                  to="/signup"
                  class="flex w-full items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-900 px-8 py-3 text-base font-medium text-white hover:bg-teal-800 hover:border-teal-800 md:py-4 md:px-10 md:text-lg"
                  >Start for free</NuxtLink
                >
              </div>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                  >Live demo</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
        >
          <img
            class="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];
</script>
