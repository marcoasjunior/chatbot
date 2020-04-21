import api from '../../services/axiosConfig'
import validateEmail from '../../utils/validateEmail'

export default {

    actions: {

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
                    context.commit('setLoading', false)
                    context.commit('setBotText', replaced)

                })
                .catch(e => {
                    alert(e)
                })
        },
    }
}