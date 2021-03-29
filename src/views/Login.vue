<template>
  <div class="login-view">
    <form class="card auth-card" @submit.prevent="submitHandler">
      <div class="card-content">
        <b-field
          :type="{ 'is-danger': $v.login.$dirty && !$v.login.required }"
          label="Логин"
          :message="{
            'Введите корректный логин': $v.login.$dirty && !$v.login.required
          }"
        >
          <b-input type="input" v-model="login" maxlength="30"> </b-input>
        </b-field>
        <b-field
          label="Пароль"
          :type="{ 'is-danger': $v.password.$dirty && !$v.password.required }"
          :message="{
            'Введите пароль': $v.password.$dirty && !$v.password.required
          }"
        >
          <b-input type="password" v-model="password"> </b-input>
        </b-field>
        <b-button
          native-type="submit"
          :loading="btnLoading"
          type="is-success"
          icon-left="login-variant"
          >Авторизация</b-button
        >
      </div>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { mapActions, mapMutations } from 'vuex';
import apiAuth from '@/api/auth';

import { setItem } from '@/utils/storage';
export default {
  data() {
    return {
      login: '',
      password: '',
      btnLoading: false
    };
  },
  validations: {
    login: {
      required
    },
    password: {
      required
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.authToken;
    }
  },
  watch: {
    // loggedIn() {
    //   this.$router.push('/');
    // }
  },
  methods: {
    // ...mapActions(["getAuth"]),
    ...mapMutations(['setError', 'saveAuthToken']),
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const data = {
        login: this.login,
        password: this.password
      };

      this.btnLoading = true;

      apiAuth
        .login(data)
        .then(response => {
          setItem('token', response.data.authorization_hash_code);
          setItem('username', response.data.first_name);
          this.$message('Успешная авторизация.');
          this.$router.push('/');
        })
        .catch(error => {
          this.$error(error.response.data);
          this.btnLoading = false;
        });
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.auth-card {
  width: 500px;
}

.card-content {
  padding: 24px;
  border-radius: 0 0 2px 2px;
}

.input-field .helper-text {
  color: red;
}
</style>
