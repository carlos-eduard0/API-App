const express = require('express');
const cors = require('cors');
const rotas = require('./routes');


const app = express();

app.use(cors({
    "origin": "*", 
    "Access-Control-Allow-Origin":"*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "Access-Control-Allow-Methods": 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));
app.use(express.json());
app.use(rotas);



app.listen(process.env.PORT || 7070);