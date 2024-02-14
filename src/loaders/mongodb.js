const mongoose = require('mongoose')

async function startDB() {
    await mongoose.connect('mongodb+srv://guikipper1:83HVokSxLwnuVfbi@learnmusicdatabase.iiz7uzy.mongodb.net/')
}

module.exports = startDB