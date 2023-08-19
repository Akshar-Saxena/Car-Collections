const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'layouts')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'layouts', 'home.html'))
})

app.get('/cars', (req, res) => {
    res.sendFile(path.join(__dirname, 'layouts', 'boilerplate.html'))
})


app.listen(3000 || process.env.PORT(), () => {
    console.log('Listening on PORT 3000')
})