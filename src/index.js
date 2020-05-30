const express = require('express');
const cors = require('cors');
const rotas = require('./routes');


const app = express();

var corsOptions = {
    origin: 'https://engine-company.com/',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    AccessControlAllowMethods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
}

app.use(express.json());

app.use(rotas, cors(corsOptions), function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for only example.com.' })
})


app.listen(process.env.PORT || 7070);