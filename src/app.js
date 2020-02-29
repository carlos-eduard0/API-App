const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(routes)

mongoose.connect('mongodb+srv://EKaynan:mordor1918@cluster0-eoyup.mongodb.net/test?retryWrites=true&w=majority', {
	useUnifiedTopology: true
});

app.listen(3000);

