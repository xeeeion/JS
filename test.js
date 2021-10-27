//Imports 
const express = require('express');
const http = require('http');
const cors = require('cors');
const prompt = require('prompt-sync')();
const { parse } = require('path');
const { SlowBuffer } = require('buffer');
const app = express();
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


//Init zone 
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); //использование обработчика на 1-ом уровне (ставить перед запросом)


var sequelize = new Sequelize('what', 'name', null, {
  host
})

//Create server 
http.createServer(app).listen(3000, () => {
    console.log('Server is working on port 3000');

})