import Vue from 'vue'
import Vuex from 'vuex'
import upperFirstLetter from '../utils/upperFirstLetter'
import api from '../services/axiosConfig'

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

    setBotText(state, newText) {

      console.log(newText)

      state.botText = newText

    },

  },
  actions: {

    async changeText(context, newData) {

      if (this.getters.step == 1) {

        let data = upperFirstLetter(newData)

        context.commit('setUsername', data)
        context.commit('setState', 2)

        await api.get(`/question/${this.getters.step}`)

          .then((response) => {

            context.commit('setBotText', response.data[0].question)


          })
          .catch(e => {
            alert(e)

          })



      }



    },

  },

  modules: {}

})