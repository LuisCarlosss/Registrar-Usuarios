const app = require('./app')
require('dotenv').config()

let PORT = process.env.PORT || 8080;    

app.listen(PORT,() =>  console.log(`server running in port ${PORT}`))