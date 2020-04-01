<template>
  <div class="project">
    <div class="flex items-center justify-between">
      <span class="text-lg font-medium text-gray-700 capitalize">
        {{ projectTitle }}
      </span>
      <div class="flex items-center">
        <button class="flex items-center">
          <svg
            class="w-4 text-gray-500 transition-all transition duration-75 ease-in-out hover:text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              stroke-miterlimit="10"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode:normal"
            >
              <path d="M0 172V0h172v172z" />
              <path
                d="M131.967 14.333c-1.833 0-3.67.699-5.067 2.1l-12.233 12.234 28.666 28.666L155.567 45.1a7.16 7.16 0 000-10.135l-18.532-18.532a7.14 7.14 0 00-5.068-2.1zm-28.05 25.084L21.5 121.833V150.5h28.667l82.416-82.417z"
                fill="currentColor"
              />
            </g>
          </svg>
        </button>

        <button class="flex items-center">
          <svg
            class="w-5 ml-3 text-gray-500 transition-all transition duration-100 ease-in hover:text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              stroke-miterlimit="10"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode:normal"
            >
              <path d="M0 172V0h172v172z" />
              <path
                d="M71.667 14.333L64.5 21.5H28.667v14.333h114.666V21.5H107.5l-7.167-7.167zM35.833 50.167v93.166c0 7.884 6.45 14.334 14.334 14.334h71.666c7.884 0 14.334-6.45 14.334-14.334V50.167zm31.606 21.5L86 90.227l18.56-18.56 10.107 10.106-18.56 18.56 18.56 18.56L104.56 129 86 110.44 67.44 129l-10.107-10.106 18.56-18.56-18.56-18.561z"
                fill="currentColor"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['projectTitle']
};
</script>
<style lang="postcss" scoped>
.project {
  @apply p-4 mb-3 rounded shadow;
}
.project:last-of-type {
  @apply mb-0;
}
</style>
