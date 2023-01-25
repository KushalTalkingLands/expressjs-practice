const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
const Joi = require("joi");


// const uuid = require("uuid");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const validation = require("../validator/userValidation");
const {validate} = require('../validator/validationMiddleware');



let users = require("../models/users");
router
.get("/", (req, res) => {

    res.json(users);
  
  });
router
.post("/",validate(validation.user), function(req, res){
  console.log('receiving data...');
    console.log('body is ',req.body);
    let data = req.body;
    users.push(data);
    res.send(users);
});
router
.delete("/", function(req, res){});

  module.exports = router;