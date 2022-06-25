const express = require('express');
const app = express();
const cors = require('cors');
const leftPad = require('left-pad')
const db_connect = require('./database/connection.js');
const { getId } = require('./services/id/get.js');

db_connect().then(res => console.log(res))

app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.use('/api/user', require('./routers/user.js'));



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log('Backend Started PORT:' + PORT))