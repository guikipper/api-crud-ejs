const mongoose = require('mongoose')

async function startDB() {
    await mongoose.connect('mongodb+srv://guilhermekipper:Chess0012Tru@cluster0.9z8bykm.mongodb.net/test')
}

module.exports = startDB

//Realiza a conexão com o banco utilizando mongoose, e exporta a função StartDB.