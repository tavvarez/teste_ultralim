const apiService = require('./apiService')
const arrayDadosApi = []

async function adicionarDadosArray(arrayDadosApi) {    
    const apiViaCep = 'https://viacep.com.br/ws/89218075/json/'

    try {
    const dadosDaApi = await apiService.requisicaoApi(apiViaCep)
    return dadosDaApi
    } catch (error) {
    console.error(error)

    }
}

adicionarDadosArray()
