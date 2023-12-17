import { requisicaoApi } from './js/apiService.js'
import { validarCep } from './validacao/validarCep.js'

window.onload = adicionarElementosPagina

async function adicionarElementosPagina() {
    const btnConsultaCep = document.getElementById('btnConsultaCep')

    btnConsultaCep.addEventListener('click', async function (event) {
        event.preventDefault()

        const cepEntrada = document.getElementById('cep')
        const cep = cepEntrada.value

        try {
            validarCep(cep)
            // Chama a função que obtém os dados da API
            const dados = await requisicaoApi(`https://viacep.com.br/ws/${cep}/json`)

            // Preenche os campos de resultado com os dados obtidos
            document.getElementById('rua').value = dados.logradouro
            document.getElementById('complemento').value = dados.complemento
            document.getElementById('bairro').value = dados.bairro
            document.getElementById('cidade').value = dados.localidade
            document.getElementById('estado').value = dados.uf

            adicionarAoHistorico(dados)
        } catch (error) {
            console.error(error)
        }
    })

}


async function adicionarAoHistorico(dados) {
    const historico = document.querySelector('.historico p')
    const registros = await obterTodosRegistrosIndexedDB()
    const historicoHTML = registros.map(registro => {
        return `<strong>CEP:</strong> ${registro.cep}, <strong>Cidade:</strong> ${registro.localidade}, <strong>Estado:</strong> ${registro.uf}<br>`
    }).join('')

    historico.innerHTML = historicoHTML
}

async function obterTodosRegistrosIndexedDB() {
    const dbNome = 'enderecoDB'
    const enderecosSalvos = 'enderecos'

    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbNome)

        request.onsuccess = function(event) {
            const db = event.target.result

            const transaction = db.transaction([enderecosSalvos], 'readonly')
            const objectStore = transaction.objectStore(enderecosSalvos)

            const registros = []

            objectStore.openCursor().onsuccess = function(event) {
                const cursor = event.target.result
                if (cursor) {
                    registros.push(cursor.value)
                    cursor.continue()
                } else {
                    resolve(registros)
                }
            }

            transaction.oncomplete = function() {
                db.close()
            }
        }

        request.onerror = function(error) {
            reject(error)
        }
    })
}

document.addEventListener('DOMContentLoaded', adicionarElementosPagina)