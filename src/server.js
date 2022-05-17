//importando biblioteca express
const express = require('express')
//importando rotas
const routes = require('./routes')

const cookieParser = require('cookie-parser')
//passar dados para dominio
const cors = require('cors')

require('./database')

//app recebe as funções da biblioteca express
const app = express()

//habilitar funções
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3333)