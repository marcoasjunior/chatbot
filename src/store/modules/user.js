import api from '../../services/axiosConfig'

export default {

    actions: {
        
        async updateUser(context, newData) {

            console.log(newData)

            await api.post(`/user/update`, newData)

                .then((response) => {

                    console.log(response)
                    context.commit('setBotText', `Seus dados foram alterados com sucesso!`)
                    context.commit('setLoading', false)
                    setTimeout(function(){ context.commit('setBotText', `O que posso ajudar agora?`) }, 5000);

                })
                .catch(e => {
                    alert(e)
                    context.commit('setLoading', false)
                })
         }
    }
}