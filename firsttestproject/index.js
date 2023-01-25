const express = require('express')
const app = express()
const path = require('path');
const port = 3000;

const reqFilter =(reqobject,resobject,next)=>{
  console.log('reqFilter');
  next();
}
app.use(reqFilter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    // res.send('About Section!');
    res.sendFile(path.join(__dirname,'index.html'));
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})