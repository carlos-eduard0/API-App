require("dotenv").config();

const express = require('express');
const cors = require('cors');
const rotas = require('./routes');
const path = require('path');


const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());

app.use('/file', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));


app.use(rotas);



app.listen(process.env.PORT || 7070);