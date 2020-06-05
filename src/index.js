const express = require('express');
const cors = require('cors');
const path = require("path");
const rotas = require('./routes');


const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());

app.use('/file', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));

app.use(rotas);



app.listen(process.env.PORT || 7070);