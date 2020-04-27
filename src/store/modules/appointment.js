import api from '../../services/axiosConfig'
import moment from 'moment'

export default {

    actions: {
        async registerAppointment(context, newData) {

            let formatData = moment(newData.date).format('DD/MM/YYYY HH:mm')

            console.log(formatData)

            await api.post(`/appointment/`, {
                date: formatData,
                user: newData.user
            })

                .then((response) => {

                    console.log(response)
                    context.commit('setBotText', `Sua consulta ficou marcada para ${formatData}.`)
                    context.commit('setLoading', false)

                })
                .catch(e => {
                    alert(e)
                    context.commit('setLoading', false)
                })
         }
    }
}