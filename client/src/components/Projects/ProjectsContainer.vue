<template>
  <section class="panel">
    <h2 class="text-2xl font-extrabold text-gray-800">Projects</h2>
    <div class="mt-6 shadow-sm">
      <div class="flex">
        <input
          aria-label="New project"
          name="newProject"
          type="text"
          class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
          placeholder="New project"
          :value="newProjectTitle"
          @input="setNewProjectTitle($event.target.value)"
        />
        <button @click="createProject" class="ml-4 btn-primary">
          Add project
        </button>
      </div>
      <div
        :class="{ hidden: !createProjectError }"
        class="px-3 py-2 mt-4 text-sm font-semibold text-red-500 bg-red-200 rounded"
      >
        Error: {{ this.$store.state.projects.createProjectError }}
      </div>
    </div>
    <div class="mt-6">
      <Project
        v-for="(project, index) in projects"
        :key="`index: ${index}`"
        :projectTitle="project.title"
      />
    </div>
  </section>
</template>

<script>
import Project from './Project';
import { mapMutations, mapState, mapActions } from 'vuex';
export default {
  components: { Project },
  computed: {
    ...mapState('projects', [
      'createProjectError',
      'newProjectTitle',
      'projects'
    ])
  },
  methods: {
    ...mapMutations('projects', ['setNewProjectTitle']),
    ...mapActions('projects', ['createProject', 'fetchProjects'])
  },
  mounted() {
    this.fetchProjects();
  }
};
</script>
