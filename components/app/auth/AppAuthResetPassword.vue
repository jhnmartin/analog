<template>
  <div
    class="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <NuxtLink to="/">
          <img
            class="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </NuxtLink>
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Reset your Password
        </h2>
      </div>
      <form
        class="mt-8 space-y-6"
        action="#"
        method="POST"
      >
        <input
          type="hidden"
          name="remember"
          value="true"
        />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label
              for="email-address"
              class="sr-only"
              >Email address</label
            >
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required="true"
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Reset Password
          </button>
        </div>

        <div class="flex items-center justify-center">
          <div class="text-sm">
            <NuxtLink
              to="/signin"
              class="font-medium text-indigo-600 hover:text-indigo-500"
              >Back to signin</NuxtLink
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
