const express = require('express')
const format = require('date-format')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/api/v1/instagram', (req, res) => {
    const instaSocial ={
        username: 'Kushal0705',
        followers: 310,
        following: 320,
        date: format.asString("hh:mm:ss",new Date())
    };
    res.status(200).json(instaSocial)
})
app.get('/api/v1/:token', (req, res) => {
    // res.send('Hello World!')
    res.status(200).json({params:req.params.token})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})