<template>
  <div class="">
    <ProjectsContainer />
  </div>
</template>

<script>
import ProjectsContainer from '@/components/Projects/ProjectsContainer';
import { mapGetters } from 'vuex';
import router from '../router';

export default {
  name: 'Projects',
  components: { ProjectsContainer },
  computed: {
    ...mapGetters('authentication', ['isLoggedIn'])
  },
  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login');
    }
  }
};
</script>
