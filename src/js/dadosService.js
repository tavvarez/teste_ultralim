const apiService = require('./apiService')
const arrayDadosApi = []

async function adicionarDadosArray() {    
    const apiViaCep = 'https://viacep.com.br/ws/01001000/json/'

    try {
    const dadosDaApi = await apiService.requisaoApi(apiViaCep)
    const novosDadosDaApi = {
        dados: dadosDaApi,
        timestamp: new Date(),
    }
    arrayDadosApi.push(novosDadosDaApi)
    if (arrayDadosApi.length > 0) {
        for (let i = 0; i < arrayDadosApi.length; i++) {
            const linhaTemp = JSON.stringify(arrayDadosApi[i]) // inacabado
            const linhaObjeto = JSON.parse(linhaTemp) // inacabado
    }
    return novosDadosDaApi
    } 
    }   catch (error) {
    console.error(error)

    }
}
adicionarDadosArray().then(() => {
    console.log(arrayDadosApi.length)
    console.log(arrayDadosApi)
})
