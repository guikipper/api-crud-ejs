const app = require('./app')
const port = 3000
const Loaders = require('./loaders/loaderIndex') 

Loaders.start() //Conexão com o banco, executa a função start() que está dentro da classe Loader

//de acordo com a documentação do mongoose, o próximo passo na conexão é criar um Model

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

//aqui se chama o app, ele inicializa o express e as rotas
//as rotas chamam o ProductController, que por sua vez chama o ProductModel
//O Loader e o mongodb.js são chamados aqui no index também