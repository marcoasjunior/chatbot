import Vue from 'vue'
import Vuex from 'vuex'
import upperFirstLetter from '../utils/upperFirstLetter'
import validateEmail from '../utils/validateEmail'
import api from '../services/axiosConfig'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    username: '',
    userCPF: null,
    userEmail: '',
    userPassword: '',
    step: 1,
    type: 'input',
    botText: 'Meu nome é LinkBot e serei o seu guia hoje. Qual o seu nome?',
    botAnswer: ''

  },
  getters: {

    username: state => state.username,
    userCPF: state => state.userCPF,
    userEmail: state => state.userEmail,
    userPassword: state => state.userPassword,
    step: state => state.step,
    type: state => state.type,
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

    async changeText1(context, newData) {

      let data = upperFirstLetter(newData)

      context.commit('setUsername', data)
      context.commit('setStep', 2)

      return await api.get(`/question/${this.getters.step}`)

        .then((response) => {

          let question = response.data[0].question
          
          let replaced = question.replace('USERNAME', this.getters.username)
          let questionType = response.data[0].type
          context.commit('setType', questionType)

          context.commit('setBotText', replaced)

        })
        .catch(e => {
          alert(e)
        })
    },

    async changeText2(context, newData) {

      let formattedCpf = newData.replace(/[^\d]/g, "");

      if (formattedCpf.length != 11) {

        return context.commit('setBotText', "Número de CPF inválido. Poderia digitar novamente?")

      }

      context.commit('setUserCPF', formattedCpf)
      context.commit('setStep', 3)

      return await api.get(`/question/${this.getters.step}`)

        .then((response) => {

          let question = response.data[0].question

          let replaced = question.replace('USERNAME', this.getters.username)
          let questionType = response.data[0].type
          context.commit('setType', questionType)

          context.commit('setBotText', replaced)

        })
        .catch(e => {
          alert(e)
        })
    },

    async changeText3(context, newData) {

      if (!validateEmail(newData)) {

        return context.commit('setBotText', "E-mail inválido. Poderia digitar novamente?")

      }

      context.commit('setUserEmail', newData)
      context.commit('setStep', 4)

      return await api.get(`/question/${this.getters.step}`)

        .then((response) => {

          let question = response.data[0].question

          let replaced = question.replace('USERNAME', this.getters.username)
          let questionType = response.data[0].type
          context.commit('setType', questionType)

          context.commit('setBotText', replaced)

        })
        .catch(e => {
          alert(e)
        })
    },

    async changeText4(context, newData) {

      if (newData.length < 6) {

        return context.commit('setBotText', "A senha deve ter no mínimo 6 caracteres")

      }

      context.commit('setUserPassword', newData)
      context.commit('setStep', 5)

      return await api.get(`/question/${this.getters.step}`)

        .then((response) => {

          let question = response.data[0].question

          let replaced1 = question.replace('USERNAME', this.getters.username)
          let replaced2 = replaced1.replace('EMAIL', this.getters.userEmail)
          let replaced3 = replaced2.replace('CODIGO', this.getters.userCPF)
          let replaced4 = replaced3.replace('PASSWORD', this.getters.userPassword)
          let questionType = response.data[0].type
          context.commit('setType', questionType)

          context.commit('setBotText', replaced4)

        })
        .catch(e => {
          alert(e)
        })
    },

    async changeText5(context, newData) {

      if (newData === 1) {

        context.commit('setBotText', "Então vou salvar os seus dados")

        return await api.post(`/user`, {
            name: this.getters.username,
            cpf: this.getters.userCPF,
            email: this.getters.userEmail,
            password: this.getters.userPassword

          })

          .then((response) => {

            setTimeout(() => {
              context.commit('setBotText', "Dados salvos com sucesso")
            }, 1000);

            context.commit('setStep', 6)
            console.log(response)

          })
          .catch(e => {
            alert(e)
          })

      }

      context.commit('setBotText', "Opa! Então vamos voltar ao começo do cadastro. Poderia me informar novamente o seu nome?")
      context.commit('setStep', 1)

    },



  },

  modules: {}

})