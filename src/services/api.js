const axios = require('axios')

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export default api

// https://eitagram-api.herokuapp.com/
// http://localhost:3333