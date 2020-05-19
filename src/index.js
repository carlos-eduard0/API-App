const express = require('express');
const cors = require('cors');
const rotas = require('./routes');


const app = express();


app.use(express.json());

app.use(rotas);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    app.use(cors());
    next();
});


app.listen(process.env.PORT || 7070);