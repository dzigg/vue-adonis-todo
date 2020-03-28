<template>
  <div>
    <nav class="bg-gray-800">
      <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              @click="openMobile = !openMobile"
              class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                class="w-6 h-6"
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
            class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start"
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
                  class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Projects
                </router-link>
              </div>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 items-center hidden pr-2 sm:flex"
          >
            <div class="relative ml-3">
              <div class="flex">
                <button
                  v-if="isLoggedIn"
                  @click="logout"
                  :class="{ 'text-white bg-gray-900': isActive }"
                  class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Logout
                </button>

                <router-link
                  v-if="!isLoggedIn"
                  to="/login"
                  :class="{ 'text-white bg-gray-900': isActive }"
                  class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Login
                </router-link>

                <router-link
                  v-if="!isLoggedIn"
                  to="/register"
                  :class="{ 'bg-gray-900': isActive }"
                  class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-teal-600 rounded-md hover:text-white hover:bg-teal-500 focus:outline-none focus:text-white focus:bg-teal-500"
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
        class="fixed w-full bg-gray-800 sm:hidden"
      >
        <div class="px-2 pt-2 pb-3">
          <router-link
            v-if="isLoggedIn"
            @click="openMobile = !openMobile"
            to="/projects"
            :class="{ 'text-white bg-gray-900': isActive }"
            class="block px-3 py-2 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Projects
          </router-link>
          <hr v-if="isLoggedIn" class="mx-3 mt-4 mb-4" />
          <router-link
            v-if="!isLoggedIn"
            @click="openMobile = !openMobile"
            to="/register"
            :class="{ 'text-white bg-gray-900': isActive }"
            class="block px-3 py-2 mt-2 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Register
          </router-link>

          <router-link
            v-if="!isLoggedIn"
            @click="openMobile = !openMobile"
            to="/login"
            :class="{ 'text-white bg-gray-900': isActive }"
            class="block px-3 py-2 mt-2 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Login
          </router-link>

          <button
            v-if="isLoggedIn"
            @click="logout"
            :class="{ 'text-white bg-gray-900': isActive }"
            class="block px-3 py-2 mt-2 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('authentication', ['isLoggedIn'])
  },
  methods: {
    ...mapActions('authentication', ['logout'])
  },
  data() {
    return {
      openMobile: false,
      isActive: false
    };
  }
};
</script>
