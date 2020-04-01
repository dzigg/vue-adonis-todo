import router from '../router';
import HTTP from '../http';
import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  state: {
    registerEmail: null,
    registerPassword: null,
    registerError: null,
    loginEmail: 'tester@gmail.com',
    loginPassword: 'test',
    loginError: null,
    token: null
  },
  actions: {
    logout({ commit }) {
      commit('setToken', null);
      router.push('/login');
    },
    register({ commit, state }) {
      commit('setRegisterError', null);
      return HTTP()
        .post('/auth/register', {
          email: state.registerEmail,
          password: state.registerPassword
        })
        .then(({ data }) => {
          commit('setToken', data.token);
          router.push('/');
        })
        .catch(() => {
          commit('setRegisterError', 'Error has occured creating your account');
        });
    },
    login({ commit, state }) {
      commit('setLoginError', null);
      return HTTP()
        .post('/auth/login', {
          email: state.loginEmail,
          password: state.loginPassword
        })
        .then(({ data }) => {
          commit('setToken', data.token);
          router.push('/');
        })
        .catch(() => {
          commit(
            'setLoginError',
            'Error has occured logging into your account'
          );
        });
    }
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
    getField
  },
  mutations: {
    updateField,
    setToken(state, token) {
      state.token = token;
    },
    setRegisterError(state, error) {
      state.registerError = error;
    },
    // setRegisterEmail(state, email) {
    //   state.registerEmail = email;
    // },
    // setRegisterPassword(state, password) {
    //   state.registerPassword = password;
    // },
    setLoginError(state, error) {
      state.loginError = error;
    }
    // setLoginEmail(state, email) {
    //   state.loginEmail = email;
    // },
    // setLoginPassword(state, password) {
    //   state.loginPassword = password;
    // }
  }
};
