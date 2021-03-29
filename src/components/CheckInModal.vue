<template>
  <b-modal v-model="modalWindow" :width="640" scroll="keep">
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="submit">
          <h2>Авторизация в системе</h2>
          <b-field
            label="Сотрудник"
            :type="{
              'is-danger': $v.employee.$dirty && !$v.employee.required
            }"
            :message="{
              'Введите сотрудника': $v.employee.$dirty && !$v.employee.required
            }"
          >
            <b-select v-model="employee" placeholder="Выберите сотрудника">
              <option
                :value="employee.id"
                v-for="employee in allEmployees"
                :key="employee.id"
                >{{ employee.fullname }}</option
              >
            </b-select>
          </b-field>
          <b-field
            label="Пароль"
            :type="{
              'is-danger': $v.password.$dirty && !$v.password.required
            }"
            :message="{
              'Введите пароль': $v.password.$dirty && !$v.password.required
            }"
          >
            <b-input v-model="password"></b-input>
          </b-field>
          <b-button
            native-type="submit"
            :loading="btnLoading"
            type="is-success"
            icon-left="login-variant"
            >Авторизация</b-button
          >
        </form>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import employeesApi from '@/api/employees';

export default {
  props: {},
  data() {
    return {
      employee: '',
      password: '',
      btnLoading: false,
      modalWindow: false
    };
  },
  methods: {
    ...mapMutations(['setError', 'setMessage', 'closeEmployeeCheckInModal']),
    async submit() {
      this.btnLoading = true;
      if (this.$v.$invalid) {
        this.$v.$touch();
        this.btnLoading = false;
        return;
      }

      this.btnLoading = true;

      const data = {
        employee: this.employee,
        password: this.password
      };

      employeesApi
        .employeeAuth(data)
        .then(response => {
          this.$message(response.data);
          this.btnLoading = false;
        })
        .catch(e => {
          this.$error(e.response.data);
          this.btnLoading = false;
        });

      // console.log(result);
      // if (result.status === false) {
      //   this.setError(result.message);
      // } else {
      //   this.setMessage('Успешная авторизация');
      //   this.password = '';
      // }

      //
    }
  },
  computed: {
    ...mapGetters(['allEmployees']),
    ...mapState(['employeeCheckInModal'])
  },
  watch: {
    employeeCheckInModal() {
      this.modalWindow = true;
      this.closeEmployeeCheckInModal();
    }
  },

  validations: {
    employee: {
      required
    },
    password: {
      required
    }
  }
};
</script>

<style lang="scss">
.select,
select {
  width: 100%;
}
</style>
