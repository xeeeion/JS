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
app.post('/sum', (req, res, next) => {
    let body = req.body;
    let sum = body['x1'] + body['x2'];

    res.status(200).json({ sum });

    console.log(sum);

    next();
});


//reverse string 
app.post('/reverseCase', (req, res, next) => {
    let body = req.body;
    let string = body['string'];

    function reverseString(str) {

        // empty string
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }

    const result = reverseString(string);
    console.log(result);
    res.status(200).json({ result });

    next();
    
})

//revered array
app.post('/reverseArray', (req, res, next) =>{

    var inputArray = [];
    var size = 3;
    for (var i=0; i<size; i++){
        inputArray[i] = prompt("Enter an elements " + (i + 1) + " ");
    }
    const reversed = inputArray.reverse();

    res.status(200).json({ reversed }); 
    console.log(reversed);
    next();

    /*
    //let body = req.body;
    //let inputArray = ['first', 'second', 'third']
    let inputArray = parse(prompt("Enter an array for reverse: "))['base'];
    let reversed = inputArray.toString().split('').reverse().join('');

    
    res.status(200).json({ reversed }); 
    console.log( reversed );
    next();
    */
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


// не нужно
/*let a = 5;
console.log('A = ', a);

let b = 'string';
console.log('B = ', b);

let c = [];
c.push('xxx');
c.push('eee');
c.push('iii');
c.push('ooo');
c.push('nnn');

console.log('C = ', c);


let json1 = {
    field1: 5,
    field2: 'FIELD_2',
    field3: [1,2,3,4,5],
    fun1: (param1) => {
        console.log('FUN d, param1 = ', param1)
    }
}

// json1.b = json1.b.replace('xee', 'www');
// json1.c.push(12);


console.log("JSON = ", json1);
console.log("JSON.b = ", json1.field2);

let keyFromApiCall = 'field2';
console.log('JSON test = ', json1[keyFromApiCall]);


function ab(callback) {
    console.log('THIS IS A FUN A!');
    callback();

 }

 ab( 'abcdef' )
const tmpVal = a('werwerwer');
console.log("TMP_val = ", tmpVal);


json1.fun1(123415)
*/
// не нужно

//Create server 
http.createServer(app).listen(3000, () => {
    console.log('Server is working on port 3000');

})




