const axios = require('axios')

async function requisaoApi(apiViaCep) {
    try {
        const response = await axios.get(apiViaCep)
        const data = response.data
        console.log(data)
    } catch(error) {
        console.log('Algum erro aconteceu:' + error.message)
        throw error
    }
}

module.exports = {
    requisaoApi: requisaoApi
}