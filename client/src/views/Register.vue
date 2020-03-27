<template>
  <div>
    <div
      class="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full">
        <div>
          <h1
            class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
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
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email address"
                :value="registerEmail"
                @input="setRegisterEmail($event.target.value)"
              />
            </div>

            <div class="-mt-px">
              <input
                aria-label="Password"
                name="password"
                type="password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
                :value="registerPassword"
                @input="setRegisterPassword($event.target.value)"
              />
            </div>
          </div>
          <div
            :class="{ hidden: !registerError }"
            class="mt-4 py-2 px-3 text-red-500 font-semibold bg-red-200 text-sm rounded"
          >
            Error: {{ this.$store.state.authentication.registerError }}
          </div>
          <div class="mt-6">
            <button
              @click="register"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition duration-150 ease-in-out"
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
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('authentication', [
      'registerEmail',
      'registerPassword',
      'registerError'
    ])
  },
  methods: {
    ...mapMutations('authentication', [
      'setRegisterEmail',
      'setRegisterPassword'
    ]),
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
