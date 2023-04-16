const express = require('express') //requisitando o express
const routes = require('./routes') //requisitando routes
const app = express() //inicializando o express
const path = require('path');
const cors = require('cors');

app.use(cors())
app.use(express.json()) //definindo que o protocolo de comunicação vai ser em json
app.use(express.static(__dirname + '/styles')); 
app.use(express.static(__dirname + '/public')); 
app.use(routes)


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.get('/home',(req, res)=>{
    res.render('home.ejs')
})

module.exports = app

//Pasta loaders - Tudo que será carregado ao iniciar a API