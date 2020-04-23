import api from '../../services/axiosConfig'

export default {

actions: {

    async changeText1(context, newData) { 

        if (newData === 2) {

          context.commit('setStep', '1a')

          return await api.get(`/question/${this.getters.step}`)
  
          .then((response) => {
  
            let question = response.data[0].question           
            let questionType = response.data[0].type

            context.commit('setType', questionType)
            context.commit('setLoading', false)
            context.commit('setBotText', question)
  
          })
          .catch(e => {
            alert(e)
          })

        }

        context.commit('setStep', '1b')

          return await api.get(`/question/${this.getters.step}`)
  
          .then((response) => {
  
            let question = response.data[0].question           
            let questionType = response.data[0].type

            context.commit('setType', questionType)
            context.commit('setLoading', false)
            context.commit('setBotText', question)
  
          })
          .catch(e => {
            alert(e)
          })

      },
  
    }

}