import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    username: '',
    userCPF: null,
    step: 1,
    botText: 'Meu nome é LinkBot e serei o seu guia hoje. Qual o seu nome?',
    botAnswer: ''

  },
  getters: {

    username: state => state.username,
    userCPF: state => state.userCPF,
    step: state => state.step,
    botText: state => state.botText,
    botAnswer: state => state.botAnswer

  },


  mutations: {

    setUsername(state, newText) {

      state.username = newText

    },

    setState(state, newStep) {

      state.step = newStep

    },

  },
  actions: {

    changeText(context, newData) {

      context.commit('setUsername', newData)
      context.commit('setState', newData)

    },

  },

  modules: {}

})
