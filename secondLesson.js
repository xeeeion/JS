//Imports 
const express = require('express');
const http = require('http');
const cors = require('cors');
const prompt = require('prompt-sync')();
const { parse } = require('path');
const { SlowBuffer } = require('buffer');
const app = express();

//Init zone 
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



app.get('/me', (req, res) =>{
    res.status(200).json( {message: "All is ok!" });
})





//Create server 
http.createServer(app).listen(3000, () => {
    console.log('Server is working on port 3000');

})


//POST/string
//GET/strings
//DELETE/


var list = [];

app.post('/string/', (req, res, next) =>{

    list.push(req.body.string)
    res.status(200).json({list})

    next();

});

app.get('/strings/:id', function(req, res, next) {
    list.push(res.send('strings' + req.params.id));
    
    res.status(200).json({list})

    next();

});






//squilize
//USER todo model with 5 fields, CREATE READ UPDATE DELETE 