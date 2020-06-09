const express = require('express');
const cors = require('cors');
const rotas = require('./routes');


const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(rotas);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With ,content-type ,Authorization');
    next();
  });

let httpServer;
if (process.argv.length === 3 && process.argv[2] === "--prod") {
    let fs = require('fs');
    let https = require('https');
    let cert = fs.readFileSync('./src/fullchain.pem');
    let key = fs.readFileSync('./src/privkey.pem');

    let https_options = {
        key: key,
        cert: cert
    };
    httpServer = https.createServer(https_options, app).listen(8443, function () {
        console.log('WebService online na porta 8443');
        console.log('HTTPS Habilitado | modo de produção');
      });
}else{
     httpServer = app.listen(process.env.PORT || 7070)
}