import axios from 'axios'

const api = axios.create({

    baseURL: 'https://link-chatbot.herokuapp.com/api'
    
})

export default api