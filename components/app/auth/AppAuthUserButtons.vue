<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseClient();

const logout = async () => {
  await client.auth.signOut();
};
</script>

<template>
  <div>
    <div v-if="user">
      <p>user exists</p>
      <button @click="logout">signout</button>
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
