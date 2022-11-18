<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8"
    >
      <div>
        <h2 class="text-lg font-semibold text-indigo-600">
          Everything you need
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900">
          All-in-one platform
        </p>
        <p class="mt-4 text-lg text-gray-500">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec.
        </p>
      </div>
      <div class="mt-12 lg:col-span-2 lg:mt-0">
        <dl
          class="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative"
          >
            <dt>
              <CheckIcon
                class="absolute h-6 w-6 text-green-500"
                aria-hidden="true"
              />
              <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                {{ feature.name }}
              </p>
            </dt>
            <dd class="mt-2 ml-9 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/outline';

const features = [
  {
    name: 'Invite team members',
    description:
      'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  {
    name: 'List view',
    description:
      'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  {
    name: 'Keyboard shortcuts',
    description:
      'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  {
    name: 'Calendars',
    description:
      'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  {
    name: 'Notifications',
    description:
      'Find what you need with advanced filters, bulk actions, and quick views.',
  },
  {
    name: 'Boards',
    description:
      'Find what you need with advanced filters, bulk actions, and quick views.',
  },
  {
    name: 'Reporting',
    description:
      'Find what you need with advanced filters, bulk actions, and quick views.',
  },
  {
    name: 'Mobile app',
    description:
      'Find what you need with advanced filters, bulk actions, and quick views.',
  },
];
</script>
