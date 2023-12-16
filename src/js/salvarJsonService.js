function salvarJson(data) {
    const dbNome = 'enderecoDB'
    const enderecosSalvos = 'enderecos'

    const request = indexedDB.open(dbNome, 1)

    
    request.onupgradeneeded = function(event) {
        const db = event.target.result
        const objectStore = db.createObjectStore(enderecosSalvos, { keyPath: 'cep' })
    }

    
    request.onsuccess = function(event) {
        const db = event.target.result

        
        const transaction = db.transaction([enderecosSalvos], 'readwrite')
        const objectStore = transaction.objectStore(enderecosSalvos)

        
        const addRequest = objectStore.put(data)

        addRequest.onsuccess = function() {
            console.log('Endereço armazenado com sucesso')
        }

        addRequest.onerror = function(error) {
            console.error('Erro ao armazenar endereço:', error)
        }

        // Encerrar a transação
        transaction.oncomplete = function() {
            db.close()
        }
    }

    // Manipular erros na abertura do banco de dados
    request.onerror = function(error) {
        console.error('Erro ao abrir o banco de dados:', error)
    }
}

export { salvarJson }