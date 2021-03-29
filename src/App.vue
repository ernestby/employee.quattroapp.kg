<template>
  <div id="app">
    <component :is="layout" />
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout';
import MainLayout from './layouts/MainLayout';

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
  },
  components: {
    MainLayout,
    EmptyLayout
  },
  created: function() {},
  mounted() {
    if (localStorage.token == null) {
      this.$router.push('/login');
    }

    this.$store.dispatch('getAllEmployees');
  }
};
</script>

<style lang="scss">
@import '~buefy/dist/buefy.css';
@import 'assets/index.scss';
@import '~@mdi/font/css/materialdesignicons.min.css';
</style>
