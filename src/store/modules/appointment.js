import api from '../../services/axiosConfig'
import moment from 'moment'

export default {

    actions: {
        async registerAppointment(context, newData) {

            let formatData = moment(newData).format('DD/MM/YYYY HH:mm')

            console.log(formatData)

            await api.post(`/appointment/`, {
                date: newData,
                user: '5e9dd4ede9a3e529a06ce062' // PRECISA REFATORAR
            })

                .then((response) => {

                    console.log(response)
                    context.commit('setBotText', `Sua consulta ficou marcada para ${formatData}.`)

                })
                .catch(e => {
                    alert(e)
                })
         }
    }
}