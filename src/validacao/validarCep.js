function validarCep(cep) {
    const cepLimpo = cep.replace(/\D/g, '')

    
    if (cepLimpo.length !== 8) {
        alert('CEP inválido. Certifique-se de inserir um CEP válido com 8 dígitos')
        throw new Error('CEP inválido. Certifique-se de inserir um CEP válido com 8 dígitos.')
    }
}

export { validarCep }