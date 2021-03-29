<template>
  <div class="main-layout">
    <div class="page-content">
      <top-bar />
      <check-in-modal />
      <employee-scores-modal />
      <div class="view-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import MainNavigation from '@/components/MainNavigation';
import TopBar from '@/components/TopBar';
import { mapMutations, mapGetters } from 'vuex';

import CheckInModal from '@/components/CheckInModal';
import EmployeeScoresModal from '@/components/EmployeeScoresModal';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(['saveAllEmployers', 'setError', 'setMessage'])
  },
  computed: {
    ...mapGetters(['allEmployers', 'authToken']),
    error() {
      return this.$store.getters.error;
    },
    message() {
      return this.$store.getters.message;
    }
  },
  watch: {
    error(message) {
      if (message.length != '') {
        this.$error(message);
        this.$store.commit('clearError');
      }
    },
    message(message) {
      if (message.length != '') {
        this.$message(message);
        this.$store.commit('clearMessage');
      }
    }
  },
  async mounted() {
    try {
      // if (this.allEmployers.length == 0) {
      //   const allEmployers = await employerNetwork.getAllEmployers();
      //   this.saveAllEmployers(allEmployers);
      // }
    } catch (error) {
      this.setError('Произошла ошибка при получении сотрудников.');
      console.log(error);
    }
  },
  components: {
    MainNavigation,
    TopBar,
    CheckInModal,
    EmployeeScoresModal
  }
};
</script>

<style lang="scss">
.main-layout {
  display: flex;
  background: #f5f7fa;
}

.view-wrapper {
  padding: 30px;
}

.page-content {
  flex: 1 0 0;
}

.modal-content h2 {
  margin-bottom: 15px;
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 20px;
  border-bottom: 1px solid #ededed;
}
</style>
