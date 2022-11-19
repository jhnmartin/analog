<script setup lang="ts">
const client = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

const signOut = async () => {
  const { error } = await client.auth.signOut();
  if (!user.value) router.push('/');
};
</script>

<template>
  <div>
    <div v-if="user">
      <div class="flex flex-shrink-0 bg-gray-700 p-4">
        <a
          href="#"
          class="group block w-full flex-shrink-0"
        >
          <div class="flex items-center">
            <div class="mr-3">
              <p class="text-sm font-medium text-white">Tom Cook</p>
              <p
                class="text-xs font-medium text-gray-300 group-hover:text-gray-200"
              >
                View profile
              </p>
            </div>
            <div>
              <img
                class="inline-block h-9 w-9 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </div>
        </a>
      </div>
    </div>

    <div v-if="!user">
      <div class="hidden md:flex items-center md:ml-12">
        <NuxtLink
          to="/signin"
          class="text-base font-medium text-gray-500 hover:text-gray-900"
          >Sign in</NuxtLink
        >
        <NuxtLink
          to="/signup"
          class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >Sign up</NuxtLink
        >
      </div>
      <div class="md:hidden mt-6">
        <NuxtLink
          to="/signup"
          class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >Sign up</NuxtLink
        >
        <p class="mt-6 text-center text-base font-medium text-gray-500">
          Existing customer?
          {{ ' ' }}
          <NuxtLink
            to="signin"
            class="text-indigo-600 hover:text-indigo-500"
            >Sign in</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>
