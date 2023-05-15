const app = require('./app')
const port = 3000
const Loaders = require('./loaders/loaderIndex') 

Loaders.start() 

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})
