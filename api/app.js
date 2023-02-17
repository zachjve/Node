//____WELCOME_TO_MY_APP____________________________________
const express = require('express')

const app = express()
const router = require('./api/api')

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', router)

app.listen(8888, () => {
    console.log('Express running on port: 8888!')
})//________________________________________________:)______