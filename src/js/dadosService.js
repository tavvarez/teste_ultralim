const apiService = require('./apiService')

async function adicionarDadosArray() {    
    const apiViaCep = 'https://viacep.com.br/ws/83280000/json/'

    try {
    const dadosDaApi = await apiService.requisicaoApi(apiViaCep)
    return dadosDaApi
    } catch (error) {
    console.error(error)

    }
}
// salvarJson()
adicionarDadosArray()
