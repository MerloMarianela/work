const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const db = require("./db");
/* const nunjucks = require('nunjucks') */


const router = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', router);

/* var env = nunjucks.configure('views', {noCache: true}); */
/*
const models = require('./models');


/* app.set('view engine', 'html');

app.engine('html', nunjucks.render); */

/* app.get('/wiki', function(req, res, next){
    res.send("Bienvenido")
}); */

db.sync({})
.then(function () {
    app.listen(3000, function(){
        console.log("server escuchando en puerto 3000")
    })
})
.catch(console.error);

