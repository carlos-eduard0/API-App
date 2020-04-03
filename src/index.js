const express = require('express');
const cors = require('cors');
const rotas = require('./routes');


const app = express();

app.use(cors({
    origin: 'https://www.engine-app.com/',
    methods: "POST"
}));
app.use(express.json());
app.use(rotas);





app.listen(process.env.PORT || 7070);