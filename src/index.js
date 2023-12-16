import { requisicaoApi } from './js/apiService.js'

window.onload = adicionarElementosPagina

async function adicionarElementosPagina() {
    const btnConsultaCep = document.getElementById('btnConsultaCep')

    btnConsultaCep.addEventListener('click', async function (event) {
        event.preventDefault()

        const cepEntrada = document.getElementById('cep')
        const cep = cepEntrada.value

        try {
            // Chama a função que obtém os dados da API
            const dados = await requisicaoApi(`https://viacep.com.br/ws/${cep}/json`)

            // Preenche os campos de resultado com os dados obtidos
            document.getElementById('rua').value = dados.logradouro
            document.getElementById('complemento').value = dados.complemento
            document.getElementById('bairro').value = dados.bairro
            document.getElementById('cidade').value = dados.localidade
            document.getElementById('estado').value = dados.uf

            adicionarAoHistorico(dados);
        } catch (error) {
            console.error(error);
        }
    })

}

function adicionarAoHistorico(dados) {
    const historico = document.querySelector('.historico p')
    historico.innerHTML = `<strong>CEP:</strong> ${dados.cep}, <strong>Cidade:</strong> ${dados.localidade}, <strong>Estado:</strong> ${dados.uf}`
}

document.addEventListener('DOMContentLoaded', adicionarElementosPagina)