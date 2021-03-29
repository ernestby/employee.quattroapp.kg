<template>
  <div class="top-bar">
    <div class="employee-info">
      <span class="address">{{ username }}</span>
    </div>
    <div class="menu">
      <a href="#" @click.prevent="openEmployeeCheckInModal()">
        <i class="mdi mdi-account-multiple-plus"></i> Авторизация сотрудников
      </a>
      <a @click.prevent="logout()"
        ><i class="mdi mdi-logout-variant"></i> Выйти</a
      >
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { baseUtils } from '../utils/base.utils';
import { getItem } from '@/utils/storage';
export default {
  data() {
    return {
      username: ''
    };
  },
  methods: {
    ...mapMutations(['openEmployeeCheckInModal']),
    logout() {
      baseUtils.logout();
      this.$router.push('/login');
    }
  },
  mounted() {
    this.username = getItem('username');
  }
};
</script>

<style lang="scss">
.top-bar {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(40, 44, 55, 0.05);
  padding-right: 10px;

  .employee-info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;

    .address {
      font-weight: bold;
      margin-right: 10px;
    }
  }

  .menu {
    margin-bottom: 15px;
    margin-top: 15px;

    a {
      color: #4a4a4a;
      padding: 10px;
    }

    a:hover {
      background: #f5f7fa;
      /* color: white; */
      border-radius: 3px;
    }
  }
}
</style>
