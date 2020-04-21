import api from '../../services/axiosConfig'

export default {

    actions: {

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
                        }, 2000);

                        context.commit('setStep', 6)
                        context.commit('setLoading', false)
                        console.log(response)

                    })
                    .catch(e => {
                        alert(e)
                    })

            }

            context.commit('setBotText', "Opa! Então vamos voltar ao começo do cadastro. Poderia me informar novamente o seu nome?")
            context.commit('setLoading', false)
            context.commit('setType', 'input')
            context.commit('setStep', 1)

        }
    }
}