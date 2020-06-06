const express = require('express');
const cors = require('cors');
const rotas = require('./routes');


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With ,content-type ,Authorization, RefreshToken');
    res.setHeader('Access-Control-Expose-Headers', 'RefreshToken,token');
    next();
})
app.use(express.json());
app.use(rotas);



app.listen(process.env.PORT || 7070);