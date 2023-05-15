const express = require('express') 
const app = express()

const routes = require('./routes')

const path = require('path');
const cors = require('cors');
app.use(cors())

app.use(express.json()) 
app.use(express.static(__dirname + '/styles')); 
app.use(express.static(__dirname + '/public')); 
app.use(routes)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.get('/home',(req, res)=>{
    res.render('home.ejs')
})

module.exports = app
