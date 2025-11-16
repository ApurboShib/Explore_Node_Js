const express = require('express')
const app = express()
const port = 5001;


app.get('/', (req, res) => {
    res.send("Hello everyone from joy shib first server")
})

app.get('/data', (req, res) => {
   
    res.send('More data comming soon')
})

app.listen(port, () => [
    console.log(`My first server is running on ${port}`)
])