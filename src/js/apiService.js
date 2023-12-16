import { salvarJson } from './salvarJsonService.js'

// Função que faz o tratamento da requisição, gerando o resultado e tratando o erro se necessário
async function requisicaoApi(apiViaCep) {
    try {
        const response = await fetch(apiViaCep)
        const data = await response.json()
        salvarJson(data)
        return data
    } catch(error) {
        console.log('Algum erro aconteceu:' + error.message)
        throw error
    }
}

export { requisicaoApi }