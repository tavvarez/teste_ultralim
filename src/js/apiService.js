const axios = require('axios')

// Função que faz o tratamento da requisição, gerando o resultado e tratando o erro se necessário
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