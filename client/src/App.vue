<template>
  <div id="app">
    <Navigation />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  components: {
    Navigation
  }
};
</script>

<style lang="postcss" scoped>
.content {
  @apply pt-20 px-4;
}
</style>
