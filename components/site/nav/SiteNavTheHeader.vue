<template>
  <Popover class="relative bg-white">
    <div
      class="pointer-events-none absolute inset-0 z-30 shadow"
      aria-hidden="true"
    />
    <div class="relative z-20 border-b border-zinc-900">
      <div
        class="mx-auto flex items-center justify-between px-4 py-5 sm:px-6 sm:py-4 lg:justify-start lg:space-x-10 lg:px-8"
      >
        <div>
          <NuxtLink
            to="/"
            class="flex"
          >
            <span class="sr-only">Analog Logo</span>
            <ImagesFullNameLogo />
          </NuxtLink>
        </div>
        <div class="-my-2 -mr-2 lg:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center bg-white p-2 text-zinc-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-900"
          >
            <span class="sr-only">Open menu</span>
            <Bars3Icon
              class="h-6 w-6"
              aria-hidden="true"
            />
          </PopoverButton>
        </div>
        <div
          class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-between"
        >
          <PopoverGroup
            as="nav"
            class="flex space-x-10"
          >
            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                ]"
              >
                <span>Solutions</span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500',
                  ]"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <PopoverPanel
                  class="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block"
                >
                  <div
                    class="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"
                  >
                    <NuxtLink
                      v-for="item in solutions"
                      :key="item.name"
                      :to="item.to"
                      class="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50"
                    >
                      <PopoverButton as="MyLink">
                        <div class="flex md:h-full lg:flex-col">
                          <div class="flex-shrink-0">
                            <span
                              class="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
                            >
                              <component
                                :is="item.icon"
                                class="h-6 w-6"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div
                            class="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4"
                          >
                            <div>
                              <p class="text-base font-medium text-gray-900">
                                {{ item.name }}
                              </p>
                              <p class="mt-1 text-sm text-gray-500">
                                {{ item.description }}
                              </p>
                            </div>
                            <p
                              class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4"
                            >
                              Learn more
                              <span aria-hidden="true"> &rarr;</span>
                            </p>
                          </div>
                        </div>
                      </PopoverButton>
                    </NuxtLink>
                  </div>
                  <div class="bg-gray-50">
                    <div
                      class="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8"
                    >
                      <div
                        v-for="item in callsToAction"
                        :key="item.name"
                        class="flow-root"
                      >
                        <NuxtLink :to="item.to">
                          <PopoverButton
                            as="MyLink"
                            class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                          >
                            <component
                              :is="item.icon"
                              class="h-6 w-6 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <span class="ml-3">{{ item.name }}</span>
                          </PopoverButton>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <NuxtLink
              to="/pricing"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              >Pricing
            </NuxtLink>
            <NuxtLink
              to="/docs"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              >Docs
            </NuxtLink>
            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                ]"
              >
                <span>More</span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500',
                  ]"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <PopoverPanel
                  class="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block"
                >
                  <div class="absolute inset-0 flex">
                    <div class="w-1/2 bg-white" />
                    <div class="w-1/2 bg-gray-50" />
                  </div>
                  <div
                    class="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2"
                  >
                    <nav
                      class="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                    >
                      <div>
                        <h3 class="text-base font-medium text-gray-500">
                          Company
                        </h3>
                        <ul
                          role="list"
                          class="mt-5 space-y-6"
                        >
                          <li
                            v-for="item in company"
                            :key="item.name"
                            class="flow-root"
                          >
                            <NuxtLink :to="item.to"
                              ><PopoverButton
                                as="MyLink"
                                class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                              >
                                <component
                                  :is="item.icon"
                                  class="h-6 w-6 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span class="ml-4">{{ item.name }}</span>
                              </PopoverButton>
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 class="text-base font-medium text-gray-500">
                          Resources
                        </h3>
                        <ul
                          role="list"
                          class="mt-5 space-y-6"
                        >
                          <li
                            v-for="item in resources"
                            :key="item.name"
                            class="flow-root"
                          >
                            <NuxtLink :to="item.to">
                              <PopoverButton
                                as="MyLink"
                                class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                              >
                                <component
                                  :is="item.icon"
                                  class="h-6 w-6 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span class="ml-4">{{ item.name }}</span>
                              </PopoverButton>
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div
                      class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12"
                    >
                      <div>
                        <h3 class="text-base font-medium text-gray-500">
                          From the blog
                        </h3>
                        <ul
                          role="list"
                          class="mt-6 space-y-6"
                        >
                          <li
                            v-for="post in blogPosts"
                            :key="post.id"
                            class="flow-root"
                          >
                            <NuxtLink :to="post.to">
                              <PopoverButton
                                as="MyLink"
                                class="-m-3 flex rounded-lg p-3 hover:bg-gray-100"
                              >
                                <div class="hidden flex-shrink-0 sm:block">
                                  <img
                                    class="h-20 w-32 rounded-md object-cover"
                                    :src="post.imageUrl"
                                    alt=""
                                  />
                                </div>
                                <div class="w-0 flex-1 sm:ml-8">
                                  <h4
                                    class="truncate text-base font-medium text-gray-900"
                                  >
                                    {{ post.name }}
                                  </h4>
                                  <p class="mt-1 text-sm text-gray-500">
                                    {{ post.preview }}
                                  </p>
                                </div>
                              </PopoverButton>
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-6 text-sm font-medium">
                        <NuxtLink to="/blog">
                          <PopoverButton
                            as="MyLink"
                            class="text-indigo-600 hover:text-indigo-500"
                          >
                            View all posts
                            <span aria-hidden="true"> &rarr;</span>
                          </PopoverButton>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
          <div class="flex items-center md:ml-12">
            <NuxtLink
              to="/signin"
              class="nav-button-secondary"
              >Sign in</NuxtLink
            >
            <NuxtLink
              to="/signup"
              class="nav-button-main"
              >Sign up</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition lg:hidden"
      >
        <div
          class="divide-y-2 divide-gray-50 bg-zinc-50 shadow-lg ring-1 ring-zinc-900 ring-opacity-5"
        >
          <div class="px-5 pt-5 pb-6 sm:pb-8">
            <div class="flex items-center justify-between">
              <NuxtLink to="/">
                <PopoverButton as="MyLink">
                  <ImagesFullNameLogo />
                </PopoverButton>
              </NuxtLink>
              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex items-center justify-center bg-white p-2 text-zinc-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-900"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6 sm:mt-8">
              <nav>
                <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                  <NuxtLink
                    v-for="item in solutions"
                    :key="item.name"
                    :to="item.to"
                  >
                    <PopoverButton
                      as="MyLink"
                      class="-m-3 flex items-center p-3 hover:bg-zinc-50"
                    >
                      <div
                        class="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-zinc-900 text-zinc-50 sm:h-12 sm:w-12"
                      >
                        <component
                          :is="item.icon"
                          class="h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>
                      <div class="ml-4 text-base font-medium text-zinc-900">
                        {{ item.name }}
                      </div>
                    </PopoverButton>
                  </NuxtLink>
                </div>
                <div class="mt-8 text-base">
                  <NuxtLink to="/products">
                    <PopoverButton
                      as="MyLink"
                      class="font-medium text-zinc-900 hover:text-teal-800"
                    >
                      View all products
                      <span aria-hidden="true"> &rarr;</span>
                    </PopoverButton>
                  </NuxtLink>
                </div>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <NuxtLink to="/pricing">
                <PopoverButton
                  as="MyLink"
                  class="mobile-nav-link"
                  >Pricing
                </PopoverButton>
              </NuxtLink>
              <NuxtLink to="/docs">
                <PopoverButton
                  as="MyLink"
                  class="mobile-nav-link"
                  >Docs
                </PopoverButton>
              </NuxtLink>

              <NuxtLink to="/about">
                <PopoverButton
                  as="MyLink"
                  class="mobile-nav-link"
                  >Company
                </PopoverButton>
              </NuxtLink>

              <NuxtLink to="/guides">
                <PopoverButton
                  as="MyLink"
                  class="mobile-nav-link"
                  >Resources
                </PopoverButton>
              </NuxtLink>

              <NuxtLink to="/blog">
                <PopoverButton
                  as="MyLink"
                  class="mobile-nav-link"
                  >Blog
                </PopoverButton>
              </NuxtLink>

              <NuxtLink to="/sales">
                <PopoverButton
                  as="MyLink"
                  class="mobile-nav-link"
                >
                  Contact Sales
                </PopoverButton>
              </NuxtLink>
            </div>
            <div class="mt-6">
              <NuxtLink
                to="/signup"
                class="flex w-full items-center justify-center rounded-full border border-transparent bg-zinc-900 p-4 text-base font-medium text-zinc-50 shadow-sm hover:bg-teal-800"
                >Sign up</NuxtLink
              >
              <p class="mt-6 text-center text-base font-medium text-zinc-500">
                Existing customer?
                {{ ' ' }}
                <a
                  to="/signin"
                  class="text-teal-800 hover:text-teal-500"
                  >Sign in</a
                >
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue';
import {
  Bars3Icon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
  XMarkIcon,
  MusicalNoteIcon,
  MegaphoneIcon,
  BuildingStorefrontIcon,
} from '@heroicons/vue/24/solid/index.js';
import { ChevronDownIcon } from '@heroicons/vue/20/solid/index.js';

const solutions = [
  {
    name: 'Artists',
    description:
      'Get a better understanding of where your traffic is coming from.',
    to: '/artists',
    icon: MusicalNoteIcon,
  },
  {
    name: 'Management',
    description: 'Speak directly to your customers in a more meaningful way.',
    to: '/management',
    icon: UserGroupIcon,
  },
  {
    name: 'Promoters',
    description: "Your customers' data will be safe and secure.",
    to: '/promoters',
    icon: MegaphoneIcon,
  },
  {
    name: 'Venues',
    description: "Connect with third-party tools that you're already using.",
    to: '/venues',
    icon: BuildingStorefrontIcon,
  },
];
const callsToAction = [
  { name: 'Watch Demo', to: '/demos', icon: PlayIcon },
  { name: 'View All Products', to: '/products', icon: CheckCircleIcon },
  { name: 'Contact Sales', to: '/sales', icon: PhoneIcon },
];
const company = [
  { name: 'About', to: '/about', icon: InformationCircleIcon },
  { name: 'Customers', to: '/customers', icon: BuildingOfficeIcon },
  { name: 'Press', to: '/press', icon: NewspaperIcon },
  { name: 'Careers', to: '/careers', icon: BriefcaseIcon },
  { name: 'Privacy', to: '/privacy', icon: ShieldCheckIcon },
];
const resources = [
  { name: 'Community', to: '/community', icon: UserGroupIcon },
  { name: 'Partners', to: '/partners', icon: GlobeAltIcon },
  { name: 'Guides', to: '/guides', icon: BookmarkSquareIcon },
  { name: 'Webinars', to: '/webinars', icon: ComputerDesktopIcon },
];
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    to: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    to: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
];
</script>
