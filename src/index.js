const express = require('express');
const cors = require('cors');
const rotas = require('./routes');


const app = express();

app.use(express.json());
app.use(cors());
app.use(rotas);



app.listen(process.env.PORT || 7070);