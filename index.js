//Imports 
const express = require('express');
const http = require('http');
const cors = require('cors');
const { read, cpSync } = require('fs');
const { parse } = require('path');
const { reverse, REFUSED } = require('dns');
const { url } = require('inspector');
const { connected } = require('process');
const prompt = require("prompt-sync")();

//Init zone 
const app = express();
app.use(cors()); //использование обработчика на 1-ом уровне (ставить перед запросом)

app.all('/', (req, res) => {
    console.log('URL = ' + req.url);
    console.log('Original_URL = ' + req.originalUrl);
    console.log('METHOD = ' + req.method);
    console.log('HOST = ' + req.secure);
    console.log('IsSecure = ' + res.header.host);
    console.log('Query = ', req.query);

    console.log('Body = ', req.query);
    res.status(200).json( {message: "All is ok!"});
});

app.get('/me', (req, res) =>{
    res.status(200).json( {message: "All is ok!" });
})

//summary
app.use('/sum', (req, res, next) => {

    let x1 = parseInt(prompt("Enter 1st num: "));
    let x2 = parseInt(prompt("Enter 2nd num: "));
    const sum = x1+x2;
    
    res.status(200).json({ sum });

    console.log(sum);

    next();
})


//reverse string 
app.use('/reverseCase', (req, res, next) => {

    function reverseString(str) {

        // empty string
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }

    // take input from the user
    const string = prompt('Enter a string for reverse: ');

    const result = reverseString(string);
    console.log(result);
    res.status(200).json({ result });

    next();
    
})

//revered array
app.use('/reverseArray', (req, res, next) =>{
    var inputArray = [];
    var size = 3;
    for (var i=0; i<size; i++){
        inputArray[i] = prompt("Enter an elements " + (i + 1) + " ");
    }
    const reversed = inputArray.reverse();

    res.status(200).json({ reversed }); 
    console.log(reversed);
    next();
})

//4th task
app.all('/4th', (req, res, next) => {
    var express = require('express');
    var bodyParser = require('body-parser');

    var app = express;

    app.use(bodyParser.urlencoded({ extended: false}))
    app.use(bodyParser.json())

    app.use(function (req, res) {
        var post_data = req.body;
        console.log(post_data);
    })
})



//----end of 4th task


//Create server 
http.createServer(app).listen(3000, () => {
    console.log('Server is working on port 3000');

})




