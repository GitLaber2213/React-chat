const path = require('path');

const express = require('express')
const app = express();
const port = 8080;


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    express.json();
    next();
});

require('./routes')(app);

app.listen(port, ()=> {
    console.log("work on >>> " + port);
})