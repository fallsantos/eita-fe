const axios = require('axios')

const api = axios.create({
    baseURL: 'https://eita-be.herokuapp.com'
})

export default api

//https://eita-be.herokuapp.com
//http://localhost:3333