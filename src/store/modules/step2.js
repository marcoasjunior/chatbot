import api from '../../services/axiosConfig'

export default {

    actions: {
        async changeText2(context, newData) { // CPF

            let formattedCpf = newData.replace(/[^\d]/g, "");

            if (formattedCpf.length != 11) {
                
                context.commit('setLoading', false)
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
                    context.commit('setLoading', false)
                    context.commit('setBotText', replaced)

                })
                .catch(e => {
                    alert(e)
                })
        }
    }
}