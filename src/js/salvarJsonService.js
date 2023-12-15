const fs = require('fs')
const path = require('path')

function salvarJson(data) {
    const dataDiretorio = path.resolve(__dirname, '..', '..','./data')
    const filePath = path.resolve(dataDiretorio, 'address.json')

    let dadosSalvos = []

    try {
        const conteudoJson = fs.readFileSync(filePath, 'utf-8')
        dadosSalvos = JSON.parse(conteudoJson)
    } catch (error) {
        console.log('Erro:' + error.message)
    }

    const novosDados = dadosSalvos.concat(data)

    if (!fs.existsSync(dataDiretorio)) {
        fs.mkdirSync(dataDiretorio, {recursive: true})
    }

    fs.writeFileSync(filePath, JSON.stringify(novosDados, null, 2))

    console.log('Endereços armazenados com sucesso em address.json')
}

module.exports = {
    salvarJson
}