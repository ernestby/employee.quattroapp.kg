<template>
  <b-modal v-model="modalWindow" :width="640"
    ><div class="card">
      <header class="modal-card-head">
        {{ title }}
      </header>
      <div class="card-content">
        <b-tooltip
          v-for="(score, key) in scores"
          :key="key"
          :label="score.title + ' ' + score.date_added"
          position="is-top"
          :type="score.type === 'increase' ? 'is-success' : 'is-danger'"
          :animated="false"
        >
          <div
            :class="
              score.type === 'increase'
                ? 'is-increase-block'
                : 'is-decrease-block'
            "
          >
            {{ score.score }}
          </div>
        </b-tooltip>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      modalWindow: false
    };
  },
  methods: {
    ...mapMutations(['closeEmployeeScoresModal'])
  },
  computed: {
    ...mapState(['employeeScoresModal']),
    ...mapState({
      title: state => state.employees.scoresModalTitle,
      scores: state => state.employees.scoresModalData
    })
  },
  watch: {
    employeeScoresModal() {
      this.modalWindow = true;
      this.closeEmployeeScoresModal();
    }
  }
};
</script>
