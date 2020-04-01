const express = require('express');
const cors = require('cors');
const rotas = require('./routes');


const app = express();

app.use(cors({ origin: 'http://www.engine-app.com' }));
app.use(express.json());
app.use(rotas);





app.listen(7070);