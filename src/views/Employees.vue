<template>
  <div class="employees-view" ref="element">
    <div class="view-header">
      <div class="title">
        Сотрудники
      </div>
      <div class="actions"></div>
    </div>

    <div class="columns">
      <div class="column is-three-fifths">
        <div class="box employees-best">
          <div class="box-title">Лучшие сотрудники прошлого месяца</div>
          <div style="display: flex;" v-if="bestMonthEmployees.length > 0">
            <div
              v-for="(best, key) in bestMonthEmployees"
              :key="key"
              style="margin-right: 20px;"
            >
              <img
                :src="
                  best.image
                    ? 'http://quattroapp.ru/uploads/' + best.image
                    : 'https://quattroapp.ru/uploads/turat.jpg'
                "
                class="member-avatar"
              />
              <div class="text-center">
                <strong>{{ best.fullname }}</strong>
              </div>
              <div class="text-center">
                {{ best.group_title }}
              </div>
            </div>
          </div>
          <div v-else>Сотрудники еще не определены.</div>
        </div>
                <div class="box employees-best">
          <div class="box-title">Худшие сотрудники прошлого месяца</div>
          <div style="display: flex;" v-if="badMonthEmployees.length > 0">
            <div
              v-for="(bad, key) in badMonthEmployees"
              :key="key"
              style="margin-right: 20px;"
            >
              <img
                :src="
                  bad.image
                    ? 'http://quattroapp.ru/uploads/' + bad.image
                    : 'https://quattroapp.ru/uploads/turat.jpg'
                "
                class="member-avatar"
              />
              <div class="text-center">
                <strong>{{ bad.fullname }}</strong>
              </div>
              <div class="text-center">
                {{ bad.group_title }}
              </div>
            </div>
          </div>
          <div v-else>Сотрудники еще не определены.</div>
        </div>
        <employees :title="'Рейтинг администраторов'" :items="adminEmployees" />
        <employees :title="'Рейтинг мастеров'" :items="masterEmployees" />
      </div>
      <div class="column">
        <div class="box score-logs">
          <div class="box-title">Последние изменения баллов</div>
          <div v-if="scoreActions">
            <div
              class="score-logs__item"
              v-for="action in scoreActions"
              :key="action.id"
            >
              <div style="margin-right: 15px;">
                <b-tag v-if="action.type === 'increase'" type="is-success">
                  <i class="mdi mdi-plus"></i
                ></b-tag>
                <b-tag v-else type="is-danger">
                  <i class="mdi mdi-minus"></i
                ></b-tag>
              </div>
              <div>
                <div>
                  <strong>{{ action.fullname }}</strong>
                </div>
                <div><strong>Баллы</strong> {{ action.score }}</div>
                <div>
                  <strong>Категория</strong> {{ action.category_title }}
                </div>
                <div><strong>Комментарий</strong> {{ action.note }}</div>
                <div>
                  <strong>Дата</strong>
                  {{ dateFormat(action.date_added) }}
                </div>
              </div>
            </div>
          </div>
          <div v-else>Пока изменений нет.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '../components/Loader.vue';

import { baseUtils } from '../utils/base.utils';
import Employees from '@/components/Employees';

export default {
  components: { Loader, Employees },
  data() {
    const adminEmployees = [];
    const masterEmployees = [];
    const scoreActions = [];
    const bestMonthEmployees = [];
    const badMonthEmployees = [];

    return {
      searchKeyword: '',
      adminEmployees,
      masterEmployees,
      bestMonthEmployees,
      badMonthEmployees,
      scoreActions,
      scoreTableElements: 50,
      hasMobileCards: true
    };
  },
  watch: {
    searchKeyword() {
      this.search();
    }
  },
  methods: {
    dateFormat(date) {
      return baseUtils.dateFormat(date);
    }
  },
  async mounted() {
    this.$store.dispatch('getAdminEmployess').then(response => {
      this.adminEmployees = response;
    });

    this.$store.dispatch('getMasterEmployess').then(response => {
      this.masterEmployees = response;
    });

    this.$store.dispatch('getBestCurrentMonth').then(response => {
      this.bestMonthEmployees = response;
    });

    this.$store.dispatch('getBadCurrentMonth').then(response => {
      this.badMonthEmployees = response;
    });
  }
};
</script>
