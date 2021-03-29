<template>
  <div class="box employers-rating">
    <div class="box-title">{{ title }}</div>

    <div
      style="display: flex;
    flex-wrap: wrap;"
    >
      <template v-if="items.length > 0">
        <div
          v-for="(item, key) in items"
          :key="item.id"
          class="employers-rating__item"
        >
          <div class="employer-rating__item-number">
            {{ key + 1 }}
          </div>
          <img
            :src="
              item.image
                ? 'https://quattroapp.ru/uploads/' + item.image
                : 'https://quattroapp.ru/uploads/turat.jpg'
            "
            class="member-avatar"
          />
          <div class="employers-rating__item-namebox">
            <div class="employers-rating__item-name">
              {{ item.fullname }}
            </div>
            <div class="scores">
              <b-tag
                style="background-color:rgb(72 199 116);color:white;margin-right: 10px"
                title="Баллы за текущий месяц"
                >{{ item.month_score }}</b-tag
              >
              <b-tag
                style="background-color: #ffe0da;"
                title="Баллы за текущий год"
                >{{ item.year_score }}</b-tag
              >
            </div>
            <a
              class="scopes-history-link"
              href="#"
              @click.prevent="openModal(key)"
              >История баллов</a
            >
          </div>
        </div>
      </template>
      <template v-else><loader /></template>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Loader from '@/components/Loader';
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapMutations(['openEmployeeScoresModal', 'setTitle', 'setScores']),
    openModal(itemKey) {
      const employeeFullname = this.items[itemKey].fullname;
      const employeeScores = this.items[itemKey].scores;

      this.setTitle(employeeFullname);
      this.setScores(employeeScores);

      this.openEmployeeScoresModal();
    }
  },
  components: {
    Loader
  }
};
</script>

<style lang="scss">
.clients-view {
  position: relative;
}
.clients-list-wrapper {
  width: 60%;
}

.table {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  background: white;
}

.table-header {
  border-bottom: 1px solid #c1c1c1;
  display: flex;
  padding: 13px;
}

.table-body {
  display: flex;
  padding: 13px;
  border-bottom: 1px solid #e4e4e4;
  cursor: default;
  font-size: 15px;
}

.table-body:hover {
  background-color: #f9f9f9;
  transition: background-color 0s linear;
}

.table-header__name,
.table-body__name {
  width: 30%;
}

.table-header__phone,
.table-body__phone {
  width: 20%;
}

.table-header__birthday,
.table-body__birthday {
  width: 20%;
}

.member-avatar {
  width: 150px;
  height: 150px;
  border-radius: 100px;
  border: 5px solid #8080801a;
  margin-right: 15px;
}

.employer-card {
  padding: 15px;
  display: flex;
  align-items: center;
}

.employers-rating__item {
  padding-bottom: 10px;
  margin-bottom: 10px;
  align-items: center;
  position: relative;
  width: 170px;
}

.employers-rating__item:last-child {
  border-bottom: none;
}

.employers-rating__item-name {
  font-weight: bold;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.employer-rating__item-number {
  font-weight: bold;
  font-size: 20px;
  color: #eb5635;
  /* padding: 20px; */
  margin-right: 10px;
  min-width: 25px;
  text-align: center;
  position: absolute;
  background: white;
  border: 5px solid #f2f2f2;
  width: 45px;
  height: 45px;
  border-radius: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.employers-rating__item-score-list {
}

.employers-rating__item-score-list > span {
  margin-right: 0px;
  margin-bottom: 0px;
}

.employers-rating__item-namebox {
  margin-right: 20px;
}

.score-logs__item {
  border-bottom: 1px solid #8080804f;
  padding-bottom: 10px;
  margin-bottom: 10px;
  display: flex;
}

.employers-best {
  .member-avatar {
    width: 150px;
    margin: auto;
    display: block;
    margin-bottom: 10px;
  }
}

.is-increase-block {
  width: 50px;
  height: 50px;
  background: #48c774;
  color: white;
  font-size: 10px;
  text-align: center;
  margin-right: 3px;
  border-radius: 50px;
  border: 3px solid #ebeaea;
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.is-decrease-block {
  width: 50px;
  height: 50px;
  background: red;
  color: white;
  font-size: 10px;
  text-align: center;
  margin-right: 3px;
  border-radius: 50px;
  border: 3px solid #ebeaea;
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-cells {
  width: 15px;
  height: 15px;
  background: #9e9e9e33;
  color: white;
  font-size: 10px;
  text-align: center;
  margin-right: 3px;
}

.scores {
  display: flex;
  justify-content: center;
}
</style>
