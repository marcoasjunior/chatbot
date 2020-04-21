import Vue from 'vue'
import Vuex from 'vuex'
import step2 from './modules/step2'
import step3 from './modules/step3'
import step4 from './modules/step4'
import step5 from './modules/step5'
import step6 from './modules/step6'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    username: '',
    userCPF: '',
    userEmail: '',
    userPassword: '',
    step: 1,
    type: 'input',
    loading: false,
    botText: 'Meu nome é LinkBot e serei o seu guia hoje. Qual o seu nome?',

  },

  getters: {

    username: state => state.username,
    userCPF: state => state.userCPF,
    userEmail: state => state.userEmail,
    userPassword: state => state.userPassword,
    step: state => state.step,
    type: state => state.type,
    loading: state => state.loading,
    botText: state => state.botText,
    botAnswer: state => state.botAnswer

  },

  mutations: {


    setStep(state, newStep) {

      state.step = newStep

    },

    setType(state, newType) {

      state.type = newType

    },

    setLoading(state, newData) {

      state.loading = newData

    },

    setBotText(state, newText) {

      state.botText = newText

    },

    setUsername(state, newText) {

      state.username = newText

    },

    setUserCPF(state, newText) {

      state.userCPF = newText

    },
    setUserEmail(state, newText) {

      state.userEmail = newText

    },
    setUserPassword(state, newText) {

      state.userPassword = newText

    },

  },

  actions: {

    changeLoading(context) {

      let newLoading = this.getters.loading ? false : true

      context.commit('setLoading', newLoading)

    },

  },

  modules: {
    step2,
    step3,
    step4,
    step5,
    step6,
  }

})