import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import employees from './employees';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authToken: '',
    error: null,
    message: null,
    employeeCheckInModal: false,
    employeeScoresModal: false
  },
  mutations: {
    saveAuthToken(state, payload) {
      state.authToken = payload;
    },
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = '';
    },
    setMessage(state, message) {
      state.message = message;
    },
    clearMessage(state) {
      state.message = '';
    },
    openEmployeeCheckInModal(state) {
      state.employeeCheckInModal = true;
    },
    closeEmployeeCheckInModal(state) {
      state.employeeCheckInModal = close;
    },
    openEmployeeScoresModal(state) {
      state.employeeScoresModal = true;
    },
    closeEmployeeScoresModal(state) {
      state.employeeScoresModal = close;
    }
  },
  actions: {
    saveAuthToken({ commit }, payload) {
      commit('saveAuthToken', payload);
    }
  },
  getters: {
    error: state => state.error,
    message: state => state.message,
    authToken: state => state.authToken
  },
  modules: {
    employees
  }
});
