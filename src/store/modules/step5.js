import api from '../../services/axiosConfig'

export default {

    actions: {

        async changeText5(context, newData) { // CONFIRMAÇÃO

            if (newData === 1) {

                await api.post(`/user`, {
                        name: this.getters.username,
                        cpf: this.getters.userCPF,
                        email: this.getters.userEmail,
                        password: this.getters.userPassword

                    })

                    .then(() => {

                        context.commit('setStep', 6)
                        context.commit('setLoading', false)

                    })
                    .catch(() => {
                        alert('Ocorreu um erro no seu cadastro. Por favor, recarregue a página.')
                    })

                return await api.get(`/question/${this.getters.step}`)

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
                        alert(e)
                    })


            } else {

                context.commit('setBotText', "Opa! Então vamos voltar ao começo do cadastro. Poderia me informar novamente o seu nome?")
                context.commit('setLoading', false)
                context.commit('setType', 'input')
                context.commit('setStep', '1a')

            }
        }
    }
}