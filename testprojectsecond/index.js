const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Joi = require('joi');
const PORT = 3000;

// app.use(express.json());
var userRoutes = require('./routes/Users');
var productRoutes = require('./routes/Product');
app.use('/users',userRoutes);
app.use('/products',productRoutes);
app.get("/", (req, res) => {

    res.send("Welcome To Express Practice !!");
  
  });
// app.use("/api/users",require('./routes/api/Users'))S
// app.post('/', function(req, res) {
//     console.log('receiving data...');
//     console.log('body is ',req.body);
//     res.send(req.body);
//   });

app.listen(PORT, (error) => {
    console.log('listen :' + PORT)
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
});