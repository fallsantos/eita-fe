const axios = require('axios')

const api = axios.create({
    baseURL: 'https://eitagram-api.herokuapp.com/'
})

export default api

// https://eitagram-api.herokuapp.com/
// http://localhost:3333