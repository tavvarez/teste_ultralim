const axios = require('axios')

const apiViaCep = 'https://viacep.com.br/ws/01001000/json/'

async function requisaoApi() {
    try {
        const response = await axios.get(apiViaCep)
        const data = response.data
        console.log(data)
    } catch(error) {
        console.log('Algum erro aconteceu:' + error.message)
    }
}
requisaoApi()