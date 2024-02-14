const mongoose = require('mongoose')

async function startDB() {
    await mongoose.connect('Sua credencial do banco de dados.')
}

module.exports = startDB