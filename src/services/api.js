const axios = require('axios')

const api = axios.create({
    baseURL: 'https://fausantosdev-share-api.herokuapp.com/'
})

export default api

// https://eitagram-api.herokuapp.com/
// http://localhost:3333