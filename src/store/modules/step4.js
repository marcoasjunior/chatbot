import api from '../../services/axiosConfig'

export default {

    actions: {
        async changeText4(context, newData) {

            if (newData.length < 6) {
                
                context.commit('setLoading', false)
                return context.commit('setBotText', "A senha deve ter no mínimo 6 caracteres")

            }

            context.commit('setUserPassword', newData)
            context.commit('setStep', 5)

            return await api.get(`/question/${this.getters.step}`)

                .then((response) => {

                    let question = response.data[0].question
                    let questionType = response.data[0].type

                    let replaced1 = question.replace('USERNAME', this.getters.username)
                    let replaced2 = replaced1.replace('EMAIL', this.getters.userEmail)
                    let replaced3 = replaced2.replace('CODIGO', this.getters.userCPF)
                    let replaced4 = replaced3.replace('PASSWORD', this.getters.userPassword)
                    context.commit('setType', questionType)
                    context.commit('setLoading', false)
                    context.commit('setBotText', replaced4)

                })
                .catch(e => {
                    alert(e)
                })
        }
    }
}