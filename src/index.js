const express = require('express');
const cors = require('cors');
const rotas = require('./routes');


const app = express();

var allowedOrigins = ['https://www.engine-app.com/', 'https://www.engine-app.com/cadastro'];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
            
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
app.use(express.json());
app.use(rotas);





app.listen(process.env.PORT || 7070);