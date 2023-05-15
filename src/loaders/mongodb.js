const mongoose = require('mongoose')

async function startDB() {
    await mongoose.connect('Obter credenciais no Mongo Atlas.')
}

module.exports = startDB