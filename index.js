const express  = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config();
const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

try{
    mongoose.connect(`${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
    app.listen(3000,()=>{
        console.log(`saver startrd and running saver port ${SERVER_PORT}`);
    });
}catch(e){
    console.log(e);
}



app.get('/test-api', (req,resp) =>{
    return resp.json({'massage' : 'hi saver is running ....dsfaaaaaasdfsdf'});
});

app.post('/create', (req,resp) =>{
    console.log(req.body);
    return resp.json({'data' : req.body});
});
