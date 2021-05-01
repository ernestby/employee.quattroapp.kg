import Vue from 'vue';
import Vuex from 'vuex';
import employeesApi from '@/api/employees';
import { resolve } from 'core-js/fn/promise';

Vue.use(Vuex);

export default {
  state: {
    allEmployees: null,
    adminEmployeeLoading: false,
    scoresModalTitle: null,
    scoresModalData: null
  },
  mutations: {
    saveAllEmployees(state, payload) {
      state.allEmployees = payload;
    },
    setTitle(state, title) {
      state.scoresModalTitle = title;
    },
    setScores(state, payload) {
      state.scoresModalData = payload;
    },
    setEmployeeScores(state, data) {
      state.scoresModalData = data;
    }
  },
  actions: {
    getAdminEmployess(context) {
      return new Promise(resolve => {
        employeesApi.getEmployeesByGroup(3).then(response => {
          resolve(response.data);
        });
      });
    },
    getMasterEmployess(context) {
      return new Promise(resolve => {
        employeesApi.getEmployeesByGroup(1).then(response => {
          resolve(response.data);
        });
      });
    },
    getBestCurrentMonth(context) {
      return new Promise(resolve => {
        employeesApi.getBestCurrentMonth().then(response => {
          resolve(response.data);
        });
      });
    },
    getBadCurrentMonth(context) {
      return new Promise(resolve => {
        employeesApi.getBadCurrentMonth().then(response => {
          resolve(response.data);
        });
      });
    },
    getAllEmployees(context) {
      return new Promise(resolve => {
        employeesApi.getAllEmployees().then(response => {
          context.state.allEmployees = response.data;
        });
      });
    }
  },
  getters: {
    allEmployees: s => s.allEmployees
  }
};
