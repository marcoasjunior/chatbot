import api from '../../services/axiosConfig'

export default {

  actions: {

    async changeText1b(context, newData) { // Login


      await api.post(`/login`, newData)

        .then((response) => {

          console.log(response.data)

          localStorage.id = response.data
          context.commit('setStep', '6a')
          context.commit('setLoading', false)

          api.get(`/question/${this.getters.step}`)

            .then((response) => {

              let question = response.data[0].question
              let questionType = response.data[0].type
              let multiChoices = response.data[0].multiChoices

              context.commit('setType', questionType)
              context.commit('setMultiChoices', multiChoices)
              context.commit('setLoading', false)
              context.commit('setBotText', question)

            })
            .catch(e => {
              alert('Erro no Login', e)
              context.commit('setLoading', false)
            })


        })
        .catch(e => {
          alert(e)
        })




    }
  }
}