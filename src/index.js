const express = require('express');
const cors = require('cors');
const rotas = require('./routes');


const app = express();


app.use(express.json());

app.use(rotas);

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "https://engine-frontend.herokuapp.com");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    app.use(cors());
    next();
});


app.listen(process.env.PORT || 7070);