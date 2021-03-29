<template>
  <div class="empty-layout grey darken-1 ">
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(message) {
      if (message.length != "") {
        this.$error(message);
        this.$store.commit("clearError");
      }
    },
  },
};
</script>

<style lang="scss">
.empty-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  height: 100vh;
  background: #f5f7fa;
}
</style>
