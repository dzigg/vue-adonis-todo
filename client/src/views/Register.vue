<template>
  <div>
    <div
      class="flex items-center justify-center px-4 py-12 bg-gray-50 sm:px-6 lg:px-8"
    >
      <div class="w-full max-w-md">
        <div>
          <h1
            class="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900"
          >
            Register your account
          </h1>
        </div>
        <form class="mt-8" @submit="$event.preventDefault()">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm">
            <div>
              <input
                aria-label="Email address"
                name="email"
                type="email"
                required
                class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email address"
                v-model="registerEmail"
              />
            </div>

            <div class="-mt-px">
              <input
                aria-label="Password"
                name="password"
                type="password"
                required
                class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
                v-model="registerPassword"
              />
            </div>
          </div>
          <div
            :class="{ hidden: !registerError }"
            class="px-3 py-2 mt-4 text-sm font-semibold text-red-500 bg-red-200 rounded"
          >
            Error: {{ this.$store.state.authentication.registerError }}
          </div>
          <div class="mt-6">
            <button
              @click="register"
              class="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-teal-600 border border-transparent rounded-md group hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700"
            >
              Register account
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
export default {
  computed: {
    ...mapState('authentication', ['registerError']),
    ...mapFields('authentication', ['registerEmail', 'registerPassword'])
  },
  methods: {
    ...mapActions('authentication', ['register'])
  }
};
</script>

<style lang="postcss" scoped>
.register-form {
  @apply mt-32 p-8 rounded-lg w-full max-w-md bg-gray-200 mx-auto;
}

.form-field label {
  @apply block mb-2 font-medium text-gray-600;
}

.form-field input[type='text'] {
  @apply block w-full px-4 py-3 text-base text-gray-700 leading-6 appearance-none border border-gray-300 shadow-none bg-white rounded-md;
}
</style>
