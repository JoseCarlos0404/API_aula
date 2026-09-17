const express = require('express');
const chamadoRoutes = require('./routes/chamadoRoutes')
const app = express();
const port = 3000

app.use(express.json());

app.use('/chamados', chamadoRoutes)

app.listen(port, function () {
    console.log('servidor rodando na porta '+ port);
    
})