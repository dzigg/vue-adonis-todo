<template>
  <div>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              @click="openMobile = !openMobile"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  class="inline-flex"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  class="hidden"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex items-center">
              <router-link class="font-bold text-white" to="/">
                Vue Todo
              </router-link>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex">
                <router-link
                  v-if="isLoggedIn"
                  to="/projects"
                  :class="{ 'text-white bg-gray-900': isActive }"
                  class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  Projects
                </router-link>
              </div>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 hidden items-center pr-2 sm:flex"
          >
            <div class="ml-3 relative">
              <div class="flex">
                <router-link
                  v-if="isLoggedIn"
                  to="/logout"
                  :class="{ 'text-white bg-gray-900': isActive }"
                  class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  Logout
                </router-link>

                <router-link
                  v-if="!isLoggedIn"
                  to="/login"
                  :class="{ 'text-white bg-gray-900': isActive }"
                  class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  Login
                </router-link>

                <router-link
                  v-if="!isLoggedIn"
                  to="/register"
                  :class="{ 'bg-gray-900': isActive }"
                  class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-teal-600 hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500 transition duration-150 ease-in-out"
                >
                  Register
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="{ block: openMobile, hidden: !openMobile }"
        class="sm:hidden fixed bg-gray-800 w-full"
      >
        <div class="px-2 pt-2 pb-3">
          <router-link
            v-if="isLoggedIn"
            to="/projects"
            :class="{ 'text-white bg-gray-900': isActive }"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Projects
          </router-link>
          <hr v-if="isLoggedIn" class="mt-4 mb-4 mx-3" />
          <router-link
            v-if="!isLoggedIn"
            to="/register"
            :class="{ 'text-white bg-gray-900': isActive }"
            class="mt-2 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Register
          </router-link>

          <router-link
            v-if="!isLoggedIn"
            to="/login"
            :class="{ 'text-white bg-gray-900': isActive }"
            class="mt-2 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Login
          </router-link>

          <router-link
            v-if="isLoggedIn"
            to="/logout"
            :class="{ 'text-white bg-gray-900': isActive }"
            class="mt-2 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Logout
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('authentication', ['isLoggedIn'])
  },
  data() {
    return {
      openMobile: false,
      isActive: false
    };
  }
};
</script>
