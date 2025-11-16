const express = require('express')
const phones = require('./comments.json')
var cors = require('cors')
const app = express()

const port = 5002

app.use(cors());

app.get('/', (req, res) => {
    res.send('I can create a server by my own ')
    
})

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    console.log('Requested phone id:', id);
    const phone = phones.find(p => p.id === id);
    

    res.send(phone)
})


app.listen(port, () => {
    console.log(`the server is running ${port}`)
} )