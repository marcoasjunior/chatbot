import Vue from 'vue'
import Vuex from 'vuex'
import step1 from './modules/step1'
import step1a from './modules/step1a'
import step1b from './modules/step1b'
import step2 from './modules/step2'
import step3 from './modules/step3'
import step4 from './modules/step4'
import step5 from './modules/step5'
import appointment from './modules/appointment'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    username: '',
    userCPF: '',
    userEmail: '',
    userPassword: '',
    step: 1,
    type: 'choice',
    multiChoices: null,
    loading: false,
    botText: 'Meu nome é LinkBot e serei o seu guia hoje. Você já tem cadastro no nosso sistema?',

  },

  getters: {

    username: state => state.username,
    userCPF: state => state.userCPF,
    userEmail: state => state.userEmail,
    userPassword: state => state.userPassword,
    step: state => state.step,
    type: state => state.type,
    multiChoices: state => state.multiChoices,
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

    setMultiChoices(state, newData) {

      state.multiChoices = newData

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

    changeStep (context, newData) {

      let step = newData + this.getters.step

      context.commit('setStep', step)
      
      
    },

    changeText0 (context, newData) {

      context.commit('setBotText', newData)     
     
    },

  },

  modules: {
    step1,
    step1a,
    step1b,
    step2,
    step3,
    step4,
    step5,
    appointment,
    user
  }

})