const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();


mongoose.connect('mongodb+srv://niela:cipriano@teste-udg5m.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,

})


//Metodos:
// GET = Buscar uma informação do backend - exemplo lista de usuários (Buscar)
// POST = Criar uma nova informarção do back - exemplo cadastro de usuário (Criar)
// PUT = Editar alguma informação - exemplo editar um cadastro (Alterar)
// DELETE = Deletar - deletar uma informação (Deletar)

// Tipos de parametros: 
// req.query = Acessar query params (Para filtros)
// req.params = Acessar route params (Para edição, delete)
// req.body = Acessar corpo da requisição (Para criação e edição de registros)





app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);


app.listen(3333);
