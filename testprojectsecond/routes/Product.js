const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();


// const uuid = require("uuid");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const validation = require("../validator/productValidation");
const {validate} = require('../validator/validationMiddleware');

let product = require("../models/product");
router
.get("/", (req, res) => {

    res.json(product);
  
  });
router
.post("/", validate(validation.product),function(req, res){
  console.log('receiving Product data...');
    console.log('Request body is ',req.body);
    let data = req.body;
    product.push(data);
    res.send(product);
});
router
.delete("/", function(req, res){});

  module.exports = router;