const startDB = require('./mongodb')

class Loaders {
    start() {
        startDB();
    } // é possível chamar várias funções aqui, como por exemplo conexão com outro banco
}

module.exports = new Loaders()

//Único arquivo que será chamado no arquivo de Inicialização
