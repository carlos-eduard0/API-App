const express = require('express');
const cors = require('cors');
const rotas = require('./routes');


const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", ["https://engine-company.com/login"] );
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.use(express.json());
app.use(rotas);



app.listen(process.env.PORT || 7070);