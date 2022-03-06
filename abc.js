const express = require('express') ;
const app = express () ;
const app1 = express () ;
var abc = "off";
app.get('/', (req, res) =>{res.send('This is a api');}) ;

app.get('/api', (req, res) =>{res.send(req.query);
abc = req.query.bulb;
}) ;

app.get('/command', (req, res) =>{res.send(abc);}) ;

app1.get('/', (req, res) =>{res.send('This is a api');}) ;

app1.get('/api', (req, res) =>{res.send(req.query);
abc = req.query.bulb;
}) ;

app1.get('/command', (req, res) =>{res.send(abc);}) ;

app.listen(2580,() => console.log('I am active')) ;
app1.listen(3300,() => console.log('i am also active') ) ;
